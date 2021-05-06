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
import { CardStateLogs, FeesDocuments, FundingCollectDocumentDetails, InstallmentPaymentGatewayTransactionLogs, InstallmentPlans, InstallmentStatus, MerchantAccountType, Processors, TransferDocumentDetails } from './';
/**
 *
 * @export
 * @interface InstallmentsAllOf
 */
export interface InstallmentsAllOf {
    /**
     *
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    installmentPlanId: number;
    /**
     *
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    installmentNumber: number;
    /**
     *
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    processorId: number;
    /**
     *
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    originUtcOffset: number;
    /**
     *
     * @type {Date}
     * @memberof InstallmentsAllOf
     */
    createdDateUtc: Date;
    /**
     *
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    amount: number;
    /**
     *
     * @type {Date}
     * @memberof InstallmentsAllOf
     */
    processDateTime?: Date;
    /**
     *
     * @type {Date}
     * @memberof InstallmentsAllOf
     */
    processDateTimeUtc?: Date;
    /**
     *
     * @type {boolean}
     * @memberof InstallmentsAllOf
     */
    isRefund: boolean;
    /**
     *
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    cardStateId?: number;
    /**
     *
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    originalAmount: number;
    /**
     *
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    refundAmount: number;
    /**
     *
     * @type {boolean}
     * @memberof InstallmentsAllOf
     */
    isFullCapture: boolean;
    /**
     *
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    authorizedAmount: number;
    /**
     *
     * @type {boolean}
     * @memberof InstallmentsAllOf
     */
    isPreAuthorized: boolean;
    /**
     *
     * @type {number}
     * @memberof InstallmentsAllOf
     */
    amountForFunding: number;
    /**
     *
     * @type {CardStateLogs}
     * @memberof InstallmentsAllOf
     */
    cardState?: CardStateLogs;
    /**
     *
     * @type {InstallmentPlans}
     * @memberof InstallmentsAllOf
     */
    installmentPlan?: InstallmentPlans;
    /**
     *
     * @type {Processors}
     * @memberof InstallmentsAllOf
     */
    processor?: Processors;
    /**
     *
     * @type {Array<FeesDocuments>}
     * @memberof InstallmentsAllOf
     */
    feesDocuments?: Array<FeesDocuments>;
    /**
     *
     * @type {Array<FundingCollectDocumentDetails>}
     * @memberof InstallmentsAllOf
     */
    fundingCollectDocumentDetails?: Array<FundingCollectDocumentDetails>;
    /**
     *
     * @type {Array<InstallmentPaymentGatewayTransactionLogs>}
     * @memberof InstallmentsAllOf
     */
    installmentPaymentGatewayTransactionLogs?: Array<InstallmentPaymentGatewayTransactionLogs>;
    /**
     *
     * @type {Array<TransferDocumentDetails>}
     * @memberof InstallmentsAllOf
     */
    transferDocumentDetails?: Array<TransferDocumentDetails>;
    /**
     *
     * @type {MerchantAccountType}
     * @memberof InstallmentsAllOf
     */
    merchantAccountType: MerchantAccountType;
    /**
     *
     * @type {InstallmentStatus}
     * @memberof InstallmentsAllOf
     */
    status: InstallmentStatus;
}
export declare function InstallmentsAllOfFromJSON(json: any): InstallmentsAllOf;
export declare function InstallmentsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstallmentsAllOf;
export declare function InstallmentsAllOfToJSON(value?: InstallmentsAllOf | null): any;
