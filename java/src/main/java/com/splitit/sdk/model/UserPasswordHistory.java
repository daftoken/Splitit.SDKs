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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * UserPasswordHistory
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-06T07:48:08.244Z")
public class UserPasswordHistory  {
  @SerializedName("Id")
  private Long id = null;

  @SerializedName("Password")
  private String password = null;

  @SerializedName("PasswordHash")
  private String passwordHash = null;

  public UserPasswordHistory id(Long id) {
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

  public UserPasswordHistory password(String password) {
    this.password = password;
    return this;
  }

   /**
   * Get password
   * @return password
  **/
  @ApiModelProperty(value = "")
  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public UserPasswordHistory passwordHash(String passwordHash) {
    this.passwordHash = passwordHash;
    return this;
  }

   /**
   * Get passwordHash
   * @return passwordHash
  **/
  @ApiModelProperty(value = "")
  public String getPasswordHash() {
    return passwordHash;
  }

  public void setPasswordHash(String passwordHash) {
    this.passwordHash = passwordHash;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UserPasswordHistory userPasswordHistory = (UserPasswordHistory) o;
    return Objects.equals(this.id, userPasswordHistory.id) &&
        Objects.equals(this.password, userPasswordHistory.password) &&
        Objects.equals(this.passwordHash, userPasswordHistory.passwordHash);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, password, passwordHash);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UserPasswordHistory {\n");
    
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    passwordHash: ").append(toIndentedString(passwordHash)).append("\n");
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

