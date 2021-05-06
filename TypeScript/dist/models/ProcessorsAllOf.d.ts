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
import { Installments, ProcessorAuthenticationParameters, ReAuthorizations, TerminalGatewayDatas } from './';
/**
 *
 * @export
 * @interface ProcessorsAllOf
 */
export interface ProcessorsAllOf {
    /**
     *
     * @type {string}
     * @memberof ProcessorsAllOf
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ProcessorsAllOf
     */
    apiUrl?: string;
    /**
     *
     * @type {number}
     * @memberof ProcessorsAllOf
     */
    maxNumberOfRetries: number;
    /**
     *
     * @type {number}
     * @memberof ProcessorsAllOf
     */
    timeoutSeconds: number;
    /**
     *
     * @type {number}
     * @memberof ProcessorsAllOf
     */
    maxAuth: number;
    /**
     *
     * @type {number}
     * @memberof ProcessorsAllOf
     */
    gracePeriod: number;
    /**
     *
     * @type {number}
     * @memberof ProcessorsAllOf
     */
    asyncRefundGracePeriodDays?: number;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    isCheckedMastercard: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    isCheckedUpi: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    isCheckedVisa: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    isCheckedAmex: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    isCheckedMaestro: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    isCheckedJcb: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    isCheckedDiscover: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    is3ds2Supported: boolean;
    /**
     *
     * @type {string}
     * @memberof ProcessorsAllOf
     */
    gatewayApiassembly?: string;
    /**
     *
     * @type {string}
     * @memberof ProcessorsAllOf
     */
    displayName?: string;
    /**
     *
     * @type {string}
     * @memberof ProcessorsAllOf
     */
    gatewayApiimplementorNs?: string;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    isTokenSupported: boolean;
    /**
     *
     * @type {string}
     * @memberof ProcessorsAllOf
     */
    consumerUpdateCcGracePeriod?: string;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    isVoidSupported: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    isVoidAfterFailRefund: boolean;
    /**
     *
     * @type {number}
     * @memberof ProcessorsAllOf
     */
    minAmountAllowedForAuth: number;
    /**
     *
     * @type {number}
     * @memberof ProcessorsAllOf
     */
    captureDelayInSec: number;
    /**
     *
     * @type {number}
     * @memberof ProcessorsAllOf
     */
    voidDelayInSec: number;
    /**
     *
     * @type {boolean}
     * @memberof ProcessorsAllOf
     */
    allowPartialVoid: boolean;
    /**
     *
     * @type {Array<Installments>}
     * @memberof ProcessorsAllOf
     */
    installments?: Array<Installments>;
    /**
     *
     * @type {Array<ProcessorAuthenticationParameters>}
     * @memberof ProcessorsAllOf
     */
    processorAuthenticationParameters?: Array<ProcessorAuthenticationParameters>;
    /**
     *
     * @type {Array<ReAuthorizations>}
     * @memberof ProcessorsAllOf
     */
    reAuthorizations?: Array<ReAuthorizations>;
    /**
     *
     * @type {Array<TerminalGatewayDatas>}
     * @memberof ProcessorsAllOf
     */
    terminalGatewayDatas?: Array<TerminalGatewayDatas>;
}
export declare function ProcessorsAllOfFromJSON(json: any): ProcessorsAllOf;
export declare function ProcessorsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorsAllOf;
export declare function ProcessorsAllOfToJSON(value?: ProcessorsAllOf | null): any;
