const puppeteer = require("puppeteer");
const { parse } = require("node-html-parser");

// const cleanDom = dom => {
//   const domObject = {};
//   const openningTagPosition = dom.search("<");
//   if (openningTagPosition >= 0) {
//     const tag = "<";
//     const closeTag = "</";
//     const openningTag = tag.concat(
//       dom[openningTagPosition + 1],
//       dom[openningTagPosition + 2]
//     );
//     const closingTag = closeTag.concat(
//       dom[openningTagPosition + 1],
//       dom[openningTagPosition + 2]
//     );

//     console.log("open", openningTag);
//     console.log("close", closingTag);
//     console.log(dom.search(closingTag));
//   }
// };

const scrape = async url => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url);

    let dom = await page.evaluate(() => document.body.innerHTML);

    const parsedDom = parse(dom, [{ script: false }]);

    return parsedDom;
  } catch (e) {
    console.log("from internal", e);
  }
};

module.exports = {
  scrape
};
