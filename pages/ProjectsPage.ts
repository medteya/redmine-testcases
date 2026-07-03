import { Locator, Page } from "@playwright/test";

export class ProjectsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get projectSearch(): Locator {
    return this.page.locator("#q");
  }
  get projectList(): Locator {
    return this.page.locator("#search-results");
  }
  get allWordsCheckbox(): Locator {
    return this.page.locator("#all_words");
  }
  get searchTitlesCheckbox(): Locator {
    return this.page.locator("#titles_only");
  }
  get filterSearchButton(): Locator {
    return this.page.locator('input[name="commit"]');
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
