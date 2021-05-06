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
import { PaymentGatewayTransactionLogs, ReAuthorizations } from './';
/**
 *
 * @export
 * @interface ReAuthorizationPaymentGatewayTransactionLogs
 */
export interface ReAuthorizationPaymentGatewayTransactionLogs {
    /**
     *
     * @type {number}
     * @memberof ReAuthorizationPaymentGatewayTransactionLogs
     */
    reAuthorizationId: number;
    /**
     *
     * @type {number}
     * @memberof ReAuthorizationPaymentGatewayTransactionLogs
     */
    paymentGatewayTransactionLogId: number;
    /**
     *
     * @type {PaymentGatewayTransactionLogs}
     * @memberof ReAuthorizationPaymentGatewayTransactionLogs
     */
    paymentGatewayTransactionLog?: PaymentGatewayTransactionLogs;
    /**
     *
     * @type {ReAuthorizations}
     * @memberof ReAuthorizationPaymentGatewayTransactionLogs
     */
    reAuthorization?: ReAuthorizations;
}
export declare function ReAuthorizationPaymentGatewayTransactionLogsFromJSON(json: any): ReAuthorizationPaymentGatewayTransactionLogs;
export declare function ReAuthorizationPaymentGatewayTransactionLogsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReAuthorizationPaymentGatewayTransactionLogs;
export declare function ReAuthorizationPaymentGatewayTransactionLogsToJSON(value?: ReAuthorizationPaymentGatewayTransactionLogs | null): any;
