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
import com.splitit.sdk.model.Installment;
import com.splitit.sdk.model.MoneyWithCurrencyCode;
import com.splitit.sdk.model.ResponseHeader;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * LearnMoreDetailsResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-27T08:24:13.061Z")
public class LearnMoreDetailsResponse  {
  @SerializedName("ResponseHeader")
  private ResponseHeader responseHeader = null;

  @SerializedName("SupportsCreditCard")
  private Boolean supportsCreditCard = null;

  @SerializedName("SupportsDebitCard")
  private Boolean supportsDebitCard = null;

  @SerializedName("ShowSecureStrategyInfo")
  private Boolean showSecureStrategyInfo = null;

  @SerializedName("ShowNonSecureStrategyInfo")
  private Boolean showNonSecureStrategyInfo = null;

  @SerializedName("Total")
  private MoneyWithCurrencyCode total = null;

  @SerializedName("Installments")
  private List<Installment> installments = null;

  @SerializedName("NumberOfInstallments")
  private Integer numberOfInstallments = null;

  public LearnMoreDetailsResponse responseHeader(ResponseHeader responseHeader) {
    this.responseHeader = responseHeader;
    return this;
  }

   /**
   * Get responseHeader
   * @return responseHeader
  **/
  @ApiModelProperty(value = "")
  public ResponseHeader getResponseHeader() {
    return responseHeader;
  }

  public void setResponseHeader(ResponseHeader responseHeader) {
    this.responseHeader = responseHeader;
  }

  public LearnMoreDetailsResponse supportsCreditCard(Boolean supportsCreditCard) {
    this.supportsCreditCard = supportsCreditCard;
    return this;
  }

   /**
   * Get supportsCreditCard
   * @return supportsCreditCard
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isSupportsCreditCard() {
    return supportsCreditCard;
  }

  public void setSupportsCreditCard(Boolean supportsCreditCard) {
    this.supportsCreditCard = supportsCreditCard;
  }

  public LearnMoreDetailsResponse supportsDebitCard(Boolean supportsDebitCard) {
    this.supportsDebitCard = supportsDebitCard;
    return this;
  }

   /**
   * Get supportsDebitCard
   * @return supportsDebitCard
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isSupportsDebitCard() {
    return supportsDebitCard;
  }

  public void setSupportsDebitCard(Boolean supportsDebitCard) {
    this.supportsDebitCard = supportsDebitCard;
  }

  public LearnMoreDetailsResponse showSecureStrategyInfo(Boolean showSecureStrategyInfo) {
    this.showSecureStrategyInfo = showSecureStrategyInfo;
    return this;
  }

   /**
   * Get showSecureStrategyInfo
   * @return showSecureStrategyInfo
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isShowSecureStrategyInfo() {
    return showSecureStrategyInfo;
  }

  public void setShowSecureStrategyInfo(Boolean showSecureStrategyInfo) {
    this.showSecureStrategyInfo = showSecureStrategyInfo;
  }

  public LearnMoreDetailsResponse showNonSecureStrategyInfo(Boolean showNonSecureStrategyInfo) {
    this.showNonSecureStrategyInfo = showNonSecureStrategyInfo;
    return this;
  }

   /**
   * Get showNonSecureStrategyInfo
   * @return showNonSecureStrategyInfo
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isShowNonSecureStrategyInfo() {
    return showNonSecureStrategyInfo;
  }

  public void setShowNonSecureStrategyInfo(Boolean showNonSecureStrategyInfo) {
    this.showNonSecureStrategyInfo = showNonSecureStrategyInfo;
  }

  public LearnMoreDetailsResponse total(MoneyWithCurrencyCode total) {
    this.total = total;
    return this;
  }

   /**
   * Get total
   * @return total
  **/
  @ApiModelProperty(value = "")
  public MoneyWithCurrencyCode getTotal() {
    return total;
  }

  public void setTotal(MoneyWithCurrencyCode total) {
    this.total = total;
  }

  public LearnMoreDetailsResponse installments(List<Installment> installments) {
    this.installments = installments;
    return this;
  }

  public LearnMoreDetailsResponse addInstallmentsItem(Installment installmentsItem) {
    if (this.installments == null) {
      this.installments = new ArrayList<Installment>();
    }
    this.installments.add(installmentsItem);
    return this;
  }

   /**
   * Get installments
   * @return installments
  **/
  @ApiModelProperty(value = "")
  public List<Installment> getInstallments() {
    return installments;
  }

  public void setInstallments(List<Installment> installments) {
    this.installments = installments;
  }

  public LearnMoreDetailsResponse numberOfInstallments(Integer numberOfInstallments) {
    this.numberOfInstallments = numberOfInstallments;
    return this;
  }

   /**
   * Get numberOfInstallments
   * @return numberOfInstallments
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getNumberOfInstallments() {
    return numberOfInstallments;
  }

  public void setNumberOfInstallments(Integer numberOfInstallments) {
    this.numberOfInstallments = numberOfInstallments;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LearnMoreDetailsResponse learnMoreDetailsResponse = (LearnMoreDetailsResponse) o;
    return Objects.equals(this.responseHeader, learnMoreDetailsResponse.responseHeader) &&
        Objects.equals(this.supportsCreditCard, learnMoreDetailsResponse.supportsCreditCard) &&
        Objects.equals(this.supportsDebitCard, learnMoreDetailsResponse.supportsDebitCard) &&
        Objects.equals(this.showSecureStrategyInfo, learnMoreDetailsResponse.showSecureStrategyInfo) &&
        Objects.equals(this.showNonSecureStrategyInfo, learnMoreDetailsResponse.showNonSecureStrategyInfo) &&
        Objects.equals(this.total, learnMoreDetailsResponse.total) &&
        Objects.equals(this.installments, learnMoreDetailsResponse.installments) &&
        Objects.equals(this.numberOfInstallments, learnMoreDetailsResponse.numberOfInstallments);
  }

  @Override
  public int hashCode() {
    return Objects.hash(responseHeader, supportsCreditCard, supportsDebitCard, showSecureStrategyInfo, showNonSecureStrategyInfo, total, installments, numberOfInstallments);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LearnMoreDetailsResponse {\n");
    
    
    sb.append("    responseHeader: ").append(toIndentedString(responseHeader)).append("\n");
    sb.append("    supportsCreditCard: ").append(toIndentedString(supportsCreditCard)).append("\n");
    sb.append("    supportsDebitCard: ").append(toIndentedString(supportsDebitCard)).append("\n");
    sb.append("    showSecureStrategyInfo: ").append(toIndentedString(showSecureStrategyInfo)).append("\n");
    sb.append("    showNonSecureStrategyInfo: ").append(toIndentedString(showNonSecureStrategyInfo)).append("\n");
    sb.append("    total: ").append(toIndentedString(total)).append("\n");
    sb.append("    installments: ").append(toIndentedString(installments)).append("\n");
    sb.append("    numberOfInstallments: ").append(toIndentedString(numberOfInstallments)).append("\n");
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

