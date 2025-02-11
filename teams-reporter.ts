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