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

import { RequestFile } from '../api';
import { CardStateLogs } from './cardStateLogs';
import { EntityBase } from './entityBase';
import { FeesDocuments } from './feesDocuments';
import { FundingCollectDocumentDetails } from './fundingCollectDocumentDetails';
import { InstallmentPaymentGatewayTransactionLogs } from './installmentPaymentGatewayTransactionLogs';
import { InstallmentPlans } from './installmentPlans';
import { InstallmentStatus } from './installmentStatus';
import { InstallmentsAllOf } from './installmentsAllOf';
import { MerchantAccountType } from './merchantAccountType';
import { Processors } from './processors';
import { TransferDocumentDetails } from './transferDocumentDetails';

export class Installments {
    'id': number;
    'installmentPlanId': number;
    'installmentNumber': number;
    'processorId': number;
    'originUtcOffset': number;
    'createdDateUtc': Date;
    'amount': number;
    'processDateTime'?: Date;
    'processDateTimeUtc'?: Date;
    'isRefund': boolean;
    'cardStateId'?: number;
    'originalAmount': number;
    'refundAmount': number;
    'isFullCapture': boolean;
    'authorizedAmount': number;
    'isPreAuthorized': boolean;
    'amountForFunding': number;
    'cardState'?: CardStateLogs;
    'installmentPlan'?: InstallmentPlans;
    'processor'?: Processors;
    'feesDocuments'?: Array<FeesDocuments>;
    'fundingCollectDocumentDetails'?: Array<FundingCollectDocumentDetails>;
    'installmentPaymentGatewayTransactionLogs'?: Array<InstallmentPaymentGatewayTransactionLogs>;
    'transferDocumentDetails'?: Array<TransferDocumentDetails>;
    'merchantAccountType': MerchantAccountType;
    'status': InstallmentStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number"
        },
        {
            "name": "installmentPlanId",
            "baseName": "InstallmentPlanId",
            "type": "number"
        },
        {
            "name": "installmentNumber",
            "baseName": "InstallmentNumber",
            "type": "number"
        },
        {
            "name": "processorId",
            "baseName": "ProcessorId",
            "type": "number"
        },
        {
            "name": "originUtcOffset",
            "baseName": "OriginUtcOffset",
            "type": "number"
        },
        {
            "name": "createdDateUtc",
            "baseName": "CreatedDateUtc",
            "type": "Date"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "processDateTime",
            "baseName": "ProcessDateTime",
            "type": "Date"
        },
        {
            "name": "processDateTimeUtc",
            "baseName": "ProcessDateTimeUtc",
            "type": "Date"
        },
        {
            "name": "isRefund",
            "baseName": "IsRefund",
            "type": "boolean"
        },
        {
            "name": "cardStateId",
            "baseName": "CardStateId",
            "type": "number"
        },
        {
            "name": "originalAmount",
            "baseName": "OriginalAmount",
            "type": "number"
        },
        {
            "name": "refundAmount",
            "baseName": "RefundAmount",
            "type": "number"
        },
        {
            "name": "isFullCapture",
            "baseName": "IsFullCapture",
            "type": "boolean"
        },
        {
            "name": "authorizedAmount",
            "baseName": "AuthorizedAmount",
            "type": "number"
        },
        {
            "name": "isPreAuthorized",
            "baseName": "IsPreAuthorized",
            "type": "boolean"
        },
        {
            "name": "amountForFunding",
            "baseName": "AmountForFunding",
            "type": "number"
        },
        {
            "name": "cardState",
            "baseName": "CardState",
            "type": "CardStateLogs"
        },
        {
            "name": "installmentPlan",
            "baseName": "InstallmentPlan",
            "type": "InstallmentPlans"
        },
        {
            "name": "processor",
            "baseName": "Processor",
            "type": "Processors"
        },
        {
            "name": "feesDocuments",
            "baseName": "FeesDocuments",
            "type": "Array<FeesDocuments>"
        },
        {
            "name": "fundingCollectDocumentDetails",
            "baseName": "FundingCollectDocumentDetails",
            "type": "Array<FundingCollectDocumentDetails>"
        },
        {
            "name": "installmentPaymentGatewayTransactionLogs",
            "baseName": "InstallmentPaymentGatewayTransactionLogs",
            "type": "Array<InstallmentPaymentGatewayTransactionLogs>"
        },
        {
            "name": "transferDocumentDetails",
            "baseName": "TransferDocumentDetails",
            "type": "Array<TransferDocumentDetails>"
        },
        {
            "name": "merchantAccountType",
            "baseName": "MerchantAccountType",
            "type": "MerchantAccountType"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "InstallmentStatus"
        }    ];

    static getAttributeTypeMap() {
        return Installments.attributeTypeMap;
    }
}

