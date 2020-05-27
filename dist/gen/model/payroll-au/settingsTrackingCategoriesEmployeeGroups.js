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
exports.SettingsTrackingCategoriesEmployeeGroups = void 0;
/**
* The tracking category used for employees
*/
let SettingsTrackingCategoriesEmployeeGroups = /** @class */ (() => {
    class SettingsTrackingCategoriesEmployeeGroups {
        static getAttributeTypeMap() {
            return SettingsTrackingCategoriesEmployeeGroups.attributeTypeMap;
        }
    }
    SettingsTrackingCategoriesEmployeeGroups.discriminator = undefined;
    SettingsTrackingCategoriesEmployeeGroups.attributeTypeMap = [
        {
            "name": "trackingCategoryID",
            "baseName": "TrackingCategoryID",
            "type": "string"
        },
        {
            "name": "trackingCategoryName",
            "baseName": "TrackingCategoryName",
            "type": "string"
        }
    ];
    return SettingsTrackingCategoriesEmployeeGroups;
})();
exports.SettingsTrackingCategoriesEmployeeGroups = SettingsTrackingCategoriesEmployeeGroups;
//# sourceMappingURL=settingsTrackingCategoriesEmployeeGroups.js.map