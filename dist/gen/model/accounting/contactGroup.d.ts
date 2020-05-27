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
import { Contact } from './contact';
export declare class ContactGroup {
    /**
    * The Name of the contact group. Required when creating a new contact  group
    */
    'name'?: string;
    /**
    * The Status of a contact group. To delete a contact group update the status to DELETED. Only contact groups with a status of ACTIVE are returned on GETs.
    */
    'status'?: ContactGroup.StatusEnum;
    /**
    * The Xero identifier for an contact group – specified as a string following the endpoint name. e.g. /297c2dc5-cc47-4afd-8ec8-74990b8761e9
    */
    'contactGroupID'?: string;
    /**
    * The ContactID and Name of Contacts in a contact group. Returned on GETs when the ContactGroupID is supplied in the URL.
    */
    'contacts'?: Array<Contact>;
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
export declare namespace ContactGroup {
    enum StatusEnum {
        ACTIVE,
        DELETED
    }
}
