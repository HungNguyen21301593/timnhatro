using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OpenQA.Selenium;
using core.Service;
using HtmlAgilityPack;
using OpenQA.Selenium.Interactions;
using AngleSharp.Dom;
using System.Xml.Linq;

namespace YourApiNamespace.Controllers
{
    [Route("api/url-scanner")]
    [ApiController]
    public class UrlScanController : ControllerBase
    {
        private readonly WebDriverManagerService webDriverManagerService;

        public UrlScanController(WebDriverManagerService webDriverManagerService)
        {
            this.webDriverManagerService = webDriverManagerService ?? throw new ArgumentNullException(nameof(webDriverManagerService));
        }


        [HttpGet("listing-from-account")]
        public IActionResult ReadUrlMetaData(string url)
        {

            if (!url.Contains("nhatot"))
            {
                return new BadRequestResult();
            }
            var allListingUrl = $"{url}?viewAllAd=true";
            var driver = webDriverManagerService.GetDriver(isFreshInstance: false);
            
            driver.Manage().Cookies.DeleteAllCookies();
            driver.Navigate().GoToUrl(allListingUrl);
            var action = new Actions(driver);
            var listings = driver.FindElements(By.XPath("//ul[@class='shopAdList']//a"));
            var result = listings.Select(listing => listing.GetAttribute("href"));
            driver.Manage().Cookies.DeleteAllCookies();
            return new OkObjectResult(result);
        }
    }
}
