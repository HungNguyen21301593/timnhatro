using Newtonsoft.Json;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebDriverManager.DriverConfigs.Impl;
using WebDriverManager;

namespace core.Service
{
    public class WebDriverManagerService
    {
        private IWebDriver? WebDriver { get; set; }

        public IWebDriver GetDriver(bool isFreshInstance = false)
        {
            if (isFreshInstance)
            {
                WebDriver?.Quit();
                WebDriver = SetupDriverInstance();
            }
            else
            {
                WebDriver ??= SetupDriverInstance();
            }
            return WebDriver;
        }

        public IWebDriver ReInit(IWebDriver webDriver)
        {
            Clean(webDriver);
            return SetupDriverInstance();
        }

        private IWebDriver SetupDriverInstance()
        {
            try
            {
                new DriverManager().SetUpDriver(new ChromeConfig(), "MatchingBrowser");
            }
            catch (System.Exception e)
            {
            }
            var chromeArguments = GetGeneralSetting();
            var options = new ChromeOptions();
            options.AddExcludedArgument("enable-automation");
            options.AddArguments(chromeArguments);
            options.PageLoadStrategy = PageLoadStrategy.Normal;
            var remoteDriver = new ChromeDriver(options);
            return remoteDriver ?? throw new ArgumentNullException($"Could not init web diver");
        }

        private IEnumerable<string> GetGeneralSetting()
        {
            string driverJson = System.IO.File.ReadAllText(@"./driver.json");
            var chromeArguments = JsonConvert.DeserializeObject<List<string>>(driverJson);
            return chromeArguments;
        }

        public void Clean(IWebDriver? webDriver)
        {
            webDriver?.Quit();
            KillProcess();
        }

        public void KillProcess()
        {
            Process[] chromeDriverProcesses = Process.GetProcessesByName("chromedriver");

            foreach (var chromeDriverProcess in chromeDriverProcesses)
            {
                chromeDriverProcess.Kill();
            }

            Process[] chromeExes = Process.GetProcessesByName("chrome");

            foreach (var chromeExe in chromeExes)
            {
                chromeExe.Kill();
            }

            Process[] conhosts = Process.GetProcessesByName("conhost");

            foreach (var conhost in conhosts)
            {
                conhost.Kill();
            }
        }
    }
}
