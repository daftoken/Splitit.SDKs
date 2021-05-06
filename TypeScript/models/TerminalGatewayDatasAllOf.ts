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
    PaymentGatewayTransactionLogs,
    PaymentGatewayTransactionLogsFromJSON,
    PaymentGatewayTransactionLogsFromJSONTyped,
    PaymentGatewayTransactionLogsToJSON,
    Processors,
    ProcessorsFromJSON,
    ProcessorsFromJSONTyped,
    ProcessorsToJSON,
    Terminals,
    TerminalsFromJSON,
    TerminalsFromJSONTyped,
    TerminalsToJSON,
} from './';

/**
 * 
 * @export
 * @interface TerminalGatewayDatasAllOf
 */
export interface TerminalGatewayDatasAllOf {
    /**
     * 
     * @type {string}
     * @memberof TerminalGatewayDatasAllOf
     */
    token?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TerminalGatewayDatasAllOf
     */
    isActive: boolean;
    /**
     * 
     * @type {number}
     * @memberof TerminalGatewayDatasAllOf
     */
    numberOfAllowedDaysForRefund: number;
    /**
     * 
     * @type {number}
     * @memberof TerminalGatewayDatasAllOf
     */
    processorId?: number;
    /**
     * 
     * @type {number}
     * @memberof TerminalGatewayDatasAllOf
     */
    terminalId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TerminalGatewayDatasAllOf
     */
    isAddressRequires: boolean;
    /**
     * 
     * @type {Processors}
     * @memberof TerminalGatewayDatasAllOf
     */
    processor?: Processors;
    /**
     * 
     * @type {Terminals}
     * @memberof TerminalGatewayDatasAllOf
     */
    terminal?: Terminals;
    /**
     * 
     * @type {Array<PaymentGatewayTransactionLogs>}
     * @memberof TerminalGatewayDatasAllOf
     */
    paymentGatewayTransactionLogs?: Array<PaymentGatewayTransactionLogs>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof TerminalGatewayDatasAllOf
     */
    authenticationValues?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof TerminalGatewayDatasAllOf
     */
    authenticationValuesAsXml?: string;
}

export function TerminalGatewayDatasAllOfFromJSON(json: any): TerminalGatewayDatasAllOf {
    return TerminalGatewayDatasAllOfFromJSONTyped(json, false);
}

export function TerminalGatewayDatasAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerminalGatewayDatasAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'Token') ? undefined : json['Token'],
        'isActive': json['IsActive'],
        'numberOfAllowedDaysForRefund': json['NumberOfAllowedDaysForRefund'],
        'processorId': !exists(json, 'ProcessorId') ? undefined : json['ProcessorId'],
        'terminalId': !exists(json, 'TerminalId') ? undefined : json['TerminalId'],
        'isAddressRequires': json['IsAddressRequires'],
        'processor': !exists(json, 'Processor') ? undefined : ProcessorsFromJSON(json['Processor']),
        'terminal': !exists(json, 'Terminal') ? undefined : TerminalsFromJSON(json['Terminal']),
        'paymentGatewayTransactionLogs': !exists(json, 'PaymentGatewayTransactionLogs') ? undefined : ((json['PaymentGatewayTransactionLogs'] as Array<any>).map(PaymentGatewayTransactionLogsFromJSON)),
        'authenticationValues': !exists(json, 'AuthenticationValues') ? undefined : json['AuthenticationValues'],
        'authenticationValuesAsXml': !exists(json, 'AuthenticationValuesAsXml') ? undefined : json['AuthenticationValuesAsXml'],
    };
}

export function TerminalGatewayDatasAllOfToJSON(value?: TerminalGatewayDatasAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Token': value.token,
        'IsActive': value.isActive,
        'NumberOfAllowedDaysForRefund': value.numberOfAllowedDaysForRefund,
        'ProcessorId': value.processorId,
        'TerminalId': value.terminalId,
        'IsAddressRequires': value.isAddressRequires,
        'Processor': ProcessorsToJSON(value.processor),
        'Terminal': TerminalsToJSON(value.terminal),
        'PaymentGatewayTransactionLogs': value.paymentGatewayTransactionLogs === undefined ? undefined : ((value.paymentGatewayTransactionLogs as Array<any>).map(PaymentGatewayTransactionLogsToJSON)),
        'AuthenticationValues': value.authenticationValues,
        'AuthenticationValuesAsXml': value.authenticationValuesAsXml,
    };
}


