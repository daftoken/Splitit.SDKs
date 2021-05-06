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
import { Cards } from './cards';
import { IUserPasswordHistory } from './iUserPasswordHistory';
import { PisMemberPasswordHistories } from './pisMemberPasswordHistories';

export class PisMembersAllOf {
    'isWelcomeMailSent': boolean;
    'consumerFullName'?: string;
    'cards'?: Array<Cards>;
    'pisMemberPasswordHistories'?: Array<PisMemberPasswordHistories>;
    'userFullName'?: string;
    'password'?: IUserPasswordHistory;
    'loginUserName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isWelcomeMailSent",
            "baseName": "IsWelcomeMailSent",
            "type": "boolean"
        },
        {
            "name": "consumerFullName",
            "baseName": "ConsumerFullName",
            "type": "string"
        },
        {
            "name": "cards",
            "baseName": "Cards",
            "type": "Array<Cards>"
        },
        {
            "name": "pisMemberPasswordHistories",
            "baseName": "PisMemberPasswordHistories",
            "type": "Array<PisMemberPasswordHistories>"
        },
        {
            "name": "userFullName",
            "baseName": "UserFullName",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "Password",
            "type": "IUserPasswordHistory"
        },
        {
            "name": "loginUserName",
            "baseName": "LoginUserName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PisMembersAllOf.attributeTypeMap;
    }
}

