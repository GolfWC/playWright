import { test, expect, Page, Locator } from '@playwright/test';

export class Manage {
    readonly page: Page;
    readonly manage: Locator;
    readonly providers: Locator;
    readonly compliance: Locator;
    readonly reconciliation: Locator;
    readonly analyze: Locator;
    readonly retention: Locator;
    readonly manifests: Locator;
    readonly access: Locator;
    readonly services: Locator;
    //provider
    readonly addProvider: Locator;
    readonly filter: Locator;
    readonly name: Locator;
    readonly description: Locator;
    readonly expirationDate: Locator;
    readonly token: Locator;
    readonly tokenButton: Locator;
    readonly enabled: Locator;
    readonly certification: Locator;
    readonly transportType: Locator;
    readonly transportCode: Locator;
    readonly category: Locator;
    readonly IBMMQSenderID: Locator;
    readonly SITATEXSenderID: Locator;
    readonly email: Locator;
    readonly cancel: Locator;
    readonly create: Locator;
    readonly delete: Locator;
    readonly update: Locator;
    readonly providerList: Locator;
    readonly providerRow: Locator;
    //compliance
    //reconciliation
    readonly enabledReconciliation: Locator;
    readonly timeWindow: Locator;
    readonly timeFormat: Locator;
    readonly timeOperator: Locator;
    readonly flightStatus: Locator;
    readonly cancelTime: Locator;
    readonly updateTime: Locator;
    readonly editTime: Locator;
    //analyze
    readonly backgroundCheckIntervalType: Locator;
    readonly backgroundCheckIntervalValue: Locator;
    readonly runNow: Locator;
    readonly editAnalyze: Locator;
    readonly cancelAnalyze: Locator;
    readonly updateAnalyze: Locator;
    //retention
    readonly archivePeriodValue: Locator;
    readonly archivePeriodType: Locator;
    readonly archiveCheckIntervalValue: Locator;
    readonly archiveCheckIntervalType: Locator;
    readonly archiveRunbutton: Locator;
    readonly deletePeriodValue: Locator;
    readonly deletePeriodType: Locator;
    readonly deleteCheckIntervalValue: Locator;
    readonly deleteCheckIntervalType: Locator;
    readonly deleteRunbutton: Locator;
    readonly editRetention: Locator;
    readonly cancelRetention: Locator;
    readonly updateRetention: Locator;
    //manifests
    readonly manifestsProvider: Locator;
    readonly manifestsSelector: Locator;
    readonly uploadManifests: Locator;
    //access
    readonly mfaSwitch: Locator;
    readonly authenticationType: Locator;
    readonly host: Locator;
    readonly port: Locator;
    readonly LDAPSearchBaseUsers: Locator;
    readonly LDAPSearchBaseGroups: Locator;
    readonly LDAPEmailField: Locator;
    readonly employeeID: Locator;
    readonly password: Locator;
    readonly save: Locator;
    readonly test: Locator;
    //services
    //to do

