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
/**
 *
 * @export
 * @interface UserPasswordHistory
 */
export interface UserPasswordHistory {
    /**
     *
     * @type {number}
     * @memberof UserPasswordHistory
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof UserPasswordHistory
     */
    password?: string;
    /**
     *
     * @type {string}
     * @memberof UserPasswordHistory
     */
    passwordHash?: string;
}
export declare function UserPasswordHistoryFromJSON(json: any): UserPasswordHistory;
export declare function UserPasswordHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPasswordHistory;
export declare function UserPasswordHistoryToJSON(value?: UserPasswordHistory | null): any;
