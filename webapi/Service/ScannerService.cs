﻿using AngleSharp.Dom;
using core.Service;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using System.Text.RegularExpressions;
using System.Net.Http;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Firebase.Database;
using webapi.Model;
using Firebase.Database.Query;
using MassTransit.Transports;
using System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net.Mail;
using System.Net;

namespace webapi.Service
{
    public class ScannerService
    {
        private readonly WebDriverManagerService webDriverManagerService;
        private readonly IHttpClientFactory httpClientFactory;
        private readonly IConfiguration configuration;

        public ScannerService(WebDriverManagerService webDriverManagerService, IHttpClientFactory httpClientFactory,IConfiguration configuration)
        {
            this.webDriverManagerService = webDriverManagerService;
            this.httpClientFactory = httpClientFactory;
            this.configuration = configuration;
        }

        public async Task<List<Info>> ReadAccountUrl(string url)
        {
            var id = GetAccountIdFromUrl(url);
            var json = await ReadAllListing(id);
            if (json == null)
            {
                return new List<Info>();
            }

            return json.Ads.Select(ad => ad.Info).ToList();
        }

        public async Task<ScanResultsDtoMessage> Scan(ScanResultsDtoMessage input)
        {
            var firebaseClient = new FirebaseClient(configuration["FirebaseDatabase:UrlScanner"]);
            input.Status = Status.InProgress;
            await firebaseClient.Child($"{configuration["FirebaseDatabase:QueueName"]}/{input.Key}").PutAsync(input);
            try
            {
                foreach (var url in input.Urls)
                {
                    var metadata = await ReadUrlMetaDataWithAddress(url);
                    input.UrlMetaResults.Add(metadata);
                    await firebaseClient.Child($"{configuration["FirebaseDatabase:QueueName"]}/{input.Key}/urlMetaResults")
                        .PutAsync(JsonConvert.SerializeObject(input.UrlMetaResults));
                }
            }
            catch (Exception e)
            {
                input.Status = Status.Error;
                await firebaseClient.Child($"{configuration["FirebaseDatabase:QueueName"]}/{input.Key}").PutAsync(input);
                throw;
            }
            

            input.Status = Status.Done;
            await firebaseClient.Child($"{configuration["FirebaseDatabase:QueueName"]}/{input.Key}").DeleteAsync();
            var client = new SmtpClient("live.smtp.mailtrap.io", 587)
            {
                Credentials = new NetworkCredential("api", "8165507d6bc18eae3b7716e062464675"),
                EnableSsl = true
            };
            client.Send("mailtrap@mapcuatui.com", input.notificationEmail, "Hello world", "testbody");
            Console.WriteLine("Sent");
            return input;
        }

        public UrlMetaResponse ReadUrlMetaData(string url)
        {
            url ??= "https://www.facebook.com/groups/binhthanh.phongtro.club/permalink/3562808350653044/";
            var shouldCreateFreshInstance = url.Contains("nhatot");
            var driver = webDriverManagerService.GetDriver(isFreshInstance: false);
            driver.Manage().Cookies.DeleteAllCookies();
            driver.Navigate().GoToUrl(url);
            var metaTags = driver.FindElements(By.TagName("meta"));
            var title = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:title").FirstOrDefault();
            var description = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:description").FirstOrDefault();
            var image = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:image").FirstOrDefault();
            var urlMeta = new UrlMetaResponse
            {
                Title = title?.GetAttribute("content") ?? "",
                Description = description?.GetAttribute("content") ?? "",
                Images = new List<string> { image?.GetAttribute("content") ?? "" },
                Url = url,
            };
            return urlMeta;
        }

        public async Task<UrlMetaResponse> ReadUrlMetaDataWithAddress(string url)
        {
            var shouldCreateFreshInstance = url.Contains("nhatot");
            var driver = webDriverManagerService.GetDriver(isFreshInstance: false);
            driver.Manage().Cookies.DeleteAllCookies();
            driver.Navigate().GoToUrl(url);
            SolvePleaseRetryLater(3, url);

            var metaTags = driver.FindElements(By.TagName("meta"));
            var title = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:title").FirstOrDefault();
            var description = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:description").FirstOrDefault();
            var image = metaTags.Where(metatag => metatag.GetAttribute("property") == "og:image").FirstOrDefault();

            var xpath = "//span[contains(@class,'AdParam_address')]/parent::span";
            var address = driver.FindElements(By.XPath(xpath)).FirstOrDefault();
            var urlMeta = new UrlMetaResponse
            {
                Title = title?.GetAttribute("content") ?? "",
                Address = address?.Text?.Replace("Xem bản đồ", "") ?? "",
                Description = description?.GetAttribute("content") ?? "",
                Images = new List<string> { image?.GetAttribute("content") ?? "" },
                Url = url,
            };
            driver.Manage().Cookies.DeleteAllCookies();
            return await Task.FromResult(urlMeta);
        }

        private void SolvePleaseRetryLater(int times, string url)
        {
            var driver = webDriverManagerService.GetDriver(isFreshInstance: false);
            for (int i = 0; i < times; i++)
            {
                var pleaseTryAgainLater = driver.FindElements(By.XPath("//*[contains(text(), 'Please try again later!')]"));
                if (pleaseTryAgainLater.Any())
                {
                    driver.Navigate().GoToUrl(url);
                }
            }
        }

        private async Task<JsonResponse?> ReadAllListing(string id)
        {

            try
            {
                var httpClient = httpClientFactory.CreateClient("ChototClient");
                // Send the GET request
                HttpResponseMessage response = await httpClient.GetAsync(id);

                // Check if the request was successful (status code 200)
                if (response.IsSuccessStatusCode)
                {
                    // Read the response content as a string
                    string responseBody = await response.Content.ReadAsStringAsync();

                    Console.WriteLine(responseBody);
                    return JsonConvert.DeserializeObject<JsonResponse>(responseBody);

                }
                else
                {
                    throw new Exception("ReadAllListing failed");
                }
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Request error: {e.Message}");
                throw new Exception($"ReadAllListing failed, {e.Message}");
            }
        }

        private string GetAccountIdFromUrl(string url)
        {
            // Define the regex pattern to extract the desired value
            string pattern = @"\/user\/([a-fA-F0-9]+)";

            // Use Regex.Match to find the match
            Match match = Regex.Match(url, pattern);

            // Check if a match was found
            if (match.Success)
            {
                return match.Groups[1].Value;
            }
            else
            {
                return null;
            }
        }
    }
}
