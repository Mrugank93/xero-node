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
exports.Allocations = void 0;
let Allocations = /** @class */ (() => {
    class Allocations {
        static getAttributeTypeMap() {
            return Allocations.attributeTypeMap;
        }
    }
    Allocations.discriminator = undefined;
    Allocations.attributeTypeMap = [
        {
            "name": "allocations",
            "baseName": "Allocations",
            "type": "Array<Allocation>"
        }
    ];
    return Allocations;
})();
exports.Allocations = Allocations;
//# sourceMappingURL=allocations.js.map