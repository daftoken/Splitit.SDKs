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
function TerminalKvpsAllOfFromJSON(json) {
    return TerminalKvpsAllOfFromJSONTyped(json, false);
}
exports.TerminalKvpsAllOfFromJSON = TerminalKvpsAllOfFromJSON;
function TerminalKvpsAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': !runtime_1.exists(json, 'Key') ? undefined : json['Key'],
        'value': !runtime_1.exists(json, 'Value') ? undefined : json['Value'],
        'terminalId': json['TerminalId'],
        'terminal': !runtime_1.exists(json, 'Terminal') ? undefined : _1.TerminalsFromJSON(json['Terminal']),
    };
}
exports.TerminalKvpsAllOfFromJSONTyped = TerminalKvpsAllOfFromJSONTyped;
function TerminalKvpsAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Key': value.key,
        'Value': value.value,
        'TerminalId': value.terminalId,
        'Terminal': _1.TerminalsToJSON(value.terminal),
    };
}
exports.TerminalKvpsAllOfToJSON = TerminalKvpsAllOfToJSON;
