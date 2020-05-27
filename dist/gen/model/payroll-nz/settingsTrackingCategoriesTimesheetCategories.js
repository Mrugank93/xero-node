"use strict";
/**
 * Xero Payroll NZ
 * This is the Xero Payroll API for orgs in New Zealand region.
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsTrackingCategoriesTimesheetCategories = void 0;
/**
* The tracking category used for timesheets
*/
let SettingsTrackingCategoriesTimesheetCategories = /** @class */ (() => {
    class SettingsTrackingCategoriesTimesheetCategories {
        static getAttributeTypeMap() {
            return SettingsTrackingCategoriesTimesheetCategories.attributeTypeMap;
        }
    }
    SettingsTrackingCategoriesTimesheetCategories.discriminator = undefined;
    SettingsTrackingCategoriesTimesheetCategories.attributeTypeMap = [
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
    return SettingsTrackingCategoriesTimesheetCategories;
})();
exports.SettingsTrackingCategoriesTimesheetCategories = SettingsTrackingCategoriesTimesheetCategories;
//# sourceMappingURL=settingsTrackingCategoriesTimesheetCategories.js.map