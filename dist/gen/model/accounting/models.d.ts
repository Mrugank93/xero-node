export * from '././account';
export * from '././accountType';
export * from '././accounts';
export * from '././accountsPayable';
export * from '././accountsReceivable';
export * from '././address';
export * from '././allocation';
export * from '././allocations';
export * from '././attachment';
export * from '././attachments';
export * from '././balances';
export * from '././bankTransaction';
export * from '././bankTransactions';
export * from '././bankTransfer';
export * from '././bankTransfers';
export * from '././batchPayment';
export * from '././batchPaymentDetails';
export * from '././batchPayments';
export * from '././bill';
export * from '././brandingTheme';
export * from '././brandingThemes';
export * from '././cISOrgSetting';
export * from '././cISSetting';
export * from '././cISSettings';
export * from '././contact';
export * from '././contactGroup';
export * from '././contactGroups';
export * from '././contactPerson';
export * from '././contacts';
export * from '././countryCode';
export * from '././creditNote';
export * from '././creditNotes';
export * from '././currencies';
export * from '././currency';
export * from '././currencyCode';
export * from '././element';
export * from '././employee';
export * from '././employees';
export * from '././expenseClaim';
export * from '././expenseClaims';
export * from '././externalLink';
export * from '././historyRecord';
export * from '././historyRecords';
export * from '././invoice';
export * from '././invoiceReminder';
export * from '././invoiceReminders';
export * from '././invoices';
export * from '././item';
export * from '././items';
export * from '././journal';
export * from '././journalLine';
export * from '././journals';
export * from '././lineAmountTypes';
export * from '././lineItem';
export * from '././lineItemTracking';
export * from '././linkedTransaction';
export * from '././linkedTransactions';
export * from '././manualJournal';
export * from '././manualJournalLine';
export * from '././manualJournals';
export * from '././modelError';
export * from '././onlineInvoice';
export * from '././onlineInvoices';
export * from '././organisation';
export * from '././organisations';
export * from '././overpayment';
export * from '././overpayments';
export * from '././payment';
export * from '././paymentDelete';
export * from '././paymentService';
export * from '././paymentServices';
export * from '././paymentTerm';
export * from '././paymentTermType';
export * from '././payments';
export * from '././phone';
export * from '././prepayment';
export * from '././prepayments';
export * from '././purchase';
export * from '././purchaseOrder';
export * from '././purchaseOrders';
export * from '././quote';
export * from '././quoteLineAmountTypes';
export * from '././quoteStatusCodes';
export * from '././quotes';
export * from '././receipt';
export * from '././receipts';
export * from '././repeatingInvoice';
export * from '././repeatingInvoices';
export * from '././report';
export * from '././reportAttribute';
export * from '././reportCell';
export * from '././reportFields';
export * from '././reportRow';
export * from '././reportRows';
export * from '././reportWithRow';
export * from '././reportWithRows';
export * from '././reports';
export * from '././requestEmpty';
export * from '././rowType';
export * from '././salesTrackingCategory';
export * from '././schedule';
export * from '././taxComponent';
export * from '././taxRate';
export * from '././taxRates';
export * from '././taxType';
export * from '././tenNinteyNineContact';
export * from '././timeZone';
export * from '././trackingCategories';
export * from '././trackingCategory';
export * from '././trackingOption';
export * from '././trackingOptions';
export * from '././user';
export * from '././users';
export * from '././validationError';
import localVarRequest = require('request');
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserializeDateFormats(type: string, data: any): Date;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
