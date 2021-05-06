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
import { BinDataItems } from './binDataItems';
import { CountriesAllOf } from './countriesAllOf';
import { CountrySubdivisions } from './countrySubdivisions';
import { CurrencyCountries } from './currencyCountries';
import { EntityBase } from './entityBase';
import { TerminalCountries } from './terminalCountries';

export class Countries {
    'id': number;
    'isoName'?: string;
    'isoNumber': number;
    'isoA2'?: string;
    'isoA3'?: string;
    'continent'?: string;
    'utcTimeOffsetInMins': number;
    'isZipUsed'?: boolean;
    'binDataItems'?: Array<BinDataItems>;
    'countrySubdivisions'?: Array<CountrySubdivisions>;
    'terminalCountries'?: Array<TerminalCountries>;
    'currencyCountries'?: Array<CurrencyCountries>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number"
        },
        {
            "name": "isoName",
            "baseName": "IsoName",
            "type": "string"
        },
        {
            "name": "isoNumber",
            "baseName": "IsoNumber",
            "type": "number"
        },
        {
            "name": "isoA2",
            "baseName": "IsoA2",
            "type": "string"
        },
        {
            "name": "isoA3",
            "baseName": "IsoA3",
            "type": "string"
        },
        {
            "name": "continent",
            "baseName": "Continent",
            "type": "string"
        },
        {
            "name": "utcTimeOffsetInMins",
            "baseName": "UtcTimeOffsetInMins",
            "type": "number"
        },
        {
            "name": "isZipUsed",
            "baseName": "IsZipUsed",
            "type": "boolean"
        },
        {
            "name": "binDataItems",
            "baseName": "BinDataItems",
            "type": "Array<BinDataItems>"
        },
        {
            "name": "countrySubdivisions",
            "baseName": "CountrySubdivisions",
            "type": "Array<CountrySubdivisions>"
        },
        {
            "name": "terminalCountries",
            "baseName": "TerminalCountries",
            "type": "Array<TerminalCountries>"
        },
        {
            "name": "currencyCountries",
            "baseName": "CurrencyCountries",
            "type": "Array<CurrencyCountries>"
        }    ];

    static getAttributeTypeMap() {
        return Countries.attributeTypeMap;
    }
}

