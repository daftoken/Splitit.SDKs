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
function PisMemberPasswordHistoriesFromJSON(json) {
    return PisMemberPasswordHistoriesFromJSONTyped(json, false);
}
exports.PisMemberPasswordHistoriesFromJSON = PisMemberPasswordHistoriesFromJSON;
function PisMemberPasswordHistoriesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['Id'],
        'password': !runtime_1.exists(json, 'Password') ? undefined : json['Password'],
        'passwordHash': !runtime_1.exists(json, 'PasswordHash') ? undefined : json['PasswordHash'],
        'passwordExpDate': (new Date(json['PasswordExpDate'])),
        'pisMemberId': json['PisMemberId'],
        'pisMember': !runtime_1.exists(json, 'PisMember') ? undefined : _1.PisMembersFromJSON(json['PisMember']),
    };
}
exports.PisMemberPasswordHistoriesFromJSONTyped = PisMemberPasswordHistoriesFromJSONTyped;
function PisMemberPasswordHistoriesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Id': value.id,
        'Password': value.password,
        'PasswordHash': value.passwordHash,
        'PasswordExpDate': (value.passwordExpDate.toISOString()),
        'PisMemberId': value.pisMemberId,
        'PisMember': _1.PisMembersToJSON(value.pisMember),
    };
}
exports.PisMemberPasswordHistoriesToJSON = PisMemberPasswordHistoriesToJSON;
