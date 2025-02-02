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
import com.splitit.sdk.model.InstallmentPlan;
import com.splitit.sdk.model.ResponseHeader;
import com.splitit.sdk.model.TransactionResult;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * InstallmentPlanResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-08-02T10:18:45.756Z")
public class InstallmentPlanResponse  {
  @SerializedName("ResponseHeader")
  private ResponseHeader responseHeader = null;

  @SerializedName("InstallmentPlan")
  private InstallmentPlan installmentPlan = null;

  @SerializedName("GatewayTransactionResults")
  private List<TransactionResult> gatewayTransactionResults = null;

  public InstallmentPlanResponse responseHeader(ResponseHeader responseHeader) {
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

  public InstallmentPlanResponse installmentPlan(InstallmentPlan installmentPlan) {
    this.installmentPlan = installmentPlan;
    return this;
  }

   /**
   * Get installmentPlan
   * @return installmentPlan
  **/
  @ApiModelProperty(value = "")
  public InstallmentPlan getInstallmentPlan() {
    return installmentPlan;
  }

  public void setInstallmentPlan(InstallmentPlan installmentPlan) {
    this.installmentPlan = installmentPlan;
  }

  public InstallmentPlanResponse gatewayTransactionResults(List<TransactionResult> gatewayTransactionResults) {
    this.gatewayTransactionResults = gatewayTransactionResults;
    return this;
  }

  public InstallmentPlanResponse addGatewayTransactionResultsItem(TransactionResult gatewayTransactionResultsItem) {
    if (this.gatewayTransactionResults == null) {
      this.gatewayTransactionResults = new ArrayList<TransactionResult>();
    }
    this.gatewayTransactionResults.add(gatewayTransactionResultsItem);
    return this;
  }

   /**
   * Get gatewayTransactionResults
   * @return gatewayTransactionResults
  **/
  @ApiModelProperty(value = "")
  public List<TransactionResult> getGatewayTransactionResults() {
    return gatewayTransactionResults;
  }

  public void setGatewayTransactionResults(List<TransactionResult> gatewayTransactionResults) {
    this.gatewayTransactionResults = gatewayTransactionResults;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InstallmentPlanResponse installmentPlanResponse = (InstallmentPlanResponse) o;
    return Objects.equals(this.responseHeader, installmentPlanResponse.responseHeader) &&
        Objects.equals(this.installmentPlan, installmentPlanResponse.installmentPlan) &&
        Objects.equals(this.gatewayTransactionResults, installmentPlanResponse.gatewayTransactionResults);
  }

  @Override
  public int hashCode() {
    return Objects.hash(responseHeader, installmentPlan, gatewayTransactionResults);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InstallmentPlanResponse {\n");
    
    
    sb.append("    responseHeader: ").append(toIndentedString(responseHeader)).append("\n");
    sb.append("    installmentPlan: ").append(toIndentedString(installmentPlan)).append("\n");
    sb.append("    gatewayTransactionResults: ").append(toIndentedString(gatewayTransactionResults)).append("\n");
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

