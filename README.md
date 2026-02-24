# Playwright Automation Demo Project

This repository contains a Playwright automation framework written in TypeScript. It is designed to test web applications with a focus on scalability, maintainability, and ease of use.

## Features

- **Playwright**: End-to-end testing framework for modern web apps.
- **TypeScript**: Strongly typed language for better code quality.
- **Page Object Model (POM)**: Organized structure for test scripts.
- **GitHub Actions**: CI/CD pipeline to run tests automatically.
- **HTML Reports**: Automatically generated test reports.

---

## Prerequisites

Before running the tests, ensure the following are installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Browsers required by Playwright (installed automatically)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Orgkiran/playwright-test-automation-ts.git
   cd playwright-test-automation-ts

2. Install dependencies: npm ci

3. Install Playwright browsers: 
npx playwright install

**Running Tests**
## Run All Tests
To execute all tests: npx playwright test

## Run Tests in Parallel
Playwright runs tests in parallel by default. You can configure the number of workers in playwright.config.ts.

## Run Specific Tests
To run a specific test file: npx playwright test tests/example.spec.ts

## Run Tests with Tags
To run tests with specific tags (e.g., @smoke):
npx playwright test --grep @smoke

## Test Reports
After running the tests, an HTML report is generated. To view the report: npx playwright show-report

## CI/CD with GitHub Actions
This project includes a GitHub Actions workflow (.github/workflows/playwright.yml) to run tests automatically on every push or pull request to the main or feature/* branches.

## Workflow Steps:
Install dependencies.
Install Playwright browsers.
Run Playwright tests.
Upload the test report as an artifact.

## Structure
.
├── tests/                  # Test files
├── page-objects/           # Page Object Model files
├── fixtures/               # Custom fixtures
├── .github/workflows/      # GitHub Actions workflows
├── [playwright.config.ts](http://_vscodecontentref_/0)    # Playwright configuration
└── README.md               # Project documentation

## Contributing
Fork the repository.
Create a new branch for your feature or bug fix.
Submit a pull request.