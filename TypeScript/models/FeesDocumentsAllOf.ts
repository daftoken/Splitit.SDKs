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
    AccountingParty,
    AccountingPartyFromJSON,
    AccountingPartyFromJSONTyped,
    AccountingPartyToJSON,
    BusinessUnits,
    BusinessUnitsFromJSON,
    BusinessUnitsFromJSONTyped,
    BusinessUnitsToJSON,
    Currencies,
    CurrenciesFromJSON,
    CurrenciesFromJSONTyped,
    CurrenciesToJSON,
    FeesDocuments,
    FeesDocumentsFromJSON,
    FeesDocumentsFromJSONTyped,
    FeesDocumentsToJSON,
    FeesRuleDatas,
    FeesRuleDatasFromJSON,
    FeesRuleDatasFromJSONTyped,
    FeesRuleDatasToJSON,
    FeesTypes,
    FeesTypesFromJSON,
    FeesTypesFromJSONTyped,
    FeesTypesToJSON,
    InstallmentPlans,
    InstallmentPlansFromJSON,
    InstallmentPlansFromJSONTyped,
    InstallmentPlansToJSON,
    Installments,
    InstallmentsFromJSON,
    InstallmentsFromJSONTyped,
    InstallmentsToJSON,
    Money2,
    Money2FromJSON,
    Money2FromJSONTyped,
    Money2ToJSON,
    RangeType,
    RangeTypeFromJSON,
    RangeTypeFromJSONTyped,
    RangeTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface FeesDocumentsAllOf
 */
export interface FeesDocumentsAllOf {
    /**
     * 
     * @type {number}
     * @memberof FeesDocumentsAllOf
     */
    feeAmountInEffectiveCurrencyAmount: number;
    /**
     * 
     * @type {number}
     * @memberof FeesDocumentsAllOf
     */
    feeAmountInTransactionCurrencyAmount: number;
    /**
     * 
     * @type {number}
     * @memberof FeesDocumentsAllOf
     */
    feeAmountInUniformCurrencyAmount: number;
    /**
     * 
     * @type {number}
     * @memberof FeesDocumentsAllOf
     */
    effectiveCurrencyId: number;
    /**
     * 
     * @type {number}
     * @memberof FeesDocumentsAllOf
     */
    transactionCurrencyId?: number;
    /**
     * 
     * @type {number}
     * @memberof FeesDocumentsAllOf
     */
    uniformCurrencyId: number;
    /**
     * 
     * @type {number}
     * @memberof FeesDocumentsAllOf
     */
    referenceFeesDocumentId?: number;
    /**
     * 
     * @type {number}
     * @memberof FeesDocumentsAllOf
     */
    installmentId?: number;
    /**
     * 
     * @type {number}
     * @memberof FeesDocumentsAllOf
     */
    planId?: number;
    /**
     * 
     * @type {number}
     * @memberof FeesDocumentsAllOf
     */
    businessUnitId?: number;
    /**
     * 
     * @type {Date}
     * @memberof FeesDocumentsAllOf
     */
    effectiveDateUtc: Date;
    /**
     * 
     * @type {number}
     * @memberof FeesDocumentsAllOf
     */
    feeRuleDataId?: number;
    /**
     * 
     * @type {FeesRuleDatas}
     * @memberof FeesDocumentsAllOf
     */
    feeRuleData?: FeesRuleDatas;
    /**
     * 
     * @type {BusinessUnits}
     * @memberof FeesDocumentsAllOf
     */
    businessUnit?: BusinessUnits;
    /**
     * 
     * @type {Currencies}
     * @memberof FeesDocumentsAllOf
     */
    effectiveCurrency?: Currencies;
    /**
     * 
     * @type {Installments}
     * @memberof FeesDocumentsAllOf
     */
    installment?: Installments;
    /**
     * 
     * @type {InstallmentPlans}
     * @memberof FeesDocumentsAllOf
     */
    plan?: InstallmentPlans;
    /**
     * 
     * @type {FeesDocuments}
     * @memberof FeesDocumentsAllOf
     */
    referenceFeesDocument?: FeesDocuments;
    /**
     * 
     * @type {Currencies}
     * @memberof FeesDocumentsAllOf
     */
    transactionCurrency?: Currencies;
    /**
     * 
     * @type {Currencies}
     * @memberof FeesDocumentsAllOf
     */
    uniformCurrency?: Currencies;
    /**
     * 
     * @type {Array<FeesDocuments>}
     * @memberof FeesDocumentsAllOf
     */
    inverseReferenceFeesDocument?: Array<FeesDocuments>;
    /**
     * 
     * @type {AccountingParty}
     * @memberof FeesDocumentsAllOf
     */
    feeEntity: AccountingParty;
    /**
     * 
     * @type {FeesTypes}
     * @memberof FeesDocumentsAllOf
     */
    feeType: FeesTypes;
    /**
     * 
     * @type {RangeType}
     * @memberof FeesDocumentsAllOf
     */
    rangeType?: RangeType;
    /**
     * 
     * @type {Money2}
     * @memberof FeesDocumentsAllOf
     */
    feeAmountInEffectiveCurrency?: Money2;
    /**
     * 
     * @type {Money2}
     * @memberof FeesDocumentsAllOf
     */
    feeAmountInTransactionCurrency?: Money2;
    /**
     * 
     * @type {Money2}
     * @memberof FeesDocumentsAllOf
     */
    feeAmountInUniformCurrency?: Money2;
}

export function FeesDocumentsAllOfFromJSON(json: any): FeesDocumentsAllOf {
    return FeesDocumentsAllOfFromJSONTyped(json, false);
}

