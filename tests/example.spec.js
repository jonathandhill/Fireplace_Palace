import { test, expect } from "@playwright/test";

// test("basic test", async ({ page }) => {
//   await page.goto("http://localhost:3000/");
//   const title = await page.title();
//   expect(title).toBe("Create Next App");
// });

test("should display the homepage correctly", async ({ page }) => {
  // Navigate to the homepage
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  // Check that the title is correct
  const title = await page.title();
  expect(title).toBe("Fireplace Palace");
});
test.describe("ReviewsComponent", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page containing ReviewsComponent
    await page.goto("http://localhost:3000"); // Adjust URL if necessary
  });

  test("should highlight selected button", async ({ page }) => {
    // Click on the England button
    await page.click('button:has-text("England")');

    // Check if the England button has the selected class
    const englandButton = page.locator('button:has-text("England")');
    await expect(englandButton).toHaveClass(/buttonSelected/);

    // Check if other buttons do not have the selected class
    const walesButton = page.locator('button:has-text("Wales")');
    const scotlandButton = page.locator('button:has-text("Scotland")');

    await expect(walesButton).not.toHaveClass(/buttonSelected/);
    await expect(scotlandButton).not.toHaveClass(/buttonSelected/);
  });

  // test("should display review for England when England button is clicked", async ({
  //   page,
  // }) => {
  //   // Click on the England button
  //   await page.click('button:has-text("England")');

  //   // Wait for the review text to be updated
  //   await page.waitForSelector(".reviewSubContainer", { state: "visible" });

  //   // Assert that the review content is displayed
  //   const reviewText = await page.locator(".reviewSubContainer").innerText();
  //   expect(reviewText).not.toBe("");
  // });

  // test("should display review for Wales when Wales button is clicked", async ({
  //   page,
  // }) => {
  //   // Click on the Wales button
  //   await page.click('button:has-text("Wales")');

  //   // Wait for the review text to be updated
  //   await page.waitForSelector(".reviewSubContainer", { state: "visible" });

  //   // Assert that the review content is displayed
  //   const reviewText = await page.locator(".reviewSubContainer").innerText();
  //   expect(reviewText).not.toBe("");
  // });

  // test("should display review for Scotland when Scotland button is clicked", async ({
  //   page,
  // }) => {
  //   // Click on the Scotland button
  //   await page.click('button:has-text("Scotland")');

  //   // Wait for the review text to be updated
  //   await page.waitForSelector(".reviewSubContainer", { state: "visible" });

  //   // Assert that the review content is displayed
  //   const reviewText = await page.locator(".reviewSubContainer").innerText();
  //   expect(reviewText).not.toBe("");
  // });
});
