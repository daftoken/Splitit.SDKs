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
export declare enum SessionAvailibility {
    Private = "Private",
    Public = "Public"
}
export declare function SessionAvailibilityFromJSON(json: any): SessionAvailibility;
export declare function SessionAvailibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionAvailibility;
export declare function SessionAvailibilityToJSON(value?: SessionAvailibility | null): any;
