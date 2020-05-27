"use strict";
/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
let Purchase = /** @class */ (() => {
    class Purchase {
        static getAttributeTypeMap() {
            return Purchase.attributeTypeMap;
        }
    }
    Purchase.discriminator = undefined;
    Purchase.attributeTypeMap = [
        {
            "name": "unitPrice",
            "baseName": "UnitPrice",
            "type": "number"
        },
        {
            "name": "accountCode",
            "baseName": "AccountCode",
            "type": "string"
        },
        {
            "name": "cOGSAccountCode",
            "baseName": "COGSAccountCode",
            "type": "string"
        },
        {
            "name": "taxType",
            "baseName": "TaxType",
            "type": "string"
        }
    ];
    return Purchase;
})();
exports.Purchase = Purchase;
//# sourceMappingURL=purchase.js.map