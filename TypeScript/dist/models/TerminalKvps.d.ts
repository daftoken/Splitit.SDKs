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
import { Terminals } from './';
/**
 *
 * @export
 * @interface TerminalKvps
 */
export interface TerminalKvps {
    /**
     *
     * @type {number}
     * @memberof TerminalKvps
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof TerminalKvps
     */
    key?: string;
    /**
     *
     * @type {string}
     * @memberof TerminalKvps
     */
    value?: string;
    /**
     *
     * @type {number}
     * @memberof TerminalKvps
     */
    terminalId: number;
    /**
     *
     * @type {Terminals}
     * @memberof TerminalKvps
     */
    terminal?: Terminals;
}
export declare function TerminalKvpsFromJSON(json: any): TerminalKvps;
export declare function TerminalKvpsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerminalKvps;
export declare function TerminalKvpsToJSON(value?: TerminalKvps | null): any;
