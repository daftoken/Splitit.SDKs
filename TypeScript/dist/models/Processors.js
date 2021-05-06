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
function ProcessorsFromJSON(json) {
    return ProcessorsFromJSONTyped(json, false);
}
exports.ProcessorsFromJSON = ProcessorsFromJSON;
function ProcessorsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['Id'],
        'name': !runtime_1.exists(json, 'Name') ? undefined : json['Name'],
        'apiUrl': !runtime_1.exists(json, 'ApiUrl') ? undefined : json['ApiUrl'],
        'maxNumberOfRetries': json['MaxNumberOfRetries'],
        'timeoutSeconds': json['TimeoutSeconds'],
        'maxAuth': json['MaxAuth'],
        'gracePeriod': json['GracePeriod'],
        'asyncRefundGracePeriodDays': !runtime_1.exists(json, 'AsyncRefundGracePeriodDays') ? undefined : json['AsyncRefundGracePeriodDays'],
        'isCheckedMastercard': json['IsCheckedMastercard'],
        'isCheckedUpi': json['IsCheckedUpi'],
        'isCheckedVisa': json['IsCheckedVisa'],
        'isCheckedAmex': json['IsCheckedAmex'],
        'isCheckedMaestro': json['IsCheckedMaestro'],
        'isCheckedJcb': json['IsCheckedJcb'],
        'isCheckedDiscover': json['IsCheckedDiscover'],
        'is3ds2Supported': json['Is3ds2Supported'],
        'gatewayApiassembly': !runtime_1.exists(json, 'GatewayApiassembly') ? undefined : json['GatewayApiassembly'],
        'displayName': !runtime_1.exists(json, 'DisplayName') ? undefined : json['DisplayName'],
        'gatewayApiimplementorNs': !runtime_1.exists(json, 'GatewayApiimplementorNs') ? undefined : json['GatewayApiimplementorNs'],
        'isTokenSupported': json['IsTokenSupported'],
        'consumerUpdateCcGracePeriod': !runtime_1.exists(json, 'ConsumerUpdateCcGracePeriod') ? undefined : json['ConsumerUpdateCcGracePeriod'],
        'isVoidSupported': json['IsVoidSupported'],
        'isVoidAfterFailRefund': json['IsVoidAfterFailRefund'],
        'minAmountAllowedForAuth': json['MinAmountAllowedForAuth'],
        'captureDelayInSec': json['CaptureDelayInSec'],
        'voidDelayInSec': json['VoidDelayInSec'],
        'allowPartialVoid': json['AllowPartialVoid'],
        'installments': !runtime_1.exists(json, 'Installments') ? undefined : (json['Installments'].map(_1.InstallmentsFromJSON)),
        'processorAuthenticationParameters': !runtime_1.exists(json, 'ProcessorAuthenticationParameters') ? undefined : (json['ProcessorAuthenticationParameters'].map(_1.ProcessorAuthenticationParametersFromJSON)),
        'reAuthorizations': !runtime_1.exists(json, 'ReAuthorizations') ? undefined : (json['ReAuthorizations'].map(_1.ReAuthorizationsFromJSON)),
        'terminalGatewayDatas': !runtime_1.exists(json, 'TerminalGatewayDatas') ? undefined : (json['TerminalGatewayDatas'].map(_1.TerminalGatewayDatasFromJSON)),
    };
}
exports.ProcessorsFromJSONTyped = ProcessorsFromJSONTyped;
function ProcessorsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Id': value.id,
        'Name': value.name,
        'ApiUrl': value.apiUrl,
        'MaxNumberOfRetries': value.maxNumberOfRetries,
        'TimeoutSeconds': value.timeoutSeconds,
        'MaxAuth': value.maxAuth,
        'GracePeriod': value.gracePeriod,
        'AsyncRefundGracePeriodDays': value.asyncRefundGracePeriodDays,
        'IsCheckedMastercard': value.isCheckedMastercard,
        'IsCheckedUpi': value.isCheckedUpi,
        'IsCheckedVisa': value.isCheckedVisa,
        'IsCheckedAmex': value.isCheckedAmex,
        'IsCheckedMaestro': value.isCheckedMaestro,
        'IsCheckedJcb': value.isCheckedJcb,
        'IsCheckedDiscover': value.isCheckedDiscover,
        'Is3ds2Supported': value.is3ds2Supported,
        'GatewayApiassembly': value.gatewayApiassembly,
        'DisplayName': value.displayName,
        'GatewayApiimplementorNs': value.gatewayApiimplementorNs,
        'IsTokenSupported': value.isTokenSupported,
        'ConsumerUpdateCcGracePeriod': value.consumerUpdateCcGracePeriod,
        'IsVoidSupported': value.isVoidSupported,
        'IsVoidAfterFailRefund': value.isVoidAfterFailRefund,
        'MinAmountAllowedForAuth': value.minAmountAllowedForAuth,
        'CaptureDelayInSec': value.captureDelayInSec,
        'VoidDelayInSec': value.voidDelayInSec,
        'AllowPartialVoid': value.allowPartialVoid,
        'Installments': value.installments === undefined ? undefined : (value.installments.map(_1.InstallmentsToJSON)),
        'ProcessorAuthenticationParameters': value.processorAuthenticationParameters === undefined ? undefined : (value.processorAuthenticationParameters.map(_1.ProcessorAuthenticationParametersToJSON)),
        'ReAuthorizations': value.reAuthorizations === undefined ? undefined : (value.reAuthorizations.map(_1.ReAuthorizationsToJSON)),
        'TerminalGatewayDatas': value.terminalGatewayDatas === undefined ? undefined : (value.terminalGatewayDatas.map(_1.TerminalGatewayDatasToJSON)),
    };
}
exports.ProcessorsToJSON = ProcessorsToJSON;
