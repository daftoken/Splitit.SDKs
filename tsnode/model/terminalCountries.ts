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
import { Countries } from './countries';

export class TerminalCountries {
    'countryId': number;
    'country'?: Countries;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "countryId",
            "baseName": "CountryId",
            "type": "number"
        },
        {
            "name": "country",
            "baseName": "Country",
            "type": "Countries"
        }    ];

    static getAttributeTypeMap() {
        return TerminalCountries.attributeTypeMap;
    }
}

