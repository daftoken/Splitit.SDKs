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
/**
 *
 * @export
 * @enum {string}
 */
var PisErrorCodes;
(function (PisErrorCodes) {
    PisErrorCodes["ConfigurationKeyNotFound"] = "ConfigurationKeyNotFound";
    PisErrorCodes["IdNotFound"] = "IdNotFound";
    PisErrorCodes["InvalidInput"] = "InvalidInput";
    PisErrorCodes["ExternalSystemCallFailed"] = "ExternalSystemCallFailed";
    PisErrorCodes["IdempotencyError"] = "IdempotencyError";
    PisErrorCodes["IdempotencyOriginalRequestError"] = "IdempotencyOriginalRequestError";
    PisErrorCodes["RuleDataAlreadyExists"] = "RuleDataAlreadyExists";
    PisErrorCodes["PGPEncryptionKeyNotFound"] = "PGPEncryptionKeyNotFound";
    PisErrorCodes["InvalidPGPKey"] = "InvalidPGPKey";
    PisErrorCodes["InvalidInstallmentPlanNumber"] = "InvalidInstallmentPlanNumber";
    PisErrorCodes["InvalidInstallmentPlanStatus"] = "InvalidInstallmentPlanStatus";
    PisErrorCodes["InvalidCCCardTypeNotSupported"] = "InvalidCCCardTypeNotSupported";
    PisErrorCodes["InvalidNumberOfInstallments"] = "InvalidNumberOfInstallments";
    PisErrorCodes["InvalidAmountFormat"] = "InvalidAmountFormat";
    PisErrorCodes["CardUpdateIsNotAllowed"] = "CardUpdateIsNotAllowed";
    PisErrorCodes["InvalidCountryCode"] = "InvalidCountryCode";
    PisErrorCodes["InvalidResponseURL"] = "InvalidResponseURL";
    PisErrorCodes["InvalidCardholderName"] = "InvalidCardholderName";
    PisErrorCodes["InvalidAmount"] = "InvalidAmount";
    PisErrorCodes["InvalidCVV"] = "InvalidCVV";
    PisErrorCodes["InvalidCardNumber"] = "InvalidCardNumber";
    PisErrorCodes["InvalidExpirationDate"] = "InvalidExpirationDate";
    PisErrorCodes["InvalidConsumerFullName"] = "InvalidConsumerFullName";
    PisErrorCodes["InvalidEmailFormat"] = "InvalidEmailFormat";
    PisErrorCodes["InvalidAddress"] = "InvalidAddress";
    PisErrorCodes["InvalidZIPCode"] = "InvalidZIPCode";
    PisErrorCodes["InvalidCCIssueCountryNotSupportedByTerminal"] = "InvalidCCIssueCountryNotSupportedByTerminal";
    PisErrorCodes["InvalidCurrency"] = "InvalidCurrency";
    PisErrorCodes["InvalidMaskedCcNumNotFoundInPlan"] = "InvalidMaskedCcNumNotFoundInPlan";
    PisErrorCodes["InstallmentPlanIsAboutToExpire"] = "InstallmentPlanIsAboutToExpire";
    PisErrorCodes["CountrySubdivisionNotSupported"] = "CountrySubdivisionNotSupported";
    PisErrorCodes["UpdateInstallmentWithHigherAmountThanPersistedIsNotAllow"] = "UpdateInstallment_WithHigherAmountThanPersistedIsNotAllow";
    PisErrorCodes["UpdateInstallmentFirstInstallmentWithHigherAmountThanPersistedIsNotAllow"] = "UpdateInstallment_FirstInstallmentWithHigherAmountThanPersistedIsNotAllow";
    PisErrorCodes["UpdateInstallmentInTheMiddleOfPlanAsZeroIsNotAllow"] = "UpdateInstallment_InTheMiddleOfPlanAsZeroIsNotAllow";
    PisErrorCodes["RefundInstallmentWithHigherAmountThanOriginalIsNotAllowed"] = "RefundInstallmentWithHigherAmountThanOriginalIsNotAllowed";
    PisErrorCodes["RefundInstallmentThatHasBeenCapturedYetIsNotAllowed"] = "RefundInstallmentThatHasBeenCapturedYetIsNotAllowed";
    PisErrorCodes["UpdateInstallmentAlreadyProcessed"] = "UpdateInstallment_AlreadyProcessed";
    PisErrorCodes["ApprovePlanPlanAlreadyApproved"] = "ApprovePlan_PlanAlreadyApproved";
    PisErrorCodes["InvalidExpirationDateFormat"] = "InvalidExpirationDateFormat";
    PisErrorCodes["InvalidCCBinNotFound"] = "InvalidCCBinNotFound";
    PisErrorCodes["InvalidCCCardBrandNotSupported"] = "InvalidCCCardBrandNotSupported";
    PisErrorCodes["ApprovePlanNoApprovalEvidence"] = "ApprovePlan_NoApprovalEvidence";
    PisErrorCodes["PlanWithTheSamePaymentDataAlreadyBeenCreatedLately"] = "PlanWithTheSamePaymentDataAlreadyBeenCreatedLately";
    PisErrorCodes["InvalidFutureChargeDate"] = "InvalidFutureChargeDate";
    PisErrorCodes["InvalidFirstInstallmentAmount"] = "InvalidFirstInstallmentAmount";
    PisErrorCodes["CultureNameNotValid"] = "CultureNameNotValid";
    PisErrorCodes["CultureNotSupported"] = "CultureNotSupported";
    PisErrorCodes["SystemTextKeyNotFound"] = "SystemTextKeyNotFound";
    PisErrorCodes["TerminalNotFoundBySuppliedApiKey"] = "TerminalNotFoundBySuppliedApiKey";
    PisErrorCodes["UnknownZipCode"] = "UnknownZipCode";
    PisErrorCodes["CCRejectionProcessCannotBeInitiatedDueToAuthExpiration"] = "CCRejectionProcessCannotBeInitiatedDueToAuthExpiration";
    PisErrorCodes["CantChargeInstallmentWhilePlanChargesAreOnHold"] = "CantChargeInstallmentWhilePlanChargesAreOnHold";
    PisErrorCodes["CantReleaseHoldOnChargesSinceChargesAreNotHolded"] = "CantReleaseHoldOnChargesSinceChargesAreNotHolded";
    PisErrorCodes["RefundNotAllowedOneOrMoreInstallmentsPassedRefundAllowedTime"] = "RefundNotAllowedOneOrMoreInstallmentsPassedRefundAllowedTime";
    PisErrorCodes["RefundPartialyFailedOneOrMoreInstallmentFailedRefund"] = "RefundPartialyFailedOneOrMoreInstallmentFailedRefund";
    PisErrorCodes["RefundFailed"] = "RefundFailed";
    PisErrorCodes["UpdatePlanParametersAreNotSupported"] = "UpdatePlanParametersAreNotSupported";
    PisErrorCodes["RefundRequestedAmountExceededPlanRefundableAmount"] = "RefundRequestedAmountExceededPlanRefundableAmount";
    PisErrorCodes["InvalidCurrencyNotSupportedByTerminal"] = "InvalidCurrency_NotSupportedByTerminal";
    PisErrorCodes["CreditCardIsMissing"] = "CreditCardIsMissing";
    PisErrorCodes["PisMemberIsMissing"] = "PisMemberIsMissing";
    PisErrorCodes["AddressDataIsMissingOrPartiallyInitiated"] = "AddressDataIsMissingOrPartiallyInitiated";
    PisErrorCodes["CardHolderNameIsMissing"] = "CardHolderNameIsMissing";
    PisErrorCodes["CardNumberIsMissing"] = "CardNumberIsMissing";
    PisErrorCodes["CardExpirationMonthIsMissing"] = "CardExpirationMonthIsMissing";
    PisErrorCodes["CardExpirationYearIsMissing"] = "CardExpirationYearIsMissing";
    PisErrorCodes["NumberOfInstallmentNotDefined"] = "NumberOfInstallmentNotDefined";
    PisErrorCodes["InvalidStateCode"] = "InvalidStateCode";
    PisErrorCodes["EmailIsMissing"] = "EmailIsMissing";
    PisErrorCodes["ConsumerFullNameIsMissing"] = "ConsumerFullNameIsMissing";
    PisErrorCodes["CurrencyMustBeDefinedOnTransaction"] = "CurrencyMustBeDefinedOnTransaction";
    PisErrorCodes["CouldNotFundInstallmentPlan"] = "CouldNotFundInstallmentPlan";
    PisErrorCodes["CouldNotRevertFund"] = "CouldNotRevertFund";
    PisErrorCodes["InvalidPlanStrategy"] = "InvalidPlanStrategy";
    PisErrorCodes["FullCaptureNotSupported"] = "FullCaptureNotSupported";
    PisErrorCodes["InvalidCcPrepaidCardNotSupported"] = "InvalidCcPrepaidCardNotSupported";
    PisErrorCodes["CardExpireBeforePlanEnds"] = "CardExpireBeforePlanEnds";
    PisErrorCodes["PartialPlanAmountAuthorized"] = "PartialPlanAmountAuthorized";
    PisErrorCodes["SecuredAuthorizationRequiredForPartialPayment"] = "SecuredAuthorizationRequiredForPartialPayment";
    PisErrorCodes["ThreeDSecureDataNotFound"] = "ThreeDSecureDataNotFound";
    PisErrorCodes["ThreeDSecureNotSupportedByPlanStrategy"] = "ThreeDSecureNotSupportedByPlanStrategy";
    PisErrorCodes["ThreeDSecureRequiredDataMissing"] = "ThreeDSecureRequiredDataMissing";
    PisErrorCodes["StrategyNotAllowed"] = "StrategyNotAllowed";
    PisErrorCodes["PaymentTokenNotValid"] = "PaymentTokenNotValid";
    PisErrorCodes["ActivityNotSupportedForPlanStrategy"] = "ActivityNotSupportedForPlanStrategy";
    PisErrorCodes["PaymentWizardViewNotExist"] = "PaymentWizardViewNotExist";
    PisErrorCodes["InvalidUrl"] = "InvalidUrl";
    PisErrorCodes["IssuerBinNotSupportingInstallmentException"] = "IssuerBinNotSupportingInstallmentException";
    PisErrorCodes["CouldNotChangeLender"] = "CouldNotChangeLender";
    PisErrorCodes["FraudDeteced"] = "FraudDeteced";
    PisErrorCodes["PhoneIsMissing"] = "PhoneIsMissing";
    PisErrorCodes["InvalidPhoneFormat"] = "InvalidPhoneFormat";
    PisErrorCodes["InstallmentMissingOpenAuthorization"] = "InstallmentMissingOpenAuthorization";
    PisErrorCodes["GeneralError"] = "GeneralError";
    PisErrorCodes["GtwyResultGeneralError"] = "GtwyResultGeneralError";
    PisErrorCodes["GtwyResultCCDataAVSZip"] = "GtwyResultCCDataAVSZip";
    PisErrorCodes["GtwyResultCCDataAVSAddress"] = "GtwyResultCCDataAVSAddress";
    PisErrorCodes["GtwyResultCCDataCVV"] = "GtwyResultCCDataCVV";
    PisErrorCodes["GtwyResultCCDataCCExpiration"] = "GtwyResultCCDataCCExpiration";
    PisErrorCodes["GtwyResultCCDataAVS"] = "GtwyResultCCDataAVS";
    PisErrorCodes["GtwyResultCCDataNumber"] = "GtwyResultCCDataNumber";
    PisErrorCodes["GtwyResultCCDataGeneralProblem"] = "GtwyResultCCDataGeneralProblem";
    PisErrorCodes["GtwyResultCCDataInsufficientFunds"] = "GtwyResultCCDataInsufficientFunds";
    PisErrorCodes["GtwyResultCCWasDeclined"] = "GtwyResultCCWasDeclined";
    PisErrorCodes["GtwyConnectivityProblem"] = "GtwyConnectivityProblem";
    PisErrorCodes["GtwyMerchantDataProblem"] = "GtwyMerchantDataProblem";
    PisErrorCodes["GtwyRequire3DAuthentication"] = "GtwyRequire3DAuthentication";
    PisErrorCodes["InvalidCredentials"] = "InvalidCredentials";
    PisErrorCodes["UserIsLocked"] = "UserIsLocked";
    PisErrorCodes["UserIsLockedDueInactivity"] = "UserIsLockedDueInactivity";
    PisErrorCodes["SessionNotValid"] = "SessionNotValid";
    PisErrorCodes["SessionExpired"] = "SessionExpired";
    PisErrorCodes["ActivityNotAllowedForUser"] = "ActivityNotAllowedForUser";
    PisErrorCodes["ActivityOnMerchantNotAllowedForUser"] = "ActivityOnMerchantNotAllowedForUser";
    PisErrorCodes["ActivityOnTerminalNotAllowedForUser"] = "ActivityOnTerminalNotAllowedForUser";
    PisErrorCodes["ActivityOnInstallmentPlanNotAllowedForUser"] = "ActivityOnInstallmentPlanNotAllowedForUser";
    PisErrorCodes["TokenNotFoundOrExpired"] = "TokenNotFoundOrExpired";
    PisErrorCodes["TokenAlreadyUsed"] = "TokenAlreadyUsed";
    PisErrorCodes["UserOldPassrodIsIncorrect"] = "UserOldPassrodIsIncorrect";
    PisErrorCodes["UserNewPasswordAlreadyUsed"] = "UserNewPasswordAlreadyUsed";
    PisErrorCodes["UserEmailNotFound"] = "UserEmailNotFound";
    PisErrorCodes["PasswordExpired"] = "PasswordExpired";
    PisErrorCodes["TouchPointNotFound"] = "TouchPointNotFound";
    PisErrorCodes["ActivityNotAllowedForPublicSession"] = "ActivityNotAllowedForPublicSession";
    PisErrorCodes["UserRelatesToMoreThanSingleBusinessUnit"] = "UserRelatesToMoreThanSingleBusinessUnit";
    PisErrorCodes["InvalidPasswordStrength"] = "InvalidPasswordStrength";
    PisErrorCodes["InvalidRequestedStrategy"] = "InvalidRequestedStrategy";
    PisErrorCodes["RoleNotAllowedForUser"] = "RoleNotAllowedForUser";
    PisErrorCodes["UserNameAlreadyExists"] = "UserNameAlreadyExists";
    PisErrorCodes["ActivityNotAllowedForAuthenticationType"] = "ActivityNotAllowedForAuthenticationType";
    PisErrorCodes["ActivityNotAllowedDueToPrivacyProtection"] = "ActivityNotAllowedDueToPrivacyProtection";
    PisErrorCodes["BusinessUnitNotAllowedForUser"] = "BusinessUnitNotAllowedForUser";
    PisErrorCodes["UpdateToDifferentBusinessPartyRoleNotAllowed"] = "UpdateToDifferentBusinessPartyRoleNotAllowed";
    PisErrorCodes["ExternalAuthAmountNotValid"] = "ExternalAuthAmountNotValid";
    PisErrorCodes["CaptchaNotSuccessful"] = "CaptchaNotSuccessful";
    PisErrorCodes["ReportNotAllowedForUser"] = "ReportNotAllowedForUser";
    PisErrorCodes["InvalidPeriodRangeValues"] = "InvalidPeriodRangeValues";
    PisErrorCodes["RemovedTransactionCurrencyIsInUseByTerminal"] = "RemovedTransactionCurrencyIsInUseByTerminal";
    PisErrorCodes["RemovedTransactionCurrencyIsInUseByAccountingCurrency"] = "RemovedTransactionCurrencyIsInUseByAccountingCurrency";
    PisErrorCodes["InvalidAmountRangeValues"] = "InvalidAmountRangeValues";
    PisErrorCodes["EmailCannotBeEmpty"] = "EmailCannotBeEmpty";
    PisErrorCodes["CountryNotSupported"] = "CountryNotSupported";
    PisErrorCodes["TerminalApiKeyMissing"] = "TerminalApiKeyMissing";
    PisErrorCodes["TotalWeightedValuesNotEqual100"] = "TotalWeightedValuesNotEqual100";
    PisErrorCodes["AmountExceededMaxAllowedForFundingOperation"] = "AmountExceededMaxAllowedForFundingOperation";
    PisErrorCodes["FundedPlansCannotBeCanceledWithoutRefund"] = "FundedPlansCannotBeCanceledWithoutRefund";
    PisErrorCodes["InstallmentsCannotBeUpdatedOnFundedPlanWithLowerPlanAmount"] = "InstallmentsCannotBeUpdatedOnFundedPlanWithLowerPlanAmount";
    PisErrorCodes["SalesforceOperationError"] = "SalesforceOperationError";
    PisErrorCodes["MultipleMessagingMeansProvided"] = "MultipleMessagingMeansProvided";
    PisErrorCodes["NoMessagingMeansWasProvided"] = "NoMessagingMeansWasProvided";
    PisErrorCodes["LogoCannotBeRemoved"] = "LogoCannotBeRemoved";
    PisErrorCodes["PlanIsLockedForChanges"] = "PlanIsLockedForChanges";
    PisErrorCodes["CannotPerfromActionDueToActiveDelaydCharge"] = "CannotPerfromActionDueToActiveDelaydCharge";
    PisErrorCodes["ExternalInstallmentProviderError"] = "ExternalInstallmentProviderError";
    PisErrorCodes["InvalidCCCardTypeNotSupportedMoreThanXInstallments"] = "InvalidCCCardTypeNotSupportedMoreThanXInstallments";
    PisErrorCodes["InvalidCCCardTypeNotSupportedMoreThanXAmount"] = "InvalidCCCardTypeNotSupportedMoreThanXAmount";
    PisErrorCodes["PlanAmountExceedsAllowedDecimalPlaces"] = "PlanAmountExceedsAllowedDecimalPlaces";
    PisErrorCodes["InvalidCCCardBrandNotSupportedMoreThanXInstallments"] = "InvalidCCCardBrandNotSupportedMoreThanXInstallments";
    PisErrorCodes["InvalidCCCardBrandNotSupportedMoreThanXAmount"] = "InvalidCCCardBrandNotSupportedMoreThanXAmount";
    PisErrorCodes["EmailNotVerified"] = "EmailNotVerified";
    PisErrorCodes["InvalidCcPrepaidCardNotSupportedMoreThanXInstallments"] = "InvalidCcPrepaidCardNotSupportedMoreThanXInstallments";
    PisErrorCodes["InvalidCcPrepaidCardNotSupportedMoreThanXAmount"] = "InvalidCcPrepaidCardNotSupportedMoreThanXAmount";
    PisErrorCodes["PlanContextNotValidForNumberOfInstallments"] = "PlanContextNotValidForNumberOfInstallments";
    PisErrorCodes["PlanContextNotValidForAmount"] = "PlanContextNotValidForAmount";
    PisErrorCodes["UserEmailAlreadyExists"] = "UserEmailAlreadyExists";
    PisErrorCodes["UserNotFound"] = "UserNotFound";
    PisErrorCodes["None"] = "None";
})(PisErrorCodes = exports.PisErrorCodes || (exports.PisErrorCodes = {}));
function PisErrorCodesFromJSON(json) {
    return PisErrorCodesFromJSONTyped(json, false);
}
exports.PisErrorCodesFromJSON = PisErrorCodesFromJSON;
function PisErrorCodesFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PisErrorCodesFromJSONTyped = PisErrorCodesFromJSONTyped;
function PisErrorCodesToJSON(value) {
    return value;
}
exports.PisErrorCodesToJSON = PisErrorCodesToJSON;
