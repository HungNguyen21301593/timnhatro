const express = require('express');
const puppeteer = require('puppeteer');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const minimal_args = [
    '--autoplay-policy=user-gesture-required',
    '--disable-background-networking',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-breakpad',
    '--disable-client-side-phishing-detection',
    '--disable-component-update',
    '--disable-default-apps',
    '--disable-dev-shm-usage',
    '--disable-domain-reliability',
    '--disable-extensions',
    '--disable-features=AudioServiceOutOfProcess',
    '--disable-hang-monitor',
    '--disable-ipc-flooding-protection',
    '--disable-notifications',
    '--disable-offer-store-unmasked-wallet-cards',
    '--disable-popup-blocking',
    '--disable-print-preview',
    '--disable-prompt-on-repost',
    '--disable-renderer-backgrounding',
    '--disable-setuid-sandbox',
    '--disable-speech-api',
    '--disable-sync',
    '--hide-scrollbars',
    '--ignore-gpu-blacklist',
    '--metrics-recording-only',
    '--mute-audio',
    '--no-default-browser-check',
    '--no-first-run',
    '--no-pings',
    '--no-sandbox',
    '--no-zygote',
    '--password-store=basic',
    '--use-gl=swiftshader',
    '--use-mock-keychain',
    '--single-process',
    '--disable-gpu',
    "--disable-accelerated-2d-canvas",
];
process.setMaxListeners(20);
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

const MAX_PAGES = 2;
let pagePool = [];
let dirtyPool = [];

const tryCreatePageAndBrowser = async () => {
    try {
        const browser = await puppeteer.launch({ headless: 'new', args: minimal_args, defaultViewport: null, });
        // const context = await browser.createIncognitoBrowserContext();
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36')
        await page.setRequestInterception(true)
        page.on('request', (request) => {
            if (['font', 'image', 'xhr'].includes(request.resourceType())) request.abort()
            else request.continue()
        })
        console.log("Created a new browser")
        await page.goto("https://www.nhatot.com/thue-phong-tro-quan-7-tp-ho-chi-minh/110151726.htm#px=SR-stickyad-[PO-5][PL-top]");
        return { page, browser };
    } catch (error) {
        console.error(`Error creating browser: ${error}`)
        return null;
    }

}

async function deleteAllCookies(page) {
    const client = await page.target().createCDPSession()
    await client.send('Network.clearBrowserCookies')
}

// Create a page pool with 5 pages at startup
(async () => {
    for (let i = 0; i < MAX_PAGES; i++) {
        var result = await tryCreatePageAndBrowser();
        if (!result) {
            continue;
        }
        pagePool.unshift(result);
    }
})();

// Background job to manage the page pool
const managePagePool = async () => {
    console.log(`Active Pools: ${pagePool.length} | DirtyPool Pools: ${dirtyPool.length}`)
    if (pagePool.length < MAX_PAGES) {
        var result = await tryCreatePageAndBrowser();
        if (!result) {
            return;
        }
        pagePool.unshift(result);
    }
    dirtyPool.forEach(async element => {
        await deleteAllCookies(element.page);
        pagePool.unshift(element);
    });
    dirtyPool = []
};

// Initialize the background job to manage the page pool
setInterval(managePagePool, 5000); // Check and add pages every minute

// Route for getting metadata from a URL
app.get('/metadata-from-url', async (req, res) => {
    console.log(`received ${req.query.url}`)
    console.time("metadata-from-url");
    const url = req.query.url || 'https://www.facebook.com/groups/binhthanh.phongtro.club/permalink/3562808350653044/';

    let pageObject;

    // Get a page from the pool
    if (pagePool.length > 0) {
        pageObject = pagePool.pop();
    }
    else {
        return;
    }
    const { page, browser } = pageObject;
    console.time("load url");
    await deleteAllCookies(page);
    page.goto(url, { waitUntil: 'domcontentloaded' })
    await page.waitForXPath('//span[contains(@class,"AdParam_address")]/parent::span');
    console.timeEnd("load url");
    console.time("read");

    const metaData = await page.evaluate(() => {
        const metaInfo = {};
        const metaTags = document.querySelectorAll('meta[property]');
        metaTags.forEach((tag) => {
            const property = tag.getAttribute('property');
            const content = tag.getAttribute('content');
            if (property) {
                metaInfo[property] = content;
            }
        });

        // Extract title
        metaInfo.title = document.title || '';

        // Extract description
        const descriptionTag = document.querySelector('meta[name="description"]');
        metaInfo.description = descriptionTag ? descriptionTag.getAttribute('content') : '';

        // Extract image
        const imageTag = document.querySelector('meta[property="og:image"]');
        metaInfo.image = imageTag ? imageTag.getAttribute('content') : '';

        // Extract address
        const addressElement = document.evaluate(
            "//span[contains(@class,'AdParam_address')]/parent::span",
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
        console.log(addressElement);
        metaInfo.address = addressElement
            ? addressElement.textContent.replace('Xem bản đồ', '').trim()
            : '';

        return metaInfo;
    });
    console.timeEnd("read");
    // Close the page (not the browser) and return it to the pool
    console.time("clean");
    // await page.close();
    // await browser.close();
    dirtyPool.push({ page, browser });
    console.timeEnd("clean");
    // Create the URL metadata response
    const urlMeta = {
        Title: metaData.title,
        Address: metaData.address,
        Description: metaData.description,
        Images: [metaData.image],
    };
    console.timeEnd("metadata-from-url");
    // Send response
    res.json(urlMeta);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});