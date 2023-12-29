using core.Service;
using OpenQA.Selenium;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Firebase.Database;
using webapi.Model;
using Firebase.Database.Query;
using System.Net.Mail;
using System.Net;
using System.Diagnostics;
using HtmlAgilityPack;
using Newtonsoft.Json.Linq;
using System.Security.Cryptography;
using AngleSharp.Common;

namespace webapi.Service
{
    public class ScannerService
    {
        private readonly WebDriverManagerService webDriverManagerService;
        private readonly IHttpClientFactory httpClientFactory;
        private readonly IConfiguration configuration;

        public ScannerService(WebDriverManagerService webDriverManagerService, IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            this.webDriverManagerService = webDriverManagerService;
            this.httpClientFactory = httpClientFactory;
            this.configuration = configuration;
        }

        public async Task<AccountInfoResult?> ReadAccountInfoByUrl(string url)
        {
            var oid = GetAccountOIdFromUrl(url);
            var accountInfo = await ReadAccountInfo(oid);
            return accountInfo?.Result;
        }

        public async Task<List<ListingInfo>> ReadListingByAccountUrl(string url)
        {
            var oid = GetAccountOIdFromUrl(url);
            var json = await ReadAllListing(oid);
            if (json == null)
            {
                return new List<ListingInfo>();
            }
            return json.Ads.Select(ad => ad.Info).ToList();
        }

        public async Task<ScanResultsDtoMessage> Scan(ScanResultsDtoMessage input)
        {
            var firebaseClient = new FirebaseClient(configuration["FirebaseDatabase:UrlScanner"]);
            input.Status = Status.InProgress;
            await firebaseClient.Child($"{configuration["FirebaseDatabase:QueueName"]}/{input.Key}").PutAsync(input);
            try
            {
                foreach (var url in input.Urls)
                {
                    var metadata = await ReadListingDetailById(url);
                    input.UrlMetaResults.Add(metadata);
                    await firebaseClient.Child($"{configuration["FirebaseDatabase:QueueName"]}/{input.Key}/urlMetaResults")
                        .PutAsync(JsonConvert.SerializeObject(input.UrlMetaResults));
                }
            }
            catch (Exception)
            {
                input.Status = Status.Error;
                await firebaseClient.Child($"{configuration["FirebaseDatabase:QueueName"]}/{input.Key}").PutAsync(input);
                throw;
            }


            input.Status = Status.Done;
            await firebaseClient.Child($"{configuration["FirebaseDatabase:QueueName"]}/{input.Key}").DeleteAsync();
            Console.WriteLine("Sent");
            return input;
        }

        public async Task<UrlMetaResponse> ReadListingDetailById(string url)
        {
            try
            {
                string pattern = @"(\d+)";

                // Use Regex.Match to find the first match in the URL
                Match match = Regex.Match(url, pattern);
                if (!match.Success)
                {
                    throw new Exception($"Url invalid: {url}");
                }
                string listingId = match.Groups[1].Value;
                var httpClient = httpClientFactory.CreateClient("ChototClientV1");
                // Send the GET request
                var response = await httpClient.GetAsync($"?state=accepted&key_param_included=true&list_id={listingId}");

                // Check if the request was successful (status code 200)
                if (!response.IsSuccessStatusCode)
                {
                    throw new Exception("ReadAllListing failed");
                }
                // Read the response content as a string
                string responseBody = await response.Content.ReadAsStringAsync();

                Console.WriteLine(responseBody);
                var jsonObject = JObject.Parse(responseBody);
                var results = jsonObject["ads"]?.ToObject<List<JObject>>();
                var region_name = results?.First()["region_name"]?.ToString() ?? "";

                var area_name = results?.First()?["area_name"].ToString() ?? "";

                var ward_name = results?.First()?["ward_name"].ToString() ?? "";

                var street_name = results?.First()?["street_name"].ToString() ?? "";

                var address = $"{street_name}, {ward_name}, {area_name}, {region_name}";
                var result = new UrlMetaResponse
                {
                    Title = results?.First()?["subject"].ToString() ?? "",
                    Description = results?.First()?["body"].ToString() ?? "",
                    Address = address,
                    Location = results?.First()?["location"].ToString() ?? "",
                    Images = new List<string> { results?.First()?["image"].ToString() ?? "" },
                    Url = url
                };
                return result;
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Request error: {e.Message}");
                throw new Exception($"ReadAllListing failed, {e.Message}");
            }
        }

        [Obsolete]

