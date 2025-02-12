// import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';
// import axios from 'axios';
// import path from 'path';

// class TeamsReporter implements Reporter {
//   private webhookUrl: string;
//   private passedTests: number = 0;
//   private failedTests: number = 0;

//   constructor() {
//     this.webhookUrl = process.env.TEAMS_WEBHOOK_URL || '';
//     if (!this.webhookUrl) {
//       throw new Error('TEAMS_WEBHOOK_URL environment variable is not set');
//     }
//     console.log(`TeamsReporter initialized with webhook URL: ${this.webhookUrl}`);
//   }

//   async onTestEnd(test: TestCase, result: TestResult) {
//     if (result.status === 'passed') {
//       this.passedTests++;
//     } else if (result.status === 'failed') {
//       this.failedTests++;
//     }
//   }

//   async onEnd(result: { status: string }) {
//     const reportPath = path.resolve(__dirname, 'playwright-report', 'index.html');
//     const message = {
//       text: `Playwright Test Results: ${result.status}\nPassed: ${this.passedTests}\nFailed: ${this.failedTests}\nReport: ${reportPath}`,
//     };
//     console.log(`Sending end message: ${JSON.stringify(message)}`);
//     try {
//       await axios.post(this.webhookUrl, message);
//       console.log('End message sent successfully');
//     } catch (error) {
//       console.error('Error sending end message:', error);
//     }
//   }
// }

// export default TeamsReporter;

import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';
import axios from 'axios';

class TeamsReporter implements Reporter {
  private webhookUrl: string;
  private passedTests: number = 0;
  private failedTests: number = 0;

  constructor() {
    this.webhookUrl = process.env.TEAMS_WEBHOOK_URL || '';
    if (!this.webhookUrl) {
      throw new Error('TEAMS_WEBHOOK_URL environment variable is not set');
    }
    console.log(`TeamsReporter initialized with webhook URL: ${this.webhookUrl}`);
  }

  async onTestEnd(test: TestCase, result: TestResult) {
    if (result.status === 'passed') {
      this.passedTests++;
    } else if (result.status === 'failed') {
      this.failedTests++;
    }
  }

  async onEnd(result: { status: string }) {
    const message = {
      text: `Playwright Test Results: ${result.status}\nPassed: ${this.passedTests}\nFailed: ${this.failedTests}`,
    };
    console.log(`Sending end message: ${JSON.stringify(message)}`);
    try {
      await axios.post(this.webhookUrl, message);
      console.log('End message sent successfully');
    } catch (error) {
      console.error('Error sending end message:', error);
    }
  }
}

export default TeamsReporter;