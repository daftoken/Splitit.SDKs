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
    CardStateLogs,
    CardStateLogsFromJSON,
    CardStateLogsFromJSONTyped,
    CardStateLogsToJSON,
    FeesDocuments,
    FeesDocumentsFromJSON,
    FeesDocumentsFromJSONTyped,
    FeesDocumentsToJSON,
    FundingCollectDocumentDetails,
    FundingCollectDocumentDetailsFromJSON,
    FundingCollectDocumentDetailsFromJSONTyped,
    FundingCollectDocumentDetailsToJSON,
    InstallmentPaymentGatewayTransactionLogs,
    InstallmentPaymentGatewayTransactionLogsFromJSON,
    InstallmentPaymentGatewayTransactionLogsFromJSONTyped,
    InstallmentPaymentGatewayTransactionLogsToJSON,
    InstallmentPlans,
    InstallmentPlansFromJSON,
    InstallmentPlansFromJSONTyped,
    InstallmentPlansToJSON,
    InstallmentStatus,
    InstallmentStatusFromJSON,
    InstallmentStatusFromJSONTyped,
    InstallmentStatusToJSON,
    MerchantAccountType,
    MerchantAccountTypeFromJSON,
    MerchantAccountTypeFromJSONTyped,
    MerchantAccountTypeToJSON,
    Processors,
    ProcessorsFromJSON,
    ProcessorsFromJSONTyped,
    ProcessorsToJSON,
    TransferDocumentDetails,
    TransferDocumentDetailsFromJSON,
    TransferDocumentDetailsFromJSONTyped,
    TransferDocumentDetailsToJSON,
} from './';

/**
 * 
 * @export
 * @interface InstallmentsAllOf
 */
export interface InstallmentsAllOf {
    /**
     * 
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    installmentPlanId: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    installmentNumber: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    processorId: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    originUtcOffset: number;
    /**
     * 
     * @type {Date}
     * @memberof InstallmentsAllOf
     */
    createdDateUtc: Date;
    /**
     * 
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    amount: number;
    /**
     * 
     * @type {Date}
     * @memberof InstallmentsAllOf
     */
    processDateTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof InstallmentsAllOf
     */
    processDateTimeUtc?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof InstallmentsAllOf
     */
    isRefund: boolean;
    /**
     * 
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    cardStateId?: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    originalAmount: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    refundAmount: number;
    /**
     * 
     * @type {boolean}
     * @memberof InstallmentsAllOf
     */
    isFullCapture: boolean;
    /**
     * 
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    authorizedAmount: number;
    /**
     * 
     * @type {boolean}
     * @memberof InstallmentsAllOf
     */
    isPreAuthorized: boolean;
    /**
     * 
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    amountForFunding: number;
    /**
     * 
     * @type {CardStateLogs}
     * @memberof InstallmentsAllOf
     */
    cardState?: CardStateLogs;
    /**
     * 
     * @type {InstallmentPlans}
     * @memberof InstallmentsAllOf
     */
    installmentPlan?: InstallmentPlans;
    /**
     * 
     * @type {Processors}
     * @memberof InstallmentsAllOf
     */
    processor?: Processors;
    /**
     * 
     * @type {Array<FeesDocuments>}
     * @memberof InstallmentsAllOf
     */
    feesDocuments?: Array<FeesDocuments>;
    /**
     * 
     * @type {Array<FundingCollectDocumentDetails>}
     * @memberof InstallmentsAllOf
     */
    fundingCollectDocumentDetails?: Array<FundingCollectDocumentDetails>;
    /**
     * 
     * @type {Array<InstallmentPaymentGatewayTransactionLogs>}
     * @memberof InstallmentsAllOf
     */
    installmentPaymentGatewayTransactionLogs?: Array<InstallmentPaymentGatewayTransactionLogs>;
    /**
     * 
     * @type {Array<TransferDocumentDetails>}
     * @memberof InstallmentsAllOf
     */
    transferDocumentDetails?: Array<TransferDocumentDetails>;
    /**
     * 
     * @type {MerchantAccountType}
     * @memberof InstallmentsAllOf
     */
    merchantAccountType: MerchantAccountType;
    /**
     * 
     * @type {InstallmentStatus}
     * @memberof InstallmentsAllOf
     */
    status: InstallmentStatus;
}

export function InstallmentsAllOfFromJSON(json: any): InstallmentsAllOf {
    return InstallmentsAllOfFromJSONTyped(json, false);
}

