export * from '././aPIException';
export * from '././account';
export * from '././accountType';
export * from '././allowanceType';
export * from '././bankAccount';
export * from '././calendarType';
export * from '././deductionLine';
export * from '././deductionType';
export * from '././deductionTypeCalculationType';
export * from '././earningsLine';
export * from '././earningsRate';
export * from '././earningsRateCalculationType';
export * from '././earningsType';
export * from '././employee';
export * from '././employeeStatus';
export * from '././employees';
export * from '././employmentBasis';
export * from '././employmentTerminationPaymentType';
export * from '././entitlementFinalPayPayoutType';
export * from '././homeAddress';
export * from '././leaveAccrualLine';
export * from '././leaveApplication';
export * from '././leaveApplications';
export * from '././leaveBalance';
export * from '././leaveEarningsLine';
export * from '././leaveLine';
export * from '././leaveLineCalculationType';
export * from '././leaveLines';
export * from '././leavePeriod';
export * from '././leavePeriodStatus';
export * from '././leaveType';
export * from '././leaveTypeContributionType';
export * from '././manualTaxType';
export * from '././openingBalances';
export * from '././payItem';
export * from '././payItems';
export * from '././payRun';
export * from '././payRunStatus';
export * from '././payRuns';
export * from '././payTemplate';
export * from '././paymentFrequencyType';
export * from '././payrollCalendar';
export * from '././payrollCalendars';
export * from '././payslip';
export * from '././payslipLines';
export * from '././payslipObject';
export * from '././payslipSummary';
export * from '././rateType';
export * from '././reimbursementLine';
export * from '././reimbursementLines';
export * from '././reimbursementType';
export * from '././residencyStatus';
export * from '././settings';
export * from '././settingsObject';
export * from '././settingsTrackingCategories';
export * from '././settingsTrackingCategoriesEmployeeGroups';
export * from '././settingsTrackingCategoriesTimesheetCategories';
export * from '././state';
export * from '././superFund';
export * from '././superFundProduct';
export * from '././superFundProducts';
export * from '././superFundType';
export * from '././superFunds';
export * from '././superLine';
export * from '././superMembership';
export * from '././superannuationCalculationType';
export * from '././superannuationContributionType';
export * from '././superannuationLine';
export * from '././tFNExemptionType';
export * from '././taxDeclaration';
export * from '././taxLine';
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