    constructor(page: Page) {
        this.page = page;
        this.manage = this.page.locator('#side-label-manage').first();
        this.providers = this.page.getByTestId('provider');
        this.compliance = this.page.getByTestId('compliance');
        this.reconciliation = this.page.getByTestId('reconciliation');
        this.analyze = this.page.getByTestId('analyze');
        this.retention = this.page.getByTestId('retention');
        this.manifests = this.page.getByTestId('manifests');
        this.access = this.page.getByTestId('accessControl');
        this.services = this.page.getByTestId('services');
        //provider
        this.addProvider = this.page.getByRole('button', { name: 'Add' });
        this.filter = this.page.getByPlaceholder('Filter Grid');
        this.name = this.page.locator('#input-provider-name');
        this.description = this.page.locator('#input-provider-description');
        this.expirationDate = this.page.locator('#input-provider-expiration-date');
        this.token = this.page.locator('#input-provider-token');
        this.tokenButton = this.page.getByRole('button', { name: '↻' });
        this.enabled = this.page.locator('#select-provider-status');
        this.certification = this.page.locator('#select-provider-certified');
        this.transportType = this.page.locator('#select-provider-transport-type');
        this.transportCode = this.page.locator('#input-provider-company-code');
        this.category = this.page.locator('#select-provider-category');
        this.IBMMQSenderID = this.page.locator('#input-provider-mq-sender-id');
        this.SITATEXSenderID = this.page.locator('div:nth-child(12) > .provider-popup-input');
        this.email = this.page.locator('#input-provider-email');
        this.cancel = this.page.getByRole('button', { name: 'Cancel' });
        this.create = this.page.getByRole('button', { name: 'Create' });
        this.delete = this.page.getByRole('button', { name: 'Delete' });
        this.update = this.page.getByRole('button', { name: 'Update' });
        this.providerList = this.page.locator('#provider-flex-table-content');
        this.providerRow = this.page.getByText('provider1');
        //compliance
        //reconciliation
        this.enabledReconciliation = this.page.locator('#btn-reconciliation-enabled');
        this.timeWindow = this.page.locator('#input-reconciliation-creation-time-amount');
        this.timeFormat = this.page.locator('#select-reconciliation-creation-time-unit');
        this.timeOperator = this.page.locator('#select-reconciliation-creation-time-moment');
        this.flightStatus = this.page.locator('#select-reconciliation-creation-time-mode');
        this.cancelTime = this.page.getByRole('button', { name: 'Cancel' });
        this.updateTime = this.page.getByRole('button', { name: 'Update' });
        this.editTime = this.page.getByRole('button', { name: 'Edit' });
        //analyze
        this.backgroundCheckIntervalType = this.page.locator('#select-analyze-background-check-interval-type');
        this.backgroundCheckIntervalValue = this.page.locator('#input-analyze-background-check-interval-value');
        this.runNow = this.page.getByRole('button', { name: 'Run Now' });
        this.editAnalyze = this.page.getByRole('button', { name: 'Edit' });
        this.cancelAnalyze = this.page.getByRole('button', { name: 'Cancel' });
        this.updateAnalyze = this.page.getByRole('button', { name: 'Update' });
        //retention
        this.archivePeriodValue = this.page.locator('#input-retention-archiving-period-value');
        this.archivePeriodType = this.page.locator('#input-retention-archiving-period-type');
        this.archiveCheckIntervalValue = this.page.locator('#input-retention-archiving-check-interval-value');
        this.archiveCheckIntervalType = this.page.locator('#select-retention-archiving-check-interval-type');
        this.archiveRunbutton = this.page.locator('#btn-retention-archive-run-job');
        this.deletePeriodValue = this.page.locator('#input-retention-delete-period-value');
        this.deletePeriodType = this.page.locator('#select\\ -retention-delete-period-type');
        this.deleteCheckIntervalValue = this.page.locator('#input-retention-delete-check-interval-value');
        this.deleteCheckIntervalType = this.page.locator('#select-retention-delete-check-interval-type');
        this.deleteRunbutton = this.page.locator('#btn-retention-delete-run-job');
        this.editRetention = this.page.getByRole('button', { name: 'Edit' });
        this.cancelRetention = this.page.getByRole('button', { name: 'Cancel' });
        this.updateRetention = this.page.getByRole('button', { name: 'Update' });
        //manifests
        this.manifestsProvider = this.page.locator('#select-provider');
        this.manifestsSelector = this.page.getByText('Choose File');
        this.uploadManifests = this.page.getByRole('button', { name: 'Upload' });
        //access
        this.mfaSwitch = this.page.locator('#switch-mfa-enabled');
        this.authenticationType = this.page.locator('#select-authentication-type');
        this.host = this.page.locator('#input-ldap-setting-host');
        //services
        //to do

    }
}