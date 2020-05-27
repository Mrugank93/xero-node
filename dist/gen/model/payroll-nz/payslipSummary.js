"use strict";
/**
 * Xero Payroll NZ
 * This is the Xero Payroll API for orgs in New Zealand region.
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayslipSummary = void 0;
let PayslipSummary = /** @class */ (() => {
    class PayslipSummary {
        static getAttributeTypeMap() {
            return PayslipSummary.attributeTypeMap;
        }
    }
    PayslipSummary.discriminator = undefined;
    PayslipSummary.attributeTypeMap = [
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
            "name": "employeeGroup",
            "baseName": "EmployeeGroup",
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
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "string"
        }
    ];
    return PayslipSummary;
})();
exports.PayslipSummary = PayslipSummary;
//# sourceMappingURL=payslipSummary.js.map