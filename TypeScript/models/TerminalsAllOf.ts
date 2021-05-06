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
    AccountUpdaterSubscribersScopes,
    AccountUpdaterSubscribersScopesFromJSON,
    AccountUpdaterSubscribersScopesFromJSONTyped,
    AccountUpdaterSubscribersScopesToJSON,
    Agents,
    AgentsFromJSON,
    AgentsFromJSONTyped,
    AgentsToJSON,
    BusinessUnits,
    BusinessUnitsFromJSON,
    BusinessUnitsFromJSONTyped,
    BusinessUnitsToJSON,
    ChbDefaultAction,
    ChbDefaultActionFromJSON,
    ChbDefaultActionFromJSONTyped,
    ChbDefaultActionToJSON,
    Currencies,
    CurrenciesFromJSON,
    CurrenciesFromJSONTyped,
    CurrenciesToJSON,
    FailureUnderFrozenInstallmentsPlan,
    FailureUnderFrozenInstallmentsPlanFromJSON,
    FailureUnderFrozenInstallmentsPlanFromJSONTyped,
    FailureUnderFrozenInstallmentsPlanToJSON,
    InstallmentPlans,
    InstallmentPlansFromJSON,
    InstallmentPlansFromJSONTyped,
    InstallmentPlansToJSON,
    IntegrationType,
    IntegrationTypeFromJSON,
    IntegrationTypeFromJSONTyped,
    IntegrationTypeToJSON,
    Merchants,
    MerchantsFromJSON,
    MerchantsFromJSONTyped,
    MerchantsToJSON,
    ReconciliationReports,
    ReconciliationReportsFromJSON,
    ReconciliationReportsFromJSONTyped,
    ReconciliationReportsToJSON,
    RefundUnderCancelation,
    RefundUnderCancelationFromJSON,
    RefundUnderCancelationFromJSONTyped,
    RefundUnderCancelationToJSON,
    StateLimitRuleDatas,
    StateLimitRuleDatasFromJSON,
    StateLimitRuleDatasFromJSONTyped,
    StateLimitRuleDatasToJSON,
    TerminalCountries,
    TerminalCountriesFromJSON,
    TerminalCountriesFromJSONTyped,
    TerminalCountriesToJSON,
    TerminalGatewayDatas,
    TerminalGatewayDatasFromJSON,
    TerminalGatewayDatasFromJSONTyped,
    TerminalGatewayDatasToJSON,
    TerminalKvps,
    TerminalKvpsFromJSON,
    TerminalKvpsFromJSONTyped,
    TerminalKvpsToJSON,
    TestModes,
    TestModesFromJSON,
    TestModesFromJSONTyped,
    TestModesToJSON,
} from './';

/**
 * 
 * @export
 * @interface TerminalsAllOf
 */
