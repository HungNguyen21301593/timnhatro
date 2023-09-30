using MassTransit;
using Newtonsoft.Json;
using webapi.Model;
using webapi.Service;

namespace webapi.Consumers
{
    public class UrlScannerConsumer : IConsumer<ScanResultsDtoMessage>
    {
        public UrlScannerConsumer(ILogger<UrlScannerConsumer> logger, ScannerService scannerService)
        {
            Logger = logger;
            ScannerService = scannerService;
        }


        public ScannerService ScannerService { get; }
        public ILogger<UrlScannerConsumer> Logger { get; }

        public async Task Consume(ConsumeContext<ScanResultsDtoMessage> context)
        {
            // Process the received message

            Logger.LogInformation($"Received message: {context.Message}");
            await ScannerService.Scan(context.Message);
            // You can add your business logic here
        }
    }
}
