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
import { ApplicativeUserPasswordHistory } from './applicativeUserPasswordHistory';
import { PisUserPasswordHistoriesAllOf } from './pisUserPasswordHistoriesAllOf';
import { PisUsers } from './pisUsers';

export class PisUserPasswordHistories {
    'id': number;
    'password'?: string;
    'passwordHash'?: string;
    'passwordExpDate': Date;
    'pisUserId': number;
    'pisUser'?: PisUsers;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number"
        },
        {
            "name": "password",
            "baseName": "Password",
            "type": "string"
        },
        {
            "name": "passwordHash",
            "baseName": "PasswordHash",
            "type": "string"
        },
        {
            "name": "passwordExpDate",
            "baseName": "PasswordExpDate",
            "type": "Date"
        },
        {
            "name": "pisUserId",
            "baseName": "PisUserId",
            "type": "number"
        },
        {
            "name": "pisUser",
            "baseName": "PisUser",
            "type": "PisUsers"
        }    ];

    static getAttributeTypeMap() {
        return PisUserPasswordHistories.attributeTypeMap;
    }
}

