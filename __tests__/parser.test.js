const parser = require("../parser");
const fs = require("fs");
let html;
let listings;

beforeAll(() => {
  html = fs.readFileSync("./test.html");
  listings = parser.listings(html);
});

it("should give the correct number of listings", () => {
  expect(listings.length).toBe(120);
});

it("should get hood from listing", () => {
  expect(listings[0].hood).toBe("(san jose south)");
});

it("should get correct date form listing", () => {
  expect(listing[0].datePosted).toStrictEqual(new Date("2021-10-30 14:57"));
});

it("should get correct url", () => {
  expect(listings[0].url).toBe(
    "https://sfbay.craigslist.org/sby/sof/d/san-jose-product-manager-for-startup/7401431484.html"
  );
});

it("should get correct title", () => {
  expect(listings[0].title).toBe("Product Manager for Startup");
});
