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
var BusinessActivity;
(function (BusinessActivity) {
    BusinessActivity["InstallmentPlanCreate"] = "InstallmentPlanCreate";
    BusinessActivity["InstallmentPlanUpdate"] = "InstallmentPlanUpdate";
    BusinessActivity["InstallmentPlanApprove"] = "InstallmentPlanApprove";
    BusinessActivity["InstallmentPlanDelete"] = "InstallmentPlanDelete";
    BusinessActivity["InstallmentPlanStartInstallments"] = "InstallmentPlanStartInstallments";
    BusinessActivity["InstallmentPlanUpdatePaymentData"] = "InstallmentPlanUpdatePaymentData";
    BusinessActivity["InstallmentPlanCancel"] = "InstallmentPlanCancel";
    BusinessActivity["InstallmentPlanAuthorize"] = "InstallmentPlanAuthorize";
    BusinessActivity["InstallmentPlanCharge"] = "InstallmentPlanCharge";
    BusinessActivity["InstallmentPlanGet"] = "InstallmentPlanGet";
    BusinessActivity["InstallmentPlanStop"] = "InstallmentPlanStop";
    BusinessActivity["InstallmentPlanRetry"] = "InstallmentPlanRetry";
    BusinessActivity["InstallmentPlanFullCapture"] = "InstallmentPlanFullCapture";
    BusinessActivity["ConsumersGet"] = "ConsumersGet";
    BusinessActivity["ReceiptGet"] = "ReceiptGet";
    BusinessActivity["ExposeFullCcNumber"] = "ExposeFullCcNumber";
    BusinessActivity["RequestApprove"] = "RequestApprove";
    BusinessActivity["UserUpdate"] = "UserUpdate";
    BusinessActivity["InstallmentsUpdate"] = "InstallmentsUpdate";
    BusinessActivity["Refund"] = "Refund";
    BusinessActivity["ChangePassword"] = "ChangePassword";
    BusinessActivity["ResetPassword"] = "ResetPassword";
    BusinessActivity["GetUserProfile"] = "GetUserProfile";
    BusinessActivity["GetResources"] = "GetResources";
    BusinessActivity["GetSupportedCultures"] = "GetSupportedCultures";
    BusinessActivity["MerchantSave"] = "MerchantSave";
    BusinessActivity["MerchantGet"] = "MerchantGet";
    BusinessActivity["InstallmentPlanSendEvent"] = "InstallmentPlanSendEvent";
    BusinessActivity["BulkCardsUpdate"] = "BulkCardsUpdate";
    BusinessActivity["CardsRetrieval"] = "CardsRetrieval";
    BusinessActivity["SimulateInstallmentPlanCreate"] = "SimulateInstallmentPlanCreate";
    BusinessActivity["InstallmentPlanHoldCharges"] = "InstallmentPlanHoldCharges";
    BusinessActivity["InstallmentPlanReleaseHoldCharges"] = "InstallmentPlanReleaseHoldCharges";
    BusinessActivity["TerminalGet"] = "TerminalGet";
    BusinessActivity["InstallmentPlanAutoRetry"] = "InstallmentPlanAutoRetry";
    BusinessActivity["InstallmentPlanInitiate"] = "InstallmentPlanInitiate";
    BusinessActivity["GetValidNumberOfInstallments"] = "GetValidNumberOfInstallments";
    BusinessActivity["GetInitiatedInstallmentPlan"] = "GetInitiatedInstallmentPlan";
    BusinessActivity["GetTerminalPairToken"] = "GetTerminalPairToken";
    BusinessActivity["SaveRole"] = "SaveRole";
    BusinessActivity["SetRoleBusinessActivities"] = "SetRoleBusinessActivities";
    BusinessActivity["GatewayTransactionUpdate"] = "GatewayTransactionUpdate";
    BusinessActivity["GatewayTransactionsGet"] = "GatewayTransactionsGet";
    BusinessActivity["TransformPlanToFunded"] = "TransformPlanToFunded";
    BusinessActivity["TransformPlanToNonFunded"] = "TransformPlanToNonFunded";
    BusinessActivity["TermsAndConditionsGet"] = "TermsAndConditionsGet";
    BusinessActivity["ReCalculateFees"] = "ReCalculateFees";
    BusinessActivity["GatewayTransactionsTest"] = "GatewayTransactionsTest";
    BusinessActivity["BinSave"] = "BinSave";
    BusinessActivity["MarkPlanFundingTranferDone"] = "MarkPlanFundingTranferDone";
    BusinessActivity["InstallmentPlanMarkAsTest"] = "InstallmentPlanMarkAsTest";
    BusinessActivity["UserUnlock"] = "UserUnlock";
    BusinessActivity["GetUsers"] = "GetUsers";
    BusinessActivity["GetSystemEmails"] = "GetSystemEmails";
    BusinessActivity["InstallmentPlanChangeStrategy"] = "InstallmentPlanChangeStrategy";
    BusinessActivity["InstallmentPlanSplitPay"] = "InstallmentPlanSplitPay";
    BusinessActivity["Get3DSecureParameters"] = "Get3DSecureParameters";
    BusinessActivity["Finalize3DSecure"] = "Finalize3DSecure";
    BusinessActivity["ExecStoredProcedure"] = "ExecStoredProcedure";
    BusinessActivity["GetJobs"] = "GetJobs";
    BusinessActivity["AddJobDefinition"] = "AddJobDefinition";
    BusinessActivity["RunJob"] = "RunJob";
    BusinessActivity["ScheduleJob"] = "ScheduleJob";
    BusinessActivity["CreateUser"] = "CreateUser";
    BusinessActivity["DeleteUser"] = "DeleteUser";
    BusinessActivity["MarkPlanReserveReturnDone"] = "MarkPlanReserveReturnDone";
    BusinessActivity["InstallmentPlanSetDelayResolution"] = "InstallmentPlanSetDelayResolution";
    BusinessActivity["InstallmentPlanApproveBankTransfer"] = "InstallmentPlanApproveBankTransfer";
    BusinessActivity["GetAuditLog"] = "GetAuditLog";
    BusinessActivity["LoadTranslation"] = "LoadTranslation";
    BusinessActivity["SetDataPrivacyRestriction"] = "SetDataPrivacyRestriction";
    BusinessActivity["VerifyPayment"] = "VerifyPayment";
    BusinessActivity["InstallmentPlanVerifyPaid"] = "InstallmentPlanVerifyPaid";
    BusinessActivity["SetEmailRules"] = "SetEmailRules";
    BusinessActivity["SetMerchantEventSubscription"] = "SetMerchantEventSubscription";
    BusinessActivity["GetMerchantEventSubscriptions"] = "GetMerchantEventSubscriptions";
    BusinessActivity["GetReconciliationReport"] = "GetReconciliationReport";
    BusinessActivity["GetOutstandingAmountsReport"] = "GetOutstandingAmountsReport";
    BusinessActivity["GetNewPlansReport"] = "GetNewPlansReport";
    BusinessActivity["UpdateTerminal"] = "UpdateTerminal";
    BusinessActivity["FinanceFunding"] = "FinanceFunding";
    BusinessActivity["GetLenders"] = "GetLenders";
    BusinessActivity["InstallmentPlanChangeLender"] = "InstallmentPlanChangeLender";
    BusinessActivity["GetMerchantFundingRules"] = "GetMerchantFundingRules";
    BusinessActivity["FeeRuleDataGet"] = "FeeRuleDataGet";
    BusinessActivity["SaveFeeRuleData"] = "SaveFeeRuleData";
    BusinessActivity["GetMerchantStatements"] = "GetMerchantStatements";
    BusinessActivity["ConfirmMerchantStatements"] = "ConfirmMerchantStatements";
    BusinessActivity["SaveMerchantFundingRules"] = "SaveMerchantFundingRules";
    BusinessActivity["GetMerchantSettings"] = "GetMerchantSettings";
    BusinessActivity["SaveMerchantSettings"] = "SaveMerchantSettings";
    BusinessActivity["InstallmentPlanCapture"] = "InstallmentPlanCapture";
    BusinessActivity["DeleteAgents"] = "DeleteAgents";
    BusinessActivity["GetAgents"] = "GetAgents";
    BusinessActivity["DeleteApiCredentials"] = "DeleteApiCredentials";
    BusinessActivity["GetApiCredentials"] = "GetApiCredentials";
    BusinessActivity["UnlockApiCredentials"] = "UnlockApiCredentials";
    BusinessActivity["SaveApiCredentials"] = "SaveApiCredentials";
    BusinessActivity["InstallmentPlanVoid"] = "InstallmentPlanVoid";
    BusinessActivity["CreateBusinessUnit"] = "CreateBusinessUnit";
    BusinessActivity["InstallmentPlanRequestPayment"] = "InstallmentPlanRequestPayment";
    BusinessActivity["Chargeback"] = "Chargeback";
    BusinessActivity["VoidAuth"] = "VoidAuth";
    BusinessActivity["UpdateTerminalParameters"] = "UpdateTerminalParameters";
    BusinessActivity["GetTouchpoint"] = "GetTouchpoint";
    BusinessActivity["OnBoardingRegistration"] = "OnBoardingRegistration";
    BusinessActivity["InstallmentPlanInitiateByRefPlan"] = "InstallmentPlanInitiateByRefPlan";
    BusinessActivity["CreatePublicToken"] = "CreatePublicToken";
    BusinessActivity["LearnMoreDetails"] = "LearnMoreDetails";
    BusinessActivity["CreatePayfacBankAccount"] = "CreatePayfacBankAccount";
    BusinessActivity["GetInstallmentSchedules"] = "GetInstallmentSchedules";
    BusinessActivity["SaveMerchantLenderAgreement"] = "SaveMerchantLenderAgreement";
    BusinessActivity["GetFraudStatusDisplay"] = "GetFraudStatusDisplay";
    BusinessActivity["SaveLender"] = "SaveLender";
    BusinessActivity["RefreshFutureJobs"] = "RefreshFutureJobs";
    BusinessActivity["TestCard"] = "TestCard";
    BusinessActivity["RequestUpdateCard"] = "RequestUpdateCard";
    BusinessActivity["ForceAuthorizeOutstandingAmount"] = "ForceAuthorizeOutstandingAmount";
    BusinessActivity["Save3DSResources"] = "Save3DSResources";
    BusinessActivity["PreChallenge3DS2"] = "PreChallenge3DS2";
    BusinessActivity["GetProcessors"] = "GetProcessors";
    BusinessActivity["UpdateProcessors"] = "UpdateProcessors";
    BusinessActivity["CreateProcessors"] = "CreateProcessors";
    BusinessActivity["DeleteProcessors"] = "DeleteProcessors";
    BusinessActivity["RefundReceived"] = "RefundReceived";
    BusinessActivity["RefundUpdated"] = "RefundUpdated";
    BusinessActivity["SalesForce"] = "SalesForce";
})(BusinessActivity = exports.BusinessActivity || (exports.BusinessActivity = {}));
function BusinessActivityFromJSON(json) {
    return BusinessActivityFromJSONTyped(json, false);
}
exports.BusinessActivityFromJSON = BusinessActivityFromJSON;
function BusinessActivityFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.BusinessActivityFromJSONTyped = BusinessActivityFromJSONTyped;
function BusinessActivityToJSON(value) {
    return value;
}
exports.BusinessActivityToJSON = BusinessActivityToJSON;
