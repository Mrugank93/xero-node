/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.2.10
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DeductionTypeCalculationType } from '././deductionTypeCalculationType';

export class DeductionLine {
    /**
    * Xero deduction type identifier
    */
    'deductionTypeID': string;
    'calculationType': DeductionTypeCalculationType;
    /**
    * Deduction type amount
    */
    'amount'?: number;
    /**
    * The Percentage of the Deduction
    */
    'percentage'?: number;
    /**
    * Deduction number of units
    */
    'numberOfUnits'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deductionTypeID",
            "baseName": "DeductionTypeID",
            "type": "string"
        },
        {
            "name": "calculationType",
            "baseName": "CalculationType",
            "type": "DeductionTypeCalculationType"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "percentage",
            "baseName": "Percentage",
            "type": "number"
        },
        {
            "name": "numberOfUnits",
            "baseName": "NumberOfUnits",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DeductionLine.attributeTypeMap;
    }
}

