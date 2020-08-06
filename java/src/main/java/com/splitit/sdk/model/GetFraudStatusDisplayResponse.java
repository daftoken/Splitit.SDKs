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
import com.splitit.sdk.model.ResponseHeader;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * GetFraudStatusDisplayResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-08-06T09:17:30.371Z")
public class GetFraudStatusDisplayResponse   {
  @SerializedName("ResponseHeader")
  private ResponseHeader responseHeader = null;

  @SerializedName("Provider")
  private String provider = null;

  @SerializedName("FullLog")
  private String fullLog = null;

  @SerializedName("ProviderResultDescription")
  private String providerResultDescription = null;

  @SerializedName("InstallmentPlanId")
  private Long installmentPlanId = null;

  @SerializedName("ProviderResultCode")
  private String providerResultCode = null;

  public GetFraudStatusDisplayResponse responseHeader(ResponseHeader responseHeader) {
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

  public GetFraudStatusDisplayResponse provider(String provider) {
    this.provider = provider;
    return this;
  }

   /**
   * Get provider
   * @return provider
  **/
  @ApiModelProperty(value = "")
  public String getProvider() {
    return provider;
  }

  public void setProvider(String provider) {
    this.provider = provider;
  }

  public GetFraudStatusDisplayResponse fullLog(String fullLog) {
    this.fullLog = fullLog;
    return this;
  }

   /**
   * Get fullLog
   * @return fullLog
  **/
  @ApiModelProperty(value = "")
  public String getFullLog() {
    return fullLog;
  }

  public void setFullLog(String fullLog) {
    this.fullLog = fullLog;
  }

  public GetFraudStatusDisplayResponse providerResultDescription(String providerResultDescription) {
    this.providerResultDescription = providerResultDescription;
    return this;
  }

   /**
   * Get providerResultDescription
   * @return providerResultDescription
  **/
  @ApiModelProperty(value = "")
  public String getProviderResultDescription() {
    return providerResultDescription;
  }

  public void setProviderResultDescription(String providerResultDescription) {
    this.providerResultDescription = providerResultDescription;
  }

  public GetFraudStatusDisplayResponse installmentPlanId(Long installmentPlanId) {
    this.installmentPlanId = installmentPlanId;
    return this;
  }

   /**
   * Get installmentPlanId
   * @return installmentPlanId
  **/
  @ApiModelProperty(required = true, value = "")
  public Long getInstallmentPlanId() {
    return installmentPlanId;
  }

  public void setInstallmentPlanId(Long installmentPlanId) {
    this.installmentPlanId = installmentPlanId;
  }

  public GetFraudStatusDisplayResponse providerResultCode(String providerResultCode) {
    this.providerResultCode = providerResultCode;
    return this;
  }

   /**
   * Get providerResultCode
   * @return providerResultCode
  **/
  @ApiModelProperty(value = "")
  public String getProviderResultCode() {
    return providerResultCode;
  }

  public void setProviderResultCode(String providerResultCode) {
    this.providerResultCode = providerResultCode;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetFraudStatusDisplayResponse getFraudStatusDisplayResponse = (GetFraudStatusDisplayResponse) o;
    return Objects.equals(this.responseHeader, getFraudStatusDisplayResponse.responseHeader) &&
        Objects.equals(this.provider, getFraudStatusDisplayResponse.provider) &&
        Objects.equals(this.fullLog, getFraudStatusDisplayResponse.fullLog) &&
        Objects.equals(this.providerResultDescription, getFraudStatusDisplayResponse.providerResultDescription) &&
        Objects.equals(this.installmentPlanId, getFraudStatusDisplayResponse.installmentPlanId) &&
        Objects.equals(this.providerResultCode, getFraudStatusDisplayResponse.providerResultCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(responseHeader, provider, fullLog, providerResultDescription, installmentPlanId, providerResultCode);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetFraudStatusDisplayResponse {\n");
    
    sb.append("    responseHeader: ").append(toIndentedString(responseHeader)).append("\n");
    sb.append("    provider: ").append(toIndentedString(provider)).append("\n");
    sb.append("    fullLog: ").append(toIndentedString(fullLog)).append("\n");
    sb.append("    providerResultDescription: ").append(toIndentedString(providerResultDescription)).append("\n");
    sb.append("    installmentPlanId: ").append(toIndentedString(installmentPlanId)).append("\n");
    sb.append("    providerResultCode: ").append(toIndentedString(providerResultCode)).append("\n");
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

