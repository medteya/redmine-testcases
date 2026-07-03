# Redmine Automated Test Project

## Summary

This project is an automated test suite for the Redmine website. It uses Playwright to automatically navigate through the site, search for projects, and apply filters, ensuring that the core features work as expected.

## Requirements

- Node.js (v22 or higher recommended)
- Playwright

## Steps to Install

<!-- 1. Clone the repository: `git clone <your-repo-url>`
2. Navigate to the project directory: `cd redmine-test-cases` -->

3. Install dependencies: `npm install`

## Steps to Launch

- Run all tests: `npm test`
- Run tests in headed mode: `npx run test:headed`
- Run tests in headless mode: `npm run test:headless`
- Open Playwright UI for debugging: `npm run test:ui`

## Steps to Create and View the Report

1. Execute the test suite: `npm test`
2. Generate and view the report: `npm run report`
