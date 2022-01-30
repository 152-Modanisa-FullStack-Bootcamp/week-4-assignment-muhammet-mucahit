const openUrl = require("../support/action/openUrl");
const waitForSelector = require("../support/action/waitForSelector")
const checkContainsText = require("../support/check/checkContainsText")

const {Given, When, Then} = require("cucumber");

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
  await openUrl.call(this, "/")
});

When(/^page is loaded$/, async function () {
  await waitForSelector.call(this, '#app')
});

Then(/^User can see some of videos' title like$/, async function (arr) {
  const selector = ".video-card h3"
  await checkContainsText.call(this, selector, false, arr.rawTable[0])
});
