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
import com.splitit.sdk.model.BusinessUnitRef;
import com.splitit.sdk.model.ContactPersonType;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * ContactPerson
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-03-30T13:13:50.751Z")
public class ContactPerson   {
  @SerializedName("Id")
  private Long id = null;

  @SerializedName("FullName")
  private String fullName = null;

  @SerializedName("Type")
  private ContactPersonType type = null;

  @SerializedName("EmailAddress")
  private String emailAddress = null;

  @SerializedName("MobilePhoneNumber")
  private String mobilePhoneNumber = null;

  @SerializedName("OfficePhoneNumber")
  private String officePhoneNumber = null;

  @SerializedName("BusinessUnit")
  private BusinessUnitRef businessUnit = null;

  public ContactPerson id(Long id) {
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

  public ContactPerson fullName(String fullName) {
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

  public ContactPerson type(ContactPersonType type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @ApiModelProperty(required = true, value = "")
  public ContactPersonType getType() {
    return type;
  }

  public void setType(ContactPersonType type) {
    this.type = type;
  }

  public ContactPerson emailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
    return this;
  }

   /**
   * Get emailAddress
   * @return emailAddress
  **/
  @ApiModelProperty(value = "")
  public String getEmailAddress() {
    return emailAddress;
  }

  public void setEmailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
  }

  public ContactPerson mobilePhoneNumber(String mobilePhoneNumber) {
    this.mobilePhoneNumber = mobilePhoneNumber;
    return this;
  }

   /**
   * Get mobilePhoneNumber
   * @return mobilePhoneNumber
  **/
  @ApiModelProperty(value = "")
  public String getMobilePhoneNumber() {
    return mobilePhoneNumber;
  }

  public void setMobilePhoneNumber(String mobilePhoneNumber) {
    this.mobilePhoneNumber = mobilePhoneNumber;
  }

  public ContactPerson officePhoneNumber(String officePhoneNumber) {
    this.officePhoneNumber = officePhoneNumber;
    return this;
  }

   /**
   * Get officePhoneNumber
   * @return officePhoneNumber
  **/
  @ApiModelProperty(value = "")
  public String getOfficePhoneNumber() {
    return officePhoneNumber;
  }

  public void setOfficePhoneNumber(String officePhoneNumber) {
    this.officePhoneNumber = officePhoneNumber;
  }

  public ContactPerson businessUnit(BusinessUnitRef businessUnit) {
    this.businessUnit = businessUnit;
    return this;
  }

   /**
   * Get businessUnit
   * @return businessUnit
  **/
  @ApiModelProperty(value = "")
  public BusinessUnitRef getBusinessUnit() {
    return businessUnit;
  }

  public void setBusinessUnit(BusinessUnitRef businessUnit) {
    this.businessUnit = businessUnit;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ContactPerson contactPerson = (ContactPerson) o;
    return Objects.equals(this.id, contactPerson.id) &&
        Objects.equals(this.fullName, contactPerson.fullName) &&
        Objects.equals(this.type, contactPerson.type) &&
        Objects.equals(this.emailAddress, contactPerson.emailAddress) &&
        Objects.equals(this.mobilePhoneNumber, contactPerson.mobilePhoneNumber) &&
        Objects.equals(this.officePhoneNumber, contactPerson.officePhoneNumber) &&
        Objects.equals(this.businessUnit, contactPerson.businessUnit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, fullName, type, emailAddress, mobilePhoneNumber, officePhoneNumber, businessUnit);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ContactPerson {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    fullName: ").append(toIndentedString(fullName)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    emailAddress: ").append(toIndentedString(emailAddress)).append("\n");
    sb.append("    mobilePhoneNumber: ").append(toIndentedString(mobilePhoneNumber)).append("\n");
    sb.append("    officePhoneNumber: ").append(toIndentedString(officePhoneNumber)).append("\n");
    sb.append("    businessUnit: ").append(toIndentedString(businessUnit)).append("\n");
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

