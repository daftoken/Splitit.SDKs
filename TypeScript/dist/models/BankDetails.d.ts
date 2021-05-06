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
 * @interface BankDetails
 */
export interface BankDetails {
    /**
     *
     * @type {string}
     * @memberof BankDetails
     */
    bankAccountName?: string;
    /**
     *
     * @type {string}
     * @memberof BankDetails
     */
    bankRoutingNumber?: string;
    /**
     *
     * @type {string}
     * @memberof BankDetails
     */
    bankAccountNumber?: string;
}
export declare function BankDetailsFromJSON(json: any): BankDetails;
export declare function BankDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankDetails;
export declare function BankDetailsToJSON(value?: BankDetails | null): any;
