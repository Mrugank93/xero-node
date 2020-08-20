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

import { SuperFund } from '././superFund';

export class SuperFunds {
    'superFunds'?: Array<SuperFund>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "superFunds",
            "baseName": "SuperFunds",
            "type": "Array<SuperFund>"
        }    ];

    static getAttributeTypeMap() {
        return SuperFunds.attributeTypeMap;
    }
}

