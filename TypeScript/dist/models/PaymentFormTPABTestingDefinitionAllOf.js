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
function PaymentFormTPABTestingDefinitionAllOfFromJSON(json) {
    return PaymentFormTPABTestingDefinitionAllOfFromJSONTyped(json, false);
}
exports.PaymentFormTPABTestingDefinitionAllOfFromJSON = PaymentFormTPABTestingDefinitionAllOfFromJSON;
function PaymentFormTPABTestingDefinitionAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'isActive': json['IsActive'],
        'abTestName': !runtime_1.exists(json, 'AbTestName') ? undefined : json['AbTestName'],
        'pFVersionAId': !runtime_1.exists(json, 'PFVersionAId') ? undefined : json['PFVersionAId'],
        'pFVersionBId': !runtime_1.exists(json, 'PFVersionBId') ? undefined : json['PFVersionBId'],
        'abTestDescription': !runtime_1.exists(json, 'AbTestDescription') ? undefined : json['AbTestDescription'],
        'pFVersionAPercentage': json['PFVersionAPercentage'],
        'pFVersionBPercentage': json['PFVersionBPercentage'],
        'pFVersionA': !runtime_1.exists(json, 'PFVersionA') ? undefined : _1.VersionedTouchPointsFromJSON(json['PFVersionA']),
        'pFVersionB': !runtime_1.exists(json, 'PFVersionB') ? undefined : _1.VersionedTouchPointsFromJSON(json['PFVersionB']),
    };
}
exports.PaymentFormTPABTestingDefinitionAllOfFromJSONTyped = PaymentFormTPABTestingDefinitionAllOfFromJSONTyped;
function PaymentFormTPABTestingDefinitionAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'IsActive': value.isActive,
        'AbTestName': value.abTestName,
        'PFVersionAId': value.pFVersionAId,
        'PFVersionBId': value.pFVersionBId,
        'AbTestDescription': value.abTestDescription,
        'PFVersionAPercentage': value.pFVersionAPercentage,
        'PFVersionBPercentage': value.pFVersionBPercentage,
        'PFVersionA': _1.VersionedTouchPointsToJSON(value.pFVersionA),
        'PFVersionB': _1.VersionedTouchPointsToJSON(value.pFVersionB),
    };
}
exports.PaymentFormTPABTestingDefinitionAllOfToJSON = PaymentFormTPABTestingDefinitionAllOfToJSON;
