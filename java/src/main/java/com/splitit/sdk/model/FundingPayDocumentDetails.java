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
import com.splitit.sdk.model.EntityBase;
import com.splitit.sdk.model.InstallmentPlans;
import com.splitit.sdk.model.PayDocuments;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;

/**
 * FundingPayDocumentDetails
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-06T07:48:08.244Z")
public class FundingPayDocumentDetails  {
  @SerializedName("Id")
  private Long id = null;

  @SerializedName("PayDocumentId")
  private Long payDocumentId = null;

  @SerializedName("PlanId")
  private Long planId = null;

  @SerializedName("Amount")
  private BigDecimal amount = null;

  @SerializedName("Plan")
  private InstallmentPlans plan = null;

  @SerializedName("CollectDocumentDetailsId")
  private Long collectDocumentDetailsId = null;

  @SerializedName("CollectDocumentDetails")
  private Object collectDocumentDetails = null;

  @SerializedName("PayDocument")
  private PayDocuments payDocument = null;

  public FundingPayDocumentDetails id(Long id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(required = true, value = "")
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public FundingPayDocumentDetails payDocumentId(Long payDocumentId) {
    this.payDocumentId = payDocumentId;
    return this;
  }

   /**
   * Get payDocumentId
   * @return payDocumentId
  **/
  @ApiModelProperty(value = "")
  public Long getPayDocumentId() {
    return payDocumentId;
  }

  public void setPayDocumentId(Long payDocumentId) {
    this.payDocumentId = payDocumentId;
  }

  public FundingPayDocumentDetails planId(Long planId) {
    this.planId = planId;
    return this;
  }

   /**
   * Get planId
   * @return planId
  **/
  @ApiModelProperty(value = "")
  public Long getPlanId() {
    return planId;
  }

  public void setPlanId(Long planId) {
    this.planId = planId;
  }

  public FundingPayDocumentDetails amount(BigDecimal amount) {
    this.amount = amount;
    return this;
  }

   /**
   * Get amount
   * @return amount
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getAmount() {
    return amount;
  }

  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }

  public FundingPayDocumentDetails plan(InstallmentPlans plan) {
    this.plan = plan;
    return this;
  }

   /**
   * Get plan
   * @return plan
  **/
  @ApiModelProperty(value = "")
  public InstallmentPlans getPlan() {
    return plan;
  }

  public void setPlan(InstallmentPlans plan) {
    this.plan = plan;
  }

  public FundingPayDocumentDetails collectDocumentDetailsId(Long collectDocumentDetailsId) {
    this.collectDocumentDetailsId = collectDocumentDetailsId;
    return this;
  }

   /**
   * Get collectDocumentDetailsId
   * @return collectDocumentDetailsId
  **/
  @ApiModelProperty(value = "")
  public Long getCollectDocumentDetailsId() {
    return collectDocumentDetailsId;
  }

  public void setCollectDocumentDetailsId(Long collectDocumentDetailsId) {
    this.collectDocumentDetailsId = collectDocumentDetailsId;
  }

  public FundingPayDocumentDetails collectDocumentDetails(Object collectDocumentDetails) {
    this.collectDocumentDetails = collectDocumentDetails;
    return this;
  }

   /**
   * Get collectDocumentDetails
   * @return collectDocumentDetails
  **/
  @ApiModelProperty(value = "")
  public Object getCollectDocumentDetails() {
    return collectDocumentDetails;
  }

  public void setCollectDocumentDetails(Object collectDocumentDetails) {
    this.collectDocumentDetails = collectDocumentDetails;
  }

  public FundingPayDocumentDetails payDocument(PayDocuments payDocument) {
    this.payDocument = payDocument;
    return this;
  }

   /**
   * Get payDocument
   * @return payDocument
  **/
  @ApiModelProperty(value = "")
  public PayDocuments getPayDocument() {
    return payDocument;
  }

  public void setPayDocument(PayDocuments payDocument) {
    this.payDocument = payDocument;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FundingPayDocumentDetails fundingPayDocumentDetails = (FundingPayDocumentDetails) o;
    return Objects.equals(this.id, fundingPayDocumentDetails.id) &&
        Objects.equals(this.payDocumentId, fundingPayDocumentDetails.payDocumentId) &&
        Objects.equals(this.planId, fundingPayDocumentDetails.planId) &&
        Objects.equals(this.amount, fundingPayDocumentDetails.amount) &&
        Objects.equals(this.plan, fundingPayDocumentDetails.plan) &&
        Objects.equals(this.collectDocumentDetailsId, fundingPayDocumentDetails.collectDocumentDetailsId) &&
        Objects.equals(this.collectDocumentDetails, fundingPayDocumentDetails.collectDocumentDetails) &&
        Objects.equals(this.payDocument, fundingPayDocumentDetails.payDocument);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, payDocumentId, planId, amount, plan, collectDocumentDetailsId, collectDocumentDetails, payDocument);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FundingPayDocumentDetails {\n");
    
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    payDocumentId: ").append(toIndentedString(payDocumentId)).append("\n");
    sb.append("    planId: ").append(toIndentedString(planId)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    plan: ").append(toIndentedString(plan)).append("\n");
    sb.append("    collectDocumentDetailsId: ").append(toIndentedString(collectDocumentDetailsId)).append("\n");
    sb.append("    collectDocumentDetails: ").append(toIndentedString(collectDocumentDetails)).append("\n");
    sb.append("    payDocument: ").append(toIndentedString(payDocument)).append("\n");
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

