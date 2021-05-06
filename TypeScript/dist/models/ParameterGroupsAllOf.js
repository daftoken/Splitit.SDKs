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
function ParameterGroupsAllOfFromJSON(json) {
    return ParameterGroupsAllOfFromJSONTyped(json, false);
}
exports.ParameterGroupsAllOfFromJSON = ParameterGroupsAllOfFromJSON;
function ParameterGroupsAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tokens': !runtime_1.exists(json, 'Tokens') ? undefined : (json['Tokens'].map(_1.TokensFromJSON)),
        'merchants': !runtime_1.exists(json, 'Merchants') ? undefined : (json['Merchants'].map(_1.MerchantsFromJSON)),
        'parameters': !runtime_1.exists(json, 'Parameters') ? undefined : (json['Parameters'].map(_1.ParametersFromJSON)),
        'splititJobDefinitions': !runtime_1.exists(json, 'SplititJobDefinitions') ? undefined : (json['SplititJobDefinitions'].map(_1.SplititJobDefinitionsFromJSON)),
    };
}
exports.ParameterGroupsAllOfFromJSONTyped = ParameterGroupsAllOfFromJSONTyped;
function ParameterGroupsAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Tokens': value.tokens === undefined ? undefined : (value.tokens.map(_1.TokensToJSON)),
        'Merchants': value.merchants === undefined ? undefined : (value.merchants.map(_1.MerchantsToJSON)),
        'Parameters': value.parameters === undefined ? undefined : (value.parameters.map(_1.ParametersToJSON)),
        'SplititJobDefinitions': value.splititJobDefinitions === undefined ? undefined : (value.splititJobDefinitions.map(_1.SplititJobDefinitionsToJSON)),
    };
}
exports.ParameterGroupsAllOfToJSON = ParameterGroupsAllOfToJSON;
