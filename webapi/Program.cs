using core.Service;
using MassTransit;
using RabbitMQ.Client;
using webapi.Consumers;
using webapi.Model;
using webapi.Service;

internal class Program
{
    private static async Task Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddHttpClient("ChototClientV1", client =>
        {
            client.BaseAddress = new Uri("https://gateway.chotot.com/v1/public/ad-listing");
            // You can configure additional settings here if needed
        });

        builder.Services.AddHttpClient("ChototClientV2User", client =>
        {
            client.BaseAddress = new Uri("https://gateway.chotot.com/v2/public/chat/user/get/");
            // You can configure additional settings here if needed
        });

        builder.Services.AddHttpClient("ChototClientV1Theia", client =>
        {
            client.BaseAddress = new Uri("https://gateway.chotot.com/v1/public/theia/");
            //
        });
        builder.Services.AddControllers();
        builder.Services.AddSingleton<WebDriverManagerService>();
        builder.Services.AddScoped<ScannerService>();
        builder.Services.AddScoped<QueueService>();

        var QUEUE_ENABLED = Environment.GetEnvironmentVariable("QUEUE_ENABLED");
        var isConsumerEnabled = QUEUE_ENABLED == "TRUE";
        var queueHost = Environment.GetEnvironmentVariable("QUEUE_HOST");
        builder.Services.AddMassTransit(config =>
        {
            config.UsingRabbitMq((context, cfg) =>
            {
                cfg.Host(queueHost ?? builder.Configuration["RabbitMq:Host"], 5672, "/", h =>
                {
                    h.Username(builder.Configuration["RabbitMq:User"]);     // RabbitMQ username
                    h.Password(builder.Configuration["RabbitMq:Pass"]);  // RabbitMQ password
                });
                cfg.UseConcurrencyLimit(1);
                cfg.ConfigureEndpoints(context);
            });
            if (isConsumerEnabled)
            {
                config.AddConsumer<UrlScannerConsumer>();
            }
        });
        builder.Services.AddMassTransitHostedService();
        var app = builder.Build();

        app.Services.GetRequiredService<WebDriverManagerService>().GetDriver();

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        await app.RunAsync();
    }
}