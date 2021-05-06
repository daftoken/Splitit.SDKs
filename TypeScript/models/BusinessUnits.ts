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
    BusinessUnitsAllOf,
    BusinessUnitsAllOfFromJSON,
    BusinessUnitsAllOfFromJSONTyped,
    BusinessUnitsAllOfToJSON,
    EntityBase,
    EntityBaseFromJSON,
    EntityBaseFromJSONTyped,
    EntityBaseToJSON,
} from './';

/**
 * 
 * @export
 * @interface BusinessUnits
 */
export interface BusinessUnits {
    /**
     * 
     * @type {number}
     * @memberof BusinessUnits
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof BusinessUnits
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BusinessUnits
     */
    parentId?: number;
    /**
     * 
     * @type {string}
     * @memberof BusinessUnits
     */
    externalId?: string;
    /**
     * 
     * @type {BusinessUnits}
     * @memberof BusinessUnits
     */
    parent?: BusinessUnits;
}

export function BusinessUnitsFromJSON(json: any): BusinessUnits {
    return BusinessUnitsFromJSONTyped(json, false);
}

export function BusinessUnitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessUnits {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'parentId': !exists(json, 'ParentId') ? undefined : json['ParentId'],
        'externalId': !exists(json, 'ExternalId') ? undefined : json['ExternalId'],
        'parent': !exists(json, 'Parent') ? undefined : BusinessUnitsFromJSON(json['Parent']),
    };
}

export function BusinessUnitsToJSON(value?: BusinessUnits | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'Name': value.name,
        'ParentId': value.parentId,
        'ExternalId': value.externalId,
        'Parent': BusinessUnitsToJSON(value.parent),
    };
}


