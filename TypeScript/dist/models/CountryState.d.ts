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
 * @interface CountryState
 */
export interface CountryState {
    /**
     *
     * @type {string}
     * @memberof CountryState
     */
    country?: string;
    /**
     *
     * @type {string}
     * @memberof CountryState
     */
    state?: string;
}
export declare function CountryStateFromJSON(json: any): CountryState;
export declare function CountryStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountryState;
export declare function CountryStateToJSON(value?: CountryState | null): any;
