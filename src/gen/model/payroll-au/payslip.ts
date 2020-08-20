/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.2.10
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DeductionLine } from '././deductionLine';
import { EarningsLine } from '././earningsLine';
import { LeaveAccrualLine } from '././leaveAccrualLine';
import { LeaveEarningsLine } from '././leaveEarningsLine';
import { ReimbursementLine } from '././reimbursementLine';
import { SuperannuationLine } from '././superannuationLine';
import { TaxLine } from '././taxLine';

export class Payslip {
    /**
    * The Xero identifier for an employee
    */
    'employeeID'?: string;
    /**
    * Xero identifier for the payslip
    */
    'payslipID'?: string;
    /**
    * First name of employee
    */
    'firstName'?: string;
    /**
    * Last name of employee
    */
    'lastName'?: string;
    /**
    * The Wages for the Payslip
    */
    'wages'?: number;
    /**
    * The Deductions for the Payslip
    */
    'deductions'?: number;
    /**
    * The Tax for the Payslip
    */
    'tax'?: number;
    /**
    * The Super for the Payslip
    */
    '_super'?: number;
    /**
    * The Reimbursements for the Payslip
    */
    'reimbursements'?: number;
    /**
    * The NetPay for the Payslip
    */
    'netPay'?: number;
    'earningsLines'?: Array<EarningsLine>;
    'leaveEarningsLines'?: Array<LeaveEarningsLine>;
    'timesheetEarningsLines'?: Array<EarningsLine>;
    'deductionLines'?: Array<DeductionLine>;
    'leaveAccrualLines'?: Array<LeaveAccrualLine>;
    'reimbursementLines'?: Array<ReimbursementLine>;
    'superannuationLines'?: Array<SuperannuationLine>;
    'taxLines'?: Array<TaxLine>;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employeeID",
            "baseName": "EmployeeID",
            "type": "string"
        },
        {
            "name": "payslipID",
            "baseName": "PayslipID",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "FirstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "LastName",
            "type": "string"
        },
        {
            "name": "wages",
            "baseName": "Wages",
            "type": "number"
        },
        {
            "name": "deductions",
            "baseName": "Deductions",
            "type": "number"
        },
        {
            "name": "tax",
            "baseName": "Tax",
            "type": "number"
        },
        {
            "name": "_super",
            "baseName": "Super",
            "type": "number"
        },
        {
            "name": "reimbursements",
            "baseName": "Reimbursements",
            "type": "number"
        },
        {
            "name": "netPay",
            "baseName": "NetPay",
            "type": "number"
        },
        {
            "name": "earningsLines",
            "baseName": "EarningsLines",
            "type": "Array<EarningsLine>"
        },
        {
            "name": "leaveEarningsLines",
            "baseName": "LeaveEarningsLines",
            "type": "Array<LeaveEarningsLine>"
        },
        {
            "name": "timesheetEarningsLines",
            "baseName": "TimesheetEarningsLines",
            "type": "Array<EarningsLine>"
        },
        {
            "name": "deductionLines",
            "baseName": "DeductionLines",
            "type": "Array<DeductionLine>"
        },
        {
            "name": "leaveAccrualLines",
            "baseName": "LeaveAccrualLines",
            "type": "Array<LeaveAccrualLine>"
        },
        {
            "name": "reimbursementLines",
            "baseName": "ReimbursementLines",
            "type": "Array<ReimbursementLine>"
        },
        {
            "name": "superannuationLines",
            "baseName": "SuperannuationLines",
            "type": "Array<SuperannuationLine>"
        },
        {
            "name": "taxLines",
            "baseName": "TaxLines",
            "type": "Array<TaxLine>"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Payslip.attributeTypeMap;
    }
}

