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
function ParametersFromJSON(json) {
    return ParametersFromJSONTyped(json, false);
}
exports.ParametersFromJSON = ParametersFromJSON;
function ParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['Id'],
        'key': !runtime_1.exists(json, 'Key') ? undefined : json['Key'],
        'value': !runtime_1.exists(json, 'Value') ? undefined : json['Value'],
        'parameterGroupId': json['ParameterGroupId'],
        'parameterGroup': !runtime_1.exists(json, 'ParameterGroup') ? undefined : _1.ParameterGroupsFromJSON(json['ParameterGroup']),
    };
}
exports.ParametersFromJSONTyped = ParametersFromJSONTyped;
function ParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Id': value.id,
        'Key': value.key,
        'Value': value.value,
        'ParameterGroupId': value.parameterGroupId,
        'ParameterGroup': _1.ParameterGroupsToJSON(value.parameterGroup),
    };
}
exports.ParametersToJSON = ParametersToJSON;