export function FeesDocumentsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeesDocumentsAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'feeAmountInEffectiveCurrencyAmount': json['FeeAmountInEffectiveCurrencyAmount'],
        'feeAmountInTransactionCurrencyAmount': json['FeeAmountInTransactionCurrencyAmount'],
        'feeAmountInUniformCurrencyAmount': json['FeeAmountInUniformCurrencyAmount'],
        'effectiveCurrencyId': json['EffectiveCurrencyId'],
        'transactionCurrencyId': !exists(json, 'TransactionCurrencyId') ? undefined : json['TransactionCurrencyId'],
        'uniformCurrencyId': json['UniformCurrencyId'],
        'referenceFeesDocumentId': !exists(json, 'ReferenceFeesDocumentId') ? undefined : json['ReferenceFeesDocumentId'],
        'installmentId': !exists(json, 'InstallmentId') ? undefined : json['InstallmentId'],
        'planId': !exists(json, 'PlanId') ? undefined : json['PlanId'],
        'businessUnitId': !exists(json, 'BusinessUnitId') ? undefined : json['BusinessUnitId'],
        'effectiveDateUtc': (new Date(json['EffectiveDateUtc'])),
        'feeRuleDataId': !exists(json, 'FeeRuleDataId') ? undefined : json['FeeRuleDataId'],
        'feeRuleData': !exists(json, 'FeeRuleData') ? undefined : FeesRuleDatasFromJSON(json['FeeRuleData']),
        'businessUnit': !exists(json, 'BusinessUnit') ? undefined : BusinessUnitsFromJSON(json['BusinessUnit']),
        'effectiveCurrency': !exists(json, 'EffectiveCurrency') ? undefined : CurrenciesFromJSON(json['EffectiveCurrency']),
        'installment': !exists(json, 'Installment') ? undefined : InstallmentsFromJSON(json['Installment']),
        'plan': !exists(json, 'Plan') ? undefined : InstallmentPlansFromJSON(json['Plan']),
        'referenceFeesDocument': !exists(json, 'ReferenceFeesDocument') ? undefined : FeesDocumentsFromJSON(json['ReferenceFeesDocument']),
        'transactionCurrency': !exists(json, 'TransactionCurrency') ? undefined : CurrenciesFromJSON(json['TransactionCurrency']),
        'uniformCurrency': !exists(json, 'UniformCurrency') ? undefined : CurrenciesFromJSON(json['UniformCurrency']),
        'inverseReferenceFeesDocument': !exists(json, 'InverseReferenceFeesDocument') ? undefined : ((json['InverseReferenceFeesDocument'] as Array<any>).map(FeesDocumentsFromJSON)),
        'feeEntity': AccountingPartyFromJSON(json['FeeEntity']),
        'feeType': FeesTypesFromJSON(json['FeeType']),
        'rangeType': !exists(json, 'RangeType') ? undefined : RangeTypeFromJSON(json['RangeType']),
        'feeAmountInEffectiveCurrency': !exists(json, 'FeeAmountInEffectiveCurrency') ? undefined : Money2FromJSON(json['FeeAmountInEffectiveCurrency']),
        'feeAmountInTransactionCurrency': !exists(json, 'FeeAmountInTransactionCurrency') ? undefined : Money2FromJSON(json['FeeAmountInTransactionCurrency']),
        'feeAmountInUniformCurrency': !exists(json, 'FeeAmountInUniformCurrency') ? undefined : Money2FromJSON(json['FeeAmountInUniformCurrency']),
    };
}

export function FeesDocumentsAllOfToJSON(value?: FeesDocumentsAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'FeeAmountInEffectiveCurrencyAmount': value.feeAmountInEffectiveCurrencyAmount,
        'FeeAmountInTransactionCurrencyAmount': value.feeAmountInTransactionCurrencyAmount,
        'FeeAmountInUniformCurrencyAmount': value.feeAmountInUniformCurrencyAmount,
        'EffectiveCurrencyId': value.effectiveCurrencyId,
        'TransactionCurrencyId': value.transactionCurrencyId,
        'UniformCurrencyId': value.uniformCurrencyId,
        'ReferenceFeesDocumentId': value.referenceFeesDocumentId,
        'InstallmentId': value.installmentId,
        'PlanId': value.planId,
        'BusinessUnitId': value.businessUnitId,
        'EffectiveDateUtc': (value.effectiveDateUtc.toISOString()),
        'FeeRuleDataId': value.feeRuleDataId,
        'FeeRuleData': FeesRuleDatasToJSON(value.feeRuleData),
        'BusinessUnit': BusinessUnitsToJSON(value.businessUnit),
        'EffectiveCurrency': CurrenciesToJSON(value.effectiveCurrency),
        'Installment': InstallmentsToJSON(value.installment),
        'Plan': InstallmentPlansToJSON(value.plan),
        'ReferenceFeesDocument': FeesDocumentsToJSON(value.referenceFeesDocument),
        'TransactionCurrency': CurrenciesToJSON(value.transactionCurrency),
        'UniformCurrency': CurrenciesToJSON(value.uniformCurrency),
        'InverseReferenceFeesDocument': value.inverseReferenceFeesDocument === undefined ? undefined : ((value.inverseReferenceFeesDocument as Array<any>).map(FeesDocumentsToJSON)),
        'FeeEntity': AccountingPartyToJSON(value.feeEntity),
        'FeeType': FeesTypesToJSON(value.feeType),
        'RangeType': RangeTypeToJSON(value.rangeType),
        'FeeAmountInEffectiveCurrency': Money2ToJSON(value.feeAmountInEffectiveCurrency),
        'FeeAmountInTransactionCurrency': Money2ToJSON(value.feeAmountInTransactionCurrency),
        'FeeAmountInUniformCurrency': Money2ToJSON(value.feeAmountInUniformCurrency),
    };
}


