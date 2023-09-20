using AngleSharp.Dom;
using core.Service;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using System.Text.RegularExpressions;
using System.Net.Http;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Service
{
    public class ScannerService
    {
        private readonly WebDriverManagerService webDriverManagerService;
        private readonly IHttpClientFactory httpClientFactory;

        public ScannerService(WebDriverManagerService webDriverManagerService, IHttpClientFactory httpClientFactory)
        {
            this.webDriverManagerService = webDriverManagerService;
            this.httpClientFactory = httpClientFactory;
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

        public UrlMetaResponse ReadUrlMetaData(string url)
        {
            url ??= "https://www.facebook.com/groups/binhthanh.phongtro.club/permalink/3562808350653044/";
            var shouldCreateFreshInstance = url.Contains("nhatot");
            var driver = webDriverManagerService.GetDriver(isFreshInstance: false);
            driver.Navigate().GoToUrl(url);
            var metaTags = driver.FindElements(By.TagName("meta"));
            var title = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:title").FirstOrDefault();
            var description = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:description").FirstOrDefault();
            var image = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:image").FirstOrDefault();
            var urlMeta = new UrlMetaResponse
            {
                Title = title?.GetAttribute("content") ?? "",
                Description = description?.GetAttribute("content") ?? "",
                Images = new List<string> { image?.GetAttribute("content") ?? "" }
            };
            driver.Manage().Cookies.DeleteAllCookies();
            return urlMeta;
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
