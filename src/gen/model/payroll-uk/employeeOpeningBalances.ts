/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.2.10
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class EmployeeOpeningBalances {
    /**
    * The total accumulated statutory adoption pay amount received by the employee for current fiscal year to date
    */
    'statutoryAdoptionPay'?: number;
    /**
    * The total accumulated statutory maternity pay amount received by the employee for current fiscal year to date
    */
    'statutoryMaternityPay'?: number;
    /**
    * The total accumulated statutory paternity pay amount received by the employee for current fiscal year to date
    */
    'statutoryPaternityPay'?: number;
    /**
    * The total accumulated statutory shared parental pay amount received by the employee for current fiscal year to date
    */
    'statutorySharedParentalPay'?: number;
    /**
    * The total accumulated statutory sick pay amount received by the employee for current fiscal year to date
    */
    'statutorySickPay'?: number;
    /**
    * The unique employee number issued by the employee\'s former employer
    */
    'priorEmployeeNumber'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "statutoryAdoptionPay",
            "baseName": "statutoryAdoptionPay",
            "type": "number"
        },
        {
            "name": "statutoryMaternityPay",
            "baseName": "statutoryMaternityPay",
            "type": "number"
        },
        {
            "name": "statutoryPaternityPay",
            "baseName": "statutoryPaternityPay",
            "type": "number"
        },
        {
            "name": "statutorySharedParentalPay",
            "baseName": "statutorySharedParentalPay",
            "type": "number"
        },
        {
            "name": "statutorySickPay",
            "baseName": "statutorySickPay",
            "type": "number"
        },
        {
            "name": "priorEmployeeNumber",
            "baseName": "priorEmployeeNumber",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeOpeningBalances.attributeTypeMap;
    }
}

