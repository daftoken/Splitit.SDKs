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
import { CreateInstallmentPlanRequest } from './';
/**
 *
 * @export
 * @interface UpdateInstallmentPlanRequest
 */
export interface UpdateInstallmentPlanRequest extends CreateInstallmentPlanRequest {
    /**
     *
     * @type {string}
     * @memberof UpdateInstallmentPlanRequest
     */
    installmentPlanNumber?: string;
}
export declare function UpdateInstallmentPlanRequestFromJSON(json: any): UpdateInstallmentPlanRequest;
export declare function UpdateInstallmentPlanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateInstallmentPlanRequest;
export declare function UpdateInstallmentPlanRequestToJSON(value?: UpdateInstallmentPlanRequest | null): any;
