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
import { ConfigKeys } from './configKeys';
import { ConfigValuesAllOf } from './configValuesAllOf';
import { EntityBase } from './entityBase';
import { TouchPointColorValues } from './touchPointColorValues';

export class ConfigValues {
    'id': number;
    'value'?: string;
    'configKeyId': number;
    'touchPointColorValuesId'?: number;
    'configKey'?: ConfigKeys;
    'touchPointColorValues'?: TouchPointColorValues;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        },
        {
            "name": "configKeyId",
            "baseName": "ConfigKeyId",
            "type": "number"
        },
        {
            "name": "touchPointColorValuesId",
            "baseName": "TouchPointColorValuesId",
            "type": "number"
        },
        {
            "name": "configKey",
            "baseName": "ConfigKey",
            "type": "ConfigKeys"
        },
        {
            "name": "touchPointColorValues",
            "baseName": "TouchPointColorValues",
            "type": "TouchPointColorValues"
        }    ];

    static getAttributeTypeMap() {
        return ConfigValues.attributeTypeMap;
    }
}

