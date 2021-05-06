"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var runtime_1 = require("../runtime");
var _1 = require("./");
function BinDataItemsFromJSON(json) {
    return BinDataItemsFromJSONTyped(json, false);
}
exports.BinDataItemsFromJSON = BinDataItemsFromJSON;
function BinDataItemsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['Id'],
        'lowBin': !runtime_1.exists(json, 'LowBin') ? undefined : json['LowBin'],
        'highBin': !runtime_1.exists(json, 'HighBin') ? undefined : json['HighBin'],
        'binLength': json['BinLength'],
        'binDetailPan': json['BinDetailPan'],
        'issuerBankName': !runtime_1.exists(json, 'IssuerBankName') ? undefined : json['IssuerBankName'],
        'issueCountryId': !runtime_1.exists(json, 'IssueCountryId') ? undefined : json['IssueCountryId'],
        'detailCardIndicator': !runtime_1.exists(json, 'DetailCardIndicator') ? undefined : json['DetailCardIndicator'],
        'issuerUpdateDate': (new Date(json['IssuerUpdateDate'])),
        'ebtState': !runtime_1.exists(json, 'EbtState') ? undefined : json['EbtState'],
        'isDebitSignatureNetworkParticipant': json['IsDebitSignatureNetworkParticipant'],
        'isFsa': json['IsFsa'],
        'isPrepaid': json['IsPrepaid'],
        'productId': !runtime_1.exists(json, 'ProductId') ? undefined : json['ProductId'],
        'regulatorIndicator': !runtime_1.exists(json, 'RegulatorIndicator') ? undefined : json['RegulatorIndicator'],
        'visaProductSubType': !runtime_1.exists(json, 'VisaProductSubType') ? undefined : json['VisaProductSubType'],
        'visaLargeTicketIndicator': !runtime_1.exists(json, 'VisaLargeTicketIndicator') ? undefined : json['VisaLargeTicketIndicator'],
        'accountLevelProcessingIndicator': !runtime_1.exists(json, 'AccountLevelProcessingIndicator') ? undefined : json['AccountLevelProcessingIndicator'],
        'cardClass': !runtime_1.exists(json, 'CardClass') ? undefined : json['CardClass'],
        'panLengthMin': json['PanLengthMin'],
        'panLengthMax': json['PanLengthMax'],
        'tokenIndicator': !runtime_1.exists(json, 'TokenIndicator') ? undefined : json['TokenIndicator'],
        'issuingNetwork': !runtime_1.exists(json, 'IssuingNetwork') ? undefined : json['IssuingNetwork'],
        'cardHolderBillingCurrency': !runtime_1.exists(json, 'CardHolderBillingCurrency') ? undefined : json['CardHolderBillingCurrency'],
        'moneySendIndicator': !runtime_1.exists(json, 'MoneySendIndicator') ? undefined : json['MoneySendIndicator'],
        'originalCreditMoneyTransferIndicator': !runtime_1.exists(json, 'OriginalCreditMoneyTransferIndicator') ? undefined : json['OriginalCreditMoneyTransferIndicator'],
        'originalCreditOnlineGamblingIndicator': !runtime_1.exists(json, 'OriginalCreditOnlineGamblingIndicator') ? undefined : json['OriginalCreditOnlineGamblingIndicator'],
        'originalCreditTransactionIndicator': !runtime_1.exists(json, 'OriginalCreditTransactionIndicator') ? undefined : json['OriginalCreditTransactionIndicator'],
        'fastFunds': !runtime_1.exists(json, 'FastFunds') ? undefined : json['FastFunds'],
        'reservedField': !runtime_1.exists(json, 'ReservedField') ? undefined : json['ReservedField'],
        'issueCountry': !runtime_1.exists(json, 'IssueCountry') ? undefined : _1.CountriesFromJSON(json['IssueCountry']),
        'cardBrand': _1.CardBrandFromJSON(json['CardBrand']),
        'cardType': _1.CardTypeFromJSON(json['CardType']),
    };
}
exports.BinDataItemsFromJSONTyped = BinDataItemsFromJSONTyped;
function BinDataItemsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Id': value.id,
        'LowBin': value.lowBin,
        'HighBin': value.highBin,
        'BinLength': value.binLength,
        'BinDetailPan': value.binDetailPan,
        'IssuerBankName': value.issuerBankName,
        'IssueCountryId': value.issueCountryId,
        'DetailCardIndicator': value.detailCardIndicator,
        'IssuerUpdateDate': (value.issuerUpdateDate.toISOString()),
        'EbtState': value.ebtState,
        'IsDebitSignatureNetworkParticipant': value.isDebitSignatureNetworkParticipant,
        'IsFsa': value.isFsa,
        'IsPrepaid': value.isPrepaid,
        'ProductId': value.productId,
        'RegulatorIndicator': value.regulatorIndicator,
        'VisaProductSubType': value.visaProductSubType,
        'VisaLargeTicketIndicator': value.visaLargeTicketIndicator,
        'AccountLevelProcessingIndicator': value.accountLevelProcessingIndicator,
        'CardClass': value.cardClass,
        'PanLengthMin': value.panLengthMin,
        'PanLengthMax': value.panLengthMax,
        'TokenIndicator': value.tokenIndicator,
        'IssuingNetwork': value.issuingNetwork,
        'CardHolderBillingCurrency': value.cardHolderBillingCurrency,
        'MoneySendIndicator': value.moneySendIndicator,
        'OriginalCreditMoneyTransferIndicator': value.originalCreditMoneyTransferIndicator,
        'OriginalCreditOnlineGamblingIndicator': value.originalCreditOnlineGamblingIndicator,
        'OriginalCreditTransactionIndicator': value.originalCreditTransactionIndicator,
        'FastFunds': value.fastFunds,
        'ReservedField': value.reservedField,
        'IssueCountry': _1.CountriesToJSON(value.issueCountry),
        'CardBrand': _1.CardBrandToJSON(value.cardBrand),
        'CardType': _1.CardTypeToJSON(value.cardType),
    };
}
exports.BinDataItemsToJSON = BinDataItemsToJSON;
