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
/**
 *
 * @export
 * @interface ChargebackRequest
 */
export interface ChargebackRequest {
    /**
     *
     * @type {Array<number>}
     * @memberof ChargebackRequest
     */
    transactionIdsToMark?: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ChargebackRequest
     */
    transactionIdsToUnmark?: Array<number>;
    /**
     *
     * @type {string}
     * @memberof ChargebackRequest
     */
    installmentPlanNumber?: string;
}
export declare function ChargebackRequestFromJSON(json: any): ChargebackRequest;
export declare function ChargebackRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargebackRequest;
export declare function ChargebackRequestToJSON(value?: ChargebackRequest | null): any;
