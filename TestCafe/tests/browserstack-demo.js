import percySnapshot from "@percy/testcafe";
import { Selector } from "testcafe";
fixture`bstackdemo`.page`https://www.bstackdemo.com/`;
test("BStack Demo test", async (t) => {
  await t
    .click(Selector('#\\31  > div.shelf-item__buy-btn').withText("Add to cart"))
    .click(Selector(".buy-btn"))
    .click("#username svg")
    .click(Selector("#react-select-2-option-0-0").with({ force: true }))
    .click("#password svg")
    .click(Selector("#react-select-3-option-0-0").with({ force: true }))
    .click(Selector("#login-btn"))
    .typeText(
      Selector("label").withText("First Name").sibling("input"),
      "Varad"
    )
    .typeText(
      Selector("label").withText("Last Name").sibling("input"),
      "Prabhu"
    )
    .typeText(Selector("label").withText("Address").sibling("input"), "Dadar")
    .typeText(
      Selector("label").withText("State/Province").sibling("input"),
      "Maharashtra"
    )
    .typeText(
      Selector("label").withText("Postal Code").sibling("input"),
      "400028"
    )
    .click(Selector("#checkout-shipping-continue"))
  await percySnapshot(t, "Order Placed Successfully");
});
