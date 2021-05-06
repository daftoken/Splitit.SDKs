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
    BusinessUnits,
    BusinessUnitsFromJSON,
    BusinessUnitsFromJSONTyped,
    BusinessUnitsToJSON,
    CollectDocumentsAllOf,
    CollectDocumentsAllOfFromJSON,
    CollectDocumentsAllOfFromJSONTyped,
    CollectDocumentsAllOfToJSON,
    Currencies,
    CurrenciesFromJSON,
    CurrenciesFromJSONTyped,
    CurrenciesToJSON,
    EntityBase,
    EntityBaseFromJSON,
    EntityBaseFromJSONTyped,
    EntityBaseToJSON,
    FundingCollectDocumentDetails,
    FundingCollectDocumentDetailsFromJSON,
    FundingCollectDocumentDetailsFromJSONTyped,
    FundingCollectDocumentDetailsToJSON,
    ScpProviders,
    ScpProvidersFromJSON,
    ScpProvidersFromJSONTyped,
    ScpProvidersToJSON,
} from './';

/**
 * 
 * @export
 * @interface CollectDocuments
 */
export interface CollectDocuments {
    /**
     * 
     * @type {number}
     * @memberof CollectDocuments
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof CollectDocuments
     */
    amount: number;
    /**
     * 
     * @type {number}
     * @memberof CollectDocuments
     */
    currencyId: number;
    /**
     * 
     * @type {number}
     * @memberof CollectDocuments
     */
    businessUnitId: number;
    /**
     * 
     * @type {Date}
     * @memberof CollectDocuments
     */
    approvalDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof CollectDocuments
     */
    discriminator?: string;
    /**
     * 
     * @type {number}
     * @memberof CollectDocuments
     */
    lenderId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CollectDocuments
     */
    excludeFromEmails?: boolean;
    /**
     * 
     * @type {BusinessUnits}
     * @memberof CollectDocuments
     */
    businessUnit?: BusinessUnits;
    /**
     * 
     * @type {Currencies}
     * @memberof CollectDocuments
     */
    currency?: Currencies;
    /**
     * 
     * @type {ScpProviders}
     * @memberof CollectDocuments
     */
    lender?: ScpProviders;
    /**
     * 
     * @type {Array<FundingCollectDocumentDetails>}
     * @memberof CollectDocuments
     */
    fundingCollectDocumentDetails?: Array<FundingCollectDocumentDetails>;
}

export function CollectDocumentsFromJSON(json: any): CollectDocuments {
    return CollectDocumentsFromJSONTyped(json, false);
}

export function CollectDocumentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectDocuments {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'amount': json['Amount'],
        'currencyId': json['CurrencyId'],
        'businessUnitId': json['BusinessUnitId'],
        'approvalDate': !exists(json, 'ApprovalDate') ? undefined : (new Date(json['ApprovalDate'])),
        'discriminator': !exists(json, 'Discriminator') ? undefined : json['Discriminator'],
        'lenderId': !exists(json, 'LenderId') ? undefined : json['LenderId'],
        'excludeFromEmails': !exists(json, 'ExcludeFromEmails') ? undefined : json['ExcludeFromEmails'],
        'businessUnit': !exists(json, 'BusinessUnit') ? undefined : BusinessUnitsFromJSON(json['BusinessUnit']),
        'currency': !exists(json, 'Currency') ? undefined : CurrenciesFromJSON(json['Currency']),
        'lender': !exists(json, 'Lender') ? undefined : ScpProvidersFromJSON(json['Lender']),
        'fundingCollectDocumentDetails': !exists(json, 'FundingCollectDocumentDetails') ? undefined : ((json['FundingCollectDocumentDetails'] as Array<any>).map(FundingCollectDocumentDetailsFromJSON)),
    };
}

export function CollectDocumentsToJSON(value?: CollectDocuments | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'Amount': value.amount,
        'CurrencyId': value.currencyId,
        'BusinessUnitId': value.businessUnitId,
        'ApprovalDate': value.approvalDate === undefined ? undefined : (value.approvalDate.toISOString()),
        'Discriminator': value.discriminator,
        'LenderId': value.lenderId,
        'ExcludeFromEmails': value.excludeFromEmails,
        'BusinessUnit': BusinessUnitsToJSON(value.businessUnit),
        'Currency': CurrenciesToJSON(value.currency),
        'Lender': ScpProvidersToJSON(value.lender),
        'FundingCollectDocumentDetails': value.fundingCollectDocumentDetails === undefined ? undefined : ((value.fundingCollectDocumentDetails as Array<any>).map(FundingCollectDocumentDetailsToJSON)),
    };
}


