/*
 * splitit-web-api-public-sdk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.splitit.sdk.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.splitit.sdk.model.Currency;
import com.splitit.sdk.model.PaymentWizardData;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * PaymentWizardDataResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-03-18T12:53:32.515Z")
public class PaymentWizardDataResponse   {
  @SerializedName("RequestedNumberOfInstallments")
  private String requestedNumberOfInstallments = null;

  @SerializedName("SuccessExitURL")
  private String successExitURL = null;

  @SerializedName("ErrorExitURL")
  private String errorExitURL = null;

  @SerializedName("CancelExitURL")
  private String cancelExitURL = null;

  @SerializedName("SuccessAsyncUrl")
  private String successAsyncUrl = null;

  @SerializedName("ViewName")
  private String viewName = null;

  @SerializedName("IsOpenedInIframe")
  private Boolean isOpenedInIframe = null;

  @SerializedName("PaymentFormMessage")
  private String paymentFormMessage = null;

  @SerializedName("ShowAddressElements")
  private String showAddressElements = null;

  @SerializedName("CurrencyDisplay")
  private Currency currencyDisplay = null;

  @SerializedName("ForceDisplayImportantNotes")
  private Boolean forceDisplayImportantNotes = null;

  @SerializedName("ShowShopperDetailsExpendedOnStart")
  private Boolean showShopperDetailsExpendedOnStart = null;

  @SerializedName("ShowPaymentScheduleRequiredCredit")
  private Boolean showPaymentScheduleRequiredCredit = null;

  @SerializedName("IsShopperEmailMandatory")
  private Boolean isShopperEmailMandatory = null;

  @SerializedName("IsShopperPhoneMandatory")
  private Boolean isShopperPhoneMandatory = null;

  @SerializedName("NumberOfInstallmentsSelectionsOption")
  private String numberOfInstallmentsSelectionsOption = null;

  @SerializedName("AddressIsReadonly")
  private Boolean addressIsReadonly = null;

  @SerializedName("LogoURL")
  private String logoURL = null;

  @SerializedName("PaymentFormMessages")
  private List<String> paymentFormMessages = null;

  public PaymentWizardDataResponse requestedNumberOfInstallments(String requestedNumberOfInstallments) {
    this.requestedNumberOfInstallments = requestedNumberOfInstallments;
    return this;
  }

   /**
   * Get requestedNumberOfInstallments
   * @return requestedNumberOfInstallments
  **/
  @ApiModelProperty(value = "")
  public String getRequestedNumberOfInstallments() {
    return requestedNumberOfInstallments;
  }

  public void setRequestedNumberOfInstallments(String requestedNumberOfInstallments) {
    this.requestedNumberOfInstallments = requestedNumberOfInstallments;
  }

  public PaymentWizardDataResponse successExitURL(String successExitURL) {
    this.successExitURL = successExitURL;
    return this;
  }

   /**
   * Get successExitURL
   * @return successExitURL
  **/
  @ApiModelProperty(value = "")
  public String getSuccessExitURL() {
    return successExitURL;
  }

  public void setSuccessExitURL(String successExitURL) {
    this.successExitURL = successExitURL;
  }

  public PaymentWizardDataResponse errorExitURL(String errorExitURL) {
    this.errorExitURL = errorExitURL;
    return this;
  }

   /**
   * Get errorExitURL
   * @return errorExitURL
  **/
  @ApiModelProperty(value = "")
  public String getErrorExitURL() {
    return errorExitURL;
  }

  public void setErrorExitURL(String errorExitURL) {
    this.errorExitURL = errorExitURL;
  }

  public PaymentWizardDataResponse cancelExitURL(String cancelExitURL) {
    this.cancelExitURL = cancelExitURL;
    return this;
  }

   /**
   * Get cancelExitURL
   * @return cancelExitURL
  **/
  @ApiModelProperty(value = "")
  public String getCancelExitURL() {
    return cancelExitURL;
  }

  public void setCancelExitURL(String cancelExitURL) {
    this.cancelExitURL = cancelExitURL;
  }

  public PaymentWizardDataResponse successAsyncUrl(String successAsyncUrl) {
    this.successAsyncUrl = successAsyncUrl;
    return this;
  }

   /**
   * Get successAsyncUrl
   * @return successAsyncUrl
  **/
  @ApiModelProperty(value = "")
  public String getSuccessAsyncUrl() {
    return successAsyncUrl;
  }

  public void setSuccessAsyncUrl(String successAsyncUrl) {
    this.successAsyncUrl = successAsyncUrl;
  }

  public PaymentWizardDataResponse viewName(String viewName) {
    this.viewName = viewName;
    return this;
  }

   /**
   * Get viewName
   * @return viewName
  **/
  @ApiModelProperty(value = "")
  public String getViewName() {
    return viewName;
  }

  public void setViewName(String viewName) {
    this.viewName = viewName;
  }

  public PaymentWizardDataResponse isOpenedInIframe(Boolean isOpenedInIframe) {
    this.isOpenedInIframe = isOpenedInIframe;
    return this;
  }

   /**
   * Get isOpenedInIframe
   * @return isOpenedInIframe
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsOpenedInIframe() {
    return isOpenedInIframe;
  }

  public void setIsOpenedInIframe(Boolean isOpenedInIframe) {
    this.isOpenedInIframe = isOpenedInIframe;
  }

  public PaymentWizardDataResponse paymentFormMessage(String paymentFormMessage) {
    this.paymentFormMessage = paymentFormMessage;
    return this;
  }

   /**
   * Get paymentFormMessage
   * @return paymentFormMessage
  **/
  @ApiModelProperty(value = "")
  public String getPaymentFormMessage() {
    return paymentFormMessage;
  }

  public void setPaymentFormMessage(String paymentFormMessage) {
    this.paymentFormMessage = paymentFormMessage;
  }

  public PaymentWizardDataResponse showAddressElements(String showAddressElements) {
    this.showAddressElements = showAddressElements;
    return this;
  }

   /**
   * Get showAddressElements
   * @return showAddressElements
  **/
  @ApiModelProperty(value = "")
  public String getShowAddressElements() {
    return showAddressElements;
  }

  public void setShowAddressElements(String showAddressElements) {
    this.showAddressElements = showAddressElements;
  }

  public PaymentWizardDataResponse currencyDisplay(Currency currencyDisplay) {
    this.currencyDisplay = currencyDisplay;
    return this;
  }

   /**
   * Get currencyDisplay
   * @return currencyDisplay
  **/
  @ApiModelProperty(value = "")
  public Currency getCurrencyDisplay() {
    return currencyDisplay;
  }

  public void setCurrencyDisplay(Currency currencyDisplay) {
    this.currencyDisplay = currencyDisplay;
  }

  public PaymentWizardDataResponse forceDisplayImportantNotes(Boolean forceDisplayImportantNotes) {
    this.forceDisplayImportantNotes = forceDisplayImportantNotes;
    return this;
  }

   /**
   * Get forceDisplayImportantNotes
   * @return forceDisplayImportantNotes
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isForceDisplayImportantNotes() {
    return forceDisplayImportantNotes;
  }

  public void setForceDisplayImportantNotes(Boolean forceDisplayImportantNotes) {
    this.forceDisplayImportantNotes = forceDisplayImportantNotes;
  }

  public PaymentWizardDataResponse showShopperDetailsExpendedOnStart(Boolean showShopperDetailsExpendedOnStart) {
    this.showShopperDetailsExpendedOnStart = showShopperDetailsExpendedOnStart;
    return this;
  }

   /**
   * Get showShopperDetailsExpendedOnStart
   * @return showShopperDetailsExpendedOnStart
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isShowShopperDetailsExpendedOnStart() {
    return showShopperDetailsExpendedOnStart;
  }

  public void setShowShopperDetailsExpendedOnStart(Boolean showShopperDetailsExpendedOnStart) {
    this.showShopperDetailsExpendedOnStart = showShopperDetailsExpendedOnStart;
  }

  public PaymentWizardDataResponse showPaymentScheduleRequiredCredit(Boolean showPaymentScheduleRequiredCredit) {
    this.showPaymentScheduleRequiredCredit = showPaymentScheduleRequiredCredit;
    return this;
  }

   /**
   * Get showPaymentScheduleRequiredCredit
   * @return showPaymentScheduleRequiredCredit
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isShowPaymentScheduleRequiredCredit() {
    return showPaymentScheduleRequiredCredit;
  }

  public void setShowPaymentScheduleRequiredCredit(Boolean showPaymentScheduleRequiredCredit) {
    this.showPaymentScheduleRequiredCredit = showPaymentScheduleRequiredCredit;
  }

  public PaymentWizardDataResponse isShopperEmailMandatory(Boolean isShopperEmailMandatory) {
    this.isShopperEmailMandatory = isShopperEmailMandatory;
    return this;
  }

   /**
   * Get isShopperEmailMandatory
   * @return isShopperEmailMandatory
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsShopperEmailMandatory() {
    return isShopperEmailMandatory;
  }

  public void setIsShopperEmailMandatory(Boolean isShopperEmailMandatory) {
    this.isShopperEmailMandatory = isShopperEmailMandatory;
  }

  public PaymentWizardDataResponse isShopperPhoneMandatory(Boolean isShopperPhoneMandatory) {
    this.isShopperPhoneMandatory = isShopperPhoneMandatory;
    return this;
  }

   /**
   * Get isShopperPhoneMandatory
   * @return isShopperPhoneMandatory
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsShopperPhoneMandatory() {
    return isShopperPhoneMandatory;
  }

  public void setIsShopperPhoneMandatory(Boolean isShopperPhoneMandatory) {
    this.isShopperPhoneMandatory = isShopperPhoneMandatory;
  }

  public PaymentWizardDataResponse numberOfInstallmentsSelectionsOption(String numberOfInstallmentsSelectionsOption) {
    this.numberOfInstallmentsSelectionsOption = numberOfInstallmentsSelectionsOption;
    return this;
  }

   /**
   * Get numberOfInstallmentsSelectionsOption
   * @return numberOfInstallmentsSelectionsOption
  **/
  @ApiModelProperty(value = "")
  public String getNumberOfInstallmentsSelectionsOption() {
    return numberOfInstallmentsSelectionsOption;
  }

  public void setNumberOfInstallmentsSelectionsOption(String numberOfInstallmentsSelectionsOption) {
    this.numberOfInstallmentsSelectionsOption = numberOfInstallmentsSelectionsOption;
  }

  public PaymentWizardDataResponse addressIsReadonly(Boolean addressIsReadonly) {
    this.addressIsReadonly = addressIsReadonly;
    return this;
  }

   /**
   * Get addressIsReadonly
   * @return addressIsReadonly
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isAddressIsReadonly() {
    return addressIsReadonly;
  }

  public void setAddressIsReadonly(Boolean addressIsReadonly) {
    this.addressIsReadonly = addressIsReadonly;
  }

  public PaymentWizardDataResponse logoURL(String logoURL) {
    this.logoURL = logoURL;
    return this;
  }

   /**
   * Get logoURL
   * @return logoURL
  **/
  @ApiModelProperty(value = "")
  public String getLogoURL() {
    return logoURL;
  }

  public void setLogoURL(String logoURL) {
    this.logoURL = logoURL;
  }

  public PaymentWizardDataResponse paymentFormMessages(List<String> paymentFormMessages) {
    this.paymentFormMessages = paymentFormMessages;
    return this;
  }

  public PaymentWizardDataResponse addPaymentFormMessagesItem(String paymentFormMessagesItem) {
    if (this.paymentFormMessages == null) {
      this.paymentFormMessages = new ArrayList<String>();
    }
    this.paymentFormMessages.add(paymentFormMessagesItem);
    return this;
  }

   /**
   * Get paymentFormMessages
   * @return paymentFormMessages
  **/
  @ApiModelProperty(value = "")
  public List<String> getPaymentFormMessages() {
    return paymentFormMessages;
  }

  public void setPaymentFormMessages(List<String> paymentFormMessages) {
    this.paymentFormMessages = paymentFormMessages;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaymentWizardDataResponse paymentWizardDataResponse = (PaymentWizardDataResponse) o;
    return Objects.equals(this.requestedNumberOfInstallments, paymentWizardDataResponse.requestedNumberOfInstallments) &&
        Objects.equals(this.successExitURL, paymentWizardDataResponse.successExitURL) &&
        Objects.equals(this.errorExitURL, paymentWizardDataResponse.errorExitURL) &&
        Objects.equals(this.cancelExitURL, paymentWizardDataResponse.cancelExitURL) &&
        Objects.equals(this.successAsyncUrl, paymentWizardDataResponse.successAsyncUrl) &&
        Objects.equals(this.viewName, paymentWizardDataResponse.viewName) &&
        Objects.equals(this.isOpenedInIframe, paymentWizardDataResponse.isOpenedInIframe) &&
        Objects.equals(this.paymentFormMessage, paymentWizardDataResponse.paymentFormMessage) &&
        Objects.equals(this.showAddressElements, paymentWizardDataResponse.showAddressElements) &&
        Objects.equals(this.currencyDisplay, paymentWizardDataResponse.currencyDisplay) &&
        Objects.equals(this.forceDisplayImportantNotes, paymentWizardDataResponse.forceDisplayImportantNotes) &&
        Objects.equals(this.showShopperDetailsExpendedOnStart, paymentWizardDataResponse.showShopperDetailsExpendedOnStart) &&
        Objects.equals(this.showPaymentScheduleRequiredCredit, paymentWizardDataResponse.showPaymentScheduleRequiredCredit) &&
        Objects.equals(this.isShopperEmailMandatory, paymentWizardDataResponse.isShopperEmailMandatory) &&
        Objects.equals(this.isShopperPhoneMandatory, paymentWizardDataResponse.isShopperPhoneMandatory) &&
        Objects.equals(this.numberOfInstallmentsSelectionsOption, paymentWizardDataResponse.numberOfInstallmentsSelectionsOption) &&
        Objects.equals(this.addressIsReadonly, paymentWizardDataResponse.addressIsReadonly) &&
        Objects.equals(this.logoURL, paymentWizardDataResponse.logoURL) &&
        Objects.equals(this.paymentFormMessages, paymentWizardDataResponse.paymentFormMessages);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestedNumberOfInstallments, successExitURL, errorExitURL, cancelExitURL, successAsyncUrl, viewName, isOpenedInIframe, paymentFormMessage, showAddressElements, currencyDisplay, forceDisplayImportantNotes, showShopperDetailsExpendedOnStart, showPaymentScheduleRequiredCredit, isShopperEmailMandatory, isShopperPhoneMandatory, numberOfInstallmentsSelectionsOption, addressIsReadonly, logoURL, paymentFormMessages);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentWizardDataResponse {\n");
    
    sb.append("    requestedNumberOfInstallments: ").append(toIndentedString(requestedNumberOfInstallments)).append("\n");
    sb.append("    successExitURL: ").append(toIndentedString(successExitURL)).append("\n");
    sb.append("    errorExitURL: ").append(toIndentedString(errorExitURL)).append("\n");
    sb.append("    cancelExitURL: ").append(toIndentedString(cancelExitURL)).append("\n");
    sb.append("    successAsyncUrl: ").append(toIndentedString(successAsyncUrl)).append("\n");
    sb.append("    viewName: ").append(toIndentedString(viewName)).append("\n");
    sb.append("    isOpenedInIframe: ").append(toIndentedString(isOpenedInIframe)).append("\n");
    sb.append("    paymentFormMessage: ").append(toIndentedString(paymentFormMessage)).append("\n");
    sb.append("    showAddressElements: ").append(toIndentedString(showAddressElements)).append("\n");
    sb.append("    currencyDisplay: ").append(toIndentedString(currencyDisplay)).append("\n");
    sb.append("    forceDisplayImportantNotes: ").append(toIndentedString(forceDisplayImportantNotes)).append("\n");
    sb.append("    showShopperDetailsExpendedOnStart: ").append(toIndentedString(showShopperDetailsExpendedOnStart)).append("\n");
    sb.append("    showPaymentScheduleRequiredCredit: ").append(toIndentedString(showPaymentScheduleRequiredCredit)).append("\n");
    sb.append("    isShopperEmailMandatory: ").append(toIndentedString(isShopperEmailMandatory)).append("\n");
    sb.append("    isShopperPhoneMandatory: ").append(toIndentedString(isShopperPhoneMandatory)).append("\n");
    sb.append("    numberOfInstallmentsSelectionsOption: ").append(toIndentedString(numberOfInstallmentsSelectionsOption)).append("\n");
    sb.append("    addressIsReadonly: ").append(toIndentedString(addressIsReadonly)).append("\n");
    sb.append("    logoURL: ").append(toIndentedString(logoURL)).append("\n");
    sb.append("    paymentFormMessages: ").append(toIndentedString(paymentFormMessages)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

