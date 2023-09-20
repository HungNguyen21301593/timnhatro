using core.Service;
using webapi.Service;

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

var app = builder.Build();

app.Services.GetRequiredService<WebDriverManagerService>().GetDriver();
// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
