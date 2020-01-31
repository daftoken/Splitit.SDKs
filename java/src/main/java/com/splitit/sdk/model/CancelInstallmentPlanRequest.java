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
import com.splitit.sdk.model.InstallmentPlanCancelationReason;
import com.splitit.sdk.model.RefundUnderCancelation;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * CancelInstallmentPlanRequest
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-01-31T20:28:26.626Z")
public class CancelInstallmentPlanRequest   extends RequestWithHeader  {
  @SerializedName("InstallmentPlanNumber")
  private String installmentPlanNumber = null;

  @SerializedName("RefundUnderCancelation")
  private RefundUnderCancelation refundUnderCancelation = null;

  @SerializedName("CancelationReason")
  private InstallmentPlanCancelationReason cancelationReason = null;

  @SerializedName("IsExecutedUnattended")
  private Boolean isExecutedUnattended = null;

  public CancelInstallmentPlanRequest installmentPlanNumber(String installmentPlanNumber) {
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

  public CancelInstallmentPlanRequest refundUnderCancelation(RefundUnderCancelation refundUnderCancelation) {
    this.refundUnderCancelation = refundUnderCancelation;
    return this;
  }

   /**
   * Get refundUnderCancelation
   * @return refundUnderCancelation
  **/
  @ApiModelProperty(required = true, value = "")
  public RefundUnderCancelation getRefundUnderCancelation() {
    return refundUnderCancelation;
  }

  public void setRefundUnderCancelation(RefundUnderCancelation refundUnderCancelation) {
    this.refundUnderCancelation = refundUnderCancelation;
  }

  public CancelInstallmentPlanRequest cancelationReason(InstallmentPlanCancelationReason cancelationReason) {
    this.cancelationReason = cancelationReason;
    return this;
  }

   /**
   * Get cancelationReason
   * @return cancelationReason
  **/
  @ApiModelProperty(required = true, value = "")
  public InstallmentPlanCancelationReason getCancelationReason() {
    return cancelationReason;
  }

  public void setCancelationReason(InstallmentPlanCancelationReason cancelationReason) {
    this.cancelationReason = cancelationReason;
  }

  public CancelInstallmentPlanRequest isExecutedUnattended(Boolean isExecutedUnattended) {
    this.isExecutedUnattended = isExecutedUnattended;
    return this;
  }

   /**
   * Get isExecutedUnattended
   * @return isExecutedUnattended
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsExecutedUnattended() {
    return isExecutedUnattended;
  }

  public void setIsExecutedUnattended(Boolean isExecutedUnattended) {
    this.isExecutedUnattended = isExecutedUnattended;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CancelInstallmentPlanRequest cancelInstallmentPlanRequest = (CancelInstallmentPlanRequest) o;
    return Objects.equals(this.installmentPlanNumber, cancelInstallmentPlanRequest.installmentPlanNumber) &&
        Objects.equals(this.refundUnderCancelation, cancelInstallmentPlanRequest.refundUnderCancelation) &&
        Objects.equals(this.cancelationReason, cancelInstallmentPlanRequest.cancelationReason) &&
        Objects.equals(this.isExecutedUnattended, cancelInstallmentPlanRequest.isExecutedUnattended);
  }

  @Override
  public int hashCode() {
    return Objects.hash(installmentPlanNumber, refundUnderCancelation, cancelationReason, isExecutedUnattended);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CancelInstallmentPlanRequest {\n");
    
    sb.append("    installmentPlanNumber: ").append(toIndentedString(installmentPlanNumber)).append("\n");
    sb.append("    refundUnderCancelation: ").append(toIndentedString(refundUnderCancelation)).append("\n");
    sb.append("    cancelationReason: ").append(toIndentedString(cancelationReason)).append("\n");
    sb.append("    isExecutedUnattended: ").append(toIndentedString(isExecutedUnattended)).append("\n");
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

