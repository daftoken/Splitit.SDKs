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
    AccountUpdaterProvider,
    AccountUpdaterProviderFromJSON,
    AccountUpdaterProviderFromJSONTyped,
    AccountUpdaterProviderToJSON,
    AccountUpdaterSubscribersScopesAllOf,
    AccountUpdaterSubscribersScopesAllOfFromJSON,
    AccountUpdaterSubscribersScopesAllOfFromJSONTyped,
    AccountUpdaterSubscribersScopesAllOfToJSON,
    CardBrand,
    CardBrandFromJSON,
    CardBrandFromJSONTyped,
    CardBrandToJSON,
    EntityBase,
    EntityBaseFromJSON,
    EntityBaseFromJSONTyped,
    EntityBaseToJSON,
    Terminals,
    TerminalsFromJSON,
    TerminalsFromJSONTyped,
    TerminalsToJSON,
} from './';

/**
 * 
 * @export
 * @interface AccountUpdaterSubscribersScopes
 */
export interface AccountUpdaterSubscribersScopes {
    /**
     * 
     * @type {number}
     * @memberof AccountUpdaterSubscribersScopes
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AccountUpdaterSubscribersScopes
     */
    terminalId: number;
    /**
     * 
     * @type {string}
     * @memberof AccountUpdaterSubscribersScopes
     */
    issuingCountryIso?: string;
    /**
     * 
     * @type {Terminals}
     * @memberof AccountUpdaterSubscribersScopes
     */
    terminal?: Terminals;
    /**
     * 
     * @type {AccountUpdaterProvider}
     * @memberof AccountUpdaterSubscribersScopes
     */
    accountUpdaterProvider: AccountUpdaterProvider;
    /**
     * 
     * @type {CardBrand}
     * @memberof AccountUpdaterSubscribersScopes
     */
    cardBrand: CardBrand;
}

export function AccountUpdaterSubscribersScopesFromJSON(json: any): AccountUpdaterSubscribersScopes {
    return AccountUpdaterSubscribersScopesFromJSONTyped(json, false);
}

export function AccountUpdaterSubscribersScopesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountUpdaterSubscribersScopes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'terminalId': json['TerminalId'],
        'issuingCountryIso': !exists(json, 'IssuingCountryIso') ? undefined : json['IssuingCountryIso'],
        'terminal': !exists(json, 'Terminal') ? undefined : TerminalsFromJSON(json['Terminal']),
        'accountUpdaterProvider': AccountUpdaterProviderFromJSON(json['AccountUpdaterProvider']),
        'cardBrand': CardBrandFromJSON(json['CardBrand']),
    };
}

export function AccountUpdaterSubscribersScopesToJSON(value?: AccountUpdaterSubscribersScopes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'TerminalId': value.terminalId,
        'IssuingCountryIso': value.issuingCountryIso,
        'Terminal': TerminalsToJSON(value.terminal),
        'AccountUpdaterProvider': AccountUpdaterProviderToJSON(value.accountUpdaterProvider),
        'CardBrand': CardBrandToJSON(value.cardBrand),
    };
}


