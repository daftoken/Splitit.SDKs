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
import { InstallmentPlanEventSubscriberRecordSendLogs, InstallmentPlanEvents } from './';
/**
 *
 * @export
 * @interface InstallmentPlanEventSubscriberRecords
 */
export interface InstallmentPlanEventSubscriberRecords {
    /**
     *
     * @type {number}
     * @memberof InstallmentPlanEventSubscriberRecords
     */
    id: number;
    /**
     *
     * @type {number}
     * @memberof InstallmentPlanEventSubscriberRecords
     */
    installmentPlanEventId: number;
    /**
     *
     * @type {string}
     * @memberof InstallmentPlanEventSubscriberRecords
     */
    serializedInstallmentPlanEventMessage?: string;
    /**
     *
     * @type {boolean}
     * @memberof InstallmentPlanEventSubscriberRecords
     */
    isAcknowledged: boolean;
    /**
     *
     * @type {string}
     * @memberof InstallmentPlanEventSubscriberRecords
     */
    subscriberType?: string;
    /**
     *
     * @type {InstallmentPlanEvents}
     * @memberof InstallmentPlanEventSubscriberRecords
     */
    installmentPlanEvent?: InstallmentPlanEvents;
    /**
     *
     * @type {Array<InstallmentPlanEventSubscriberRecordSendLogs>}
     * @memberof InstallmentPlanEventSubscriberRecords
     */
    installmentPlanEventSubscriberRecordSendLogs?: Array<InstallmentPlanEventSubscriberRecordSendLogs>;
}
export declare function InstallmentPlanEventSubscriberRecordsFromJSON(json: any): InstallmentPlanEventSubscriberRecords;
export declare function InstallmentPlanEventSubscriberRecordsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstallmentPlanEventSubscriberRecords;
export declare function InstallmentPlanEventSubscriberRecordsToJSON(value?: InstallmentPlanEventSubscriberRecords | null): any;
