import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProjectsPage } from "../pages/ProjectsPage";
import * as testData from "../fixtures/test-data.json";

test.describe("Redmine Home Page Tests", () => {
  test("TC1: Verify Main Navigation", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await home.activityLink.click();
    await expect(page).toHaveURL(/.*activity/);

    await home.issuesLink.click();
    await expect(page).toHaveURL(/.*issues/);

    await home.downloadLink.click();
    await expect(page).toHaveURL(/.*download/i);
  });

  test("TC2: Verify Valid Search", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await home.searchFor(testData.search.valid);
    await expect(home.searchResults).toContainText(testData.search.valid);
  });

  test("TC3: Verify Invalid Search", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    const randomValue = Math.random().toString(36).substring(2, 12);
    await home.searchFor(randomValue);

    await expect(home.searchResultHeader).toContainText("Results (0)");
  });
});

test.describe("Redmine Projects Page Tests", () => {
  test("TC4: Verify Project Search", async ({ page }) => {
    const projects = new ProjectsPage(page);
    await projects.goto();

    await projects.filterByName(testData.search.project);
    await expect(projects.projectList).toContainText(testData.search.project);
  });

  test("TC5: Verify Project Filtering", async ({ page }) => {
    const projects = new ProjectsPage(page);
    await projects.goto();

    const searchName = testData.projectSearch.name;
    await projects.filterByName(searchName);
    await projects.changingSearchFilters();

    await expect(projects.projectList).toContainText(searchName);
  });
});
