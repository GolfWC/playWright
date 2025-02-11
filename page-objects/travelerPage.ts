import { test, expect, Page, Locator } from '@playwright/test';

export class Traveler {
    readonly page: Page;
    readonly travelerExplorer: Locator;
    //selected traveler
    readonly photo: Locator;
    readonly givenName: Locator;
    readonly surname: Locator;
    readonly gender: Locator;
    readonly nationality: Locator;
    readonly dateOfBirth: Locator;
    readonly age: Locator;
    readonly document: Locator;
    //travel history
    readonly travelHistory: Locator;
    //icons
    readonly map: Locator;
    readonly polar: Locator;
    readonly companion: Locator;
    readonly DCS: Locator;
    readonly PNR: Locator;
    readonly API: Locator;
    readonly FAL: Locator;
    readonly BCR: Locator;
    readonly WL: Locator;
    readonly CWL: Locator;
    readonly IP: Locator;
    readonly POI: Locator;
    readonly travelerCheck: Locator;
    //companion travelers
    readonly companionList: Locator;
    //passport
    readonly passportType: Locator;
    readonly passportNumber: Locator;
    readonly nameOnThePassport: Locator;
    readonly passportIssuingCountry: Locator;
    //dual nationality
    readonly dualNationality: Locator;
    //visa
    readonly id: Locator;
    readonly maxStay: Locator;
    readonly visaType: Locator;
    readonly dateOfIssue: Locator;
    readonly dateOfExpiry: Locator;
    readonly purposeOfVisit: Locator;
    readonly visaRegistrationNumber: Locator;
    readonly eVisaNumber: Locator;
    //application
    readonly applicantName: Locator;
    readonly genderApplication: Locator;
    readonly placeOfBirthApplication: Locator;
    readonly dateOfBirthApplication: Locator;
    readonly nationalityApplication: Locator;
    readonly passportTypeApplication: Locator;
    readonly passportNumberApplication: Locator;
    readonly placeOfIssueApplication: Locator;
    readonly passportExpiryDateApplication: Locator;

    


    constructor(page: Page) {
        this.page = page;
        this.travelerExplorer = this.page.locator('header-nav').getByText('Traveler Explorer');
        //selected traveler - todo
        this.photo = this.page.locator('#passengerImage');
        this.givenName = this.page.getByText('Given Name');
        this.surname = this.page.getByText('Surname');
        this.gender = this.page.getByText('Surname');
        this.nationality = this.page.getByText('National');
        this.dateOfBirth = this.page.getByText('Date of Birth');
        this.age = this.page.getByText('Age');
        this.document = this.page.getByText('Document');
        //travel history
        this.travelHistory = this.page.getByText('JJ 30572 PIS-IAD 2001-04-24');
        //icons
        this.map = this.page.locator('#tab-services-map');
        this.polar = this.page.locator('#tab-polar');
        this.companion = this.page.locator('#tab-companion');
        this.DCS = this.page.locator('#tab-dss');
        this.PNR = this.page.locator('#tab-pnr');
        this.API = this.page.locator('#tab-api');
        this.FAL = this.page.locator('#tab-fal');
        this.BCR = this.page.locator('#tab-bcs');
        this.WL = this.page.locator('#tab-watchlist').first();
        this.CWL = this.page.locator('#tab-watchlist').last();
        this.IP = this.page.locator('#tab-interpol');
        this.POI = this.page.locator('#tab-poi');
        this.travelerCheck = this.page.locator('#tab-travelerCheck');
        //companion travelers
        this.companionList = this.page.locator('#companion-table-contents');
        //passport
        this.passportType = this.page.locator('#pasdata-grid-col-doc-type');
        this.passportNumber = this.page.locator('#pasdata-grid-col-doc-number');
        this.nameOnThePassport = this.page.locator('#pasdata-grid-col-doc-name');
        this.passportIssuingCountry = this.page.locator('#pasdata-grid-col-doc-issue-country');
        //dual nationality
        this.dualNationality = this.page.locator('#dn-not-records');
        //visa
        this.id = this.page.locator('#v-grid-col-visa-id');
        this.maxStay = this.page.locator('#v-grid-col-max-days');
        this.visaType = this.page.locator('#v-grid-col-visa-type');
        this.dateOfIssue = this.page.locator('#v-grid-col-date-issue');
        this.dateOfExpiry = this.page.locator('#v-grid-col-date-expiry');
        this.purposeOfVisit = this.page.locator('#v-grid-col-visit-purspose');
        this.visaRegistrationNumber = this.page.locator('#v-grid-col-reg-number');
        this.eVisaNumber = this.page.locator('#v-grid-col-evisa-number');
        //application
        this.applicantName = this.page.locator('#a-grid-col-name');
        this.genderApplication = this.page.locator('#a-grid-col-gender');
        this.placeOfBirthApplication = this.page.locator('#a-grid-col-place-birth');
        this.dateOfBirthApplication = this.page.locator('#a-grid-col-date-birth');
        this.nationalityApplication = this.page.locator('#a-grid-col-nationality');
        this.passportTypeApplication = this.page.locator('#a-grid-col-passport-type');
        this.passportNumberApplication = this.page.locator('#a-grid-col-passport-number');
        this.placeOfIssueApplication = this.page.locator('#a-grid-col-place-issue');
        this.passportExpiryDateApplication = this.page.locator('#a-grid-col-passport-expiry-date');
    }
}