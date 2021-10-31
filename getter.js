const request = require("request-promise");
const fs = require("fs");

async function getHtml(url) {
  const html = await request.get(url);
  return html;
}

function saveHTMLToFile(html) {
  fs.writeFileSync("./test.html", html);
}

async function main() {
  const html = await getHtml(
    "https://sfbay.craigslist.org/d/software-qa-dba-etc/search/sof"
  );
  saveHTMLToFile(html);
}

main();
