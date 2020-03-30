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
import com.splitit.sdk.model.AddressData;
import com.splitit.sdk.model.CardData;
import com.splitit.sdk.model.CartData;
import com.splitit.sdk.model.ConsumerData;
import com.splitit.sdk.model.EventsEndpoints;
import com.splitit.sdk.model.PaymentWizardData;
import com.splitit.sdk.model.PlanData;
import com.splitit.sdk.model.RedirectUrls;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * InitiateInstallmentPlanRequest
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-03-30T13:13:50.751Z")
public class InitiateInstallmentPlanRequest   extends RequestWithHeader  {
  @SerializedName("PlanData")
  private PlanData planData = null;

  @SerializedName("CartData")
  private CartData cartData = null;

  @SerializedName("ConsumerData")
  private ConsumerData consumerData = null;

  @SerializedName("BillingAddress")
  private AddressData billingAddress = null;

  @SerializedName("InstallmentPlanNumber")
  private String installmentPlanNumber = null;

  @SerializedName("PaymentWizardData")
  private PaymentWizardData paymentWizardData = null;

  @SerializedName("RedirectUrls")
  private RedirectUrls redirectUrls = null;

  @SerializedName("EventsEndpoints")
  private EventsEndpoints eventsEndpoints = null;

  @SerializedName("CreditCardDetails")
  private CardData creditCardDetails = null;

  public InitiateInstallmentPlanRequest planData(PlanData planData) {
    this.planData = planData;
    return this;
  }

   /**
   * Get planData
   * @return planData
  **/
  @ApiModelProperty(value = "")
  public PlanData getPlanData() {
    return planData;
  }

  public void setPlanData(PlanData planData) {
    this.planData = planData;
  }

  public InitiateInstallmentPlanRequest cartData(CartData cartData) {
    this.cartData = cartData;
    return this;
  }

   /**
   * Get cartData
   * @return cartData
  **/
  @ApiModelProperty(value = "")
  public CartData getCartData() {
    return cartData;
  }

  public void setCartData(CartData cartData) {
    this.cartData = cartData;
  }

  public InitiateInstallmentPlanRequest consumerData(ConsumerData consumerData) {
    this.consumerData = consumerData;
    return this;
  }

   /**
   * Get consumerData
   * @return consumerData
  **/
  @ApiModelProperty(value = "")
  public ConsumerData getConsumerData() {
    return consumerData;
  }

  public void setConsumerData(ConsumerData consumerData) {
    this.consumerData = consumerData;
  }

  public InitiateInstallmentPlanRequest billingAddress(AddressData billingAddress) {
    this.billingAddress = billingAddress;
    return this;
  }

   /**
   * Get billingAddress
   * @return billingAddress
  **/
  @ApiModelProperty(value = "")
  public AddressData getBillingAddress() {
    return billingAddress;
  }

  public void setBillingAddress(AddressData billingAddress) {
    this.billingAddress = billingAddress;
  }

  public InitiateInstallmentPlanRequest installmentPlanNumber(String installmentPlanNumber) {
    this.installmentPlanNumber = installmentPlanNumber;
    return this;
  }

   /**
   * Get installmentPlanNumber
   * @return installmentPlanNumber
  **/
  @ApiModelProperty(value = "")
  public String getInstallmentPlanNumber() {
    return installmentPlanNumber;
  }

  public void setInstallmentPlanNumber(String installmentPlanNumber) {
    this.installmentPlanNumber = installmentPlanNumber;
  }

  public InitiateInstallmentPlanRequest paymentWizardData(PaymentWizardData paymentWizardData) {
    this.paymentWizardData = paymentWizardData;
    return this;
  }

   /**
   * Get paymentWizardData
   * @return paymentWizardData
  **/
  @ApiModelProperty(value = "")
  public PaymentWizardData getPaymentWizardData() {
    return paymentWizardData;
  }

  public void setPaymentWizardData(PaymentWizardData paymentWizardData) {
    this.paymentWizardData = paymentWizardData;
  }

  public InitiateInstallmentPlanRequest redirectUrls(RedirectUrls redirectUrls) {
    this.redirectUrls = redirectUrls;
    return this;
  }

   /**
   * Get redirectUrls
   * @return redirectUrls
  **/
  @ApiModelProperty(value = "")
  public RedirectUrls getRedirectUrls() {
    return redirectUrls;
  }

  public void setRedirectUrls(RedirectUrls redirectUrls) {
    this.redirectUrls = redirectUrls;
  }

  public InitiateInstallmentPlanRequest eventsEndpoints(EventsEndpoints eventsEndpoints) {
    this.eventsEndpoints = eventsEndpoints;
    return this;
  }

   /**
   * Get eventsEndpoints
   * @return eventsEndpoints
  **/
  @ApiModelProperty(value = "")
  public EventsEndpoints getEventsEndpoints() {
    return eventsEndpoints;
  }

  public void setEventsEndpoints(EventsEndpoints eventsEndpoints) {
    this.eventsEndpoints = eventsEndpoints;
  }

  public InitiateInstallmentPlanRequest creditCardDetails(CardData creditCardDetails) {
    this.creditCardDetails = creditCardDetails;
    return this;
  }

   /**
   * Get creditCardDetails
   * @return creditCardDetails
  **/
  @ApiModelProperty(value = "")
  public CardData getCreditCardDetails() {
    return creditCardDetails;
  }

  public void setCreditCardDetails(CardData creditCardDetails) {
    this.creditCardDetails = creditCardDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InitiateInstallmentPlanRequest initiateInstallmentPlanRequest = (InitiateInstallmentPlanRequest) o;
    return Objects.equals(this.planData, initiateInstallmentPlanRequest.planData) &&
        Objects.equals(this.cartData, initiateInstallmentPlanRequest.cartData) &&
        Objects.equals(this.consumerData, initiateInstallmentPlanRequest.consumerData) &&
        Objects.equals(this.billingAddress, initiateInstallmentPlanRequest.billingAddress) &&
        Objects.equals(this.installmentPlanNumber, initiateInstallmentPlanRequest.installmentPlanNumber) &&
        Objects.equals(this.paymentWizardData, initiateInstallmentPlanRequest.paymentWizardData) &&
        Objects.equals(this.redirectUrls, initiateInstallmentPlanRequest.redirectUrls) &&
        Objects.equals(this.eventsEndpoints, initiateInstallmentPlanRequest.eventsEndpoints) &&
        Objects.equals(this.creditCardDetails, initiateInstallmentPlanRequest.creditCardDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(planData, cartData, consumerData, billingAddress, installmentPlanNumber, paymentWizardData, redirectUrls, eventsEndpoints, creditCardDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InitiateInstallmentPlanRequest {\n");
    
    sb.append("    planData: ").append(toIndentedString(planData)).append("\n");
    sb.append("    cartData: ").append(toIndentedString(cartData)).append("\n");
    sb.append("    consumerData: ").append(toIndentedString(consumerData)).append("\n");
    sb.append("    billingAddress: ").append(toIndentedString(billingAddress)).append("\n");
    sb.append("    installmentPlanNumber: ").append(toIndentedString(installmentPlanNumber)).append("\n");
    sb.append("    paymentWizardData: ").append(toIndentedString(paymentWizardData)).append("\n");
    sb.append("    redirectUrls: ").append(toIndentedString(redirectUrls)).append("\n");
    sb.append("    eventsEndpoints: ").append(toIndentedString(eventsEndpoints)).append("\n");
    sb.append("    creditCardDetails: ").append(toIndentedString(creditCardDetails)).append("\n");
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

