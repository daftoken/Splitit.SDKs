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
var TestModes;
(function (TestModes) {
    TestModes["None"] = "None";
    TestModes["Regular"] = "Regular";
    TestModes["Fast"] = "Fast";
    TestModes["Automation"] = "Automation";
})(TestModes = exports.TestModes || (exports.TestModes = {}));
function TestModesFromJSON(json) {
    return TestModesFromJSONTyped(json, false);
}
exports.TestModesFromJSON = TestModesFromJSON;
function TestModesFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.TestModesFromJSONTyped = TestModesFromJSONTyped;
function TestModesToJSON(value) {
    return value;
}
exports.TestModesToJSON = TestModesToJSON;