export interface TerminalsAllOf {
    /**
     * 
     * @type {string}
     * @memberof TerminalsAllOf
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TerminalsAllOf
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof TerminalsAllOf
     */
    apiKey?: string;
    /**
     * 
     * @type {number}
     * @memberof TerminalsAllOf
     */
    wizardTimeout: number;
    /**
     * 
     * @type {number}
     * @memberof TerminalsAllOf
     */
    merchantId: number;
    /**
     * 
     * @type {number}
     * @memberof TerminalsAllOf
     */
    utcOffset: number;
    /**
     * 
     * @type {boolean}
     * @memberof TerminalsAllOf
     */
    isDisabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TerminalsAllOf
     */
    chargeBeforeShipping: boolean;
    /**
     * 
     * @type {string}
     * @memberof TerminalsAllOf
     */
    terminalId?: string;
    /**
     * 
     * @type {number}
     * @memberof TerminalsAllOf
     */
    agentId: number;
    /**
     * 
     * @type {boolean}
     * @memberof TerminalsAllOf
     */
    canCancelInstallmentsPlan: boolean;
    /**
     * 
     * @type {string}
     * @memberof TerminalsAllOf
     */
    crmId?: string;
    /**
     * 
     * @type {number}
     * @memberof TerminalsAllOf
     */
    currencyId?: number;
    /**
     * 
     * @type {number}
     * @memberof TerminalsAllOf
     */
    pendingShipmentReminderDays: number;
    /**
     * 
     * @type {number}
     * @memberof TerminalsAllOf
     */
    businessUnitId: number;
    /**
     * 
     * @type {number}
     * @memberof TerminalsAllOf
     */
    keepNonApprovedPlanLive: number;
    /**
     * 
     * @type {boolean}
     * @memberof TerminalsAllOf
     */
    useTestGateway: boolean;
    /**
     * 
     * @type {Agents}
     * @memberof TerminalsAllOf
     */
    agent?: Agents;
    /**
     * 
     * @type {BusinessUnits}
     * @memberof TerminalsAllOf
     */
    businessUnit?: BusinessUnits;
    /**
     * 
     * @type {Currencies}
     * @memberof TerminalsAllOf
     */
    currency?: Currencies;
    /**
     * 
     * @type {Merchants}
     * @memberof TerminalsAllOf
     */
    merchant?: Merchants;
    /**
     * 
     * @type {Array<AccountUpdaterSubscribersScopes>}
     * @memberof TerminalsAllOf
     */
    accountUpdaterSubscribersScopes?: Array<AccountUpdaterSubscribersScopes>;
    /**
     * 
     * @type {Array<InstallmentPlans>}
     * @memberof TerminalsAllOf
     */
    installmentPlans?: Array<InstallmentPlans>;
    /**
     * 
     * @type {Array<ReconciliationReports>}
     * @memberof TerminalsAllOf
     */
    reconciliationReports?: Array<ReconciliationReports>;
    /**
     * 
     * @type {Array<StateLimitRuleDatas>}
     * @memberof TerminalsAllOf
     */
    stateLimitRuleDatas?: Array<StateLimitRuleDatas>;
    /**
     * 
     * @type {Array<TerminalCountries>}
     * @memberof TerminalsAllOf
     */
    terminalCountries?: Array<TerminalCountries>;
    /**
     * 
     * @type {Array<TerminalGatewayDatas>}
     * @memberof TerminalsAllOf
     */
    terminalGatewayDatas?: Array<TerminalGatewayDatas>;
    /**
     * 
     * @type {Array<TerminalKvps>}
     * @memberof TerminalsAllOf
     */
    terminalKvps?: Array<TerminalKvps>;
    /**
     * 
     * @type {boolean}
     * @memberof TerminalsAllOf
     */
    continueExistingPlanWithOriginalGateway: boolean;
    /**
     * 
     * @type {TerminalGatewayDatas}
     * @memberof TerminalsAllOf
     */
    activeTerminalData?: TerminalGatewayDatas;
    /**
     * 
     * @type {ChbDefaultAction}
     * @memberof TerminalsAllOf
     */
    chbDefaultAction: ChbDefaultAction;
    /**
     * 
     * @type {FailureUnderFrozenInstallmentsPlan}
     * @memberof TerminalsAllOf
     */
    failureUnderFrozenInstallmentsPlan: FailureUnderFrozenInstallmentsPlan;
    /**
     * 
     * @type {RefundUnderCancelation}
     * @memberof TerminalsAllOf
     */
    refundUnderCancelation: RefundUnderCancelation;
    /**
     * 
     * @type {IntegrationType}
     * @memberof TerminalsAllOf
     */
    integrationType: IntegrationType;
    /**
     * 
     * @type {TestModes}
     * @memberof TerminalsAllOf
     */
    testMode: TestModes;
}

export function TerminalsAllOfFromJSON(json: any): TerminalsAllOf {
    return TerminalsAllOfFromJSONTyped(json, false);
}

export function TerminalsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerminalsAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'email': !exists(json, 'Email') ? undefined : json['Email'],
        'apiKey': !exists(json, 'ApiKey') ? undefined : json['ApiKey'],
        'wizardTimeout': json['WizardTimeout'],
        'merchantId': json['MerchantId'],
        'utcOffset': json['UtcOffset'],
        'isDisabled': json['IsDisabled'],
        'chargeBeforeShipping': json['ChargeBeforeShipping'],
        'terminalId': !exists(json, 'TerminalId') ? undefined : json['TerminalId'],
        'agentId': json['AgentId'],
        'canCancelInstallmentsPlan': json['CanCancelInstallmentsPlan'],
        'crmId': !exists(json, 'CrmId') ? undefined : json['CrmId'],
        'currencyId': !exists(json, 'CurrencyId') ? undefined : json['CurrencyId'],
        'pendingShipmentReminderDays': json['PendingShipmentReminderDays'],
        'businessUnitId': json['BusinessUnitId'],
        'keepNonApprovedPlanLive': json['KeepNonApprovedPlanLive'],
        'useTestGateway': json['UseTestGateway'],
        'agent': !exists(json, 'Agent') ? undefined : AgentsFromJSON(json['Agent']),
        'businessUnit': !exists(json, 'BusinessUnit') ? undefined : BusinessUnitsFromJSON(json['BusinessUnit']),
        'currency': !exists(json, 'Currency') ? undefined : CurrenciesFromJSON(json['Currency']),
        'merchant': !exists(json, 'Merchant') ? undefined : MerchantsFromJSON(json['Merchant']),
        'accountUpdaterSubscribersScopes': !exists(json, 'AccountUpdaterSubscribersScopes') ? undefined : ((json['AccountUpdaterSubscribersScopes'] as Array<any>).map(AccountUpdaterSubscribersScopesFromJSON)),
        'installmentPlans': !exists(json, 'InstallmentPlans') ? undefined : ((json['InstallmentPlans'] as Array<any>).map(InstallmentPlansFromJSON)),
        'reconciliationReports': !exists(json, 'ReconciliationReports') ? undefined : ((json['ReconciliationReports'] as Array<any>).map(ReconciliationReportsFromJSON)),
        'stateLimitRuleDatas': !exists(json, 'StateLimitRuleDatas') ? undefined : ((json['StateLimitRuleDatas'] as Array<any>).map(StateLimitRuleDatasFromJSON)),
        'terminalCountries': !exists(json, 'TerminalCountries') ? undefined : ((json['TerminalCountries'] as Array<any>).map(TerminalCountriesFromJSON)),
        'terminalGatewayDatas': !exists(json, 'TerminalGatewayDatas') ? undefined : ((json['TerminalGatewayDatas'] as Array<any>).map(TerminalGatewayDatasFromJSON)),
        'terminalKvps': !exists(json, 'TerminalKvps') ? undefined : ((json['TerminalKvps'] as Array<any>).map(TerminalKvpsFromJSON)),
        'continueExistingPlanWithOriginalGateway': json['ContinueExistingPlanWithOriginalGateway'],
        'activeTerminalData': !exists(json, 'ActiveTerminalData') ? undefined : TerminalGatewayDatasFromJSON(json['ActiveTerminalData']),
        'chbDefaultAction': ChbDefaultActionFromJSON(json['ChbDefaultAction']),
        'failureUnderFrozenInstallmentsPlan': FailureUnderFrozenInstallmentsPlanFromJSON(json['FailureUnderFrozenInstallmentsPlan']),
        'refundUnderCancelation': RefundUnderCancelationFromJSON(json['RefundUnderCancelation']),
        'integrationType': IntegrationTypeFromJSON(json['IntegrationType']),
        'testMode': TestModesFromJSON(json['TestMode']),
    };
}

