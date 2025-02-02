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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * TermsAndConditions
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-08-02T10:18:45.756Z")
public class TermsAndConditions  {
  @SerializedName("Agreement")
  private String agreement = null;

  @SerializedName("ImportantNote")
  private String importantNote = null;

  @SerializedName("FullContent")
  private String fullContent = null;

  @SerializedName("PrivacyPolicy")
  private String privacyPolicy = null;

  @SerializedName("WhatYouNeedToKnow_AuthHoldDefine")
  private String whatYouNeedToKnowAuthHoldDefine = null;

  @SerializedName("WhatYouNeedToKnow_BudgetManagement")
  private String whatYouNeedToKnowBudgetManagement = null;

  @SerializedName("WhatYouNeedToKnow_CardTypeDetails")
  private String whatYouNeedToKnowCardTypeDetails = null;

  public TermsAndConditions agreement(String agreement) {
    this.agreement = agreement;
    return this;
  }

   /**
   * Get agreement
   * @return agreement
  **/
  @ApiModelProperty(value = "")
  public String getAgreement() {
    return agreement;
  }

  public void setAgreement(String agreement) {
    this.agreement = agreement;
  }

  public TermsAndConditions importantNote(String importantNote) {
    this.importantNote = importantNote;
    return this;
  }

   /**
   * Get importantNote
   * @return importantNote
  **/
  @ApiModelProperty(value = "")
  public String getImportantNote() {
    return importantNote;
  }

  public void setImportantNote(String importantNote) {
    this.importantNote = importantNote;
  }

  public TermsAndConditions fullContent(String fullContent) {
    this.fullContent = fullContent;
    return this;
  }

   /**
   * Get fullContent
   * @return fullContent
  **/
  @ApiModelProperty(value = "")
  public String getFullContent() {
    return fullContent;
  }

  public void setFullContent(String fullContent) {
    this.fullContent = fullContent;
  }

  public TermsAndConditions privacyPolicy(String privacyPolicy) {
    this.privacyPolicy = privacyPolicy;
    return this;
  }

   /**
   * Get privacyPolicy
   * @return privacyPolicy
  **/
  @ApiModelProperty(value = "")
  public String getPrivacyPolicy() {
    return privacyPolicy;
  }

  public void setPrivacyPolicy(String privacyPolicy) {
    this.privacyPolicy = privacyPolicy;
  }

  public TermsAndConditions whatYouNeedToKnowAuthHoldDefine(String whatYouNeedToKnowAuthHoldDefine) {
    this.whatYouNeedToKnowAuthHoldDefine = whatYouNeedToKnowAuthHoldDefine;
    return this;
  }

   /**
   * Get whatYouNeedToKnowAuthHoldDefine
   * @return whatYouNeedToKnowAuthHoldDefine
  **/
  @ApiModelProperty(value = "")
  public String getWhatYouNeedToKnowAuthHoldDefine() {
    return whatYouNeedToKnowAuthHoldDefine;
  }

  public void setWhatYouNeedToKnowAuthHoldDefine(String whatYouNeedToKnowAuthHoldDefine) {
    this.whatYouNeedToKnowAuthHoldDefine = whatYouNeedToKnowAuthHoldDefine;
  }

  public TermsAndConditions whatYouNeedToKnowBudgetManagement(String whatYouNeedToKnowBudgetManagement) {
    this.whatYouNeedToKnowBudgetManagement = whatYouNeedToKnowBudgetManagement;
    return this;
  }

   /**
   * Get whatYouNeedToKnowBudgetManagement
   * @return whatYouNeedToKnowBudgetManagement
  **/
  @ApiModelProperty(value = "")
  public String getWhatYouNeedToKnowBudgetManagement() {
    return whatYouNeedToKnowBudgetManagement;
  }

  public void setWhatYouNeedToKnowBudgetManagement(String whatYouNeedToKnowBudgetManagement) {
    this.whatYouNeedToKnowBudgetManagement = whatYouNeedToKnowBudgetManagement;
  }

  public TermsAndConditions whatYouNeedToKnowCardTypeDetails(String whatYouNeedToKnowCardTypeDetails) {
    this.whatYouNeedToKnowCardTypeDetails = whatYouNeedToKnowCardTypeDetails;
    return this;
  }

   /**
   * Get whatYouNeedToKnowCardTypeDetails
   * @return whatYouNeedToKnowCardTypeDetails
  **/
  @ApiModelProperty(value = "")
  public String getWhatYouNeedToKnowCardTypeDetails() {
    return whatYouNeedToKnowCardTypeDetails;
  }

  public void setWhatYouNeedToKnowCardTypeDetails(String whatYouNeedToKnowCardTypeDetails) {
    this.whatYouNeedToKnowCardTypeDetails = whatYouNeedToKnowCardTypeDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TermsAndConditions termsAndConditions = (TermsAndConditions) o;
    return Objects.equals(this.agreement, termsAndConditions.agreement) &&
        Objects.equals(this.importantNote, termsAndConditions.importantNote) &&
        Objects.equals(this.fullContent, termsAndConditions.fullContent) &&
        Objects.equals(this.privacyPolicy, termsAndConditions.privacyPolicy) &&
        Objects.equals(this.whatYouNeedToKnowAuthHoldDefine, termsAndConditions.whatYouNeedToKnowAuthHoldDefine) &&
        Objects.equals(this.whatYouNeedToKnowBudgetManagement, termsAndConditions.whatYouNeedToKnowBudgetManagement) &&
        Objects.equals(this.whatYouNeedToKnowCardTypeDetails, termsAndConditions.whatYouNeedToKnowCardTypeDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(agreement, importantNote, fullContent, privacyPolicy, whatYouNeedToKnowAuthHoldDefine, whatYouNeedToKnowBudgetManagement, whatYouNeedToKnowCardTypeDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TermsAndConditions {\n");
    
    
    sb.append("    agreement: ").append(toIndentedString(agreement)).append("\n");
    sb.append("    importantNote: ").append(toIndentedString(importantNote)).append("\n");
    sb.append("    fullContent: ").append(toIndentedString(fullContent)).append("\n");
    sb.append("    privacyPolicy: ").append(toIndentedString(privacyPolicy)).append("\n");
    sb.append("    whatYouNeedToKnowAuthHoldDefine: ").append(toIndentedString(whatYouNeedToKnowAuthHoldDefine)).append("\n");
    sb.append("    whatYouNeedToKnowBudgetManagement: ").append(toIndentedString(whatYouNeedToKnowBudgetManagement)).append("\n");
    sb.append("    whatYouNeedToKnowCardTypeDetails: ").append(toIndentedString(whatYouNeedToKnowCardTypeDetails)).append("\n");
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

