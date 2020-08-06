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
 * TouchPoint
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-08-06T08:36:49.924Z")
public class TouchPoint   {
  @SerializedName("Code")
  private String code = null;

  @SerializedName("Version")
  private String version = null;

  @SerializedName("SubVersion")
  private String subVersion = null;

  @SerializedName("VersionedTouchpointId")
  private Long versionedTouchpointId = null;

  public TouchPoint code(String code) {
    this.code = code;
    return this;
  }

   /**
   * Get code
   * @return code
  **/
  @ApiModelProperty(value = "")
  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  public TouchPoint version(String version) {
    this.version = version;
    return this;
  }

   /**
   * Get version
   * @return version
  **/
  @ApiModelProperty(value = "")
  public String getVersion() {
    return version;
  }

  public void setVersion(String version) {
    this.version = version;
  }

  public TouchPoint subVersion(String subVersion) {
    this.subVersion = subVersion;
    return this;
  }

   /**
   * Get subVersion
   * @return subVersion
  **/
  @ApiModelProperty(value = "")
  public String getSubVersion() {
    return subVersion;
  }

  public void setSubVersion(String subVersion) {
    this.subVersion = subVersion;
  }

  public TouchPoint versionedTouchpointId(Long versionedTouchpointId) {
    this.versionedTouchpointId = versionedTouchpointId;
    return this;
  }

   /**
   * Get versionedTouchpointId
   * @return versionedTouchpointId
  **/
  @ApiModelProperty(value = "")
  public Long getVersionedTouchpointId() {
    return versionedTouchpointId;
  }

  public void setVersionedTouchpointId(Long versionedTouchpointId) {
    this.versionedTouchpointId = versionedTouchpointId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TouchPoint touchPoint = (TouchPoint) o;
    return Objects.equals(this.code, touchPoint.code) &&
        Objects.equals(this.version, touchPoint.version) &&
        Objects.equals(this.subVersion, touchPoint.subVersion) &&
        Objects.equals(this.versionedTouchpointId, touchPoint.versionedTouchpointId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(code, version, subVersion, versionedTouchpointId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TouchPoint {\n");
    
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    subVersion: ").append(toIndentedString(subVersion)).append("\n");
    sb.append("    versionedTouchpointId: ").append(toIndentedString(versionedTouchpointId)).append("\n");
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

