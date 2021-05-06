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

import { exists, mapValues } from '../runtime';
import {
    FraudDetectionLogs,
    FraudDetectionLogsFromJSON,
    FraudDetectionLogsFromJSONTyped,
    FraudDetectionLogsToJSON,
    InstallmentPaymentGatewayTransactionLogs,
    InstallmentPaymentGatewayTransactionLogsFromJSON,
    InstallmentPaymentGatewayTransactionLogsFromJSONTyped,
    InstallmentPaymentGatewayTransactionLogsToJSON,
    Money2,
    Money2FromJSON,
    Money2FromJSONTyped,
    Money2ToJSON,
    OperationType,
    OperationTypeFromJSON,
    OperationTypeFromJSONTyped,
    OperationTypeToJSON,
    PaymentGatewayMessage,
    PaymentGatewayMessageFromJSON,
    PaymentGatewayMessageFromJSONTyped,
    PaymentGatewayMessageToJSON,
    PaymentGatewayTransactionAsyncLogs,
    PaymentGatewayTransactionAsyncLogsFromJSON,
    PaymentGatewayTransactionAsyncLogsFromJSONTyped,
    PaymentGatewayTransactionAsyncLogsToJSON,
    PaymentGatewayTransactionLogs,
    PaymentGatewayTransactionLogsFromJSON,
    PaymentGatewayTransactionLogsFromJSONTyped,
    PaymentGatewayTransactionLogsToJSON,
    ReAuthorizationPaymentGatewayTransactionLogs,
    ReAuthorizationPaymentGatewayTransactionLogsFromJSON,
    ReAuthorizationPaymentGatewayTransactionLogsFromJSONTyped,
    ReAuthorizationPaymentGatewayTransactionLogsToJSON,
    TerminalGatewayDatas,
    TerminalGatewayDatasFromJSON,
    TerminalGatewayDatasFromJSONTyped,
    TerminalGatewayDatasToJSON,
} from './';

/**
 * 
 * @export
 * @interface PaymentGatewayTransactionLogsAllOf
 */
export interface PaymentGatewayTransactionLogsAllOf {
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    avsMessageMessageCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    avsMessageMessageText?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    cvvMessageMessageCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    cvvMessageMessageText?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    expiryDateMessageMessageCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    expiryDateMessageMessageText?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    resultMessageMessageCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    resultMessageMessageText?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    result: boolean;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    transactionId?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    completeResponseXml?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    additionalData?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    requestedCurrencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    terminalGatewayDataId: number;
    /**
     * 
     * @type {number}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    referencePaymentGatewayTransactionLogId?: number;
    /**
     * 
     * @type {number}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    processedAmountAmount: number;
    /**
     * 
     * @type {number}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    requestedAmountAmount: number;
    /**
     * 
     * @type {number}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    installmentPlanId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    isChargeback: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    isAsync?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    transferId?: string;
    /**
     * 
     * @type {PaymentGatewayTransactionLogs}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    referencePaymentGatewayTransactionLog?: PaymentGatewayTransactionLogs;
    /**
     * 
     * @type {TerminalGatewayDatas}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    terminalGatewayData?: TerminalGatewayDatas;
    /**
     * 
     * @type {Array<FraudDetectionLogs>}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    fraudDetectionLogs?: Array<FraudDetectionLogs>;
    /**
     * 
     * @type {Array<InstallmentPaymentGatewayTransactionLogs>}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    installmentPaymentGatewayTransactionLogs?: Array<InstallmentPaymentGatewayTransactionLogs>;
    /**
     * 
     * @type {Array<PaymentGatewayTransactionLogs>}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    inverseReferencePaymentGatewayTransactionLog?: Array<PaymentGatewayTransactionLogs>;
    /**
     * 
     * @type {Array<PaymentGatewayTransactionAsyncLogs>}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    paymentGatewayTransactionAsyncLogs?: Array<PaymentGatewayTransactionAsyncLogs>;
    /**
     * 
     * @type {Array<ReAuthorizationPaymentGatewayTransactionLogs>}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    reAuthorizationPaymentGatewayTransactionLogs?: Array<ReAuthorizationPaymentGatewayTransactionLogs>;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    publicId?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    traceId?: string;
    /**
     * 
     * @type {OperationType}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    type: OperationType;
    /**
     * 
     * @type {PaymentGatewayMessage}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    avsMessage?: PaymentGatewayMessage;
    /**
     * 
     * @type {PaymentGatewayMessage}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    cvvMessage?: PaymentGatewayMessage;
    /**
     * 
     * @type {PaymentGatewayMessage}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    expiryDateMessage?: PaymentGatewayMessage;
    /**
     * 
     * @type {PaymentGatewayMessage}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    resultMessage?: PaymentGatewayMessage;
    /**
     * 
     * @type {Money2}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    processedAmount?: Money2;
    /**
     * 
     * @type {Money2}
     * @memberof PaymentGatewayTransactionLogsAllOf
     */
    requestedAmount?: Money2;
}

