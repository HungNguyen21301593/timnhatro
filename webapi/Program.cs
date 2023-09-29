using core.Service;
using RabbitMQ.Client;
using webapi.Service;

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

var app = builder.Build();

app.Services.GetRequiredService<WebDriverManagerService>().GetDriver();

var scope = app.Services.CreateScope();
var scannerService = scope.ServiceProvider.GetRequiredService<ScannerService>();
var queueService = scope.ServiceProvider.GetRequiredService<QueueService>();

var isQueueEnable = Environment.GetEnvironmentVariable("QUEUE_ENABLED") == "TRUE";
if (isQueueEnable)
{
    var connectionFactory = new ConnectionFactory()
    {
        UserName = UserName,
        Password = Password,
        HostName = HostName
    };

    using var connection = connectionFactory.CreateConnection();
    using var channel = connection.CreateModel();
    queueService.InitConSummer<ScanResultDto>(channel, QueueName, scannerService.Scan);
}

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
