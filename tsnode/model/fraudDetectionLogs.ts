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
import { Cards } from './cards';
import { EntityBase } from './entityBase';
import { FraudCheckResult } from './fraudCheckResult';
import { FraudDetectionLogsAllOf } from './fraudDetectionLogsAllOf';
import { InstallmentPlans } from './installmentPlans';
import { PaymentGatewayTransactionLogs } from './paymentGatewayTransactionLogs';

export class FraudDetectionLogs {
    'id': number;
    'installmentPlanId': number;
    'fullLog'?: string;
    'providerResultDescription'?: string;
    'providerResultCode'?: string;
    'providerReferenceId'?: string;
    'timeLapse': number;
    'cardId': number;
    'provider'?: string;
    'paymentGateWayTransactionLogId'?: number;
    'card'?: Cards;
    'installmentPlan'?: InstallmentPlans;
    'paymentGateWayTransactionLog'?: PaymentGatewayTransactionLogs;
    'result': FraudCheckResult;

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
            "name": "fullLog",
            "baseName": "FullLog",
            "type": "string"
        },
        {
            "name": "providerResultDescription",
            "baseName": "ProviderResultDescription",
            "type": "string"
        },
        {
            "name": "providerResultCode",
            "baseName": "ProviderResultCode",
            "type": "string"
        },
        {
            "name": "providerReferenceId",
            "baseName": "ProviderReferenceId",
            "type": "string"
        },
        {
            "name": "timeLapse",
            "baseName": "TimeLapse",
            "type": "number"
        },
        {
            "name": "cardId",
            "baseName": "CardId",
            "type": "number"
        },
        {
            "name": "provider",
            "baseName": "Provider",
            "type": "string"
        },
        {
            "name": "paymentGateWayTransactionLogId",
            "baseName": "PaymentGateWayTransactionLogId",
            "type": "number"
        },
        {
            "name": "card",
            "baseName": "Card",
            "type": "Cards"
        },
        {
            "name": "installmentPlan",
            "baseName": "InstallmentPlan",
            "type": "InstallmentPlans"
        },
        {
            "name": "paymentGateWayTransactionLog",
            "baseName": "PaymentGateWayTransactionLog",
            "type": "PaymentGatewayTransactionLogs"
        },
        {
            "name": "result",
            "baseName": "Result",
            "type": "FraudCheckResult"
        }    ];

    static getAttributeTypeMap() {
        return FraudDetectionLogs.attributeTypeMap;
    }
}

