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
/**
 *
 * @export
 * @enum {string}
 */
var SessionAvailibility;
(function (SessionAvailibility) {
    SessionAvailibility["Private"] = "Private";
    SessionAvailibility["Public"] = "Public";
})(SessionAvailibility = exports.SessionAvailibility || (exports.SessionAvailibility = {}));
function SessionAvailibilityFromJSON(json) {
    return SessionAvailibilityFromJSONTyped(json, false);
}
exports.SessionAvailibilityFromJSON = SessionAvailibilityFromJSON;
function SessionAvailibilityFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.SessionAvailibilityFromJSONTyped = SessionAvailibilityFromJSONTyped;
function SessionAvailibilityToJSON(value) {
    return value;
}
exports.SessionAvailibilityToJSON = SessionAvailibilityToJSON;
