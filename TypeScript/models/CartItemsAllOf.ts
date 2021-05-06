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

import { exists, mapValues } from '../runtime';
import {
    InstallmentPlans,
    InstallmentPlansFromJSON,
    InstallmentPlansFromJSONTyped,
    InstallmentPlansToJSON,
    Money2,
    Money2FromJSON,
    Money2FromJSONTyped,
    Money2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface CartItemsAllOf
 */
export interface CartItemsAllOf {
    /**
     * 
     * @type {string}
     * @memberof CartItemsAllOf
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CartItemsAllOf
     */
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof CartItemsAllOf
     */
    priceAmount: number;
    /**
     * 
     * @type {number}
     * @memberof CartItemsAllOf
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof CartItemsAllOf
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof CartItemsAllOf
     */
    installmentPlanId?: number;
    /**
     * 
     * @type {InstallmentPlans}
     * @memberof CartItemsAllOf
     */
    installmentPlan?: InstallmentPlans;
    /**
     * 
     * @type {Money2}
     * @memberof CartItemsAllOf
     */
    price?: Money2;
}

export function CartItemsAllOfFromJSON(json: any): CartItemsAllOf {
    return CartItemsAllOfFromJSONTyped(json, false);
}

export function CartItemsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartItemsAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'sku': !exists(json, 'Sku') ? undefined : json['Sku'],
        'priceAmount': json['PriceAmount'],
        'quantity': json['Quantity'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'installmentPlanId': !exists(json, 'InstallmentPlanId') ? undefined : json['InstallmentPlanId'],
        'installmentPlan': !exists(json, 'InstallmentPlan') ? undefined : InstallmentPlansFromJSON(json['InstallmentPlan']),
        'price': !exists(json, 'Price') ? undefined : Money2FromJSON(json['Price']),
    };
}

export function CartItemsAllOfToJSON(value?: CartItemsAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Sku': value.sku,
        'PriceAmount': value.priceAmount,
        'Quantity': value.quantity,
        'Description': value.description,
        'InstallmentPlanId': value.installmentPlanId,
        'InstallmentPlan': InstallmentPlansToJSON(value.installmentPlan),
        'Price': Money2ToJSON(value.price),
    };
}


