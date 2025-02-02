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
 * User
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-08-02T10:18:45.756Z")
public class User  {
  @SerializedName("Id")
  private String id = null;

  @SerializedName("UniqueId")
  private String uniqueId = null;

  @SerializedName("UserName")
  private String userName = null;

  @SerializedName("FullName")
  private String fullName = null;

  @SerializedName("Email")
  private String email = null;

  @SerializedName("PhoneNumber")
  private String phoneNumber = null;

  @SerializedName("CultureName")
  private String cultureName = null;

  @SerializedName("RoleName")
  private String roleName = null;

  @SerializedName("IsLocked")
  private Boolean isLocked = null;

  @SerializedName("IsDataRestricted")
  private Boolean isDataRestricted = null;

  @SerializedName("IsDataPrivateRestricted")
  private Boolean isDataPrivateRestricted = null;

  public User id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public User uniqueId(String uniqueId) {
    this.uniqueId = uniqueId;
    return this;
  }

   /**
   * Get uniqueId
   * @return uniqueId
  **/
  @ApiModelProperty(value = "")
  public String getUniqueId() {
    return uniqueId;
  }

  public void setUniqueId(String uniqueId) {
    this.uniqueId = uniqueId;
  }

  public User userName(String userName) {
    this.userName = userName;
    return this;
  }

   /**
   * Get userName
   * @return userName
  **/
  @ApiModelProperty(value = "")
  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public User fullName(String fullName) {
    this.fullName = fullName;
    return this;
  }

   /**
   * Get fullName
   * @return fullName
  **/
  @ApiModelProperty(value = "")
  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  public User email(String email) {
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @ApiModelProperty(value = "")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public User phoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
    return this;
  }

   /**
   * Get phoneNumber
   * @return phoneNumber
  **/
  @ApiModelProperty(value = "")
  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public User cultureName(String cultureName) {
    this.cultureName = cultureName;
    return this;
  }

   /**
   * Get cultureName
   * @return cultureName
  **/
  @ApiModelProperty(value = "")
  public String getCultureName() {
    return cultureName;
  }

  public void setCultureName(String cultureName) {
    this.cultureName = cultureName;
  }

  public User roleName(String roleName) {
    this.roleName = roleName;
    return this;
  }

   /**
   * Get roleName
   * @return roleName
  **/
  @ApiModelProperty(value = "")
  public String getRoleName() {
    return roleName;
  }

  public void setRoleName(String roleName) {
    this.roleName = roleName;
  }

  public User isLocked(Boolean isLocked) {
    this.isLocked = isLocked;
    return this;
  }

   /**
   * Get isLocked
   * @return isLocked
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsLocked() {
    return isLocked;
  }

  public void setIsLocked(Boolean isLocked) {
    this.isLocked = isLocked;
  }

  public User isDataRestricted(Boolean isDataRestricted) {
    this.isDataRestricted = isDataRestricted;
    return this;
  }

   /**
   * Get isDataRestricted
   * @return isDataRestricted
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsDataRestricted() {
    return isDataRestricted;
  }

  public void setIsDataRestricted(Boolean isDataRestricted) {
    this.isDataRestricted = isDataRestricted;
  }

  public User isDataPrivateRestricted(Boolean isDataPrivateRestricted) {
    this.isDataPrivateRestricted = isDataPrivateRestricted;
    return this;
  }

   /**
   * Get isDataPrivateRestricted
   * @return isDataPrivateRestricted
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsDataPrivateRestricted() {
    return isDataPrivateRestricted;
  }

  public void setIsDataPrivateRestricted(Boolean isDataPrivateRestricted) {
    this.isDataPrivateRestricted = isDataPrivateRestricted;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    User user = (User) o;
    return Objects.equals(this.id, user.id) &&
        Objects.equals(this.uniqueId, user.uniqueId) &&
        Objects.equals(this.userName, user.userName) &&
        Objects.equals(this.fullName, user.fullName) &&
        Objects.equals(this.email, user.email) &&
        Objects.equals(this.phoneNumber, user.phoneNumber) &&
        Objects.equals(this.cultureName, user.cultureName) &&
        Objects.equals(this.roleName, user.roleName) &&
        Objects.equals(this.isLocked, user.isLocked) &&
        Objects.equals(this.isDataRestricted, user.isDataRestricted) &&
        Objects.equals(this.isDataPrivateRestricted, user.isDataPrivateRestricted);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, uniqueId, userName, fullName, email, phoneNumber, cultureName, roleName, isLocked, isDataRestricted, isDataPrivateRestricted);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class User {\n");
    
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    uniqueId: ").append(toIndentedString(uniqueId)).append("\n");
    sb.append("    userName: ").append(toIndentedString(userName)).append("\n");
    sb.append("    fullName: ").append(toIndentedString(fullName)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    phoneNumber: ").append(toIndentedString(phoneNumber)).append("\n");
    sb.append("    cultureName: ").append(toIndentedString(cultureName)).append("\n");
    sb.append("    roleName: ").append(toIndentedString(roleName)).append("\n");
    sb.append("    isLocked: ").append(toIndentedString(isLocked)).append("\n");
    sb.append("    isDataRestricted: ").append(toIndentedString(isDataRestricted)).append("\n");
    sb.append("    isDataPrivateRestricted: ").append(toIndentedString(isDataPrivateRestricted)).append("\n");
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

