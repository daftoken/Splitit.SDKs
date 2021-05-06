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
function BusinessUnitsFromJSON(json) {
    return BusinessUnitsFromJSONTyped(json, false);
}
exports.BusinessUnitsFromJSON = BusinessUnitsFromJSON;
function BusinessUnitsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['Id'],
        'name': !runtime_1.exists(json, 'Name') ? undefined : json['Name'],
        'parentId': !runtime_1.exists(json, 'ParentId') ? undefined : json['ParentId'],
        'externalId': !runtime_1.exists(json, 'ExternalId') ? undefined : json['ExternalId'],
        'parent': !runtime_1.exists(json, 'Parent') ? undefined : BusinessUnitsFromJSON(json['Parent']),
    };
}
exports.BusinessUnitsFromJSONTyped = BusinessUnitsFromJSONTyped;
function BusinessUnitsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Id': value.id,
        'Name': value.name,
        'ParentId': value.parentId,
        'ExternalId': value.externalId,
        'Parent': BusinessUnitsToJSON(value.parent),
    };
}
exports.BusinessUnitsToJSON = BusinessUnitsToJSON;
