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
var CardBrand;
(function (CardBrand) {
    CardBrand["Mastercard"] = "Mastercard";
    CardBrand["Visa"] = "Visa";
    CardBrand["AmericanExpress"] = "AmericanExpress";
    CardBrand["Maestro"] = "Maestro";
    CardBrand["JCB"] = "JCB";
    CardBrand["CUP"] = "CUP";
    CardBrand["UPI"] = "UPI";
    CardBrand["Discover"] = "Discover";
    CardBrand["Other"] = "Other";
})(CardBrand = exports.CardBrand || (exports.CardBrand = {}));
function CardBrandFromJSON(json) {
    return CardBrandFromJSONTyped(json, false);
}
exports.CardBrandFromJSON = CardBrandFromJSON;
function CardBrandFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CardBrandFromJSONTyped = CardBrandFromJSONTyped;
function CardBrandToJSON(value) {
    return value;
}
exports.CardBrandToJSON = CardBrandToJSON;
