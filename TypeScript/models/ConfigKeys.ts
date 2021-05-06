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
    ConfigKeysAllOf,
    ConfigKeysAllOfFromJSON,
    ConfigKeysAllOfFromJSONTyped,
    ConfigKeysAllOfToJSON,
    ConfigValues,
    ConfigValuesFromJSON,
    ConfigValuesFromJSONTyped,
    ConfigValuesToJSON,
    EntityBase,
    EntityBaseFromJSON,
    EntityBaseFromJSONTyped,
    EntityBaseToJSON,
    TouchPoints,
    TouchPointsFromJSON,
    TouchPointsFromJSONTyped,
    TouchPointsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ConfigKeys
 */
export interface ConfigKeys {
    /**
     * 
     * @type {number}
     * @memberof ConfigKeys
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigKeys
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigKeys
     */
    code?: string;
    /**
     * 
     * @type {number}
     * @memberof ConfigKeys
     */
    touchPointId?: number;
    /**
     * 
     * @type {TouchPoints}
     * @memberof ConfigKeys
     */
    touchPoint?: TouchPoints;
    /**
     * 
     * @type {Array<ConfigValues>}
     * @memberof ConfigKeys
     */
    configValues?: Array<ConfigValues>;
}

export function ConfigKeysFromJSON(json: any): ConfigKeys {
    return ConfigKeysFromJSONTyped(json, false);
}

export function ConfigKeysFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigKeys {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'code': !exists(json, 'Code') ? undefined : json['Code'],
        'touchPointId': !exists(json, 'TouchPointId') ? undefined : json['TouchPointId'],
        'touchPoint': !exists(json, 'TouchPoint') ? undefined : TouchPointsFromJSON(json['TouchPoint']),
        'configValues': !exists(json, 'ConfigValues') ? undefined : ((json['ConfigValues'] as Array<any>).map(ConfigValuesFromJSON)),
    };
}

export function ConfigKeysToJSON(value?: ConfigKeys | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'Name': value.name,
        'Code': value.code,
        'TouchPointId': value.touchPointId,
        'TouchPoint': TouchPointsToJSON(value.touchPoint),
        'ConfigValues': value.configValues === undefined ? undefined : ((value.configValues as Array<any>).map(ConfigValuesToJSON)),
    };
}


