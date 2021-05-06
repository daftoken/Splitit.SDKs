/**
 * splitit-web-api-public-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class User {
    'id'?: string;
    'uniqueId'?: string;
    'userName'?: string;
    'fullName'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    'cultureName'?: string;
    'roleName'?: string;
    'isLocked': boolean;
    'isDataRestricted': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "uniqueId",
            "baseName": "UniqueId",
            "type": "string"
        },
        {
            "name": "userName",
            "baseName": "UserName",
            "type": "string"
        },
        {
            "name": "fullName",
            "baseName": "FullName",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "Email",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "PhoneNumber",
            "type": "string"
        },
        {
            "name": "cultureName",
            "baseName": "CultureName",
            "type": "string"
        },
        {
            "name": "roleName",
            "baseName": "RoleName",
            "type": "string"
        },
        {
            "name": "isLocked",
            "baseName": "IsLocked",
            "type": "boolean"
        },
        {
            "name": "isDataRestricted",
            "baseName": "IsDataRestricted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

