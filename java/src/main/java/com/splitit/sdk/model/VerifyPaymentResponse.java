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
import java.math.BigDecimal;

/**
 * VerifyPaymentResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-03-30T13:13:50.751Z")
public class VerifyPaymentResponse   {
  @SerializedName("ResponseHeader")
  private ResponseHeader responseHeader = null;

  @SerializedName("IsPaid")
  private Boolean isPaid = null;

  @SerializedName("OriginalAmountPaid")
  private BigDecimal originalAmountPaid = null;

  public VerifyPaymentResponse responseHeader(ResponseHeader responseHeader) {
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

  public VerifyPaymentResponse isPaid(Boolean isPaid) {
    this.isPaid = isPaid;
    return this;
  }

   /**
   * Get isPaid
   * @return isPaid
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsPaid() {
    return isPaid;
  }

  public void setIsPaid(Boolean isPaid) {
    this.isPaid = isPaid;
  }

  public VerifyPaymentResponse originalAmountPaid(BigDecimal originalAmountPaid) {
    this.originalAmountPaid = originalAmountPaid;
    return this;
  }

   /**
   * Get originalAmountPaid
   * @return originalAmountPaid
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getOriginalAmountPaid() {
    return originalAmountPaid;
  }

  public void setOriginalAmountPaid(BigDecimal originalAmountPaid) {
    this.originalAmountPaid = originalAmountPaid;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    VerifyPaymentResponse verifyPaymentResponse = (VerifyPaymentResponse) o;
    return Objects.equals(this.responseHeader, verifyPaymentResponse.responseHeader) &&
        Objects.equals(this.isPaid, verifyPaymentResponse.isPaid) &&
        Objects.equals(this.originalAmountPaid, verifyPaymentResponse.originalAmountPaid);
  }

  @Override
  public int hashCode() {
    return Objects.hash(responseHeader, isPaid, originalAmountPaid);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class VerifyPaymentResponse {\n");
    
    sb.append("    responseHeader: ").append(toIndentedString(responseHeader)).append("\n");
    sb.append("    isPaid: ").append(toIndentedString(isPaid)).append("\n");
    sb.append("    originalAmountPaid: ").append(toIndentedString(originalAmountPaid)).append("\n");
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

