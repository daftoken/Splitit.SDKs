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
import { InstallmentPlanEventSubscriberRecords } from './';
/**
 *
 * @export
 * @interface InstallmentPlanEventSubscriberRecordSendLogsAllOf
 */
export interface InstallmentPlanEventSubscriberRecordSendLogsAllOf {
    /**
     *
     * @type {number}
     * @memberof InstallmentPlanEventSubscriberRecordSendLogsAllOf
     */
    installmentPlanEventSubscriberRecordId: number;
    /**
     *
     * @type {Date}
     * @memberof InstallmentPlanEventSubscriberRecordSendLogsAllOf
     */
    sendTime: Date;
    /**
     *
     * @type {string}
     * @memberof InstallmentPlanEventSubscriberRecordSendLogsAllOf
     */
    response?: string;
    /**
     *
     * @type {InstallmentPlanEventSubscriberRecords}
     * @memberof InstallmentPlanEventSubscriberRecordSendLogsAllOf
     */
    installmentPlanEventSubscriberRecord?: InstallmentPlanEventSubscriberRecords;
}
export declare function InstallmentPlanEventSubscriberRecordSendLogsAllOfFromJSON(json: any): InstallmentPlanEventSubscriberRecordSendLogsAllOf;
export declare function InstallmentPlanEventSubscriberRecordSendLogsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstallmentPlanEventSubscriberRecordSendLogsAllOf;
export declare function InstallmentPlanEventSubscriberRecordSendLogsAllOfToJSON(value?: InstallmentPlanEventSubscriberRecordSendLogsAllOf | null): any;
