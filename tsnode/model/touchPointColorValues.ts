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
import { ConfigValues } from './configValues';
import { EntityBase } from './entityBase';
import { Merchants } from './merchants';
import { TouchPointColorValuesAllOf } from './touchPointColorValuesAllOf';
import { TouchPoints } from './touchPoints';

export class TouchPointColorValues {
    'id': number;
    'touchPointId': number;
    'merchantId'?: number;
    'merchant'?: Merchants;
    'colors'?: Array<ConfigValues>;
    'touchPoint'?: TouchPoints;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number"
        },
        {
            "name": "touchPointId",
            "baseName": "TouchPointId",
            "type": "number"
        },
        {
            "name": "merchantId",
            "baseName": "MerchantId",
            "type": "number"
        },
        {
            "name": "merchant",
            "baseName": "Merchant",
            "type": "Merchants"
        },
        {
            "name": "colors",
            "baseName": "Colors",
            "type": "Array<ConfigValues>"
        },
        {
            "name": "touchPoint",
            "baseName": "TouchPoint",
            "type": "TouchPoints"
        }    ];

    static getAttributeTypeMap() {
        return TouchPointColorValues.attributeTypeMap;
    }
}

