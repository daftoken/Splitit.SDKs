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
    CardBrand,
    CardBrandFromJSON,
    CardBrandFromJSONTyped,
    CardBrandToJSON,
    CardType,
    CardTypeFromJSON,
    CardTypeFromJSONTyped,
    CardTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface BinData
 */
export interface BinData {
    /**
     * 
     * @type {string}
     * @memberof BinData
     */
    binNumber?: string;
    /**
     * 
     * @type {CardBrand}
     * @memberof BinData
     */
    cardBrand: CardBrand;
    /**
     * 
     * @type {string}
     * @memberof BinData
     */
    issuingCountryIsoNumber?: string;
    /**
     * 
     * @type {CardType}
     * @memberof BinData
     */
    cardType: CardType;
    /**
     * 
     * @type {boolean}
     * @memberof BinData
     */
    isPrepaid: boolean;
    /**
     * 
     * @type {string}
     * @memberof BinData
     */
    cardClass?: string;
    /**
     * 
     * @type {string}
     * @memberof BinData
     */
    productId?: string;
    /**
     * 
     * @type {string}
     * @memberof BinData
     */
    issuerBankName?: string;
}

export function BinDataFromJSON(json: any): BinData {
    return BinDataFromJSONTyped(json, false);
}

export function BinDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BinData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'binNumber': !exists(json, 'BinNumber') ? undefined : json['BinNumber'],
        'cardBrand': CardBrandFromJSON(json['CardBrand']),
        'issuingCountryIsoNumber': !exists(json, 'IssuingCountryIsoNumber') ? undefined : json['IssuingCountryIsoNumber'],
        'cardType': CardTypeFromJSON(json['CardType']),
        'isPrepaid': json['IsPrepaid'],
        'cardClass': !exists(json, 'CardClass') ? undefined : json['CardClass'],
        'productId': !exists(json, 'ProductId') ? undefined : json['ProductId'],
        'issuerBankName': !exists(json, 'IssuerBankName') ? undefined : json['IssuerBankName'],
    };
}

export function BinDataToJSON(value?: BinData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BinNumber': value.binNumber,
        'CardBrand': CardBrandToJSON(value.cardBrand),
        'IssuingCountryIsoNumber': value.issuingCountryIsoNumber,
        'CardType': CardTypeToJSON(value.cardType),
        'IsPrepaid': value.isPrepaid,
        'CardClass': value.cardClass,
        'ProductId': value.productId,
        'IssuerBankName': value.issuerBankName,
    };
}


