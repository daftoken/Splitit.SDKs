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
export declare enum TestModes {
    None = "None",
    Regular = "Regular",
    Fast = "Fast",
    Automation = "Automation"
}
export declare function TestModesFromJSON(json: any): TestModes;
export declare function TestModesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestModes;
export declare function TestModesToJSON(value?: TestModes | null): any;
