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
    Currencies,
    CurrenciesFromJSON,
    CurrenciesFromJSONTyped,
    CurrenciesToJSON,
    EntityBase,
    EntityBaseFromJSON,
    EntityBaseFromJSONTyped,
    EntityBaseToJSON,
    FeesRuleDatas,
    FeesRuleDatasFromJSON,
    FeesRuleDatasFromJSONTyped,
    FeesRuleDatasToJSON,
    FundingRuleDataScpProviderSetting,
    FundingRuleDataScpProviderSettingFromJSON,
    FundingRuleDataScpProviderSettingFromJSONTyped,
    FundingRuleDataScpProviderSettingToJSON,
    InstallmentPlanTerminalDatasAllOf,
    InstallmentPlanTerminalDatasAllOfFromJSON,
    InstallmentPlanTerminalDatasAllOfFromJSONTyped,
    InstallmentPlanTerminalDatasAllOfToJSON,
    InstallmentPlans,
    InstallmentPlansFromJSON,
    InstallmentPlansFromJSONTyped,
    InstallmentPlansToJSON,
} from './';

/**
 * 
 * @export
 * @interface InstallmentPlanTerminalDatas
 */
export interface InstallmentPlanTerminalDatas {
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanTerminalDatas
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanTerminalDatas
     */
    scpVariableCostAnnualPercent: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanTerminalDatas
     */
    scpFundingPercent: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanTerminalDatas
     */
    scpReservePoolPercent: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanTerminalDatas
     */
    scpReturnMerchantMaxDays: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanTerminalDatas
     */
    scpRevenueSharePercent: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanTerminalDatas
     */
    scpFixedCost: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanTerminalDatas
     */
    accountingCurrencyId?: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanTerminalDatas
     */
    fundingRuleScpSettingId?: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanTerminalDatas
     */
    feesRuleDataId?: number;
    /**
     * 
     * @type {Currencies}
     * @memberof InstallmentPlanTerminalDatas
     */
    accountingCurrency?: Currencies;
    /**
     * 
     * @type {FeesRuleDatas}
     * @memberof InstallmentPlanTerminalDatas
     */
    feesRuleData?: FeesRuleDatas;
    /**
     * 
     * @type {FundingRuleDataScpProviderSetting}
     * @memberof InstallmentPlanTerminalDatas
     */
    fundingRuleScpSetting?: FundingRuleDataScpProviderSetting;
    /**
     * 
     * @type {Array<InstallmentPlans>}
     * @memberof InstallmentPlanTerminalDatas
     */
    installmentPlans?: Array<InstallmentPlans>;
}

export function InstallmentPlanTerminalDatasFromJSON(json: any): InstallmentPlanTerminalDatas {
    return InstallmentPlanTerminalDatasFromJSONTyped(json, false);
}

export function InstallmentPlanTerminalDatasFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstallmentPlanTerminalDatas {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'scpVariableCostAnnualPercent': json['ScpVariableCostAnnualPercent'],
        'scpFundingPercent': json['ScpFundingPercent'],
        'scpReservePoolPercent': json['ScpReservePoolPercent'],
        'scpReturnMerchantMaxDays': json['ScpReturnMerchantMaxDays'],
        'scpRevenueSharePercent': json['ScpRevenueSharePercent'],
        'scpFixedCost': json['ScpFixedCost'],
        'accountingCurrencyId': !exists(json, 'AccountingCurrencyId') ? undefined : json['AccountingCurrencyId'],
        'fundingRuleScpSettingId': !exists(json, 'FundingRuleScpSettingId') ? undefined : json['FundingRuleScpSettingId'],
        'feesRuleDataId': !exists(json, 'FeesRuleDataId') ? undefined : json['FeesRuleDataId'],
        'accountingCurrency': !exists(json, 'AccountingCurrency') ? undefined : CurrenciesFromJSON(json['AccountingCurrency']),
        'feesRuleData': !exists(json, 'FeesRuleData') ? undefined : FeesRuleDatasFromJSON(json['FeesRuleData']),
        'fundingRuleScpSetting': !exists(json, 'FundingRuleScpSetting') ? undefined : FundingRuleDataScpProviderSettingFromJSON(json['FundingRuleScpSetting']),
        'installmentPlans': !exists(json, 'InstallmentPlans') ? undefined : ((json['InstallmentPlans'] as Array<any>).map(InstallmentPlansFromJSON)),
    };
}

export function InstallmentPlanTerminalDatasToJSON(value?: InstallmentPlanTerminalDatas | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'ScpVariableCostAnnualPercent': value.scpVariableCostAnnualPercent,
        'ScpFundingPercent': value.scpFundingPercent,
        'ScpReservePoolPercent': value.scpReservePoolPercent,
        'ScpReturnMerchantMaxDays': value.scpReturnMerchantMaxDays,
        'ScpRevenueSharePercent': value.scpRevenueSharePercent,
        'ScpFixedCost': value.scpFixedCost,
        'AccountingCurrencyId': value.accountingCurrencyId,
        'FundingRuleScpSettingId': value.fundingRuleScpSettingId,
        'FeesRuleDataId': value.feesRuleDataId,
        'AccountingCurrency': CurrenciesToJSON(value.accountingCurrency),
        'FeesRuleData': FeesRuleDatasToJSON(value.feesRuleData),
        'FundingRuleScpSetting': FundingRuleDataScpProviderSettingToJSON(value.fundingRuleScpSetting),
        'InstallmentPlans': value.installmentPlans === undefined ? undefined : ((value.installmentPlans as Array<any>).map(InstallmentPlansToJSON)),
    };
}


