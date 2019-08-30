/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ExternalLink {
    /**
    * See External link types
    */
    'linkType'?: ExternalLink.LinkTypeEnum;
    /**
    * URL for service e.g. http://twitter.com/xeroapi
    */
    'url'?: string;
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "linkType",
            "baseName": "LinkType",
            "type": "ExternalLink.LinkTypeEnum"
        },
        {
            "name": "url",
            "baseName": "Url",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExternalLink.attributeTypeMap;
    }
}

export namespace ExternalLink {
    export enum LinkTypeEnum {
        Facebook = <any> 'Facebook',
        GooglePlus = <any> 'GooglePlus',
        LinkedIn = <any> 'LinkedIn',
        Twitter = <any> 'Twitter',
        Website = <any> 'Website'
    }
}