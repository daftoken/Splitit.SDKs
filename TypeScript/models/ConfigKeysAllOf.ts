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
    ConfigValues,
    ConfigValuesFromJSON,
    ConfigValuesFromJSONTyped,
    ConfigValuesToJSON,
    TouchPoints,
    TouchPointsFromJSON,
    TouchPointsFromJSONTyped,
    TouchPointsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ConfigKeysAllOf
 */
export interface ConfigKeysAllOf {
    /**
     * 
     * @type {string}
     * @memberof ConfigKeysAllOf
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigKeysAllOf
     */
    code?: string;
    /**
     * 
     * @type {number}
     * @memberof ConfigKeysAllOf
     */
    touchPointId?: number;
    /**
     * 
     * @type {TouchPoints}
     * @memberof ConfigKeysAllOf
     */
    touchPoint?: TouchPoints;
    /**
     * 
     * @type {Array<ConfigValues>}
     * @memberof ConfigKeysAllOf
     */
    configValues?: Array<ConfigValues>;
}

export function ConfigKeysAllOfFromJSON(json: any): ConfigKeysAllOf {
    return ConfigKeysAllOfFromJSONTyped(json, false);
}

export function ConfigKeysAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigKeysAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'code': !exists(json, 'Code') ? undefined : json['Code'],
        'touchPointId': !exists(json, 'TouchPointId') ? undefined : json['TouchPointId'],
        'touchPoint': !exists(json, 'TouchPoint') ? undefined : TouchPointsFromJSON(json['TouchPoint']),
        'configValues': !exists(json, 'ConfigValues') ? undefined : ((json['ConfigValues'] as Array<any>).map(ConfigValuesFromJSON)),
    };
}

export function ConfigKeysAllOfToJSON(value?: ConfigKeysAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Code': value.code,
        'TouchPointId': value.touchPointId,
        'TouchPoint': TouchPointsToJSON(value.touchPoint),
        'ConfigValues': value.configValues === undefined ? undefined : ((value.configValues as Array<any>).map(ConfigValuesToJSON)),
    };
}


