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
import { Installments } from './installments';
import { PaymentGatewayTransactionLogs } from './paymentGatewayTransactionLogs';

export class InstallmentPaymentGatewayTransactionLogs {
    'installmentId': number;
    'paymentGatewayTransactionLogId': number;
    'installment'?: Installments;
    'paymentGatewayTransactionLog'?: PaymentGatewayTransactionLogs;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "installmentId",
            "baseName": "InstallmentId",
            "type": "number"
        },
        {
            "name": "paymentGatewayTransactionLogId",
            "baseName": "PaymentGatewayTransactionLogId",
            "type": "number"
        },
        {
            "name": "installment",
            "baseName": "Installment",
            "type": "Installments"
        },
        {
            "name": "paymentGatewayTransactionLog",
            "baseName": "PaymentGatewayTransactionLog",
            "type": "PaymentGatewayTransactionLogs"
        }    ];

    static getAttributeTypeMap() {
        return InstallmentPaymentGatewayTransactionLogs.attributeTypeMap;
    }
}

