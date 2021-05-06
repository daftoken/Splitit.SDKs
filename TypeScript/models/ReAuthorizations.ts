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
    EntityBase,
    EntityBaseFromJSON,
    EntityBaseFromJSONTyped,
    EntityBaseToJSON,
    InstallmentPlans,
    InstallmentPlansFromJSON,
    InstallmentPlansFromJSONTyped,
    InstallmentPlansToJSON,
    InstallmentStatus,
    InstallmentStatusFromJSON,
    InstallmentStatusFromJSONTyped,
    InstallmentStatusToJSON,
    Processors,
    ProcessorsFromJSON,
    ProcessorsFromJSONTyped,
    ProcessorsToJSON,
    ReAuthorizationPaymentGatewayTransactionLogs,
    ReAuthorizationPaymentGatewayTransactionLogsFromJSON,
    ReAuthorizationPaymentGatewayTransactionLogsFromJSONTyped,
    ReAuthorizationPaymentGatewayTransactionLogsToJSON,
    ReAuthorizationsAllOf,
    ReAuthorizationsAllOfFromJSON,
    ReAuthorizationsAllOfFromJSONTyped,
    ReAuthorizationsAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReAuthorizations
 */
export interface ReAuthorizations {
    /**
     * 
     * @type {number}
     * @memberof ReAuthorizations
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof ReAuthorizations
     */
    installmentPlanId: number;
    /**
     * 
     * @type {number}
     * @memberof ReAuthorizations
     */
    processorId: number;
    /**
     * 
     * @type {number}
     * @memberof ReAuthorizations
     */
    amount: number;
    /**
     * 
     * @type {Date}
     * @memberof ReAuthorizations
     */
    processDateTime?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof ReAuthorizations
     */
    isTest: boolean;
    /**
     * 
     * @type {number}
     * @memberof ReAuthorizations
     */
    cardStateId?: number;
    /**
     * 
     * @type {CardStateLogs}
     * @memberof ReAuthorizations
     */
    cardState?: CardStateLogs;
    /**
     * 
     * @type {InstallmentPlans}
     * @memberof ReAuthorizations
     */
    installmentPlan?: InstallmentPlans;
    /**
     * 
     * @type {Processors}
     * @memberof ReAuthorizations
     */
    processor?: Processors;
    /**
     * 
     * @type {Array<ReAuthorizationPaymentGatewayTransactionLogs>}
     * @memberof ReAuthorizations
     */
    reAuthorizationPaymentGatewayTransactionLogs?: Array<ReAuthorizationPaymentGatewayTransactionLogs>;
    /**
     * 
     * @type {InstallmentStatus}
     * @memberof ReAuthorizations
     */
    status: InstallmentStatus;
}

export function ReAuthorizationsFromJSON(json: any): ReAuthorizations {
    return ReAuthorizationsFromJSONTyped(json, false);
}

export function ReAuthorizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReAuthorizations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'installmentPlanId': json['InstallmentPlanId'],
        'processorId': json['ProcessorId'],
        'amount': json['Amount'],
        'processDateTime': !exists(json, 'ProcessDateTime') ? undefined : (new Date(json['ProcessDateTime'])),
        'isTest': json['IsTest'],
        'cardStateId': !exists(json, 'CardStateId') ? undefined : json['CardStateId'],
        'cardState': !exists(json, 'CardState') ? undefined : CardStateLogsFromJSON(json['CardState']),
        'installmentPlan': !exists(json, 'InstallmentPlan') ? undefined : InstallmentPlansFromJSON(json['InstallmentPlan']),
        'processor': !exists(json, 'Processor') ? undefined : ProcessorsFromJSON(json['Processor']),
        'reAuthorizationPaymentGatewayTransactionLogs': !exists(json, 'ReAuthorizationPaymentGatewayTransactionLogs') ? undefined : ((json['ReAuthorizationPaymentGatewayTransactionLogs'] as Array<any>).map(ReAuthorizationPaymentGatewayTransactionLogsFromJSON)),
        'status': InstallmentStatusFromJSON(json['Status']),
    };
}

export function ReAuthorizationsToJSON(value?: ReAuthorizations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'InstallmentPlanId': value.installmentPlanId,
        'ProcessorId': value.processorId,
        'Amount': value.amount,
        'ProcessDateTime': value.processDateTime === undefined ? undefined : (value.processDateTime.toISOString()),
        'IsTest': value.isTest,
        'CardStateId': value.cardStateId,
        'CardState': CardStateLogsToJSON(value.cardState),
        'InstallmentPlan': InstallmentPlansToJSON(value.installmentPlan),
        'Processor': ProcessorsToJSON(value.processor),
        'ReAuthorizationPaymentGatewayTransactionLogs': value.reAuthorizationPaymentGatewayTransactionLogs === undefined ? undefined : ((value.reAuthorizationPaymentGatewayTransactionLogs as Array<any>).map(ReAuthorizationPaymentGatewayTransactionLogsToJSON)),
        'Status': InstallmentStatusToJSON(value.status),
    };
}


