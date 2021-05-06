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
export declare enum UserType {
    User = "User",
    ApplicativeUser = "ApplicativeUser",
    UserWithActionItem = "UserWithActionItem",
    AdminUser = "AdminUser",
    PisUser = "PisUser",
    ApiUser = "ApiUser",
    PisMember = "PisMember"
}
export declare function UserTypeFromJSON(json: any): UserType;
export declare function UserTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserType;
export declare function UserTypeToJSON(value?: UserType | null): any;
