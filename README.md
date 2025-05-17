# Technical Assessment for QA Engineer at Ranger

## Overview

In this exercise, you will work with Playwright (written in TypeScript) to create and complete three automated tests for Wikipedia.

You’ll start by implementing a login test from scratch, then finish two existing tests that were partially generated using Ranger’s test recorder and code generation tool.

## Your Task

1. Implement a login test and capture the storage state so the remaining tests run as a logged in user
    - In `login.test.ts`, create a test that signs into Wikipedia
    - Create an account if you don't already have one
    - Add your sign in credentials to `.env`
2. Complete the Wikipedia search test
    - In `searchWikipedia.ts`, finish the existing test so that it correctly implements the test case in the file
3. Complete the Wikipedia home page actions test
    - In `wikipediaHomepageActions.ts`, finish the existing test so that it correctly implements the test case in the file
4. Please record a two minute Loom video (loom.com) walking through the code and showing a successful execution of the code. Please also add one minute as to why you want to work at Ranger (ranger.net)
    - Please update this README and add a link to the loom video here:

📹 Loom video:

[ASSESSMENT VIDEO #1](https://www.loom.com/share/de2355f662224247ada54d4ddbcc2f07?sid=1df8688c-a74c-4314-9b8f-8aa0ded79aa8)

[ASSESSMENT VIDEO #2](https://www.loom.com/share/120f793a412743768d18f9c0f95886f5?sid=29ce9cd0-afa0-44e0-b43a-feacb47a3141)

[ASSESSMENT VIDEO #3](https://www.loom.com/share/3c2299bd45694a788b41d0b28332021a?sid=e9a6e7e3-611c-4354-b569-c557a876cfd1)

📦 GitHub repository: [https://github.com/lenis1995/ranger-technical-assesment](https://github.com/lenis1995/ranger-technical-assesment)

Each test file contains more detailed instructions.

Make sure that the only files that you edit are `login.test.ts`, `searchWikipedia.ts`, and `wikipediaHomepageActions.ts`.

---

## Project Structure

```plaintext
├── README.md
├── package.json
├── package-lock.json
├── playwright.config.ts
├── playwright.config.ts
├── .env
├── .gitignore
├── node_modules/
├── test-results/
├── playwright-report/
└── src
    ├── auth
    │   └── login.json
    ├── constants
    │   ├── errorMessages.ts
    │   ├── htmlRoles.ts
    │   ├── roleNames.ts
    │   ├── selectors.ts
    │   ├── testData.ts
    │   └── urls.ts
    ├── lib
    │   ├── all.test.ts
    │   ├── login.test.ts
    │   └── tests
    │       ├── searchWikipedia.ts
    │       └── wikipediaHomepageActions.ts
    └── utils
        └── domUtils.ts
```

## Setup

### Requirements

-   Node.js v22+
-   npm

### Quick Start

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

#### Run all tests

There's a `test` script in `package.json` so you can do:

```bash
npm run test
```

#### Run a specific test

Add `.only` to the specific test you want to run in isolation in `all.test.ts` and then run the same command:

```bash
npm run test
```
