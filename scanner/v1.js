const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Reuse a single browser instance
let browser;

(async () => {
    browser = await puppeteer.launch({ headless: 'new' });
})();

// Route for getting metadata from a URL
app.get('/metadata-from-url', async (req, res) => {
    const url = req.query.url || 'https://www.facebook.com/groups/binhthanh.phongtro.club/permalink/3562808350653044/';

    // Create a new page for each request
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    // Enable request interception
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36')
    await page.setRequestInterception(true);

    // Define which types of resources to allow or block
    page.on('request', (request) => {
        const resourceType = request.resourceType();
        const allowedResourceTypes = ['document', 'script']; // Add types you need
        if (!allowedResourceTypes.includes(resourceType)) {
            // Block unnecessary resource types
            request.abort();
        } else {
            // Allow other resource types to continue loading
            request.continue();
        }
    });
    // Navigate to the URL
    await page.goto(url);

    // Puppeteer code to extract metadata
    const metaTags = await page.$$eval('meta', (tags) => {
        const metaInfo = {};
        tags.forEach((tag) => {
            const property = tag.getAttribute('property');
            const content = tag.getAttribute('content');
            if (property) {
                metaInfo[property] = content;
            }
        });
        return metaInfo;
    });

    const title = metaTags['og:title'] || '';
    const description = metaTags['og:description'] || '';
    const image = metaTags['og:image'] || '';

    const address = await page.evaluate(() => {
        const xpath = "//span[contains(@class,'AdParam_address')]/parent::span";
        const addressElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (addressElement) {
            return addressElement.textContent.replace('Xem bản đồ', '').trim();
        }
        return '';
    });

    // Close the page (not the browser)
    await page.close();

    // Create the URL metadata response
    const urlMeta = {
        Title: title,
        Address: address,
        Description: description,
        Images: [image],
    };

    // Send response
    res.json(urlMeta);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

async function deleteAllCookies(page) {
    const cookies = await page.cookies();

    for (const cookie of cookies) {
        await page.deleteCookie({ name: cookie.name });
    }
}

// Usage

