// import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';
// import axios from 'axios';

// class TeamsReporter implements Reporter {
//   private webhookUrl: string;

//   constructor() {
//     this.webhookUrl = process.env.TEAMS_WEBHOOK_URL || '';
//     if (!this.webhookUrl) {
//       throw new Error('TEAMS_WEBHOOK_URL environment variable is not set');
//     }
//     console.log(`TeamsReporter initialized with webhook URL: ${this.webhookUrl}`);
//   }

//   async onEnd(result: { status: string }) {
//     const message = {
//       text: `Playwright Test Results: ${result.status}`,
//     };
//     console.log(`Sending end message: ${JSON.stringify(message)}`);
//     try {
//       await axios.post(this.webhookUrl, message);
//       console.log('End message sent successfully');
//     } catch (error) {
//       console.error('Error sending end message:', error);
//     }
//   }

//   async onTestEnd(test: TestCase, result: TestResult) {
//     const message = {
//       text: `Test ${test.title} ${result.status}`,
//     };
//     console.log(`Sending test end message: ${JSON.stringify(message)}`);
//     try {
//       await axios.post(this.webhookUrl, message);
//       console.log('Test end message sent successfully');
//     } catch (error) {
//       console.error('Error sending test end message:', error);
//     }
//   }
// }

// export default TeamsReporter;

import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';
import axios from 'axios';
import path from 'path';

class TeamsReporter implements Reporter {
  private webhookUrl: string;

  constructor() {
    this.webhookUrl = process.env.TEAMS_WEBHOOK_URL || '';
    if (!this.webhookUrl) {
      throw new Error('TEAMS_WEBHOOK_URL environment variable is not set');
    }
  }

  async onEnd(result: { status: string }) {
    const reportPath = path.resolve(__dirname, 'playwright-report', 'index.html');
    const message = {
      text: `Playwright Test Results: ${result.status}\nReport: ${reportPath}`,
    };

    await axios.post(this.webhookUrl, message);
  }

  async onTestEnd(test: TestCase, result: TestResult) {
    const message = {
      text: `Test ${test.title} ${result.status}`,
    };

    await axios.post(this.webhookUrl, message);
  }
}

export default TeamsReporter;