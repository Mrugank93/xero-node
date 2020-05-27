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
export declare class TimesheetLine {
    /**
    * The Xero identifier for an Earnings Rate
    */
    'earningsRateID'?: string;
    /**
    * The Xero identifier for a Tracking Category. The TrackingOptionID must belong to the TrackingCategory selected as TimesheetCategories under Payroll Settings.
    */
    'trackingItemID'?: string;
    /**
    * The number of units on a timesheet line
    */
    'numberOfUnits'?: Array<number>;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
