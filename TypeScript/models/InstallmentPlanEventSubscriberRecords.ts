/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    EntityBase,
    EntityBaseFromJSON,
    EntityBaseFromJSONTyped,
    EntityBaseToJSON,
    InstallmentPlanEventSubscriberRecordSendLogs,
    InstallmentPlanEventSubscriberRecordSendLogsFromJSON,
    InstallmentPlanEventSubscriberRecordSendLogsFromJSONTyped,
    InstallmentPlanEventSubscriberRecordSendLogsToJSON,
    InstallmentPlanEventSubscriberRecordsAllOf,
    InstallmentPlanEventSubscriberRecordsAllOfFromJSON,
    InstallmentPlanEventSubscriberRecordsAllOfFromJSONTyped,
    InstallmentPlanEventSubscriberRecordsAllOfToJSON,
    InstallmentPlanEvents,
    InstallmentPlanEventsFromJSON,
    InstallmentPlanEventsFromJSONTyped,
    InstallmentPlanEventsToJSON,
} from './';

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

export function InstallmentPlanEventSubscriberRecordsFromJSON(json: any): InstallmentPlanEventSubscriberRecords {
    return InstallmentPlanEventSubscriberRecordsFromJSONTyped(json, false);
}

export function InstallmentPlanEventSubscriberRecordsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstallmentPlanEventSubscriberRecords {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'installmentPlanEventId': json['InstallmentPlanEventId'],
        'serializedInstallmentPlanEventMessage': !exists(json, 'SerializedInstallmentPlanEventMessage') ? undefined : json['SerializedInstallmentPlanEventMessage'],
        'isAcknowledged': json['IsAcknowledged'],
        'subscriberType': !exists(json, 'SubscriberType') ? undefined : json['SubscriberType'],
        'installmentPlanEvent': !exists(json, 'InstallmentPlanEvent') ? undefined : InstallmentPlanEventsFromJSON(json['InstallmentPlanEvent']),
        'installmentPlanEventSubscriberRecordSendLogs': !exists(json, 'InstallmentPlanEventSubscriberRecordSendLogs') ? undefined : ((json['InstallmentPlanEventSubscriberRecordSendLogs'] as Array<any>).map(InstallmentPlanEventSubscriberRecordSendLogsFromJSON)),
    };
}

export function InstallmentPlanEventSubscriberRecordsToJSON(value?: InstallmentPlanEventSubscriberRecords | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'InstallmentPlanEventId': value.installmentPlanEventId,
        'SerializedInstallmentPlanEventMessage': value.serializedInstallmentPlanEventMessage,
        'IsAcknowledged': value.isAcknowledged,
        'SubscriberType': value.subscriberType,
        'InstallmentPlanEvent': InstallmentPlanEventsToJSON(value.installmentPlanEvent),
        'InstallmentPlanEventSubscriberRecordSendLogs': value.installmentPlanEventSubscriberRecordSendLogs === undefined ? undefined : ((value.installmentPlanEventSubscriberRecordSendLogs as Array<any>).map(InstallmentPlanEventSubscriberRecordSendLogsToJSON)),
    };
}


