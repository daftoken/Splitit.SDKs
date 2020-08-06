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
export enum SystemTextCategory {
    TermsAndConditions = 'TermsAndConditions',
    EmailContent = 'EmailContent',
    Error = 'Error',
    EmailTemplate = 'EmailTemplate',
    AdministrationPotral = 'AdministrationPotral',
    Receipt = 'Receipt',
    InstallmentPlanStatus = 'InstallmentPlanStatus',
    InstallmentStatus = 'InstallmentStatus',
    PurchaseMethod = 'PurchaseMethod',
    OperationType = 'OperationType',
    CardBrand = 'CardBrand',
    PaymentDetails = 'PaymentDetails',
    Common = 'Common',
    VPos = 'VPos',
    PaymentTransactionShopperMessage = 'PaymentTransactionShopperMessage',
    TermsAndConditionsLegal = 'TermsAndConditionsLegal',
    Ecomm = 'Ecomm',
    ShopperSplititAccount = 'ShopperSplititAccount',
    SMSContent = 'SMSContent',
    POS = 'POS',
    FlexFields = 'FlexFields',
    MessagingSystem = 'MessagingSystem',
    PaymentFormV3 = 'PaymentFormV3',
    HowSplititWorks = 'HowSplititWorks',
    UpstreamMessaging = 'UpstreamMessaging',
    Onboarding = 'Onboarding'
}

export function SystemTextCategoryFromJSON(json: any): SystemTextCategory {
    return SystemTextCategoryFromJSONTyped(json, false);
}

export function SystemTextCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemTextCategory {
    return json as SystemTextCategory;
}

export function SystemTextCategoryToJSON(value?: SystemTextCategory | null): any {
    return value as any;
}

