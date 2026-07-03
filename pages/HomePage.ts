import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get activityLink(): Locator {
    return this.page.locator("a.activity");
  }
  get issuesLink(): Locator {
    return this.page.locator("a.issues");
  }
  get downloadLink(): Locator {
    return this.page.locator("a.download");
  }
  get searchInput(): Locator {
    return this.page.locator("#q");
  }
  get searchResults(): Locator {
    return this.page.locator("#search-results");
  }
  get searchResultHeader(): Locator {
    return this.page.locator("#content h3");
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
