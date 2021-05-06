/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    BinDataItems,
    BinDataItemsFromJSON,
    BinDataItemsFromJSONTyped,
    BinDataItemsToJSON,
    CountriesAllOf,
    CountriesAllOfFromJSON,
    CountriesAllOfFromJSONTyped,
    CountriesAllOfToJSON,
    CountrySubdivisions,
    CountrySubdivisionsFromJSON,
    CountrySubdivisionsFromJSONTyped,
    CountrySubdivisionsToJSON,
    CurrencyCountries,
    CurrencyCountriesFromJSON,
    CurrencyCountriesFromJSONTyped,
    CurrencyCountriesToJSON,
    EntityBase,
    EntityBaseFromJSON,
    EntityBaseFromJSONTyped,
    EntityBaseToJSON,
    TerminalCountries,
    TerminalCountriesFromJSON,
    TerminalCountriesFromJSONTyped,
    TerminalCountriesToJSON,
} from './';

/**
 * 
 * @export
 * @interface Countries
 */
export interface Countries {
    /**
     * 
     * @type {number}
     * @memberof Countries
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Countries
     */
    isoName?: string;
    /**
     * 
     * @type {number}
     * @memberof Countries
     */
    isoNumber: number;
    /**
     * 
     * @type {string}
     * @memberof Countries
     */
    isoA2?: string;
    /**
     * 
     * @type {string}
     * @memberof Countries
     */
    isoA3?: string;
    /**
     * 
     * @type {string}
     * @memberof Countries
     */
    continent?: string;
    /**
     * 
     * @type {number}
     * @memberof Countries
     */
    utcTimeOffsetInMins: number;
    /**
     * 
     * @type {boolean}
     * @memberof Countries
     */
    isZipUsed?: boolean;
    /**
     * 
     * @type {Array<BinDataItems>}
     * @memberof Countries
     */
    binDataItems?: Array<BinDataItems>;
    /**
     * 
     * @type {Array<CountrySubdivisions>}
     * @memberof Countries
     */
    countrySubdivisions?: Array<CountrySubdivisions>;
    /**
     * 
     * @type {Array<TerminalCountries>}
     * @memberof Countries
     */
    terminalCountries?: Array<TerminalCountries>;
    /**
     * 
     * @type {Array<CurrencyCountries>}
     * @memberof Countries
     */
    currencyCountries?: Array<CurrencyCountries>;
}

export function CountriesFromJSON(json: any): Countries {
    return CountriesFromJSONTyped(json, false);
}

export function CountriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Countries {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'isoName': !exists(json, 'IsoName') ? undefined : json['IsoName'],
        'isoNumber': json['IsoNumber'],
        'isoA2': !exists(json, 'IsoA2') ? undefined : json['IsoA2'],
        'isoA3': !exists(json, 'IsoA3') ? undefined : json['IsoA3'],
        'continent': !exists(json, 'Continent') ? undefined : json['Continent'],
        'utcTimeOffsetInMins': json['UtcTimeOffsetInMins'],
        'isZipUsed': !exists(json, 'IsZipUsed') ? undefined : json['IsZipUsed'],
        'binDataItems': !exists(json, 'BinDataItems') ? undefined : ((json['BinDataItems'] as Array<any>).map(BinDataItemsFromJSON)),
        'countrySubdivisions': !exists(json, 'CountrySubdivisions') ? undefined : ((json['CountrySubdivisions'] as Array<any>).map(CountrySubdivisionsFromJSON)),
        'terminalCountries': !exists(json, 'TerminalCountries') ? undefined : ((json['TerminalCountries'] as Array<any>).map(TerminalCountriesFromJSON)),
        'currencyCountries': !exists(json, 'CurrencyCountries') ? undefined : ((json['CurrencyCountries'] as Array<any>).map(CurrencyCountriesFromJSON)),
    };
}

export function CountriesToJSON(value?: Countries | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'IsoName': value.isoName,
        'IsoNumber': value.isoNumber,
        'IsoA2': value.isoA2,
        'IsoA3': value.isoA3,
        'Continent': value.continent,
        'UtcTimeOffsetInMins': value.utcTimeOffsetInMins,
        'IsZipUsed': value.isZipUsed,
        'BinDataItems': value.binDataItems === undefined ? undefined : ((value.binDataItems as Array<any>).map(BinDataItemsToJSON)),
        'CountrySubdivisions': value.countrySubdivisions === undefined ? undefined : ((value.countrySubdivisions as Array<any>).map(CountrySubdivisionsToJSON)),
        'TerminalCountries': value.terminalCountries === undefined ? undefined : ((value.terminalCountries as Array<any>).map(TerminalCountriesToJSON)),
        'CurrencyCountries': value.currencyCountries === undefined ? undefined : ((value.currencyCountries as Array<any>).map(CurrencyCountriesToJSON)),
    };
}


