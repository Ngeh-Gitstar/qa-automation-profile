#Playwright QA Automation – Profile Form Tests

This project uses [Playwright](https://playwright.dev/) with TypeScript to automate test cases for a user profile creation form hosted at: (https://qa-assessment.pages.dev/)

---

#Setup Instructions

#Clone the repo:
   ```bash
   git clone <your-repo-url>
   cd playwright-qa-automation
   ```

#Install dependencies:
   ```bash
   npm install
   ```

#Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

#Run Tests

#Run all tests:
```bash
npx playwright test
```

#Run a specific test:
```bash
npx playwright test -g "TC01: Accepts only alphabetical characters"
```

#Run tests in the following  browsers:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

#to get HTML test report:
```bash
npx playwright show-report
```

---

#Project Structure

```
playwright-qa-automation/
│
├── pages/
│   └── ProfileFormPage.ts        #  Page Object Model for the form
│
├── tests/
│   └── profileForm.spec.ts       # Test specs fr 
│
├── playwright.config.ts          #  Playwright test config
└── README.md
```

---

#Challenges & Workarounds

1 Timeout errors on form fields
- Issue: `fill()` caused timeouts using `getByLabel('#first-name')`.
- Fix: Used `locator('#first-name')` or `page.fill('#first-name', value)` instead

 2 Incorrect selector interpolation
- Problem:
  ```ts
  return this.page.locator('#${fieldId} + .error'); // 
  ```
- Fix:
  ```ts
  return this.page.locator(`#${fieldId} + .error`); // 
  ```

3 Tests fail even with valid inputs
- Ensure all required fields are filled before submission.
- Validate that submission triggers the correct DOM updates.
- Try waiting for error fields or success messages using `waitFor`.

#Slowness  in headless mode
- Run tests in headed mode:
  ```bash
  npx playwright test --headed
  ```
- Use `waitFor` on elements to avoid race conditions.

#Debugging failed tests
- Playwright captures videos and screenshots for failed tests.
- Use:
  ```bash
  npx playwright show-report
  ```

---

#Test Cases Covered

TC01: Accepts only alphabetical characters

TC02: Rejects names with special characters

TC03: Rejects names with spaces

TC04: Validates blank first name

TC10: LinkedIn URL — Accepts only valid LinkedIn profile URL (www.linkedin.com/in/ngeh-christian-ngeh-045b311ba)

TC11: LinkedIn Input — Leave LinkedIn section blank ("") — No error, form can be submitted

TC12: GitHub URL — Accepts valid GitHub URL (https://github.com/Ngeh-Gitstar)

TC13: Phone Number — Accepts exactly 10 digits (1234567890)

TC14: Phone Number — Accepts fewer than 10 digits (123456789)

TC15: Phone Number — Rejects alphabets and special characters (a123456789-) — Shows error: Please match the required format

TC16: Phone Number — Rejects more than 10 digits (12345678901) — Shows error: Please match the required format

More test cases can be added by extending the `ProfileFormPage` class and writing new specs in `tests/`.

---

#Technologies

- [Playwright](https://playwright.dev/)
- TypeScript
- Page Object Model pattern (POM)

---

