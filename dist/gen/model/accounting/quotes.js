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
exports.Quotes = void 0;
let Quotes = /** @class */ (() => {
    class Quotes {
        static getAttributeTypeMap() {
            return Quotes.attributeTypeMap;
        }
    }
    Quotes.discriminator = undefined;
    Quotes.attributeTypeMap = [
        {
            "name": "quotes",
            "baseName": "Quotes",
            "type": "Array<Quote>"
        }
    ];
    return Quotes;
})();
exports.Quotes = Quotes;
//# sourceMappingURL=quotes.js.map