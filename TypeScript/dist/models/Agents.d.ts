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
import { Merchants, PisUsers, Terminals } from './';
/**
 *
 * @export
 * @interface Agents
 */
export interface Agents {
    /**
     *
     * @type {number}
     * @memberof Agents
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof Agents
     */
    agentNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Agents
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof Agents
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof Agents
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof Agents
     */
    jobTitle?: string;
    /**
     *
     * @type {string}
     * @memberof Agents
     */
    faxNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Agents
     */
    mobileNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Agents
     */
    workPhoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof Agents
     */
    notes?: string;
    /**
     *
     * @type {string}
     * @memberof Agents
     */
    crmId?: string;
    /**
     *
     * @type {string}
     * @memberof Agents
     */
    pisUserUniqueId?: string;
    /**
     *
     * @type {number}
     * @memberof Agents
     */
    merchantId?: number;
    /**
     *
     * @type {number}
     * @memberof Agents
     */
    pisUserId?: number;
    /**
     *
     * @type {Merchants}
     * @memberof Agents
     */
    merchant?: Merchants;
    /**
     *
     * @type {PisUsers}
     * @memberof Agents
     */
    pisUser?: PisUsers;
    /**
     *
     * @type {Array<Terminals>}
     * @memberof Agents
     */
    terminals?: Array<Terminals>;
}
export declare function AgentsFromJSON(json: any): Agents;
export declare function AgentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Agents;
export declare function AgentsToJSON(value?: Agents | null): any;
