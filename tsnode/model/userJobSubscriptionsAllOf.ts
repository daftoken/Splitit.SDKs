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
import { PisUsers } from './pisUsers';
import { SplititJobDefinitions } from './splititJobDefinitions';

export class UserJobSubscriptionsAllOf {
    'pisUserUniqueId'?: string;
    'pisUserId': number;
    'splititJobDefinitionId': number;
    'pisUser'?: PisUsers;
    'splititJobDefinition'?: SplititJobDefinitions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pisUserUniqueId",
            "baseName": "PisUserUniqueId",
            "type": "string"
        },
        {
            "name": "pisUserId",
            "baseName": "PisUserId",
            "type": "number"
        },
        {
            "name": "splititJobDefinitionId",
            "baseName": "SplititJobDefinitionId",
            "type": "number"
        },
        {
            "name": "pisUser",
            "baseName": "PisUser",
            "type": "PisUsers"
        },
        {
            "name": "splititJobDefinition",
            "baseName": "SplititJobDefinition",
            "type": "SplititJobDefinitions"
        }    ];

    static getAttributeTypeMap() {
        return UserJobSubscriptionsAllOf.attributeTypeMap;
    }
}

