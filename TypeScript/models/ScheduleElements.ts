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
/**
 * 
 * @export
 * @interface ScheduleElements
 */
export interface ScheduleElements {
    /**
     * 
     * @type {number}
     * @memberof ScheduleElements
     */
    installmentNumber: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduleElements
     */
    chargeDate?: string;
    /**
     * 
     * @type {number}
     * @memberof ScheduleElements
     */
    chargeAmount: number;
    /**
     * 
     * @type {number}
     * @memberof ScheduleElements
     */
    requiredCredit: number;
}

export function ScheduleElementsFromJSON(json: any): ScheduleElements {
    return ScheduleElementsFromJSONTyped(json, false);
}

export function ScheduleElementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleElements {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'installmentNumber': json['InstallmentNumber'],
        'chargeDate': !exists(json, 'ChargeDate') ? undefined : json['ChargeDate'],
        'chargeAmount': json['ChargeAmount'],
        'requiredCredit': json['RequiredCredit'],
    };
}

export function ScheduleElementsToJSON(value?: ScheduleElements | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'InstallmentNumber': value.installmentNumber,
        'ChargeDate': value.chargeDate,
        'ChargeAmount': value.chargeAmount,
        'RequiredCredit': value.requiredCredit,
    };
}


