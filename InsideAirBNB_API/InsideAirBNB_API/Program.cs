using InsideAirBNB_API.Context;
using InsideAirBNB_API.Repositories;
using InsideAirBNB_API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "allowLocalhost",
                      builder =>
                      {
                          builder
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                      });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IListingRepository, ListingRepository>();
builder.Services.AddScoped<INeighbourhoodRepository, NeighbourhoodRepository>();



builder.Services.AddAuthentication("Bearer")
    .AddIdentityServerAuthentication("Bearer", options =>
    {
        options.ApiName = "weatherapi";
        options.Authority = "https://insideairbnbidentity20220314204820.azurewebsites.net/";
        options.LegacyAudienceValidation = true;
    });

builder.Services.AddDbContext<AppDbContext>((DbContextOptionsBuilder options) =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("InsideAirBNB"));
});

builder.Services.AddMemoryCache();
builder.Services.AddMiniProfiler(options =>
{
    options.RouteBasePath = "/profiler";
    options.ColorScheme = StackExchange.Profiling.ColorScheme.Dark;
}).AddEntityFramework();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiniProfiler();

app.UseHttpsRedirection();

app.UseCors("allowLocalhost");

app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();

app.Run();
