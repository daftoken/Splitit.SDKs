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
function RolesFromJSON(json) {
    return RolesFromJSONTyped(json, false);
}
exports.RolesFromJSON = RolesFromJSON;
function RolesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['Id'],
        'name': !runtime_1.exists(json, 'Name') ? undefined : json['Name'],
        'roleStrength': json['RoleStrength'],
        'businessParty': _1.BusinessPartyFromJSON(json['BusinessParty']),
        'businessActivities': !runtime_1.exists(json, 'BusinessActivities') ? undefined : (json['BusinessActivities'].map(_1.BusinessActivityFromJSON)),
        'businessActivitiesSerialized': !runtime_1.exists(json, 'BusinessActivitiesSerialized') ? undefined : json['BusinessActivitiesSerialized'],
    };
}
exports.RolesFromJSONTyped = RolesFromJSONTyped;
function RolesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Id': value.id,
        'Name': value.name,
        'RoleStrength': value.roleStrength,
        'BusinessParty': _1.BusinessPartyToJSON(value.businessParty),
        'BusinessActivities': value.businessActivities === undefined ? undefined : (value.businessActivities.map(_1.BusinessActivityToJSON)),
        'BusinessActivitiesSerialized': value.businessActivitiesSerialized,
    };
}
exports.RolesToJSON = RolesToJSON;
