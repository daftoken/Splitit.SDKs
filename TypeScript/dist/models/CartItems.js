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
function CartItemsFromJSON(json) {
    return CartItemsFromJSONTyped(json, false);
}
exports.CartItemsFromJSON = CartItemsFromJSON;
function CartItemsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['Id'],
        'name': !runtime_1.exists(json, 'Name') ? undefined : json['Name'],
        'sku': !runtime_1.exists(json, 'Sku') ? undefined : json['Sku'],
        'priceAmount': json['PriceAmount'],
        'quantity': json['Quantity'],
        'description': !runtime_1.exists(json, 'Description') ? undefined : json['Description'],
        'installmentPlanId': !runtime_1.exists(json, 'InstallmentPlanId') ? undefined : json['InstallmentPlanId'],
        'installmentPlan': !runtime_1.exists(json, 'InstallmentPlan') ? undefined : _1.InstallmentPlansFromJSON(json['InstallmentPlan']),
        'price': !runtime_1.exists(json, 'Price') ? undefined : _1.Money2FromJSON(json['Price']),
    };
}
exports.CartItemsFromJSONTyped = CartItemsFromJSONTyped;
function CartItemsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Id': value.id,
        'Name': value.name,
        'Sku': value.sku,
        'PriceAmount': value.priceAmount,
        'Quantity': value.quantity,
        'Description': value.description,
        'InstallmentPlanId': value.installmentPlanId,
        'InstallmentPlan': _1.InstallmentPlansToJSON(value.installmentPlan),
        'Price': _1.Money2ToJSON(value.price),
    };
}
exports.CartItemsToJSON = CartItemsToJSON;
