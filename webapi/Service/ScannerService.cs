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

namespace webapi.Service
{
    public class ScannerService
    {
        private readonly WebDriverManagerService webDriverManagerService;
        private readonly IHttpClientFactory httpClientFactory;
        private readonly IConfiguration configuration;

        public ScannerService(WebDriverManagerService webDriverManagerService, IHttpClientFactory httpClientFactory,IConfiguration configuration)
        {
            this.webDriverManagerService = webDriverManagerService;
            this.httpClientFactory = httpClientFactory;
            this.configuration = configuration;
        }

        public async Task<List<Info>> ReadAccountUrl(string url)
        {
            var id = GetAccountIdFromUrl(url);
            var json = await ReadAllListing(id);
            if (json == null)
            {
                return new List<Info>();
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
                    var metadata = await ReadUrlMetaDataWithAddress(url);
                    input.UrlMetaResults.Add(metadata);
                    await firebaseClient.Child($"{configuration["FirebaseDatabase:QueueName"]}/{input.Key}/urlMetaResults")
                        .PutAsync(JsonConvert.SerializeObject(input.UrlMetaResults));
                }
            }
            catch (Exception e)
            {
                input.Status = Status.Error;
                await firebaseClient.Child($"{configuration["FirebaseDatabase:QueueName"]}/{input.Key}").PutAsync(input);
                throw;
            }
            

            input.Status = Status.Done;
            await firebaseClient.Child($"{configuration["FirebaseDatabase:QueueName"]}/{input.Key}").DeleteAsync();
            var client = new SmtpClient("live.smtp.mailtrap.io", 587)
            {
                Credentials = new NetworkCredential("api", "8165507d6bc18eae3b7716e062464675"),
                EnableSsl = true
            };
            //client.Send("mailtrap@mapcuatui.com", input.notificationEmail, "Hello world", "testbody");
            Console.WriteLine("Sent");
            return input;
        }

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
                    Address = address??"", // You can continue parsing for the address here,
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

        //public async Task<UrlMetaResponse> ReadUrlMetaDataWithAddress(string url)
        //{
        //    // Create a stopwatch to measure the performance
        //    Stopwatch stopwatch = new Stopwatch();
        //    stopwatch.Start();

        //    try
        //    {
        //        var shouldCreateFreshInstance = url.Contains("nhatot");
        //        var driver = webDriverManagerService.GetDriver(isFreshInstance: false);
        //        Console.WriteLine($"Elapsed time: {stopwatch.Elapsed}");
        //        driver.Manage().Cookies.DeleteAllCookies();
        //        Console.WriteLine($"Elapsed time: {stopwatch.Elapsed}");
        //        driver.Navigate().GoToUrl(url);
        //        Console.WriteLine($"Elapsed time: {stopwatch.Elapsed}");
        //        SolvePleaseRetryLater(3, url);
        //        Console.WriteLine($"Elapsed time: {stopwatch.Elapsed}");

        //        var metaTags = driver.FindElements(By.TagName("meta"));
        //        Console.WriteLine($"Elapsed time: {stopwatch.Elapsed}");
        //        var title = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:title").FirstOrDefault();
        //        Console.WriteLine($"Elapsed time: {stopwatch.Elapsed}");
        //        var description = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:description").FirstOrDefault();
        //        Console.WriteLine($"Elapsed time: {stopwatch.Elapsed}");
        //        var image = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:image").FirstOrDefault();
        //        Console.WriteLine($"Elapsed time: {stopwatch.Elapsed}");
        //        //var xpath = "//span[contains(@class,'AdParam_address')]/parent::span";
        //        //var address = driver.FindElements(By.XPath(xpath)).FirstOrDefault();
        //        var urlMeta = new UrlMetaResponse
        //        {
        //            Title = title?.GetAttribute("content") ?? "",
        //            Address = "", // address?.Text?.Replace("Xem bản đồ", "") ?? "",
        //            Description = description?.GetAttribute("content") ?? "",
        //            Images = new List<string> { image?.GetAttribute("content") ?? "" },
        //            Url = url,
        //        };

        //        return await Task.FromResult(urlMeta);
        //    }
        //    finally
        //    {
        //        // Stop the stopwatch when the method is done
        //        stopwatch.Stop();
        //        Console.WriteLine($"Elapsed time: {stopwatch.Elapsed}");
        //    }
        //}

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

        private async Task<JsonResponse?> ReadAllListing(string id)
        {

            try
            {
                var httpClient = httpClientFactory.CreateClient("ChototClient");
                // Send the GET request
                HttpResponseMessage response = await httpClient.GetAsync(id);

                // Check if the request was successful (status code 200)
                if (response.IsSuccessStatusCode)
                {
                    // Read the response content as a string
                    string responseBody = await response.Content.ReadAsStringAsync();

                    Console.WriteLine(responseBody);
                    return JsonConvert.DeserializeObject<JsonResponse>(responseBody);

                }
                else
                {
                    throw new Exception("ReadAllListing failed");
                }
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Request error: {e.Message}");
                throw new Exception($"ReadAllListing failed, {e.Message}");
            }
        }

        private string GetAccountIdFromUrl(string url)
        {
            // Define the regex pattern to extract the desired value
            string pattern = @"\/user\/([a-fA-F0-9]+)";

            // Use Regex.Match to find the match
            Match match = Regex.Match(url, pattern);

            // Check if a match was found
            if (match.Success)
            {
                return match.Groups[1].Value;
            }
            else
            {
                return null;
            }
        }
    }
}
