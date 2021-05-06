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
function PaymentGatewayTransactionLogsFromJSON(json) {
    return PaymentGatewayTransactionLogsFromJSONTyped(json, false);
}
exports.PaymentGatewayTransactionLogsFromJSON = PaymentGatewayTransactionLogsFromJSON;
function PaymentGatewayTransactionLogsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['Id'],
        'avsMessageMessageCode': !runtime_1.exists(json, 'AvsMessageMessageCode') ? undefined : json['AvsMessageMessageCode'],
        'avsMessageMessageText': !runtime_1.exists(json, 'AvsMessageMessageText') ? undefined : json['AvsMessageMessageText'],
        'cvvMessageMessageCode': !runtime_1.exists(json, 'CvvMessageMessageCode') ? undefined : json['CvvMessageMessageCode'],
        'cvvMessageMessageText': !runtime_1.exists(json, 'CvvMessageMessageText') ? undefined : json['CvvMessageMessageText'],
        'expiryDateMessageMessageCode': !runtime_1.exists(json, 'ExpiryDateMessageMessageCode') ? undefined : json['ExpiryDateMessageMessageCode'],
        'expiryDateMessageMessageText': !runtime_1.exists(json, 'ExpiryDateMessageMessageText') ? undefined : json['ExpiryDateMessageMessageText'],
        'resultMessageMessageCode': !runtime_1.exists(json, 'ResultMessageMessageCode') ? undefined : json['ResultMessageMessageCode'],
        'resultMessageMessageText': !runtime_1.exists(json, 'ResultMessageMessageText') ? undefined : json['ResultMessageMessageText'],
        'result': json['Result'],
        'transactionId': !runtime_1.exists(json, 'TransactionId') ? undefined : json['TransactionId'],
        'completeResponseXml': !runtime_1.exists(json, 'CompleteResponseXml') ? undefined : json['CompleteResponseXml'],
        'additionalData': !runtime_1.exists(json, 'AdditionalData') ? undefined : json['AdditionalData'],
        'requestedCurrencyCode': !runtime_1.exists(json, 'RequestedCurrencyCode') ? undefined : json['RequestedCurrencyCode'],
        'terminalGatewayDataId': json['TerminalGatewayDataId'],
        'referencePaymentGatewayTransactionLogId': !runtime_1.exists(json, 'ReferencePaymentGatewayTransactionLogId') ? undefined : json['ReferencePaymentGatewayTransactionLogId'],
        'processedAmountAmount': json['ProcessedAmountAmount'],
        'requestedAmountAmount': json['RequestedAmountAmount'],
        'installmentPlanId': !runtime_1.exists(json, 'InstallmentPlanId') ? undefined : json['InstallmentPlanId'],
        'isChargeback': json['IsChargeback'],
        'isAsync': !runtime_1.exists(json, 'IsAsync') ? undefined : json['IsAsync'],
        'transferId': !runtime_1.exists(json, 'TransferId') ? undefined : json['TransferId'],
        'referencePaymentGatewayTransactionLog': !runtime_1.exists(json, 'ReferencePaymentGatewayTransactionLog') ? undefined : PaymentGatewayTransactionLogsFromJSON(json['ReferencePaymentGatewayTransactionLog']),
        'terminalGatewayData': !runtime_1.exists(json, 'TerminalGatewayData') ? undefined : _1.TerminalGatewayDatasFromJSON(json['TerminalGatewayData']),
        'fraudDetectionLogs': !runtime_1.exists(json, 'FraudDetectionLogs') ? undefined : (json['FraudDetectionLogs'].map(_1.FraudDetectionLogsFromJSON)),
        'installmentPaymentGatewayTransactionLogs': !runtime_1.exists(json, 'InstallmentPaymentGatewayTransactionLogs') ? undefined : (json['InstallmentPaymentGatewayTransactionLogs'].map(_1.InstallmentPaymentGatewayTransactionLogsFromJSON)),
        'inverseReferencePaymentGatewayTransactionLog': !runtime_1.exists(json, 'InverseReferencePaymentGatewayTransactionLog') ? undefined : (json['InverseReferencePaymentGatewayTransactionLog'].map(PaymentGatewayTransactionLogsFromJSON)),
        'paymentGatewayTransactionAsyncLogs': !runtime_1.exists(json, 'PaymentGatewayTransactionAsyncLogs') ? undefined : (json['PaymentGatewayTransactionAsyncLogs'].map(_1.PaymentGatewayTransactionAsyncLogsFromJSON)),
        'reAuthorizationPaymentGatewayTransactionLogs': !runtime_1.exists(json, 'ReAuthorizationPaymentGatewayTransactionLogs') ? undefined : (json['ReAuthorizationPaymentGatewayTransactionLogs'].map(_1.ReAuthorizationPaymentGatewayTransactionLogsFromJSON)),
        'publicId': !runtime_1.exists(json, 'PublicId') ? undefined : json['PublicId'],
        'traceId': !runtime_1.exists(json, 'TraceId') ? undefined : json['TraceId'],
        'type': _1.OperationTypeFromJSON(json['Type']),
        'avsMessage': !runtime_1.exists(json, 'AvsMessage') ? undefined : _1.PaymentGatewayMessageFromJSON(json['AvsMessage']),
        'cvvMessage': !runtime_1.exists(json, 'CvvMessage') ? undefined : _1.PaymentGatewayMessageFromJSON(json['CvvMessage']),
        'expiryDateMessage': !runtime_1.exists(json, 'ExpiryDateMessage') ? undefined : _1.PaymentGatewayMessageFromJSON(json['ExpiryDateMessage']),
        'resultMessage': !runtime_1.exists(json, 'ResultMessage') ? undefined : _1.PaymentGatewayMessageFromJSON(json['ResultMessage']),
        'processedAmount': !runtime_1.exists(json, 'ProcessedAmount') ? undefined : _1.Money2FromJSON(json['ProcessedAmount']),
        'requestedAmount': !runtime_1.exists(json, 'RequestedAmount') ? undefined : _1.Money2FromJSON(json['RequestedAmount']),
    };
}
exports.PaymentGatewayTransactionLogsFromJSONTyped = PaymentGatewayTransactionLogsFromJSONTyped;
function PaymentGatewayTransactionLogsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Id': value.id,
        'AvsMessageMessageCode': value.avsMessageMessageCode,
        'AvsMessageMessageText': value.avsMessageMessageText,
        'CvvMessageMessageCode': value.cvvMessageMessageCode,
        'CvvMessageMessageText': value.cvvMessageMessageText,
        'ExpiryDateMessageMessageCode': value.expiryDateMessageMessageCode,
        'ExpiryDateMessageMessageText': value.expiryDateMessageMessageText,
        'ResultMessageMessageCode': value.resultMessageMessageCode,
        'ResultMessageMessageText': value.resultMessageMessageText,
        'Result': value.result,
        'TransactionId': value.transactionId,
        'CompleteResponseXml': value.completeResponseXml,
        'AdditionalData': value.additionalData,
        'RequestedCurrencyCode': value.requestedCurrencyCode,
        'TerminalGatewayDataId': value.terminalGatewayDataId,
        'ReferencePaymentGatewayTransactionLogId': value.referencePaymentGatewayTransactionLogId,
        'ProcessedAmountAmount': value.processedAmountAmount,
        'RequestedAmountAmount': value.requestedAmountAmount,
        'InstallmentPlanId': value.installmentPlanId,
        'IsChargeback': value.isChargeback,
        'IsAsync': value.isAsync,
        'TransferId': value.transferId,
        'ReferencePaymentGatewayTransactionLog': PaymentGatewayTransactionLogsToJSON(value.referencePaymentGatewayTransactionLog),
        'TerminalGatewayData': _1.TerminalGatewayDatasToJSON(value.terminalGatewayData),
        'FraudDetectionLogs': value.fraudDetectionLogs === undefined ? undefined : (value.fraudDetectionLogs.map(_1.FraudDetectionLogsToJSON)),
        'InstallmentPaymentGatewayTransactionLogs': value.installmentPaymentGatewayTransactionLogs === undefined ? undefined : (value.installmentPaymentGatewayTransactionLogs.map(_1.InstallmentPaymentGatewayTransactionLogsToJSON)),
        'InverseReferencePaymentGatewayTransactionLog': value.inverseReferencePaymentGatewayTransactionLog === undefined ? undefined : (value.inverseReferencePaymentGatewayTransactionLog.map(PaymentGatewayTransactionLogsToJSON)),
        'PaymentGatewayTransactionAsyncLogs': value.paymentGatewayTransactionAsyncLogs === undefined ? undefined : (value.paymentGatewayTransactionAsyncLogs.map(_1.PaymentGatewayTransactionAsyncLogsToJSON)),
        'ReAuthorizationPaymentGatewayTransactionLogs': value.reAuthorizationPaymentGatewayTransactionLogs === undefined ? undefined : (value.reAuthorizationPaymentGatewayTransactionLogs.map(_1.ReAuthorizationPaymentGatewayTransactionLogsToJSON)),
        'PublicId': value.publicId,
        'TraceId': value.traceId,
        'Type': _1.OperationTypeToJSON(value.type),
        'AvsMessage': _1.PaymentGatewayMessageToJSON(value.avsMessage),
        'CvvMessage': _1.PaymentGatewayMessageToJSON(value.cvvMessage),
        'ExpiryDateMessage': _1.PaymentGatewayMessageToJSON(value.expiryDateMessage),
        'ResultMessage': _1.PaymentGatewayMessageToJSON(value.resultMessage),
        'ProcessedAmount': _1.Money2ToJSON(value.processedAmount),
        'RequestedAmount': _1.Money2ToJSON(value.requestedAmount),
    };
}
exports.PaymentGatewayTransactionLogsToJSON = PaymentGatewayTransactionLogsToJSON;
