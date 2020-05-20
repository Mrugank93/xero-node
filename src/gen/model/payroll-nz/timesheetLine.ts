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


export class TimesheetLine {
    'timesheetLineID'?: string;
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
    'numberOfUnits'?: number;
    /**
    * Last modified timestamp
    */
    'date'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "timesheetLineID",
            "baseName": "TimesheetLineID",
            "type": "string"
        },
        {
            "name": "earningsRateID",
            "baseName": "EarningsRateID",
            "type": "string"
        },
        {
            "name": "trackingItemID",
            "baseName": "TrackingItemID",
            "type": "string"
        },
        {
            "name": "numberOfUnits",
            "baseName": "NumberOfUnits",
            "type": "number"
        },
        {
            "name": "date",
            "baseName": "Date",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return TimesheetLine.attributeTypeMap;
    }
}

