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
    ExtendedInstallmentPlan,
    ExtendedInstallmentPlanFromJSON,
    ExtendedInstallmentPlanFromJSONTyped,
    ExtendedInstallmentPlanToJSON,
    GetInstallmentsPlanExtendedResponseAllOf,
    GetInstallmentsPlanExtendedResponseAllOfFromJSON,
    GetInstallmentsPlanExtendedResponseAllOfFromJSONTyped,
    GetInstallmentsPlanExtendedResponseAllOfToJSON,
    GetInstallmentsPlanResponse,
    GetInstallmentsPlanResponseFromJSON,
    GetInstallmentsPlanResponseFromJSONTyped,
    GetInstallmentsPlanResponseToJSON,
    PagingResponseHeader,
    PagingResponseHeaderFromJSON,
    PagingResponseHeaderFromJSONTyped,
    PagingResponseHeaderToJSON,
    ResponseHeader,
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetInstallmentsPlanExtendedResponse
 */
export interface GetInstallmentsPlanExtendedResponse extends GetInstallmentsPlanResponse {
    /**
     * 
     * @type {Array<ExtendedInstallmentPlan>}
     * @memberof GetInstallmentsPlanExtendedResponse
     */
    plansList?: Array<ExtendedInstallmentPlan>;
}

export function GetInstallmentsPlanExtendedResponseFromJSON(json: any): GetInstallmentsPlanExtendedResponse {
    return GetInstallmentsPlanExtendedResponseFromJSONTyped(json, false);
}

export function GetInstallmentsPlanExtendedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetInstallmentsPlanExtendedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...GetInstallmentsPlanResponseFromJSONTyped(json, ignoreDiscriminator),
        'plansList': !exists(json, 'PlansList') ? undefined : ((json['PlansList'] as Array<any>).map(ExtendedInstallmentPlanFromJSON)),
    };
}

export function GetInstallmentsPlanExtendedResponseToJSON(value?: GetInstallmentsPlanExtendedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...GetInstallmentsPlanResponseToJSON(value),
        'PlansList': value.plansList === undefined ? undefined : ((value.plansList as Array<any>).map(ExtendedInstallmentPlanToJSON)),
    };
}


