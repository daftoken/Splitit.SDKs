"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var runtime_1 = require("../runtime");
var _1 = require("./");
function ScpProvidersCurrenciesFromJSON(json) {
    return ScpProvidersCurrenciesFromJSONTyped(json, false);
}
exports.ScpProvidersCurrenciesFromJSON = ScpProvidersCurrenciesFromJSON;
function ScpProvidersCurrenciesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'scpProviderId': json['ScpProviderId'],
        'currencyId': json['CurrencyId'],
        'currency': !runtime_1.exists(json, 'Currency') ? undefined : _1.CurrenciesFromJSON(json['Currency']),
        'scpProviders': !runtime_1.exists(json, 'ScpProviders') ? undefined : _1.ScpProvidersFromJSON(json['ScpProviders']),
    };
}
exports.ScpProvidersCurrenciesFromJSONTyped = ScpProvidersCurrenciesFromJSONTyped;
function ScpProvidersCurrenciesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ScpProviderId': value.scpProviderId,
        'CurrencyId': value.currencyId,
        'Currency': _1.CurrenciesToJSON(value.currency),
        'ScpProviders': _1.ScpProvidersToJSON(value.scpProviders),
    };
}
exports.ScpProvidersCurrenciesToJSON = ScpProvidersCurrenciesToJSON;