export function PaymentGatewayTransactionLogsAllOfFromJSON(json: any): PaymentGatewayTransactionLogsAllOf {
    return PaymentGatewayTransactionLogsAllOfFromJSONTyped(json, false);
}

export function PaymentGatewayTransactionLogsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentGatewayTransactionLogsAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'avsMessageMessageCode': !exists(json, 'AvsMessageMessageCode') ? undefined : json['AvsMessageMessageCode'],
        'avsMessageMessageText': !exists(json, 'AvsMessageMessageText') ? undefined : json['AvsMessageMessageText'],
        'cvvMessageMessageCode': !exists(json, 'CvvMessageMessageCode') ? undefined : json['CvvMessageMessageCode'],
        'cvvMessageMessageText': !exists(json, 'CvvMessageMessageText') ? undefined : json['CvvMessageMessageText'],
        'expiryDateMessageMessageCode': !exists(json, 'ExpiryDateMessageMessageCode') ? undefined : json['ExpiryDateMessageMessageCode'],
        'expiryDateMessageMessageText': !exists(json, 'ExpiryDateMessageMessageText') ? undefined : json['ExpiryDateMessageMessageText'],
        'resultMessageMessageCode': !exists(json, 'ResultMessageMessageCode') ? undefined : json['ResultMessageMessageCode'],
        'resultMessageMessageText': !exists(json, 'ResultMessageMessageText') ? undefined : json['ResultMessageMessageText'],
        'result': json['Result'],
        'transactionId': !exists(json, 'TransactionId') ? undefined : json['TransactionId'],
        'completeResponseXml': !exists(json, 'CompleteResponseXml') ? undefined : json['CompleteResponseXml'],
        'additionalData': !exists(json, 'AdditionalData') ? undefined : json['AdditionalData'],
        'requestedCurrencyCode': !exists(json, 'RequestedCurrencyCode') ? undefined : json['RequestedCurrencyCode'],
        'terminalGatewayDataId': json['TerminalGatewayDataId'],
        'referencePaymentGatewayTransactionLogId': !exists(json, 'ReferencePaymentGatewayTransactionLogId') ? undefined : json['ReferencePaymentGatewayTransactionLogId'],
        'processedAmountAmount': json['ProcessedAmountAmount'],
        'requestedAmountAmount': json['RequestedAmountAmount'],
        'installmentPlanId': !exists(json, 'InstallmentPlanId') ? undefined : json['InstallmentPlanId'],
        'isChargeback': json['IsChargeback'],
        'isAsync': !exists(json, 'IsAsync') ? undefined : json['IsAsync'],
        'transferId': !exists(json, 'TransferId') ? undefined : json['TransferId'],
        'referencePaymentGatewayTransactionLog': !exists(json, 'ReferencePaymentGatewayTransactionLog') ? undefined : PaymentGatewayTransactionLogsFromJSON(json['ReferencePaymentGatewayTransactionLog']),
        'terminalGatewayData': !exists(json, 'TerminalGatewayData') ? undefined : TerminalGatewayDatasFromJSON(json['TerminalGatewayData']),
        'fraudDetectionLogs': !exists(json, 'FraudDetectionLogs') ? undefined : ((json['FraudDetectionLogs'] as Array<any>).map(FraudDetectionLogsFromJSON)),
        'installmentPaymentGatewayTransactionLogs': !exists(json, 'InstallmentPaymentGatewayTransactionLogs') ? undefined : ((json['InstallmentPaymentGatewayTransactionLogs'] as Array<any>).map(InstallmentPaymentGatewayTransactionLogsFromJSON)),
        'inverseReferencePaymentGatewayTransactionLog': !exists(json, 'InverseReferencePaymentGatewayTransactionLog') ? undefined : ((json['InverseReferencePaymentGatewayTransactionLog'] as Array<any>).map(PaymentGatewayTransactionLogsFromJSON)),
        'paymentGatewayTransactionAsyncLogs': !exists(json, 'PaymentGatewayTransactionAsyncLogs') ? undefined : ((json['PaymentGatewayTransactionAsyncLogs'] as Array<any>).map(PaymentGatewayTransactionAsyncLogsFromJSON)),
        'reAuthorizationPaymentGatewayTransactionLogs': !exists(json, 'ReAuthorizationPaymentGatewayTransactionLogs') ? undefined : ((json['ReAuthorizationPaymentGatewayTransactionLogs'] as Array<any>).map(ReAuthorizationPaymentGatewayTransactionLogsFromJSON)),
        'publicId': !exists(json, 'PublicId') ? undefined : json['PublicId'],
        'traceId': !exists(json, 'TraceId') ? undefined : json['TraceId'],
        'type': OperationTypeFromJSON(json['Type']),
        'avsMessage': !exists(json, 'AvsMessage') ? undefined : PaymentGatewayMessageFromJSON(json['AvsMessage']),
        'cvvMessage': !exists(json, 'CvvMessage') ? undefined : PaymentGatewayMessageFromJSON(json['CvvMessage']),
        'expiryDateMessage': !exists(json, 'ExpiryDateMessage') ? undefined : PaymentGatewayMessageFromJSON(json['ExpiryDateMessage']),
        'resultMessage': !exists(json, 'ResultMessage') ? undefined : PaymentGatewayMessageFromJSON(json['ResultMessage']),
        'processedAmount': !exists(json, 'ProcessedAmount') ? undefined : Money2FromJSON(json['ProcessedAmount']),
        'requestedAmount': !exists(json, 'RequestedAmount') ? undefined : Money2FromJSON(json['RequestedAmount']),
    };
}

