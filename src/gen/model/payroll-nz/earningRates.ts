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

import { EarningsRate } from '././earningRate';

export class EarningRates {
    'earnings'?: Array<EarningsRate>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "earnings",
            "baseName": "Earnings",
            "type": "Array<EarningsRate>"
        }    ];

    static getAttributeTypeMap() {
        return EarningsRate.attributeTypeMap;
    }
}
