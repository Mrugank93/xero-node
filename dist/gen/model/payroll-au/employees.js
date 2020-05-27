"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
let Employees = /** @class */ (() => {
    class Employees {
        static getAttributeTypeMap() {
            return Employees.attributeTypeMap;
        }
    }
    Employees.discriminator = undefined;
    Employees.attributeTypeMap = [
        {
            "name": "employees",
            "baseName": "Employees",
            "type": "Array<Employee>"
        }
    ];
    return Employees;
})();
exports.Employees = Employees;
//# sourceMappingURL=employees.js.map