export function InstallmentsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstallmentsAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'installmentPlanId': json['InstallmentPlanId'],
        'installmentNumber': json['InstallmentNumber'],
        'processorId': json['ProcessorId'],
        'originUtcOffset': json['OriginUtcOffset'],
        'createdDateUtc': (new Date(json['CreatedDateUtc'])),
        'amount': json['Amount'],
        'processDateTime': !exists(json, 'ProcessDateTime') ? undefined : (new Date(json['ProcessDateTime'])),
        'processDateTimeUtc': !exists(json, 'ProcessDateTimeUtc') ? undefined : (new Date(json['ProcessDateTimeUtc'])),
        'isRefund': json['IsRefund'],
        'cardStateId': !exists(json, 'CardStateId') ? undefined : json['CardStateId'],
        'originalAmount': json['OriginalAmount'],
        'refundAmount': json['RefundAmount'],
        'isFullCapture': json['IsFullCapture'],
        'authorizedAmount': json['AuthorizedAmount'],
        'isPreAuthorized': json['IsPreAuthorized'],
        'amountForFunding': json['AmountForFunding'],
        'cardState': !exists(json, 'CardState') ? undefined : CardStateLogsFromJSON(json['CardState']),
        'installmentPlan': !exists(json, 'InstallmentPlan') ? undefined : InstallmentPlansFromJSON(json['InstallmentPlan']),
        'processor': !exists(json, 'Processor') ? undefined : ProcessorsFromJSON(json['Processor']),
        'feesDocuments': !exists(json, 'FeesDocuments') ? undefined : ((json['FeesDocuments'] as Array<any>).map(FeesDocumentsFromJSON)),
        'fundingCollectDocumentDetails': !exists(json, 'FundingCollectDocumentDetails') ? undefined : ((json['FundingCollectDocumentDetails'] as Array<any>).map(FundingCollectDocumentDetailsFromJSON)),
        'installmentPaymentGatewayTransactionLogs': !exists(json, 'InstallmentPaymentGatewayTransactionLogs') ? undefined : ((json['InstallmentPaymentGatewayTransactionLogs'] as Array<any>).map(InstallmentPaymentGatewayTransactionLogsFromJSON)),
        'transferDocumentDetails': !exists(json, 'TransferDocumentDetails') ? undefined : ((json['TransferDocumentDetails'] as Array<any>).map(TransferDocumentDetailsFromJSON)),
        'merchantAccountType': MerchantAccountTypeFromJSON(json['MerchantAccountType']),
        'status': InstallmentStatusFromJSON(json['Status']),
    };
}

export function InstallmentsAllOfToJSON(value?: InstallmentsAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'InstallmentPlanId': value.installmentPlanId,
        'InstallmentNumber': value.installmentNumber,
        'ProcessorId': value.processorId,
        'OriginUtcOffset': value.originUtcOffset,
        'CreatedDateUtc': (value.createdDateUtc.toISOString()),
        'Amount': value.amount,
        'ProcessDateTime': value.processDateTime === undefined ? undefined : (value.processDateTime.toISOString()),
        'ProcessDateTimeUtc': value.processDateTimeUtc === undefined ? undefined : (value.processDateTimeUtc.toISOString()),
        'IsRefund': value.isRefund,
        'CardStateId': value.cardStateId,
        'OriginalAmount': value.originalAmount,
        'RefundAmount': value.refundAmount,
        'IsFullCapture': value.isFullCapture,
        'AuthorizedAmount': value.authorizedAmount,
        'IsPreAuthorized': value.isPreAuthorized,
        'AmountForFunding': value.amountForFunding,
        'CardState': CardStateLogsToJSON(value.cardState),
        'InstallmentPlan': InstallmentPlansToJSON(value.installmentPlan),
        'Processor': ProcessorsToJSON(value.processor),
        'FeesDocuments': value.feesDocuments === undefined ? undefined : ((value.feesDocuments as Array<any>).map(FeesDocumentsToJSON)),
        'FundingCollectDocumentDetails': value.fundingCollectDocumentDetails === undefined ? undefined : ((value.fundingCollectDocumentDetails as Array<any>).map(FundingCollectDocumentDetailsToJSON)),
        'InstallmentPaymentGatewayTransactionLogs': value.installmentPaymentGatewayTransactionLogs === undefined ? undefined : ((value.installmentPaymentGatewayTransactionLogs as Array<any>).map(InstallmentPaymentGatewayTransactionLogsToJSON)),
        'TransferDocumentDetails': value.transferDocumentDetails === undefined ? undefined : ((value.transferDocumentDetails as Array<any>).map(TransferDocumentDetailsToJSON)),
        'MerchantAccountType': MerchantAccountTypeToJSON(value.merchantAccountType),
        'Status': InstallmentStatusToJSON(value.status),
    };
}


