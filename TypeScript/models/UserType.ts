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

/**
 * 
 * @export
 * @enum {string}
 */
export enum UserType {
    User = 'User',
    ApplicativeUser = 'ApplicativeUser',
    UserWithActionItem = 'UserWithActionItem',
    AdminUser = 'AdminUser',
    PisUser = 'PisUser',
    ApiUser = 'ApiUser',
    PisMember = 'PisMember'
}

export function UserTypeFromJSON(json: any): UserType {
    return UserTypeFromJSONTyped(json, false);
}

export function UserTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserType {
    return json as UserType;
}

export function UserTypeToJSON(value?: UserType | null): any {
    return value as any;
}

