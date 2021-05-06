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
    ParameterGroups,
    ParameterGroupsFromJSON,
    ParameterGroupsFromJSONTyped,
    ParameterGroupsToJSON,
    ParametersAllOf,
    ParametersAllOfFromJSON,
    ParametersAllOfFromJSONTyped,
    ParametersAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface Parameters
 */
export interface Parameters {
    /**
     * 
     * @type {number}
     * @memberof Parameters
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Parameters
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof Parameters
     */
    value?: string;
    /**
     * 
     * @type {number}
     * @memberof Parameters
     */
    parameterGroupId: number;
    /**
     * 
     * @type {ParameterGroups}
     * @memberof Parameters
     */
    parameterGroup?: ParameterGroups;
}

export function ParametersFromJSON(json: any): Parameters {
    return ParametersFromJSONTyped(json, false);
}

export function ParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): Parameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'key': !exists(json, 'Key') ? undefined : json['Key'],
        'value': !exists(json, 'Value') ? undefined : json['Value'],
        'parameterGroupId': json['ParameterGroupId'],
        'parameterGroup': !exists(json, 'ParameterGroup') ? undefined : ParameterGroupsFromJSON(json['ParameterGroup']),
    };
}

export function ParametersToJSON(value?: Parameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'Key': value.key,
        'Value': value.value,
        'ParameterGroupId': value.parameterGroupId,
        'ParameterGroup': ParameterGroupsToJSON(value.parameterGroup),
    };
}


