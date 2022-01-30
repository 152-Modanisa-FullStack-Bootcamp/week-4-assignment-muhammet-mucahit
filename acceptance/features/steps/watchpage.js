const openUrl = require("../support/action/openUrl");
const checkUrlContains = require("../support/check/checkUrlContains")
const clickElement = require("../support/action/clickElement")

const {Given, When, Then} = require("cucumber");

Given(/^that User is on Video Site Project's HomePage$/, async function () {
  await openUrl.call(this, "/")
});

When(/^User clicks "([^"]*)" video$/, async function (title) {
  const selector = '.video-card'
  await this.page.$$eval(
    selector,
    async (items, title) => {
      const videoItem = items
        .find(item => item.querySelector("h3").textContent === title)
      videoItem.querySelector("img").click()
    },
    title
  )
});

Then(/^User should see watch url correctly$/, async function () {
  await checkUrlContains.call(this, false, "watch?id=2")
});
