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
import { PisUsers } from './';
/**
 *
 * @export
 * @interface PisUserPasswordHistories
 */
export interface PisUserPasswordHistories {
    /**
     *
     * @type {number}
     * @memberof PisUserPasswordHistories
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof PisUserPasswordHistories
     */
    password?: string;
    /**
     *
     * @type {string}
     * @memberof PisUserPasswordHistories
     */
    passwordHash?: string;
    /**
     *
     * @type {Date}
     * @memberof PisUserPasswordHistories
     */
    passwordExpDate: Date;
    /**
     *
     * @type {number}
     * @memberof PisUserPasswordHistories
     */
    pisUserId: number;
    /**
     *
     * @type {PisUsers}
     * @memberof PisUserPasswordHistories
     */
    pisUser?: PisUsers;
}
export declare function PisUserPasswordHistoriesFromJSON(json: any): PisUserPasswordHistories;
export declare function PisUserPasswordHistoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PisUserPasswordHistories;
export declare function PisUserPasswordHistoriesToJSON(value?: PisUserPasswordHistories | null): any;
