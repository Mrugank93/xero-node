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
exports.ReimbursementLines = void 0;
/**
* The reimbursement type lines
*/
let ReimbursementLines = /** @class */ (() => {
    class ReimbursementLines {
        static getAttributeTypeMap() {
            return ReimbursementLines.attributeTypeMap;
        }
    }
    ReimbursementLines.discriminator = undefined;
    ReimbursementLines.attributeTypeMap = [
        {
            "name": "reimbursementLines",
            "baseName": "ReimbursementLines",
            "type": "Array<ReimbursementLine>"
        }
    ];
    return ReimbursementLines;
})();
exports.ReimbursementLines = ReimbursementLines;
//# sourceMappingURL=reimbursementLines.js.map