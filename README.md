## -------------- Automation With PlayWright   🎭 with TypeScript ------------- ##

 [![npm version](https://img.shields.io/npm/v/playwright.svg)](https://www.npmjs.com/package/playwright) <!-- GEN:chromium-version-badge -->[![Chromium version](https://img.shields.io/badge/chromium-134.0.6998.15-blue.svg?logo=google-chrome)](https://www.chromium.org/Home)<!-- GEN:stop --> <!-- GEN:firefox-version-badge -->[![Firefox version](https://img.shields.io/badge/firefox-135.0-blue.svg?logo=firefoxbrowser)](https://www.mozilla.org/en-US/firefox/new/)<!-- GEN:stop --> <!-- GEN:webkit-version-badge -->[![WebKit version](https://img.shields.io/badge/webkit-18.2-blue.svg?logo=safari)](https://webkit.org/)<!-- GEN:stop --> [![Join Discord](https://img.shields.io/badge/join-discord-infomational)](https://aka.ms/playwright/discord)</h1>

   
  

   ##  [Documentation](https://playwright.dev) | [API reference](https://playwright.dev/docs/api/class-playwright)

   Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

Headless execution is supported for all browsers on all platforms. Check out [system requirements](https://playwright.dev/docs/intro#system-requirements) for details.
   
   
   This repository contains a Playwright test automation framework for end-to-end testing of web applications. The framework is configured to run tests in parallel, capture screenshots and videos on failure, and report test results to Microsoft Teams.
   


## Prerequisites⚠️

- Node.js (version 16.x or later)
- VS code studio
- npm (Node Package Manager)
To check if Node js is installed in your sysytem 
  ```
  npm node-v
  ```

  ## Project Setup

1. **Clone the Repository**

   ```sh
   git clone https://github.com/GolfWC/playWright.git
   cd playWrightAzureProject
2. Install Playwright,or Update PlayWright: Ensure that you are using the latest version of Playwright, as updates may contain bug fixes and improvements.

   ```
   npm install @playwright/test@latest
   ```



 ## How to integrate to MicroSoft Team Notification        <img src="https://github.com/user-attachments/assets/6217a60b-7b91-41a2-9f51-1f7fbd9a05a7" alt="Windows11onReactGIF" width="70" height="30">

To integrate team notifications for test results in your Playwright framework, you can use a combination of Playwright's built-in reporters and external notification services like Slack, Microsoft Teams, or email. Here is an example of how you can set up notifications using a custom reporter and a Slack webhook.

Step 1: Install Required Packages
First, install the necessary packages to send HTTP requests. You can use axios for this purpose.

```
npm install axios
```

Step 2: Create a Custom Reporter
Create a custom reporter that sends notifications to your team. Here is an example of a custom reporter that sends notifications to a Slack channel using a webhook URL.

Step 3: Update Playwright Configuration
Update your playwright.config.ts to use the custom reporter.


Step 4: Set Up Environment Variables
Make sure to set up the SLACK_WEBHOOK_URL environment variable with your Slack webhook URL. You can add this to a .env file in your project root.


Step 5: Run Your Tests
Run your tests as usual, and the custom reporter will send notifications to your Slack channel.


```
npx playwright test
```

Step 6 
If you are facing an error on  require('dotenv').config(); please run below comand.

```
npm install dotenv

```
### To Sent an Email notification
To send the test results and report via email, you can use a Node.js package like nodemailer to send emails. You can create a custom reporter that sends the email after the tests are completed. Here is an example of how you can achieve this:

Install nodemailer:
```
npm install nodemailer
```










## Resources

* [Documentation](https://playwright.dev)
* [API reference](https://playwright.dev/docs/api/class-playwright/)
* [Contribution guide](CONTRIBUTING.md)
* [Changelog](https://github.com/microsoft/playwright/releases)



