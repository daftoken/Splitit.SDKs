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
import { InstallmentPlans, SystemEmailsTypes, UserType } from './';
/**
 *
 * @export
 * @interface EmailAuditLogsAllOf
 */
export interface EmailAuditLogsAllOf {
    /**
     *
     * @type {number}
     * @memberof EmailAuditLogsAllOf
     */
    installmentPlanId?: number;
    /**
     *
     * @type {string}
     * @memberof EmailAuditLogsAllOf
     */
    userUniqueId?: string;
    /**
     *
     * @type {number}
     * @memberof EmailAuditLogsAllOf
     */
    userId?: number;
    /**
     *
     * @type {string}
     * @memberof EmailAuditLogsAllOf
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof EmailAuditLogsAllOf
     */
    externalIdentifier?: string;
    /**
     *
     * @type {InstallmentPlans}
     * @memberof EmailAuditLogsAllOf
     */
    installmentPlan?: InstallmentPlans;
    /**
     *
     * @type {UserType}
     * @memberof EmailAuditLogsAllOf
     */
    userType?: UserType;
    /**
     *
     * @type {SystemEmailsTypes}
     * @memberof EmailAuditLogsAllOf
     */
    emailType: SystemEmailsTypes;
    /**
     *
     * @type {string}
     * @memberof EmailAuditLogsAllOf
     */
    emailHtmlBodyFilename?: string;
}
export declare function EmailAuditLogsAllOfFromJSON(json: any): EmailAuditLogsAllOf;
export declare function EmailAuditLogsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailAuditLogsAllOf;
export declare function EmailAuditLogsAllOfToJSON(value?: EmailAuditLogsAllOf | null): any;
