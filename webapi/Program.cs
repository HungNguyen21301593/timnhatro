using core.Service;
using MassTransit;
using RabbitMQ.Client;
using webapi.Consumers;
using webapi.Service;

internal class Program
{
    private static async Task Main(string[] args)
    {
        string UserName = "user";
        string Password = "bitnami";
        string HostName = "103.15.222.118";
        string QueueName = "urlscanner";
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddHttpClient("ChototClient", client =>
        {
            client.BaseAddress = new Uri("https://gateway.chotot.com/v1/public/theia/");
            // You can configure additional settings here if needed
        });

        builder.Services.AddControllers();
        builder.Services.AddSingleton<WebDriverManagerService>();
        builder.Services.AddScoped<ScannerService>();
        builder.Services.AddScoped<QueueService>();

        var isQueueEnable = Environment.GetEnvironmentVariable("QUEUE_ENABLED") == "TRUE";
        if (isQueueEnable)
        {
            builder.Services.AddMassTransit(config =>
        {
            config.UsingRabbitMq((context, cfg) =>
            {
                cfg.Host("103.15.222.118", 5672, "/", h =>
                {
                    h.Username("user");     // RabbitMQ username
                    h.Password("bitnami");  // RabbitMQ password
                });

                cfg.ConfigureEndpoints(context);

            });
            config.AddConsumer<UrlScannerConsumer>();
        });
            builder.Services.AddMassTransitHostedService();
        }
        var app = builder.Build();

        app.Services.GetRequiredService<WebDriverManagerService>().GetDriver();

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        await app.RunAsync();
    }
}