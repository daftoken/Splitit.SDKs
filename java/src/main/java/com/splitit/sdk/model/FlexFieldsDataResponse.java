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
 * FlexFieldsDataResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-05-11T14:31:21.835Z")
public class FlexFieldsDataResponse   {
  @SerializedName("ResponseHeader")
  private ResponseHeader responseHeader = null;

  @SerializedName("PickerType")
  private String pickerType = null;

  @SerializedName("IsSecured")
  private Boolean isSecured = null;

  public FlexFieldsDataResponse responseHeader(ResponseHeader responseHeader) {
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

  public FlexFieldsDataResponse pickerType(String pickerType) {
    this.pickerType = pickerType;
    return this;
  }

   /**
   * Get pickerType
   * @return pickerType
  **/
  @ApiModelProperty(value = "")
  public String getPickerType() {
    return pickerType;
  }

  public void setPickerType(String pickerType) {
    this.pickerType = pickerType;
  }

  public FlexFieldsDataResponse isSecured(Boolean isSecured) {
    this.isSecured = isSecured;
    return this;
  }

   /**
   * Get isSecured
   * @return isSecured
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsSecured() {
    return isSecured;
  }

  public void setIsSecured(Boolean isSecured) {
    this.isSecured = isSecured;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FlexFieldsDataResponse flexFieldsDataResponse = (FlexFieldsDataResponse) o;
    return Objects.equals(this.responseHeader, flexFieldsDataResponse.responseHeader) &&
        Objects.equals(this.pickerType, flexFieldsDataResponse.pickerType) &&
        Objects.equals(this.isSecured, flexFieldsDataResponse.isSecured);
  }

  @Override
  public int hashCode() {
    return Objects.hash(responseHeader, pickerType, isSecured);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FlexFieldsDataResponse {\n");
    
    sb.append("    responseHeader: ").append(toIndentedString(responseHeader)).append("\n");
    sb.append("    pickerType: ").append(toIndentedString(pickerType)).append("\n");
    sb.append("    isSecured: ").append(toIndentedString(isSecured)).append("\n");
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