export function PaymentGatewayTransactionLogsAllOfToJSON(value?: PaymentGatewayTransactionLogsAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
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
        'TerminalGatewayData': TerminalGatewayDatasToJSON(value.terminalGatewayData),
        'FraudDetectionLogs': value.fraudDetectionLogs === undefined ? undefined : ((value.fraudDetectionLogs as Array<any>).map(FraudDetectionLogsToJSON)),
        'InstallmentPaymentGatewayTransactionLogs': value.installmentPaymentGatewayTransactionLogs === undefined ? undefined : ((value.installmentPaymentGatewayTransactionLogs as Array<any>).map(InstallmentPaymentGatewayTransactionLogsToJSON)),
        'InverseReferencePaymentGatewayTransactionLog': value.inverseReferencePaymentGatewayTransactionLog === undefined ? undefined : ((value.inverseReferencePaymentGatewayTransactionLog as Array<any>).map(PaymentGatewayTransactionLogsToJSON)),
        'PaymentGatewayTransactionAsyncLogs': value.paymentGatewayTransactionAsyncLogs === undefined ? undefined : ((value.paymentGatewayTransactionAsyncLogs as Array<any>).map(PaymentGatewayTransactionAsyncLogsToJSON)),
        'ReAuthorizationPaymentGatewayTransactionLogs': value.reAuthorizationPaymentGatewayTransactionLogs === undefined ? undefined : ((value.reAuthorizationPaymentGatewayTransactionLogs as Array<any>).map(ReAuthorizationPaymentGatewayTransactionLogsToJSON)),
        'PublicId': value.publicId,
        'TraceId': value.traceId,
        'Type': OperationTypeToJSON(value.type),
        'AvsMessage': PaymentGatewayMessageToJSON(value.avsMessage),
        'CvvMessage': PaymentGatewayMessageToJSON(value.cvvMessage),
        'ExpiryDateMessage': PaymentGatewayMessageToJSON(value.expiryDateMessage),
        'ResultMessage': PaymentGatewayMessageToJSON(value.resultMessage),
        'ProcessedAmount': Money2ToJSON(value.processedAmount),
        'RequestedAmount': Money2ToJSON(value.requestedAmount),
    };
}


