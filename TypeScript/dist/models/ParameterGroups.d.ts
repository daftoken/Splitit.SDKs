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
import { Merchants, Parameters, SplititJobDefinitions, Tokens } from './';
/**
 *
 * @export
 * @interface ParameterGroups
 */
export interface ParameterGroups {
    /**
     *
     * @type {number}
     * @memberof ParameterGroups
     */
    id: number;
    /**
     *
     * @type {Array<Tokens>}
     * @memberof ParameterGroups
     */
    tokens?: Array<Tokens>;
    /**
     *
     * @type {Array<Merchants>}
     * @memberof ParameterGroups
     */
    merchants?: Array<Merchants>;
    /**
     *
     * @type {Array<Parameters>}
     * @memberof ParameterGroups
     */
    parameters?: Array<Parameters>;
    /**
     *
     * @type {Array<SplititJobDefinitions>}
     * @memberof ParameterGroups
     */
    splititJobDefinitions?: Array<SplititJobDefinitions>;
}
export declare function ParameterGroupsFromJSON(json: any): ParameterGroups;
export declare function ParameterGroupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParameterGroups;
export declare function ParameterGroupsToJSON(value?: ParameterGroups | null): any;
