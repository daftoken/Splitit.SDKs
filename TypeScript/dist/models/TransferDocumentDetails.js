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
function TransferDocumentDetailsFromJSON(json) {
    return TransferDocumentDetailsFromJSONTyped(json, false);
}
exports.TransferDocumentDetailsFromJSON = TransferDocumentDetailsFromJSON;
function TransferDocumentDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['Id'],
        'amount': json['Amount'],
        'transferReason': json['TransferReason'],
        'transferDocumentId': json['TransferDocumentId'],
        'installmentId': !runtime_1.exists(json, 'InstallmentId') ? undefined : json['InstallmentId'],
        'planId': !runtime_1.exists(json, 'PlanId') ? undefined : json['PlanId'],
        'installment': !runtime_1.exists(json, 'Installment') ? undefined : _1.InstallmentsFromJSON(json['Installment']),
        'plan': !runtime_1.exists(json, 'Plan') ? undefined : _1.InstallmentPlansFromJSON(json['Plan']),
        'transferDocument': !runtime_1.exists(json, 'TransferDocument') ? undefined : _1.TransferDocumentsFromJSON(json['TransferDocument']),
    };
}
exports.TransferDocumentDetailsFromJSONTyped = TransferDocumentDetailsFromJSONTyped;
function TransferDocumentDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Id': value.id,
        'Amount': value.amount,
        'TransferReason': value.transferReason,
        'TransferDocumentId': value.transferDocumentId,
        'InstallmentId': value.installmentId,
        'PlanId': value.planId,
        'Installment': _1.InstallmentsToJSON(value.installment),
        'Plan': _1.InstallmentPlansToJSON(value.plan),
        'TransferDocument': _1.TransferDocumentsToJSON(value.transferDocument),
    };
}
exports.TransferDocumentDetailsToJSON = TransferDocumentDetailsToJSON;
