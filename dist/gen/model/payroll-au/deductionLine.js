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
exports.DeductionLine = void 0;
let DeductionLine = /** @class */ (() => {
    class DeductionLine {
        static getAttributeTypeMap() {
            return DeductionLine.attributeTypeMap;
        }
    }
    DeductionLine.discriminator = undefined;
    DeductionLine.attributeTypeMap = [
        {
            "name": "deductionTypeID",
            "baseName": "DeductionTypeID",
            "type": "string"
        },
        {
            "name": "calculationType",
            "baseName": "CalculationType",
            "type": "DeductionTypeCalculationType"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "percentage",
            "baseName": "Percentage",
            "type": "number"
        },
        {
            "name": "numberOfUnits",
            "baseName": "NumberOfUnits",
            "type": "number"
        }
    ];
    return DeductionLine;
})();
exports.DeductionLine = DeductionLine;
//# sourceMappingURL=deductionLine.js.map