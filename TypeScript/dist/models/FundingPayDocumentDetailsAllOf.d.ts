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
import { FundingCollectDocumentDetails, InstallmentPlans, PayDocuments } from './';
/**
 *
 * @export
 * @interface FundingPayDocumentDetailsAllOf
 */
export interface FundingPayDocumentDetailsAllOf {
    /**
     *
     * @type {number}
     * @memberof FundingPayDocumentDetailsAllOf
     */
    payDocumentId?: number;
    /**
     *
     * @type {number}
     * @memberof FundingPayDocumentDetailsAllOf
     */
    planId?: number;
    /**
     *
     * @type {number}
     * @memberof FundingPayDocumentDetailsAllOf
     */
    amount: number;
    /**
     *
     * @type {InstallmentPlans}
     * @memberof FundingPayDocumentDetailsAllOf
     */
    plan?: InstallmentPlans;
    /**
     *
     * @type {number}
     * @memberof FundingPayDocumentDetailsAllOf
     */
    collectDocumentDetailsId?: number;
    /**
     *
     * @type {FundingCollectDocumentDetails}
     * @memberof FundingPayDocumentDetailsAllOf
     */
    collectDocumentDetails?: FundingCollectDocumentDetails;
    /**
     *
     * @type {PayDocuments}
     * @memberof FundingPayDocumentDetailsAllOf
     */
    payDocument?: PayDocuments;
}
export declare function FundingPayDocumentDetailsAllOfFromJSON(json: any): FundingPayDocumentDetailsAllOf;
export declare function FundingPayDocumentDetailsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingPayDocumentDetailsAllOf;
export declare function FundingPayDocumentDetailsAllOfToJSON(value?: FundingPayDocumentDetailsAllOf | null): any;