export function TerminalsAllOfToJSON(value?: TerminalsAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Email': value.email,
        'ApiKey': value.apiKey,
        'WizardTimeout': value.wizardTimeout,
        'MerchantId': value.merchantId,
        'UtcOffset': value.utcOffset,
        'IsDisabled': value.isDisabled,
        'ChargeBeforeShipping': value.chargeBeforeShipping,
        'TerminalId': value.terminalId,
        'AgentId': value.agentId,
        'CanCancelInstallmentsPlan': value.canCancelInstallmentsPlan,
        'CrmId': value.crmId,
        'CurrencyId': value.currencyId,
        'PendingShipmentReminderDays': value.pendingShipmentReminderDays,
        'BusinessUnitId': value.businessUnitId,
        'KeepNonApprovedPlanLive': value.keepNonApprovedPlanLive,
        'UseTestGateway': value.useTestGateway,
        'Agent': AgentsToJSON(value.agent),
        'BusinessUnit': BusinessUnitsToJSON(value.businessUnit),
        'Currency': CurrenciesToJSON(value.currency),
        'Merchant': MerchantsToJSON(value.merchant),
        'AccountUpdaterSubscribersScopes': value.accountUpdaterSubscribersScopes === undefined ? undefined : ((value.accountUpdaterSubscribersScopes as Array<any>).map(AccountUpdaterSubscribersScopesToJSON)),
        'InstallmentPlans': value.installmentPlans === undefined ? undefined : ((value.installmentPlans as Array<any>).map(InstallmentPlansToJSON)),
        'ReconciliationReports': value.reconciliationReports === undefined ? undefined : ((value.reconciliationReports as Array<any>).map(ReconciliationReportsToJSON)),
        'StateLimitRuleDatas': value.stateLimitRuleDatas === undefined ? undefined : ((value.stateLimitRuleDatas as Array<any>).map(StateLimitRuleDatasToJSON)),
        'TerminalCountries': value.terminalCountries === undefined ? undefined : ((value.terminalCountries as Array<any>).map(TerminalCountriesToJSON)),
        'TerminalGatewayDatas': value.terminalGatewayDatas === undefined ? undefined : ((value.terminalGatewayDatas as Array<any>).map(TerminalGatewayDatasToJSON)),
        'TerminalKvps': value.terminalKvps === undefined ? undefined : ((value.terminalKvps as Array<any>).map(TerminalKvpsToJSON)),
        'ContinueExistingPlanWithOriginalGateway': value.continueExistingPlanWithOriginalGateway,
        'ActiveTerminalData': TerminalGatewayDatasToJSON(value.activeTerminalData),
        'ChbDefaultAction': ChbDefaultActionToJSON(value.chbDefaultAction),
        'FailureUnderFrozenInstallmentsPlan': FailureUnderFrozenInstallmentsPlanToJSON(value.failureUnderFrozenInstallmentsPlan),
        'RefundUnderCancelation': RefundUnderCancelationToJSON(value.refundUnderCancelation),
        'IntegrationType': IntegrationTypeToJSON(value.integrationType),
        'TestMode': TestModesToJSON(value.testMode),
    };
}


