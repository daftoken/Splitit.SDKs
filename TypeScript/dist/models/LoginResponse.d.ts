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
import { LoginResponse2, ResponseStatus } from './';
/**
 *
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse extends LoginResponse2 {
    /**
     *
     * @type {number}
     * @memberof LoginResponse
     */
    result: number;
    /**
     *
     * @type {ResponseStatus}
     * @memberof LoginResponse
     */
    responseStatus?: ResponseStatus;
}
export declare function LoginResponseFromJSON(json: any): LoginResponse;
export declare function LoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginResponse;
export declare function LoginResponseToJSON(value?: LoginResponse | null): any;
