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
function TouchPointsAllOfFromJSON(json) {
    return TouchPointsAllOfFromJSONTyped(json, false);
}
exports.TouchPointsAllOfFromJSON = TouchPointsAllOfFromJSON;
function TouchPointsAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime_1.exists(json, 'Name') ? undefined : json['Name'],
        'code': !runtime_1.exists(json, 'Code') ? undefined : json['Code'],
        'defaultColorValuesId': json['DefaultColorValuesId'],
        'logoSupported': json['LogoSupported'],
        'owner': !runtime_1.exists(json, 'Owner') ? undefined : json['Owner'],
        'url': !runtime_1.exists(json, 'Url') ? undefined : json['Url'],
        'businessParty': !runtime_1.exists(json, 'BusinessParty') ? undefined : _1.BusinessPartyFromJSON(json['BusinessParty']),
        'configKeys': !runtime_1.exists(json, 'ConfigKeys') ? undefined : (json['ConfigKeys'].map(_1.ConfigKeysFromJSON)),
        'versionedTouchPoints': !runtime_1.exists(json, 'VersionedTouchPoints') ? undefined : (json['VersionedTouchPoints'].map(_1.VersionedTouchPointsFromJSON)),
    };
}
exports.TouchPointsAllOfFromJSONTyped = TouchPointsAllOfFromJSONTyped;
function TouchPointsAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Name': value.name,
        'Code': value.code,
        'DefaultColorValuesId': value.defaultColorValuesId,
        'LogoSupported': value.logoSupported,
        'Owner': value.owner,
        'Url': value.url,
        'BusinessParty': _1.BusinessPartyToJSON(value.businessParty),
        'ConfigKeys': value.configKeys === undefined ? undefined : (value.configKeys.map(_1.ConfigKeysToJSON)),
        'VersionedTouchPoints': value.versionedTouchPoints === undefined ? undefined : (value.versionedTouchPoints.map(_1.VersionedTouchPointsToJSON)),
    };
}
exports.TouchPointsAllOfToJSON = TouchPointsAllOfToJSON;
