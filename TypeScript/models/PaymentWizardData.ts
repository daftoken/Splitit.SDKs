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
/**
 * 
 * @export
 * @interface PaymentWizardData
 */
export interface PaymentWizardData {
    /**
     * 
     * @type {string}
     * @memberof PaymentWizardData
     */
    requestedNumberOfInstallments?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentWizardData
     */
    successExitURL?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentWizardData
     */
    errorExitURL?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentWizardData
     */
    cancelExitURL?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentWizardData
     */
    successAsyncUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentWizardData
     */
    viewName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PaymentWizardData
     */
    isOpenedInIframe: boolean;
    /**
     * 
     * @type {string}
     * @memberof PaymentWizardData
     */
    paymentFormMessage?: string;
}

export function PaymentWizardDataFromJSON(json: any): PaymentWizardData {
    return PaymentWizardDataFromJSONTyped(json, false);
}

export function PaymentWizardDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentWizardData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'requestedNumberOfInstallments': !exists(json, 'RequestedNumberOfInstallments') ? undefined : json['RequestedNumberOfInstallments'],
        'successExitURL': !exists(json, 'SuccessExitURL') ? undefined : json['SuccessExitURL'],
        'errorExitURL': !exists(json, 'ErrorExitURL') ? undefined : json['ErrorExitURL'],
        'cancelExitURL': !exists(json, 'CancelExitURL') ? undefined : json['CancelExitURL'],
        'successAsyncUrl': !exists(json, 'SuccessAsyncUrl') ? undefined : json['SuccessAsyncUrl'],
        'viewName': !exists(json, 'ViewName') ? undefined : json['ViewName'],
        'isOpenedInIframe': json['IsOpenedInIframe'],
        'paymentFormMessage': !exists(json, 'PaymentFormMessage') ? undefined : json['PaymentFormMessage'],
    };
}

export function PaymentWizardDataToJSON(value?: PaymentWizardData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'RequestedNumberOfInstallments': value.requestedNumberOfInstallments,
        'SuccessExitURL': value.successExitURL,
        'ErrorExitURL': value.errorExitURL,
        'CancelExitURL': value.cancelExitURL,
        'SuccessAsyncUrl': value.successAsyncUrl,
        'ViewName': value.viewName,
        'IsOpenedInIframe': value.isOpenedInIframe,
        'PaymentFormMessage': value.paymentFormMessage,
    };
}


