/* tslint:disable */
/* eslint-disable */
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
 * @enum {string}
 */
export enum MerchantVertical {
    NotSet = 'NotSet',
    Communication = 'Communication',
    HealthBeauty = 'HealthBeauty',
    Jewellery = 'Jewellery',
    Auto = 'Auto',
    OfficeSupplies = 'OfficeSupplies',
    Electronics = 'Electronics',
    Travel = 'Travel',
    ApparelAccessories = 'ApparelAccessories',
    HardwareHomeImprovement = 'HardwareHomeImprovement',
    Speciality = 'Speciality',
    MedicalHealth = 'MedicalHealth',
    SportingGoods = 'SportingGoods',
    HousewareHomefurnishings = 'Houseware_Homefurnishings'
}

export function MerchantVerticalFromJSON(json: any): MerchantVertical {
    return MerchantVerticalFromJSONTyped(json, false);
}

export function MerchantVerticalFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantVertical {
    return json as MerchantVertical;
}

export function MerchantVerticalToJSON(value?: MerchantVertical | null): any {
    return value as any;
}

