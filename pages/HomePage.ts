import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly activityLink: Locator;
  readonly issuesLink: Locator;
  readonly downloadLink: Locator;
  readonly searchInput: Locator;
  readonly searchResults: Locator;
  readonly searchCount: Locator;
  readonly searchResultHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.activityLink = page.locator("a.activity");
    this.issuesLink = page.locator("a.issues");
    this.downloadLink = page.locator("a.download");
    this.searchInput = page.locator("#q");
    this.searchResults = page.locator("#search-results");
    this.searchCount = page.locator("#search-results-counts");
    this.searchResultHeader = page.locator("#content h3");
  }

  async goto() {
    await this.page.goto("/");
  }

  async searchFor(term: string) {
    await this.searchInput.fill(term);
    await this.page.keyboard.press("Enter");
  }

  async getSearchResultText() {
    return await this.searchResultHeader.innerText();
  }
}
