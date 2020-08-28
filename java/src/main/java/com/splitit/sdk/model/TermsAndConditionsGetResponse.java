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
import com.splitit.sdk.model.TermsAndConditions;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * TermsAndConditionsGetResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-08-28T08:56:41.151Z")
public class TermsAndConditionsGetResponse   {
  @SerializedName("ResponseHeader")
  private ResponseHeader responseHeader = null;

  @SerializedName("TermsAndConditions")
  private TermsAndConditions termsAndConditions = null;

  public TermsAndConditionsGetResponse responseHeader(ResponseHeader responseHeader) {
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

  public TermsAndConditionsGetResponse termsAndConditions(TermsAndConditions termsAndConditions) {
    this.termsAndConditions = termsAndConditions;
    return this;
  }

   /**
   * Get termsAndConditions
   * @return termsAndConditions
  **/
  @ApiModelProperty(value = "")
  public TermsAndConditions getTermsAndConditions() {
    return termsAndConditions;
  }

  public void setTermsAndConditions(TermsAndConditions termsAndConditions) {
    this.termsAndConditions = termsAndConditions;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TermsAndConditionsGetResponse termsAndConditionsGetResponse = (TermsAndConditionsGetResponse) o;
    return Objects.equals(this.responseHeader, termsAndConditionsGetResponse.responseHeader) &&
        Objects.equals(this.termsAndConditions, termsAndConditionsGetResponse.termsAndConditions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(responseHeader, termsAndConditions);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TermsAndConditionsGetResponse {\n");
    
    sb.append("    responseHeader: ").append(toIndentedString(responseHeader)).append("\n");
    sb.append("    termsAndConditions: ").append(toIndentedString(termsAndConditions)).append("\n");
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

