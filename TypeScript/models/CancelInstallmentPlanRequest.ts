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
    InstallmentPlanCancelationReason,
    InstallmentPlanCancelationReasonFromJSON,
    InstallmentPlanCancelationReasonFromJSONTyped,
    InstallmentPlanCancelationReasonToJSON,
    RefundUnderCancelation,
    RefundUnderCancelationFromJSON,
    RefundUnderCancelationFromJSONTyped,
    RefundUnderCancelationToJSON,
} from './';

/**
 * 
 * @export
 * @interface CancelInstallmentPlanRequest
 */
export interface CancelInstallmentPlanRequest {
    /**
     * 
     * @type {string}
     * @memberof CancelInstallmentPlanRequest
     */
    installmentPlanNumber?: string;
    /**
     * 
     * @type {RefundUnderCancelation}
     * @memberof CancelInstallmentPlanRequest
     */
    refundUnderCancelation: RefundUnderCancelation;
    /**
     * 
     * @type {InstallmentPlanCancelationReason}
     * @memberof CancelInstallmentPlanRequest
     */
    cancelationReason?: InstallmentPlanCancelationReason;
    /**
     * 
     * @type {boolean}
     * @memberof CancelInstallmentPlanRequest
     */
    partialResponseMapping: boolean;
}

export function CancelInstallmentPlanRequestFromJSON(json: any): CancelInstallmentPlanRequest {
    return CancelInstallmentPlanRequestFromJSONTyped(json, false);
}

export function CancelInstallmentPlanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelInstallmentPlanRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'installmentPlanNumber': !exists(json, 'InstallmentPlanNumber') ? undefined : json['InstallmentPlanNumber'],
        'refundUnderCancelation': RefundUnderCancelationFromJSON(json['RefundUnderCancelation']),
        'cancelationReason': !exists(json, 'CancelationReason') ? undefined : InstallmentPlanCancelationReasonFromJSON(json['CancelationReason']),
        'partialResponseMapping': json['PartialResponseMapping'],
    };
}

export function CancelInstallmentPlanRequestToJSON(value?: CancelInstallmentPlanRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'InstallmentPlanNumber': value.installmentPlanNumber,
        'RefundUnderCancelation': RefundUnderCancelationToJSON(value.refundUnderCancelation),
        'CancelationReason': InstallmentPlanCancelationReasonToJSON(value.cancelationReason),
        'PartialResponseMapping': value.partialResponseMapping,
    };
}


