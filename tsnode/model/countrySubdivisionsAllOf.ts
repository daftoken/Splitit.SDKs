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
import { StateLimitRuleDatas } from './stateLimitRuleDatas';
import { ZipAddressDetails } from './zipAddressDetails';

export class CountrySubdivisionsAllOf {
    'countryId': number;
    'isoCode'?: string;
    'description'?: string;
    'iso2Code'?: string;
    'utcTimeOffsetInMins': number;
    'country'?: Countries;
    'stateLimitRuleDatas'?: Array<StateLimitRuleDatas>;
    'zipAddressDetails'?: Array<ZipAddressDetails>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "countryId",
            "baseName": "CountryId",
            "type": "number"
        },
        {
            "name": "isoCode",
            "baseName": "IsoCode",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "iso2Code",
            "baseName": "Iso2Code",
            "type": "string"
        },
        {
            "name": "utcTimeOffsetInMins",
            "baseName": "UtcTimeOffsetInMins",
            "type": "number"
        },
        {
            "name": "country",
            "baseName": "Country",
            "type": "Countries"
        },
        {
            "name": "stateLimitRuleDatas",
            "baseName": "StateLimitRuleDatas",
            "type": "Array<StateLimitRuleDatas>"
        },
        {
            "name": "zipAddressDetails",
            "baseName": "ZipAddressDetails",
            "type": "Array<ZipAddressDetails>"
        }    ];

    static getAttributeTypeMap() {
        return CountrySubdivisionsAllOf.attributeTypeMap;
    }
}

