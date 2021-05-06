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
import { InstallmentPlanAuditLogs, PisSessions, TouchPoints } from './';
/**
 *
 * @export
 * @interface VersionedTouchPoints
 */
export interface VersionedTouchPoints {
    /**
     *
     * @type {number}
     * @memberof VersionedTouchPoints
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof VersionedTouchPoints
     */
    version?: string;
    /**
     *
     * @type {number}
     * @memberof VersionedTouchPoints
     */
    touchPointId: number;
    /**
     *
     * @type {string}
     * @memberof VersionedTouchPoints
     */
    subVersion?: string;
    /**
     *
     * @type {TouchPoints}
     * @memberof VersionedTouchPoints
     */
    touchPoint?: TouchPoints;
    /**
     *
     * @type {Array<PisSessions>}
     * @memberof VersionedTouchPoints
     */
    pisSessions?: Array<PisSessions>;
    /**
     *
     * @type {Array<InstallmentPlanAuditLogs>}
     * @memberof VersionedTouchPoints
     */
    installmentPlanAuditLogs?: Array<InstallmentPlanAuditLogs>;
}
export declare function VersionedTouchPointsFromJSON(json: any): VersionedTouchPoints;
export declare function VersionedTouchPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionedTouchPoints;
export declare function VersionedTouchPointsToJSON(value?: VersionedTouchPoints | null): any;
