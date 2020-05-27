export * from '././aPIException';
export * from '././account';
export * from '././accountType';
export * from '././earningRate';
export * from '././earningRates';
export * from '././earningsRateCalculationType';
export * from '././earningsType';
export * from '././employee';
export * from '././employeeStatus';
export * from '././employees';
export * from '././employmentBasis';
export * from '././payRun';
export * from '././payRunStatus';
export * from '././payRuns';
export * from '././payslipSummary';
export * from '././rateType';
export * from '././settings';
export * from '././settingsObject';
export * from '././settingsTrackingCategories';
export * from '././settingsTrackingCategoriesEmployeeGroups';
export * from '././settingsTrackingCategoriesTimesheetCategories';
export * from '././timesheet';
export * from '././timesheetLine';
export * from '././timesheetObject';
export * from '././timesheetStatus';
export * from '././timesheets';
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
