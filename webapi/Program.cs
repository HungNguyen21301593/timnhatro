using core.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddHttpClient();
builder.Services.AddControllers();
builder.Services.AddSingleton<WebDriverManagerService>();

var app = builder.Build();

app.Services.GetRequiredService<WebDriverManagerService>().GetDriver();
// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
