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
export enum IntegrationType {
    None = 'None',
    Shopify = 'Shopify',
    Woocommerce = 'Woocommerce'
}

export function IntegrationTypeFromJSON(json: any): IntegrationType {
    return IntegrationTypeFromJSONTyped(json, false);
}

export function IntegrationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationType {
    return json as IntegrationType;
}

export function IntegrationTypeToJSON(value?: IntegrationType | null): any {
    return value as any;
}

