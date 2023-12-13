using Microsoft.AspNetCore.Mvc;
using OpenQA.Selenium;
using core.Service;
using webapi.Service;
using System.Text;
using RabbitMQ.Client;
using Firebase.Database;
using Firebase.Database.Query;
using Newtonsoft.Json;
using AngleSharp.Dom;
using webapi.Model;

namespace YourApiNamespace.Controllers
{
    [Route("api/url-scanner")]
    [ApiController]
    public class UrlScanController : ControllerBase
    {
        private readonly QueueService queueService;
        private readonly ScannerService scannerService;
        private readonly IConfiguration configuration;

        public UrlScanController(QueueService queueService, ScannerService scannerService, IConfiguration configuration)
        {
            this.queueService = queueService ?? throw new ArgumentNullException(nameof(queueService));
            this.scannerService = scannerService ?? throw new ArgumentNullException(nameof(scannerService));
            this.configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
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
            var urlMeta = await scannerService.ReadListingDetailById(url);
            return new OkObjectResult(urlMeta);
        }

        [HttpPost("metadata-from-url")]
        public async Task<IActionResult> SubmitScanRequest(ScanResultsDtoMessage message)
        {
            var results = await queueService.SendMessage(message, configuration["FirebaseDatabase:QueueName"] ?? "urlscanner");
            return new OkObjectResult(results);
        }
    }
}
