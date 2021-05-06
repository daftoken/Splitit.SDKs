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
function CardsAllOfFromJSON(json) {
    return CardsAllOfFromJSONTyped(json, false);
}
exports.CardsAllOfFromJSON = CardsAllOfFromJSON;
function CardsAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'kekId': json['KekId'],
        'binBinNumber': !runtime_1.exists(json, 'BinBinNumber') ? undefined : json['BinBinNumber'],
        'binIssuingCountryIsoNumber': !runtime_1.exists(json, 'BinIssuingCountryIsoNumber') ? undefined : json['BinIssuingCountryIsoNumber'],
        'binId': json['BinId'],
        'expirationMonth': json['ExpirationMonth'],
        'expirationYear': json['ExpirationYear'],
        'addressDataAddressLine': !runtime_1.exists(json, 'AddressDataAddressLine') ? undefined : json['AddressDataAddressLine'],
        'addressDataZip': !runtime_1.exists(json, 'AddressDataZip') ? undefined : json['AddressDataZip'],
        'isDeleted': json['IsDeleted'],
        'version': json['Version'],
        'pisMemberUniqueId': !runtime_1.exists(json, 'PisMemberUniqueId') ? undefined : json['PisMemberUniqueId'],
        'pisMemberId': !runtime_1.exists(json, 'PisMemberId') ? undefined : json['PisMemberId'],
        'addressDataAddressLine2': !runtime_1.exists(json, 'AddressDataAddressLine2') ? undefined : json['AddressDataAddressLine2'],
        'addressDataCity': !runtime_1.exists(json, 'AddressDataCity') ? undefined : json['AddressDataCity'],
        'addressDataCountryId': !runtime_1.exists(json, 'AddressDataCountryId') ? undefined : json['AddressDataCountryId'],
        'addressDataStateId': !runtime_1.exists(json, 'AddressDataStateId') ? undefined : json['AddressDataStateId'],
        'addressDataLegacyFullAddressLine': !runtime_1.exists(json, 'AddressDataLegacyFullAddressLine') ? undefined : json['AddressDataLegacyFullAddressLine'],
        'binIsPrepaid': !runtime_1.exists(json, 'BinIsPrepaid') ? undefined : json['BinIsPrepaid'],
        'token': !runtime_1.exists(json, 'Token') ? undefined : json['Token'],
        'kek': !runtime_1.exists(json, 'Kek') ? undefined : _1.KeksFromJSON(json['Kek']),
        'cardClass': !runtime_1.exists(json, 'CardClass') ? undefined : json['CardClass'],
        'productId': !runtime_1.exists(json, 'ProductId') ? undefined : json['ProductId'],
        'issuerBankName': !runtime_1.exists(json, 'IssuerBankName') ? undefined : json['IssuerBankName'],
        'dekDataId': !runtime_1.exists(json, 'DekDataId') ? undefined : json['DekDataId'],
        'dekData': !runtime_1.exists(json, 'DekData') ? undefined : _1.DEKDataFromJSON(json['DekData']),
        'pisMember': !runtime_1.exists(json, 'PisMember') ? undefined : _1.PisMembersFromJSON(json['PisMember']),
        'accountUpdaterPendingCards': !runtime_1.exists(json, 'AccountUpdaterPendingCards') ? undefined : (json['AccountUpdaterPendingCards'].map(_1.AccountUpdaterPendingCardsFromJSON)),
        'cardStateLogs': !runtime_1.exists(json, 'CardStateLogs') ? undefined : (json['CardStateLogs'].map(_1.CardStateLogsFromJSON)),
        'fraudDetectionLogs': !runtime_1.exists(json, 'FraudDetectionLogs') ? undefined : (json['FraudDetectionLogs'].map(_1.FraudDetectionLogsFromJSON)),
        'installmentPlanAuditLogs': !runtime_1.exists(json, 'InstallmentPlanAuditLogs') ? undefined : (json['InstallmentPlanAuditLogs'].map(_1.InstallmentPlanAuditLogsFromJSON)),
        'installmentPlans': !runtime_1.exists(json, 'InstallmentPlans') ? undefined : (json['InstallmentPlans'].map(_1.InstallmentPlansFromJSON)),
        'addressData': !runtime_1.exists(json, 'AddressData') ? undefined : _1.AddressData2FromJSON(json['AddressData']),
        'encryptedNumber': !runtime_1.exists(json, 'EncryptedNumber') ? undefined : json['EncryptedNumber'],
        'dek': !runtime_1.exists(json, 'Dek') ? undefined : json['Dek'],
        'maskedNumber': !runtime_1.exists(json, 'MaskedNumber') ? undefined : json['MaskedNumber'],
        'cardHolderName': !runtime_1.exists(json, 'CardHolderName') ? undefined : json['CardHolderName'],
        'binCardBrand': _1.CardBrandFromJSON(json['BinCardBrand']),
        'binCardType': _1.CardTypeFromJSON(json['BinCardType']),
        'cvv': !runtime_1.exists(json, 'Cvv') ? undefined : json['Cvv'],
        'bin': !runtime_1.exists(json, 'Bin') ? undefined : _1.BinDataFromJSON(json['Bin']),
        'country': !runtime_1.exists(json, 'Country') ? undefined : _1.CountriesFromJSON(json['Country']),
        'state': !runtime_1.exists(json, 'State') ? undefined : _1.CountrySubdivisionsFromJSON(json['State']),
    };
}
exports.CardsAllOfFromJSONTyped = CardsAllOfFromJSONTyped;
function CardsAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'KekId': value.kekId,
        'BinBinNumber': value.binBinNumber,
        'BinIssuingCountryIsoNumber': value.binIssuingCountryIsoNumber,
        'BinId': value.binId,
        'ExpirationMonth': value.expirationMonth,
        'ExpirationYear': value.expirationYear,
        'AddressDataAddressLine': value.addressDataAddressLine,
        'AddressDataZip': value.addressDataZip,
        'IsDeleted': value.isDeleted,
        'Version': value.version,
        'PisMemberUniqueId': value.pisMemberUniqueId,
        'PisMemberId': value.pisMemberId,
        'AddressDataAddressLine2': value.addressDataAddressLine2,
        'AddressDataCity': value.addressDataCity,
        'AddressDataCountryId': value.addressDataCountryId,
        'AddressDataStateId': value.addressDataStateId,
        'AddressDataLegacyFullAddressLine': value.addressDataLegacyFullAddressLine,
        'BinIsPrepaid': value.binIsPrepaid,
        'Token': value.token,
        'Kek': _1.KeksToJSON(value.kek),
        'CardClass': value.cardClass,
        'ProductId': value.productId,
        'IssuerBankName': value.issuerBankName,
        'DekDataId': value.dekDataId,
        'DekData': _1.DEKDataToJSON(value.dekData),
        'PisMember': _1.PisMembersToJSON(value.pisMember),
        'AccountUpdaterPendingCards': value.accountUpdaterPendingCards === undefined ? undefined : (value.accountUpdaterPendingCards.map(_1.AccountUpdaterPendingCardsToJSON)),
        'CardStateLogs': value.cardStateLogs === undefined ? undefined : (value.cardStateLogs.map(_1.CardStateLogsToJSON)),
        'FraudDetectionLogs': value.fraudDetectionLogs === undefined ? undefined : (value.fraudDetectionLogs.map(_1.FraudDetectionLogsToJSON)),
        'InstallmentPlanAuditLogs': value.installmentPlanAuditLogs === undefined ? undefined : (value.installmentPlanAuditLogs.map(_1.InstallmentPlanAuditLogsToJSON)),
        'InstallmentPlans': value.installmentPlans === undefined ? undefined : (value.installmentPlans.map(_1.InstallmentPlansToJSON)),
        'AddressData': _1.AddressData2ToJSON(value.addressData),
        'EncryptedNumber': value.encryptedNumber,
        'Dek': value.dek,
        'MaskedNumber': value.maskedNumber,
        'CardHolderName': value.cardHolderName,
        'BinCardBrand': _1.CardBrandToJSON(value.binCardBrand),
        'BinCardType': _1.CardTypeToJSON(value.binCardType),
        'Cvv': value.cvv,
        'Bin': _1.BinDataToJSON(value.bin),
        'Country': _1.CountriesToJSON(value.country),
        'State': _1.CountrySubdivisionsToJSON(value.state),
    };
}
exports.CardsAllOfToJSON = CardsAllOfToJSON;
