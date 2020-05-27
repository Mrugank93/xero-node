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
exports.ValidationError = void 0;
let ValidationError = /** @class */ (() => {
    class ValidationError {
        static getAttributeTypeMap() {
            return ValidationError.attributeTypeMap;
        }
    }
    ValidationError.discriminator = undefined;
    ValidationError.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "Message",
            "type": "string"
        }
    ];
    return ValidationError;
})();
exports.ValidationError = ValidationError;
//# sourceMappingURL=validationError.js.map