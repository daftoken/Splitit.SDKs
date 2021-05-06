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

export class FundingRuleDataScpProviderSettingAllOf {
    'id': number;
    'scpProviderId': number;
    'fundingRuleDataId': number;
    'creditLine': number;
    'effectiveScpRevenueSharePercent': number;
    'effectiveScpVariableCostApr': number;
    'isSecondary': boolean;
    'rotationWeight': number;
    'isEnabled': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number"
        },
        {
            "name": "scpProviderId",
            "baseName": "ScpProviderId",
            "type": "number"
        },
        {
            "name": "fundingRuleDataId",
            "baseName": "FundingRuleDataId",
            "type": "number"
        },
        {
            "name": "creditLine",
            "baseName": "CreditLine",
            "type": "number"
        },
        {
            "name": "effectiveScpRevenueSharePercent",
            "baseName": "EffectiveScpRevenueSharePercent",
            "type": "number"
        },
        {
            "name": "effectiveScpVariableCostApr",
            "baseName": "EffectiveScpVariableCostApr",
            "type": "number"
        },
        {
            "name": "isSecondary",
            "baseName": "IsSecondary",
            "type": "boolean"
        },
        {
            "name": "rotationWeight",
            "baseName": "RotationWeight",
            "type": "number"
        },
        {
            "name": "isEnabled",
            "baseName": "IsEnabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return FundingRuleDataScpProviderSettingAllOf.attributeTypeMap;
    }
}

