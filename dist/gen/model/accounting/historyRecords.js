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
exports.HistoryRecords = void 0;
let HistoryRecords = /** @class */ (() => {
    class HistoryRecords {
        static getAttributeTypeMap() {
            return HistoryRecords.attributeTypeMap;
        }
    }
    HistoryRecords.discriminator = undefined;
    HistoryRecords.attributeTypeMap = [
        {
            "name": "historyRecords",
            "baseName": "HistoryRecords",
            "type": "Array<HistoryRecord>"
        }
    ];
    return HistoryRecords;
})();
exports.HistoryRecords = HistoryRecords;
//# sourceMappingURL=historyRecords.js.map