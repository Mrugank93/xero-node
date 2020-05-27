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
exports.HistoryRecord = void 0;
let HistoryRecord = /** @class */ (() => {
    class HistoryRecord {
        static getAttributeTypeMap() {
            return HistoryRecord.attributeTypeMap;
        }
    }
    HistoryRecord.discriminator = undefined;
    HistoryRecord.attributeTypeMap = [
        {
            "name": "details",
            "baseName": "Details",
            "type": "string"
        },
        {
            "name": "changes",
            "baseName": "Changes",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "User",
            "type": "string"
        },
        {
            "name": "dateUTC",
            "baseName": "DateUTC",
            "type": "Date"
        }
    ];
    return HistoryRecord;
})();
exports.HistoryRecord = HistoryRecord;
//# sourceMappingURL=historyRecord.js.map