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
import { AccountingParty } from './accountingParty';
import { BusinessUnits } from './businessUnits';
import { Currencies } from './currencies';
import { EntityBase } from './entityBase';
import { FeesDocumentsAllOf } from './feesDocumentsAllOf';
import { FeesRuleDatas } from './feesRuleDatas';
import { FeesTypes } from './feesTypes';
import { InstallmentPlans } from './installmentPlans';
import { Installments } from './installments';
import { Money2 } from './money2';
import { RangeType } from './rangeType';

export class FeesDocuments {
    'id': number;
    'feeAmountInEffectiveCurrencyAmount': number;
    'feeAmountInTransactionCurrencyAmount': number;
    'feeAmountInUniformCurrencyAmount': number;
    'effectiveCurrencyId': number;
    'transactionCurrencyId'?: number;
    'uniformCurrencyId': number;
    'referenceFeesDocumentId'?: number;
    'installmentId'?: number;
    'planId'?: number;
    'businessUnitId'?: number;
    'effectiveDateUtc': Date;
    'feeRuleDataId'?: number;
    'feeRuleData'?: FeesRuleDatas;
    'businessUnit'?: BusinessUnits;
    'effectiveCurrency'?: Currencies;
    'installment'?: Installments;
    'plan'?: InstallmentPlans;
    'referenceFeesDocument'?: FeesDocuments;
    'transactionCurrency'?: Currencies;
    'uniformCurrency'?: Currencies;
    'inverseReferenceFeesDocument'?: Array<FeesDocuments>;
    'feeEntity': AccountingParty;
    'feeType': FeesTypes;
    'rangeType'?: RangeType;
    'feeAmountInEffectiveCurrency'?: Money2;
    'feeAmountInTransactionCurrency'?: Money2;
    'feeAmountInUniformCurrency'?: Money2;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number"
        },
        {
            "name": "feeAmountInEffectiveCurrencyAmount",
            "baseName": "FeeAmountInEffectiveCurrencyAmount",
            "type": "number"
        },
        {
            "name": "feeAmountInTransactionCurrencyAmount",
            "baseName": "FeeAmountInTransactionCurrencyAmount",
            "type": "number"
        },
        {
            "name": "feeAmountInUniformCurrencyAmount",
            "baseName": "FeeAmountInUniformCurrencyAmount",
            "type": "number"
        },
        {
            "name": "effectiveCurrencyId",
            "baseName": "EffectiveCurrencyId",
            "type": "number"
        },
        {
            "name": "transactionCurrencyId",
            "baseName": "TransactionCurrencyId",
            "type": "number"
        },
        {
            "name": "uniformCurrencyId",
            "baseName": "UniformCurrencyId",
            "type": "number"
        },
        {
            "name": "referenceFeesDocumentId",
            "baseName": "ReferenceFeesDocumentId",
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
            "name": "businessUnitId",
            "baseName": "BusinessUnitId",
            "type": "number"
        },
        {
            "name": "effectiveDateUtc",
            "baseName": "EffectiveDateUtc",
            "type": "Date"
        },
        {
            "name": "feeRuleDataId",
            "baseName": "FeeRuleDataId",
            "type": "number"
        },
        {
            "name": "feeRuleData",
            "baseName": "FeeRuleData",
            "type": "FeesRuleDatas"
        },
        {
            "name": "businessUnit",
            "baseName": "BusinessUnit",
            "type": "BusinessUnits"
        },
        {
            "name": "effectiveCurrency",
            "baseName": "EffectiveCurrency",
            "type": "Currencies"
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
            "name": "referenceFeesDocument",
            "baseName": "ReferenceFeesDocument",
            "type": "FeesDocuments"
        },
        {
            "name": "transactionCurrency",
            "baseName": "TransactionCurrency",
            "type": "Currencies"
        },
        {
            "name": "uniformCurrency",
            "baseName": "UniformCurrency",
            "type": "Currencies"
        },
        {
            "name": "inverseReferenceFeesDocument",
            "baseName": "InverseReferenceFeesDocument",
            "type": "Array<FeesDocuments>"
        },
        {
            "name": "feeEntity",
            "baseName": "FeeEntity",
            "type": "AccountingParty"
        },
        {
            "name": "feeType",
            "baseName": "FeeType",
            "type": "FeesTypes"
        },
        {
            "name": "rangeType",
            "baseName": "RangeType",
            "type": "RangeType"
        },
        {
            "name": "feeAmountInEffectiveCurrency",
            "baseName": "FeeAmountInEffectiveCurrency",
            "type": "Money2"
        },
        {
            "name": "feeAmountInTransactionCurrency",
            "baseName": "FeeAmountInTransactionCurrency",
            "type": "Money2"
        },
        {
            "name": "feeAmountInUniformCurrency",
            "baseName": "FeeAmountInUniformCurrency",
            "type": "Money2"
        }    ];

    static getAttributeTypeMap() {
        return FeesDocuments.attributeTypeMap;
    }
}

