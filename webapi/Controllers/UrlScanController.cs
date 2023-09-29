using Microsoft.AspNetCore.Mvc;
using OpenQA.Selenium;
using core.Service;
using webapi.Service;
using System.Text;
using RabbitMQ.Client;
using Firebase.Database;
using Firebase.Database.Query;
using Newtonsoft.Json;

namespace YourApiNamespace.Controllers
{
    [Route("api/url-scanner")]
    [ApiController]
    public class UrlScanController : ControllerBase
    {
        private readonly QueueService queueService;
        private readonly ScannerService scannerService;

        public UrlScanController(QueueService queueService, ScannerService scannerService)
        {
            this.queueService = queueService;
            this.scannerService = scannerService;
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
        public async Task<IActionResult> ReadUrlMetaData(string url)
        {
            var urlMeta = scannerService.ReadUrlMetaDataWithAddress(url);
            return new OkObjectResult(urlMeta);
        }

        [HttpPost("metadata-from-url")]
        public async Task<IActionResult> SubmitScanRequest(string url)
        {
            url ??= "https://www.facebook.com/groups/binhthanh.phongtro.club/permalink/3562808350653044/";
            var scanResult = new ScanResultDto
            {
                Url = url,
            };
            await queueService.SendMessage(scanResult, "urlscanner");
            return new OkObjectResult(scanResult);
        }
    }
}
