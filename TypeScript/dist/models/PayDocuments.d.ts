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
import { BusinessUnits, Currencies, FundingPayDocumentDetails, ScpProviders } from './';
/**
 *
 * @export
 * @interface PayDocuments
 */
export interface PayDocuments {
    /**
     *
     * @type {number}
     * @memberof PayDocuments
     */
    id: number;
    /**
     *
     * @type {number}
     * @memberof PayDocuments
     */
    totalAmount: number;
    /**
     *
     * @type {number}
     * @memberof PayDocuments
     */
    scpProviderId?: number;
    /**
     *
     * @type {number}
     * @memberof PayDocuments
     */
    businessUnitId?: number;
    /**
     *
     * @type {string}
     * @memberof PayDocuments
     */
    discriminator?: string;
    /**
     *
     * @type {number}
     * @memberof PayDocuments
     */
    currencyId?: number;
    /**
     *
     * @type {BusinessUnits}
     * @memberof PayDocuments
     */
    businessUnit?: BusinessUnits;
    /**
     *
     * @type {Currencies}
     * @memberof PayDocuments
     */
    currency?: Currencies;
    /**
     *
     * @type {ScpProviders}
     * @memberof PayDocuments
     */
    scpProvider?: ScpProviders;
    /**
     *
     * @type {Array<FundingPayDocumentDetails>}
     * @memberof PayDocuments
     */
    fundingPayDocumentDetails?: Array<FundingPayDocumentDetails>;
}
export declare function PayDocumentsFromJSON(json: any): PayDocuments;
export declare function PayDocumentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayDocuments;
export declare function PayDocumentsToJSON(value?: PayDocuments | null): any;
