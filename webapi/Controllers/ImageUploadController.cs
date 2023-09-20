using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OpenQA.Selenium;
using core.Service;
using HtmlAgilityPack;

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

        [HttpGet("readimage")]
        public IActionResult ReadUrlMetaDataChoTot(string url)
        {
            var driver = webDriverManagerService.GetDriver(isFreshInstance: false);
            var ss = ((ITakesScreenshot)driver).GetScreenshot();
            return File(ss.AsByteArray, "image/png");
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
    }
}
