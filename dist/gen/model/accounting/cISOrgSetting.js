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
exports.CISOrgSetting = void 0;
let CISOrgSetting = /** @class */ (() => {
    class CISOrgSetting {
        static getAttributeTypeMap() {
            return CISOrgSetting.attributeTypeMap;
        }
    }
    CISOrgSetting.discriminator = undefined;
    CISOrgSetting.attributeTypeMap = [
        {
            "name": "cISContractorEnabled",
            "baseName": "CISContractorEnabled",
            "type": "boolean"
        },
        {
            "name": "cISSubContractorEnabled",
            "baseName": "CISSubContractorEnabled",
            "type": "boolean"
        },
        {
            "name": "rate",
            "baseName": "Rate",
            "type": "number"
        }
    ];
    return CISOrgSetting;
})();
exports.CISOrgSetting = CISOrgSetting;
//# sourceMappingURL=cISOrgSetting.js.map