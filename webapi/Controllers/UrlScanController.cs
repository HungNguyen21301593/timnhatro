using Microsoft.AspNetCore.Mvc;
using OpenQA.Selenium;
using core.Service;
using webapi.Service;

namespace YourApiNamespace.Controllers
{
    [Route("api/url-scanner")]
    [ApiController]
    public class UrlScanController : ControllerBase
    {
        private readonly WebDriverManagerService webDriverManagerService;
        private readonly ScannerService scannerService;
        private readonly IHttpClientFactory httpClientFactory;

        public UrlScanController(WebDriverManagerService webDriverManagerService, ScannerService scannerService, IHttpClientFactory httpClientFactory)
        {
            this.webDriverManagerService = webDriverManagerService ?? throw new ArgumentNullException(nameof(webDriverManagerService));
            this.scannerService = scannerService;
            this.httpClientFactory = httpClientFactory;
        }


        [HttpGet("listing-from-account")]
        public async Task<IActionResult> ReadListingInfo(string url)
        {

            if (!url.Contains("www.chotot.com/user"))
            {
                return new BadRequestResult();
            }
            var result = await scannerService.ReadAccountUrl(url);
            return new OkObjectResult(result);
        }


        [HttpGet("metadata-from-url")]
        public IActionResult ReadUrlMetaData(string url)
        {
            url ??= "https://www.facebook.com/groups/binhthanh.phongtro.club/permalink/3562808350653044/";
            var shouldCreateFreshInstance = url.Contains("nhatot");
            var driver = webDriverManagerService.GetDriver(isFreshInstance: false);
            driver.Manage().Cookies.DeleteAllCookies();
            driver.Navigate().GoToUrl(url);
            var metaTags = driver.FindElements(By.TagName("meta"));
            var title = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:title").FirstOrDefault();
            var description = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:description").FirstOrDefault();
            var image = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:image").FirstOrDefault();

            var xpath = "//span[contains(@class,'AdParam_address')]/parent::span";
            var address = driver.FindElements(By.XPath(xpath)).FirstOrDefault();
            var urlMeta = new UrlMetaResponse
            {
                Title = title?.GetAttribute("content") ?? "",
                Address = address?.Text?.Replace("Xem bản đồ", "") ?? "",
                Description = description?.GetAttribute("content") ?? "",
                Images = new List<string> { image?.GetAttribute("content") ?? "" },
            };
            driver.Manage().Cookies.DeleteAllCookies();
            return new OkObjectResult(urlMeta);
        }
    }
}
