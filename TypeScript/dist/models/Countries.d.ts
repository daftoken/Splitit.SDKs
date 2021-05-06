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
import { BinDataItems, CountrySubdivisions, CurrencyCountries, TerminalCountries } from './';
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
export declare function CountriesFromJSON(json: any): Countries;
export declare function CountriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Countries;
export declare function CountriesToJSON(value?: Countries | null): any;
