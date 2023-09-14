using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using WebDriverManager.DriverConfigs.Impl;
using WebDriverManager;
using core.Service;

namespace YourApiNamespace.Controllers
{
    [Route("api/images")]
    [ApiController]
    public class ImageUploadController : ControllerBase
    {
        private readonly string cloudflareApiUrl = "https://api.cloudflare.com/client/v4/accounts/ee931afd697673b7d6841a64430b280c/images/v1";
        private readonly string cloudflareApiKey = "G5QqNRQ5jQFpN8o8fq8foojIVeTRl9CckVS3bjqP";
        private readonly WebDriverManagerService webDriverManagerService;

        public ImageUploadController(WebDriverManagerService webDriverManagerService)
        {
            this.webDriverManagerService = webDriverManagerService ?? throw new ArgumentNullException(nameof(webDriverManagerService));
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("Please select a valid image file.");
            }

            return await UploadToCloudFare(file.Name, file.OpenReadStream());
        }


        [HttpGet("metadata-from-url")]
        public IActionResult ReadUrlMetaData(string url)
        {
            url ??= "https://www.facebook.com/groups/binhthanh.phongtro.club/permalink/3562808350653044/";
            var driver = webDriverManagerService.GetDriver();
            driver.Navigate().GoToUrl(url);
            var metaTags = driver.FindElements(By.TagName("meta"));

            var title = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:title").FirstOrDefault();
            var description = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:description").FirstOrDefault();
            var image = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:image").FirstOrDefault();
            var urlMeta = new UrlMetaResponse
            {
                Title = title?.GetAttribute("content") ?? "",
                Description = description?.GetAttribute("content") ?? "",
                Image = image?.GetAttribute("content") ?? ""
            };
            return new OkObjectResult(urlMeta);
        }

        private async Task<IActionResult> UploadToCloudFare(string Filename, Stream stream)
        {
            try
            {
                using var httpClient = new HttpClient();
                httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {cloudflareApiKey}");

                using var formData = new MultipartFormDataContent
                {
                    { new StreamContent(stream), "file",Filename }
                };

                var response = await httpClient.PostAsync(cloudflareApiUrl, formData);

                if (response.IsSuccessStatusCode)
                {
                    // Image uploaded successfully
                    var responseContent = await response.Content.ReadAsStringAsync();
                    var cloudflareResponse = JsonConvert.DeserializeObject<CloudflareApiResponse>(responseContent);
                    return Ok(cloudflareResponse); // Return Cloudflare response to the frontend
                }
                else
                {
                    // Handle error response from Cloudflare API
                    var errorMessage = await response.Content.ReadAsStringAsync();
                    return BadRequest($"Image upload failed: {errorMessage}");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        public async Task TryLogin(IWebDriver webDriver, string email, string password)
        {
            webDriver.Navigate().GoToUrl("https://mbasic.facebook.com/");

            var emails = webDriver.FindElements(By.XPath("//input[@id='m_login_email']"));
            if (emails.Any()) { emails.First().SendKeys(email); };

            var passwords = webDriver.FindElements(By.XPath("//section[@id='password_input_with_placeholder']/input"));
            if (passwords.Any())
            {
                passwords.First().SendKeys(password);
                passwords.First().SendKeys(Keys.Enter);
            };
            await Task.Delay(500);
            var submits = webDriver.FindElements(By.XPath("//input[@value='Log In']/parent::li"));
            if (submits.Any()) { submits.First().Click(); };
        }
    }
}
