/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/// <reference types="node" />
import http = require('http');
import { Employee } from '../model/payroll-au/employee';
import { Employees } from '../model/payroll-au/employees';
import { LeaveApplication } from '../model/payroll-au/leaveApplication';
import { LeaveApplications } from '../model/payroll-au/leaveApplications';
import { PayItem } from '../model/payroll-au/payItem';
import { PayItems } from '../model/payroll-au/payItems';
import { PayRun } from '../model/payroll-au/payRun';
import { PayRuns } from '../model/payroll-au/payRuns';
import { PayrollCalendar } from '../model/payroll-au/payrollCalendar';
import { PayrollCalendars } from '../model/payroll-au/payrollCalendars';
import { PayslipLines } from '../model/payroll-au/payslipLines';
import { PayslipObject } from '../model/payroll-au/payslipObject';
import { SettingsObject } from '../model/payroll-au/settingsObject';
import { SuperFund } from '../model/payroll-au/superFund';
import { SuperFundProducts } from '../model/payroll-au/superFundProducts';
import { SuperFunds } from '../model/payroll-au/superFunds';
import { Timesheet } from '../model/payroll-au/timesheet';
import { TimesheetObject } from '../model/payroll-au/timesheetObject';
import { Timesheets } from '../model/payroll-au/timesheets';
import { Authentication } from '../model/payroll-au/models';
import { OAuth } from '../model/payroll-au/models';
export declare enum PayrollAUApiApiKeys {
}
export declare class PayrollAUApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected binaryHeaders: any;
    protected authentications: {
        default: Authentication;
        OAuth2: OAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PayrollAUApiApiKeys, value: string): void;
    set accessToken(token: string);
    /**
     *
     * @summary Use this method to create a payroll employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employee
     */
    createEmployee(xeroTenantId: string, employee: Array<Employee>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employees;
    }>;
    /**
     *
     * @summary Use this method to create a Leave Application
     * @param xeroTenantId Xero identifier for Tenant
     * @param leaveApplication
     */
    createLeaveApplication(xeroTenantId: string, leaveApplication: Array<LeaveApplication>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LeaveApplications;
    }>;
    /**
     *
     * @summary Use this method to create a Pay Item
     * @param xeroTenantId Xero identifier for Tenant
     * @param payItem
     */
    createPayItem(xeroTenantId: string, payItem: PayItem, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayItems;
    }>;
    /**
     *
     * @summary Use this method to create a PayRun
     * @param xeroTenantId Xero identifier for Tenant
     * @param payRun
     */
    createPayRun(xeroTenantId: string, payRun: Array<PayRun>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayRuns;
    }>;
    /**
     *
     * @summary Use this method to create a Payroll Calendars
     * @param xeroTenantId Xero identifier for Tenant
     * @param payrollCalendar
     */
    createPayrollCalendar(xeroTenantId: string, payrollCalendar: Array<PayrollCalendar>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayrollCalendars;
    }>;
    /**
     *
     * @summary Use this method to create a super fund
     * @param xeroTenantId Xero identifier for Tenant
     * @param superFund
     */
    createSuperfund(xeroTenantId: string, superFund: Array<SuperFund>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SuperFunds;
    }>;
    /**
     *
     * @summary Use this method to create a timesheet
     * @param xeroTenantId Xero identifier for Tenant
     * @param timesheet
     */
    createTimesheet(xeroTenantId: string, timesheet: Array<Timesheet>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Timesheets;
    }>;
    /**
     *
     * @summary searches for an employee by unique id
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeId Employee id for single object
     */
    getEmployee(xeroTenantId: string, employeeId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employees;
    }>;
    /**
     *
     * @summary searches employees
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page e.g. page&#x3D;1 – Up to 100 employees will be returned in a single API call
     */
    getEmployees(xeroTenantId: string, ifModifiedSince?: string, where?: string, order?: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employees;
    }>;
    /**
     *
     * @summary searches for an Leave Application by unique id
     * @param xeroTenantId Xero identifier for Tenant
     * @param leaveApplicationId Leave Application id for single object
     */
    getLeaveApplication(xeroTenantId: string, leaveApplicationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LeaveApplications;
    }>;
    /**
     *
     * @summary searches Leave Applications
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page e.g. page&#x3D;1 – Up to 100 objects will be returned in a single API call
     */
    getLeaveApplications(xeroTenantId: string, ifModifiedSince?: string, where?: string, order?: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LeaveApplications;
    }>;
    /**
     *
     * @summary searches Pay Items
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page e.g. page&#x3D;1 – Up to 100 objects will be returned in a single API call
     */
    getPayItems(xeroTenantId: string, ifModifiedSince?: string, where?: string, order?: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayItems;
    }>;
    /**
     *
     * @summary searches for an payrun by unique id
     * @param xeroTenantId Xero identifier for Tenant
     * @param payRunID PayRun id for single object
     */
    getPayRun(xeroTenantId: string, payRunID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayRuns;
    }>;
    /**
     *
     * @summary searches PayRuns
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page e.g. page&#x3D;1 – Up to 100 PayRuns will be returned in a single API call
     */
    getPayRuns(xeroTenantId: string, ifModifiedSince?: string, where?: string, order?: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayRuns;
    }>;
    /**
     *
     * @summary searches Payroll Calendars
     * @param xeroTenantId Xero identifier for Tenant
     * @param payrollCalendarID Payroll Calendar id for single object
     */
    getPayrollCalendar(xeroTenantId: string, payrollCalendarID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayrollCalendars;
    }>;
    /**
     *
     * @summary searches Payroll Calendars
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page e.g. page&#x3D;1 – Up to 100 objects will be returned in a single API call
     */
    getPayrollCalendars(xeroTenantId: string, ifModifiedSince?: string, where?: string, order?: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayrollCalendars;
    }>;
    /**
     *
     * @summary searches for an payslip by unique id
     * @param xeroTenantId Xero identifier for Tenant
     * @param payslipID Payslip id for single object
     */
    getPayslip(xeroTenantId: string, payslipID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayslipObject;
    }>;
    /**
     *
     * @summary retrieve settings
     * @param xeroTenantId Xero identifier for Tenant
     */
    getSettings(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SettingsObject;
    }>;
    /**
     *
     * @summary searches for an Superfund by unique id
     * @param xeroTenantId Xero identifier for Tenant
     * @param superFundID Superfund id for single object
     */
    getSuperfund(xeroTenantId: string, superFundID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SuperFunds;
    }>;
    /**
     *
     * @summary searches SuperfundProducts
     * @param xeroTenantId Xero identifier for Tenant
     * @param aBN The ABN of the Regulated SuperFund
     * @param uSI The USI of the Regulated SuperFund
     */
    getSuperfundProducts(xeroTenantId: string, aBN?: string, uSI?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SuperFundProducts;
    }>;
    /**
     *
     * @summary searches SuperFunds
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page e.g. page&#x3D;1 – Up to 100 SuperFunds will be returned in a single API call
     */
    getSuperfunds(xeroTenantId: string, ifModifiedSince?: string, where?: string, order?: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SuperFunds;
    }>;
    /**
     *
     * @summary searches for an timesheet by unique id
     * @param xeroTenantId Xero identifier for Tenant
     * @param timesheetID Timesheet id for single object
     */
    getTimesheet(xeroTenantId: string, timesheetID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimesheetObject;
    }>;
    /**
     *
     * @summary searches timesheets
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page e.g. page&#x3D;1 – Up to 100 timesheets will be returned in a single API call
     */
    getTimesheets(xeroTenantId: string, ifModifiedSince?: string, where?: string, order?: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Timesheets;
    }>;
    /**
     * Update properties on a single employee
     * @summary Update an Employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeId Employee id for single object
     * @param employee
     */
    updateEmployee(xeroTenantId: string, employeeId: string, employee?: Array<Employee>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employees;
    }>;
    /**
     *
     * @summary Use this method to update a Leave Application
     * @param xeroTenantId Xero identifier for Tenant
     * @param leaveApplicationId Leave Application id for single object
     * @param leaveApplication
     */
    updateLeaveApplication(xeroTenantId: string, leaveApplicationId: string, leaveApplication: Array<LeaveApplication>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LeaveApplications;
    }>;
    /**
     * Update properties on a single PayRun
     * @summary Update a PayRun
     * @param xeroTenantId Xero identifier for Tenant
     * @param payRunID PayRun id for single object
     * @param payRun
     */
    updatePayRun(xeroTenantId: string, payRunID: string, payRun?: Array<PayRun>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayRuns;
    }>;
    /**
     * Update lines on a single payslips
     * @summary Update a Payslip
     * @param xeroTenantId Xero identifier for Tenant
     * @param payslipID Payslip id for single object
     * @param payslipLines
     */
    updatePayslip(xeroTenantId: string, payslipID: string, payslipLines?: Array<PayslipLines>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayslipObject;
    }>;
    /**
     * Update properties on a single Superfund
     * @summary Update a Superfund
     * @param xeroTenantId Xero identifier for Tenant
     * @param superFundID Superfund id for single object
     * @param superFund
     */
    updateSuperfund(xeroTenantId: string, superFundID: string, superFund?: Array<SuperFund>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SuperFunds;
    }>;
    /**
     * Update properties on a single timesheet
     * @summary Update a Timesheet
     * @param xeroTenantId Xero identifier for Tenant
     * @param timesheetID Timesheet id for single object
     * @param timesheet
     */
    updateTimesheet(xeroTenantId: string, timesheetID: string, timesheet?: Array<Timesheet>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Timesheets;
    }>;
}
