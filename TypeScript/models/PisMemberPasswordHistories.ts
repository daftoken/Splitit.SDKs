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
    ApplicativeUserPasswordHistory,
    ApplicativeUserPasswordHistoryFromJSON,
    ApplicativeUserPasswordHistoryFromJSONTyped,
    ApplicativeUserPasswordHistoryToJSON,
    PisMemberPasswordHistoriesAllOf,
    PisMemberPasswordHistoriesAllOfFromJSON,
    PisMemberPasswordHistoriesAllOfFromJSONTyped,
    PisMemberPasswordHistoriesAllOfToJSON,
    PisMembers,
    PisMembersFromJSON,
    PisMembersFromJSONTyped,
    PisMembersToJSON,
} from './';

/**
 * 
 * @export
 * @interface PisMemberPasswordHistories
 */
export interface PisMemberPasswordHistories {
    /**
     * 
     * @type {number}
     * @memberof PisMemberPasswordHistories
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof PisMemberPasswordHistories
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof PisMemberPasswordHistories
     */
    passwordHash?: string;
    /**
     * 
     * @type {Date}
     * @memberof PisMemberPasswordHistories
     */
    passwordExpDate: Date;
    /**
     * 
     * @type {number}
     * @memberof PisMemberPasswordHistories
     */
    pisMemberId: number;
    /**
     * 
     * @type {PisMembers}
     * @memberof PisMemberPasswordHistories
     */
    pisMember?: PisMembers;
}

export function PisMemberPasswordHistoriesFromJSON(json: any): PisMemberPasswordHistories {
    return PisMemberPasswordHistoriesFromJSONTyped(json, false);
}

export function PisMemberPasswordHistoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PisMemberPasswordHistories {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'password': !exists(json, 'Password') ? undefined : json['Password'],
        'passwordHash': !exists(json, 'PasswordHash') ? undefined : json['PasswordHash'],
        'passwordExpDate': (new Date(json['PasswordExpDate'])),
        'pisMemberId': json['PisMemberId'],
        'pisMember': !exists(json, 'PisMember') ? undefined : PisMembersFromJSON(json['PisMember']),
    };
}

export function PisMemberPasswordHistoriesToJSON(value?: PisMemberPasswordHistories | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'Password': value.password,
        'PasswordHash': value.passwordHash,
        'PasswordExpDate': (value.passwordExpDate.toISOString()),
        'PisMemberId': value.pisMemberId,
        'PisMember': PisMembersToJSON(value.pisMember),
    };
}


