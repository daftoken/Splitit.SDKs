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
import { CollectDocuments, FundingPayDocumentDetails, FundingTransferReason, InstallmentPlans, Installments } from './';
/**
 *
 * @export
 * @interface FundingCollectDocumentDetailsAllOf
 */
export interface FundingCollectDocumentDetailsAllOf {
    /**
     *
     * @type {number}
     * @memberof FundingCollectDocumentDetailsAllOf
     */
    amount: number;
    /**
     *
     * @type {number}
     * @memberof FundingCollectDocumentDetailsAllOf
     */
    collectDocumentId: number;
    /**
     *
     * @type {number}
     * @memberof FundingCollectDocumentDetailsAllOf
     */
    installmentId?: number;
    /**
     *
     * @type {number}
     * @memberof FundingCollectDocumentDetailsAllOf
     */
    planId?: number;
    /**
     *
     * @type {CollectDocuments}
     * @memberof FundingCollectDocumentDetailsAllOf
     */
    collectDocument?: CollectDocuments;
    /**
     *
     * @type {Installments}
     * @memberof FundingCollectDocumentDetailsAllOf
     */
    installment?: Installments;
    /**
     *
     * @type {InstallmentPlans}
     * @memberof FundingCollectDocumentDetailsAllOf
     */
    plan?: InstallmentPlans;
    /**
     *
     * @type {Array<FundingPayDocumentDetails>}
     * @memberof FundingCollectDocumentDetailsAllOf
     */
    fundingPayDocumentDetails?: Array<FundingPayDocumentDetails>;
    /**
     *
     * @type {FundingTransferReason}
     * @memberof FundingCollectDocumentDetailsAllOf
     */
    transferReason: FundingTransferReason;
}
export declare function FundingCollectDocumentDetailsAllOfFromJSON(json: any): FundingCollectDocumentDetailsAllOf;
export declare function FundingCollectDocumentDetailsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingCollectDocumentDetailsAllOf;
export declare function FundingCollectDocumentDetailsAllOfToJSON(value?: FundingCollectDocumentDetailsAllOf | null): any;