        public async Task<UrlMetaResponse> ReadUrlMetaDataWithAddress(string url)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            try
            {
                var shouldCreateFreshInstance = url.Contains("nhatot");
                Console.WriteLine($"Elapsed time 0: {stopwatch.Elapsed}");
                var driver = webDriverManagerService.GetDriver(isFreshInstance: false);
                Console.WriteLine($"Elapsed time 1: {stopwatch.Elapsed}");
                driver.Manage().Cookies.DeleteAllCookies();
                Console.WriteLine($"Elapsed time 2: {stopwatch.Elapsed}");
                driver.Navigate().GoToUrl(url);

                Console.WriteLine($"Elapsed time 3: {stopwatch.Elapsed}");
                SolvePleaseRetryLater(3, url);
                Console.WriteLine($"Elapsed time 4: {stopwatch.Elapsed}");

                // Get the HTML content of the page
                string htmlContent = driver.PageSource;
                Console.WriteLine($"Elapsed time 5: {stopwatch.Elapsed}");
                // Use HtmlAgilityPack to parse the HTML
                HtmlDocument htmlDocument = new();
                Console.WriteLine($"Elapsed time 6: {stopwatch.Elapsed}");
                htmlDocument.LoadHtml(htmlContent);
                Console.WriteLine($"Elapsed time 7: {stopwatch.Elapsed}");

                // Extract information using XPath or other methods
                var titleNode = htmlDocument.DocumentNode.SelectSingleNode("//meta[@property='og:title']");
                Console.WriteLine($"Elapsed time 8: {stopwatch.Elapsed}");
                var descriptionNode = htmlDocument.DocumentNode.SelectSingleNode("//meta[@property='og:description']");
                Console.WriteLine($"Elapsed time 9: {stopwatch.Elapsed}");
                var imageNode = htmlDocument.DocumentNode.SelectSingleNode("//meta[@property='og:image']");
                Console.WriteLine($"Elapsed time 10: {stopwatch.Elapsed}");
                var scriptNode = htmlDocument.DocumentNode.SelectSingleNode("//*[@id='__NEXT_DATA__']");
                string scriptContent = scriptNode?.InnerText?.Trim() ?? "{}";
                JObject jsonObject = JObject.Parse(scriptContent);

                // Access JSON properties at different levels
                string address = jsonObject["props"]?["pageProps"]?["initialState"]?["adView"]?["adInfo"]?["ad_params"]?["address"]?["value"]?.ToString() ?? "";

                Console.WriteLine($"Elapsed time 11: {stopwatch.Elapsed}");
                var urlMeta = new UrlMetaResponse
                {
                    Title = titleNode?.GetAttributeValue("content", "") ?? "",
                    Address = address ?? "", // You can continue parsing for the address here,
                    Description = descriptionNode?.GetAttributeValue("content", "") ?? "",
                    Images = new List<string> { imageNode?.GetAttributeValue("content", "") ?? "" },
                    Url = url,
                };

                return await Task.FromResult(urlMeta);
            }
            finally
            {
                stopwatch.Stop();
                Console.WriteLine($"Elapsed time: {stopwatch.Elapsed}");
            }
        }

        private void SolvePleaseRetryLater(int times, string url)
        {
            var driver = webDriverManagerService.GetDriver(isFreshInstance: false);
            for (int i = 0; i < times; i++)
            {
                var pleaseTryAgainLater = driver.FindElements(By.XPath("//*[contains(text(), 'Please try again later!')]"));
                if (!pleaseTryAgainLater.Any())
                {
                    return;
                }
                driver.Navigate().GoToUrl(url);
            }
        }

        private async Task<AccountInfoResponse?> ReadAccountInfo(string oid)
        {
            try
            {
                var httpClient = httpClientFactory.CreateClient("ChototClientV2User");
                // Send the GET request
                HttpResponseMessage response = await httpClient.GetAsync(oid);

                // Check if the request was successful (status code 200)
                if (!response.IsSuccessStatusCode)
                {
                    throw new Exception("ReadAccountInfo failed");
                }
                // Read the response content as a string
                string responseBody = await response.Content.ReadAsStringAsync();

                Console.WriteLine(responseBody);
                return JsonConvert.DeserializeObject<AccountInfoResponse>(responseBody);
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Request error: {e.Message}");
                throw new Exception($"ReadAccountInfo failed, {e.Message}");
            }
        }

        private async Task<JsonResponse?> ReadAllListing(string oid)
        {
            try
            {
                var httpClient = httpClientFactory.CreateClient("ChototClientV1Theia");
                // Send the GET request
                HttpResponseMessage response = await httpClient.GetAsync(oid);

                // Check if the request was successful (status code 200)
                if (!response.IsSuccessStatusCode)
                {
                    throw new Exception("ReadAllListing failed");
                }
                // Read the response content as a string
                string responseBody = await response.Content.ReadAsStringAsync();

                Console.WriteLine(responseBody);
                return JsonConvert.DeserializeObject<JsonResponse>(responseBody);
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Request error: {e.Message}");
                throw new Exception($"ReadAllListing failed, {e.Message}");
            }
        }

        private string GetAccountOIdFromUrl(string url)
        {
            // Define the regex pattern to extract the desired value
            string pattern = @"\/user\/([a-fA-F0-9]+)";

            // Use Regex.Match to find the match
            Match match = Regex.Match(url, pattern);

            // Check if a match was found
            if (!match.Success)
            {
                return null;
            }
            return match.Groups[1].Value;
        }
    }
}
