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
exports.JournalLine = void 0;
let JournalLine = /** @class */ (() => {
    class JournalLine {
        static getAttributeTypeMap() {
            return JournalLine.attributeTypeMap;
        }
    }
    JournalLine.discriminator = undefined;
    JournalLine.attributeTypeMap = [
        {
            "name": "journalLineID",
            "baseName": "JournalLineID",
            "type": "string"
        },
        {
            "name": "accountID",
            "baseName": "AccountID",
            "type": "string"
        },
        {
            "name": "accountCode",
            "baseName": "AccountCode",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "AccountType",
            "type": "AccountType"
        },
        {
            "name": "accountName",
            "baseName": "AccountName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "netAmount",
            "baseName": "NetAmount",
            "type": "number"
        },
        {
            "name": "grossAmount",
            "baseName": "GrossAmount",
            "type": "number"
        },
        {
            "name": "taxAmount",
            "baseName": "TaxAmount",
            "type": "number"
        },
        {
            "name": "taxType",
            "baseName": "TaxType",
            "type": "string"
        },
        {
            "name": "taxName",
            "baseName": "TaxName",
            "type": "string"
        },
        {
            "name": "trackingCategories",
            "baseName": "TrackingCategories",
            "type": "Array<TrackingCategory>"
        }
    ];
    return JournalLine;
})();
exports.JournalLine = JournalLine;
//# sourceMappingURL=journalLine.js.map