import { Locator, Page } from "@playwright/test";

export class ProjectsPage {
  readonly page: Page;
  readonly projectSearch: Locator;
  readonly projectList: Locator;
  readonly allWordsCheckbox: Locator;
  readonly searchTitlesCheckbox: Locator;
  readonly filterSearchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.projectSearch = page.locator("#q");
    this.projectList = page.locator("#search-results");
    this.allWordsCheckbox = page.locator("#all_words");
    this.searchTitlesCheckbox = page.locator("#titles_only");
    this.filterSearchButton = page.locator('input[name="commit"]');
  }

  async goto() {
    await this.page.goto("/projects");
  }

  async filterByName(name: string) {
    await this.projectSearch.fill(name);
    await this.page.keyboard.press("Enter");
  }
  async changingSearchFilters() {
    await this.allWordsCheckbox.uncheck();
    await this.searchTitlesCheckbox.check();
    await this.filterSearchButton.click();
  }
}
