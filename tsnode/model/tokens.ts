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

import { RequestFile } from '../api';
import { EntityBase } from './entityBase';
import { InstallmentPlans } from './installmentPlans';
import { ParameterGroups } from './parameterGroups';
import { TokensAllOf } from './tokensAllOf';
import { UserType } from './userType';

export class Tokens {
    'id': number;
    'token'?: string;
    'validTill'?: Date;
    'lastUsage'?: Date;
    'parameterGroupId'?: number;
    'type'?: string;
    'parameterGroup'?: ParameterGroups;
    'userId': number;
    'userType': UserType;
    'installmentPlanId'?: number;
    'installmentPlan'?: InstallmentPlans;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number"
        },
        {
            "name": "token",
            "baseName": "Token",
            "type": "string"
        },
        {
            "name": "validTill",
            "baseName": "ValidTill",
            "type": "Date"
        },
        {
            "name": "lastUsage",
            "baseName": "LastUsage",
            "type": "Date"
        },
        {
            "name": "parameterGroupId",
            "baseName": "ParameterGroupId",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "parameterGroup",
            "baseName": "ParameterGroup",
            "type": "ParameterGroups"
        },
        {
            "name": "userId",
            "baseName": "UserId",
            "type": "number"
        },
        {
            "name": "userType",
            "baseName": "UserType",
            "type": "UserType"
        },
        {
            "name": "installmentPlanId",
            "baseName": "InstallmentPlanId",
            "type": "number"
        },
        {
            "name": "installmentPlan",
            "baseName": "InstallmentPlan",
            "type": "InstallmentPlans"
        }    ];

    static getAttributeTypeMap() {
        return Tokens.attributeTypeMap;
    }
}

