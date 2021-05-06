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

import { RequestFile } from '../api';
import { EntityBase } from './entityBase';
import { InstallmentPlanEventSubscriberRecords } from './installmentPlanEventSubscriberRecords';
import { InstallmentPlanEventType } from './installmentPlanEventType';
import { InstallmentPlanEventsAllOf } from './installmentPlanEventsAllOf';
import { InstallmentPlans } from './installmentPlans';

export class InstallmentPlanEvents {
    'id': number;
    'installmentPlanId': number;
    'activityTime': Date;
    'installmentPlan'?: InstallmentPlans;
    'installmentPlanEventSubscriberRecords'?: Array<InstallmentPlanEventSubscriberRecords>;
    'event': InstallmentPlanEventType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number"
        },
        {
            "name": "installmentPlanId",
            "baseName": "InstallmentPlanId",
            "type": "number"
        },
        {
            "name": "activityTime",
            "baseName": "ActivityTime",
            "type": "Date"
        },
        {
            "name": "installmentPlan",
            "baseName": "InstallmentPlan",
            "type": "InstallmentPlans"
        },
        {
            "name": "installmentPlanEventSubscriberRecords",
            "baseName": "InstallmentPlanEventSubscriberRecords",
            "type": "Array<InstallmentPlanEventSubscriberRecords>"
        },
        {
            "name": "event",
            "baseName": "Event",
            "type": "InstallmentPlanEventType"
        }    ];

    static getAttributeTypeMap() {
        return InstallmentPlanEvents.attributeTypeMap;
    }
}

