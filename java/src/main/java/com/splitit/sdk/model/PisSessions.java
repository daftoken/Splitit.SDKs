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
import com.splitit.sdk.model.SessionAvailibility;
import com.splitit.sdk.model.UserType;
import com.splitit.sdk.model.VersionedTouchPoints;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import org.threeten.bp.OffsetDateTime;

/**
 * PisSessions
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-06T07:48:08.244Z")
public class PisSessions  {
  @SerializedName("Id")
  private Long id = null;

  @SerializedName("SessionId")
  private String sessionId = null;

  @SerializedName("LastAccessTime")
  private OffsetDateTime lastAccessTime = null;

  @SerializedName("UserId")
  private Long userId = null;

  @SerializedName("UserUniqueId")
  private String userUniqueId = null;

  @SerializedName("InstallmentPlanNumber")
  private String installmentPlanNumber = null;

  @SerializedName("VersionedTouchPointId")
  private Long versionedTouchPointId = null;

  @SerializedName("SessionValidPeriodInMinutes")
  private Integer sessionValidPeriodInMinutes = null;

  @SerializedName("VersionedTouchPoint")
  private VersionedTouchPoints versionedTouchPoint = null;

  @SerializedName("UserType")
  private UserType userType = null;

  @SerializedName("SessionAvailibility")
  private SessionAvailibility sessionAvailibility = null;

  public PisSessions id(Long id) {
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

  public PisSessions sessionId(String sessionId) {
    this.sessionId = sessionId;
    return this;
  }

   /**
   * Get sessionId
   * @return sessionId
  **/
  @ApiModelProperty(value = "")
  public String getSessionId() {
    return sessionId;
  }

  public void setSessionId(String sessionId) {
    this.sessionId = sessionId;
  }

  public PisSessions lastAccessTime(OffsetDateTime lastAccessTime) {
    this.lastAccessTime = lastAccessTime;
    return this;
  }

   /**
   * Get lastAccessTime
   * @return lastAccessTime
  **/
  @ApiModelProperty(required = true, value = "")
  public OffsetDateTime getLastAccessTime() {
    return lastAccessTime;
  }

  public void setLastAccessTime(OffsetDateTime lastAccessTime) {
    this.lastAccessTime = lastAccessTime;
  }

  public PisSessions userId(Long userId) {
    this.userId = userId;
    return this;
  }

   /**
   * Get userId
   * @return userId
  **/
  @ApiModelProperty(value = "")
  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public PisSessions userUniqueId(String userUniqueId) {
    this.userUniqueId = userUniqueId;
    return this;
  }

   /**
   * Get userUniqueId
   * @return userUniqueId
  **/
  @ApiModelProperty(value = "")
  public String getUserUniqueId() {
    return userUniqueId;
  }

  public void setUserUniqueId(String userUniqueId) {
    this.userUniqueId = userUniqueId;
  }

  public PisSessions installmentPlanNumber(String installmentPlanNumber) {
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

  public PisSessions versionedTouchPointId(Long versionedTouchPointId) {
    this.versionedTouchPointId = versionedTouchPointId;
    return this;
  }

   /**
   * Get versionedTouchPointId
   * @return versionedTouchPointId
  **/
  @ApiModelProperty(value = "")
  public Long getVersionedTouchPointId() {
    return versionedTouchPointId;
  }

  public void setVersionedTouchPointId(Long versionedTouchPointId) {
    this.versionedTouchPointId = versionedTouchPointId;
  }

  public PisSessions sessionValidPeriodInMinutes(Integer sessionValidPeriodInMinutes) {
    this.sessionValidPeriodInMinutes = sessionValidPeriodInMinutes;
    return this;
  }

   /**
   * Get sessionValidPeriodInMinutes
   * @return sessionValidPeriodInMinutes
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getSessionValidPeriodInMinutes() {
    return sessionValidPeriodInMinutes;
  }

  public void setSessionValidPeriodInMinutes(Integer sessionValidPeriodInMinutes) {
    this.sessionValidPeriodInMinutes = sessionValidPeriodInMinutes;
  }

  public PisSessions versionedTouchPoint(VersionedTouchPoints versionedTouchPoint) {
    this.versionedTouchPoint = versionedTouchPoint;
    return this;
  }

   /**
   * Get versionedTouchPoint
   * @return versionedTouchPoint
  **/
  @ApiModelProperty(value = "")
  public VersionedTouchPoints getVersionedTouchPoint() {
    return versionedTouchPoint;
  }

  public void setVersionedTouchPoint(VersionedTouchPoints versionedTouchPoint) {
    this.versionedTouchPoint = versionedTouchPoint;
  }

  public PisSessions userType(UserType userType) {
    this.userType = userType;
    return this;
  }

   /**
   * Get userType
   * @return userType
  **/
  @ApiModelProperty(value = "")
  public UserType getUserType() {
    return userType;
  }

  public void setUserType(UserType userType) {
    this.userType = userType;
  }

  public PisSessions sessionAvailibility(SessionAvailibility sessionAvailibility) {
    this.sessionAvailibility = sessionAvailibility;
    return this;
  }

   /**
   * Get sessionAvailibility
   * @return sessionAvailibility
  **/
  @ApiModelProperty(required = true, value = "")
  public SessionAvailibility getSessionAvailibility() {
    return sessionAvailibility;
  }

  public void setSessionAvailibility(SessionAvailibility sessionAvailibility) {
    this.sessionAvailibility = sessionAvailibility;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PisSessions pisSessions = (PisSessions) o;
    return Objects.equals(this.id, pisSessions.id) &&
        Objects.equals(this.sessionId, pisSessions.sessionId) &&
        Objects.equals(this.lastAccessTime, pisSessions.lastAccessTime) &&
        Objects.equals(this.userId, pisSessions.userId) &&
        Objects.equals(this.userUniqueId, pisSessions.userUniqueId) &&
        Objects.equals(this.installmentPlanNumber, pisSessions.installmentPlanNumber) &&
        Objects.equals(this.versionedTouchPointId, pisSessions.versionedTouchPointId) &&
        Objects.equals(this.sessionValidPeriodInMinutes, pisSessions.sessionValidPeriodInMinutes) &&
        Objects.equals(this.versionedTouchPoint, pisSessions.versionedTouchPoint) &&
        Objects.equals(this.userType, pisSessions.userType) &&
        Objects.equals(this.sessionAvailibility, pisSessions.sessionAvailibility);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, sessionId, lastAccessTime, userId, userUniqueId, installmentPlanNumber, versionedTouchPointId, sessionValidPeriodInMinutes, versionedTouchPoint, userType, sessionAvailibility);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PisSessions {\n");
    
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    sessionId: ").append(toIndentedString(sessionId)).append("\n");
    sb.append("    lastAccessTime: ").append(toIndentedString(lastAccessTime)).append("\n");
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
    sb.append("    userUniqueId: ").append(toIndentedString(userUniqueId)).append("\n");
    sb.append("    installmentPlanNumber: ").append(toIndentedString(installmentPlanNumber)).append("\n");
    sb.append("    versionedTouchPointId: ").append(toIndentedString(versionedTouchPointId)).append("\n");
    sb.append("    sessionValidPeriodInMinutes: ").append(toIndentedString(sessionValidPeriodInMinutes)).append("\n");
    sb.append("    versionedTouchPoint: ").append(toIndentedString(versionedTouchPoint)).append("\n");
    sb.append("    userType: ").append(toIndentedString(userType)).append("\n");
    sb.append("    sessionAvailibility: ").append(toIndentedString(sessionAvailibility)).append("\n");
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

