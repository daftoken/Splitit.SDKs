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
import { CollectDocuments } from './collectDocuments';
import { EntityBase } from './entityBase';
import { FundingCollectDocumentDetailsAllOf } from './fundingCollectDocumentDetailsAllOf';
import { FundingPayDocumentDetails } from './fundingPayDocumentDetails';
import { FundingTransferReason } from './fundingTransferReason';
import { InstallmentPlans } from './installmentPlans';
import { Installments } from './installments';

export class FundingCollectDocumentDetails {
    'id': number;
    'amount': number;
    'collectDocumentId': number;
    'installmentId'?: number;
    'planId'?: number;
    'collectDocument'?: CollectDocuments;
    'installment'?: Installments;
    'plan'?: InstallmentPlans;
    'fundingPayDocumentDetails'?: Array<FundingPayDocumentDetails>;
    'transferReason': FundingTransferReason;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "collectDocumentId",
            "baseName": "CollectDocumentId",
            "type": "number"
        },
        {
            "name": "installmentId",
            "baseName": "InstallmentId",
            "type": "number"
        },
        {
            "name": "planId",
            "baseName": "PlanId",
            "type": "number"
        },
        {
            "name": "collectDocument",
            "baseName": "CollectDocument",
            "type": "CollectDocuments"
        },
        {
            "name": "installment",
            "baseName": "Installment",
            "type": "Installments"
        },
        {
            "name": "plan",
            "baseName": "Plan",
            "type": "InstallmentPlans"
        },
        {
            "name": "fundingPayDocumentDetails",
            "baseName": "FundingPayDocumentDetails",
            "type": "Array<FundingPayDocumentDetails>"
        },
        {
            "name": "transferReason",
            "baseName": "TransferReason",
            "type": "FundingTransferReason"
        }    ];

    static getAttributeTypeMap() {
        return FundingCollectDocumentDetails.attributeTypeMap;
    }
}

