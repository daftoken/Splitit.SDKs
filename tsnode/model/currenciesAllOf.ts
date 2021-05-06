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

export class CurrenciesAllOf {
    'currencyCode': string;
    'currencyName': string;
    'currencySymbol': string;
    'currencyIsoNumber': string;
    'decimalPlaces': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currencyCode",
            "baseName": "CurrencyCode",
            "type": "string"
        },
        {
            "name": "currencyName",
            "baseName": "CurrencyName",
            "type": "string"
        },
        {
            "name": "currencySymbol",
            "baseName": "CurrencySymbol",
            "type": "string"
        },
        {
            "name": "currencyIsoNumber",
            "baseName": "CurrencyIsoNumber",
            "type": "string"
        },
        {
            "name": "decimalPlaces",
            "baseName": "DecimalPlaces",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CurrenciesAllOf.attributeTypeMap;
    }
}

