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
 * @interface VersionedTouchPointsAllOf
 */
export interface VersionedTouchPointsAllOf {
    /**
     *
     * @type {string}
     * @memberof VersionedTouchPointsAllOf
     */
    version?: string;
    /**
     *
     * @type {number}
     * @memberof VersionedTouchPointsAllOf
     */
    touchPointId: number;
    /**
     *
     * @type {string}
     * @memberof VersionedTouchPointsAllOf
     */
    subVersion?: string;
    /**
     *
     * @type {TouchPoints}
     * @memberof VersionedTouchPointsAllOf
     */
    touchPoint?: TouchPoints;
    /**
     *
     * @type {Array<PisSessions>}
     * @memberof VersionedTouchPointsAllOf
     */
    pisSessions?: Array<PisSessions>;
    /**
     *
     * @type {Array<InstallmentPlanAuditLogs>}
     * @memberof VersionedTouchPointsAllOf
     */
    installmentPlanAuditLogs?: Array<InstallmentPlanAuditLogs>;
}
export declare function VersionedTouchPointsAllOfFromJSON(json: any): VersionedTouchPointsAllOf;
export declare function VersionedTouchPointsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionedTouchPointsAllOf;
export declare function VersionedTouchPointsAllOfToJSON(value?: VersionedTouchPointsAllOf | null): any;
