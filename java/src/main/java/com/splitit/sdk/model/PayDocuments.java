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
import com.splitit.sdk.model.BusinessUnits;
import com.splitit.sdk.model.Currencies;
import com.splitit.sdk.model.EntityBase;
import com.splitit.sdk.model.FundingPayDocumentDetails;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * PayDocuments
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-06T07:48:08.244Z")
public class PayDocuments  {
  @SerializedName("Id")
  private Long id = null;

  @SerializedName("TotalAmount")
  private BigDecimal totalAmount = null;

  @SerializedName("ScpProviderId")
  private Long scpProviderId = null;

  @SerializedName("BusinessUnitId")
  private Long businessUnitId = null;

  @SerializedName("Discriminator")
  private String discriminator = null;

  @SerializedName("CurrencyId")
  private Long currencyId = null;

  @SerializedName("BusinessUnit")
  private BusinessUnits businessUnit = null;

  @SerializedName("Currency")
  private Currencies currency = null;

  @SerializedName("ScpProvider")
  private Object scpProvider = null;

  @SerializedName("FundingPayDocumentDetails")
  private List<FundingPayDocumentDetails> fundingPayDocumentDetails = null;

  public PayDocuments id(Long id) {
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

  public PayDocuments totalAmount(BigDecimal totalAmount) {
    this.totalAmount = totalAmount;
    return this;
  }

   /**
   * Get totalAmount
   * @return totalAmount
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getTotalAmount() {
    return totalAmount;
  }

  public void setTotalAmount(BigDecimal totalAmount) {
    this.totalAmount = totalAmount;
  }

  public PayDocuments scpProviderId(Long scpProviderId) {
    this.scpProviderId = scpProviderId;
    return this;
  }

   /**
   * Get scpProviderId
   * @return scpProviderId
  **/
  @ApiModelProperty(value = "")
  public Long getScpProviderId() {
    return scpProviderId;
  }

  public void setScpProviderId(Long scpProviderId) {
    this.scpProviderId = scpProviderId;
  }

  public PayDocuments businessUnitId(Long businessUnitId) {
    this.businessUnitId = businessUnitId;
    return this;
  }

   /**
   * Get businessUnitId
   * @return businessUnitId
  **/
  @ApiModelProperty(value = "")
  public Long getBusinessUnitId() {
    return businessUnitId;
  }

  public void setBusinessUnitId(Long businessUnitId) {
    this.businessUnitId = businessUnitId;
  }

  public PayDocuments discriminator(String discriminator) {
    this.discriminator = discriminator;
    return this;
  }

   /**
   * Get discriminator
   * @return discriminator
  **/
  @ApiModelProperty(value = "")
  public String getDiscriminator() {
    return discriminator;
  }

  public void setDiscriminator(String discriminator) {
    this.discriminator = discriminator;
  }

  public PayDocuments currencyId(Long currencyId) {
    this.currencyId = currencyId;
    return this;
  }

   /**
   * Get currencyId
   * @return currencyId
  **/
  @ApiModelProperty(value = "")
  public Long getCurrencyId() {
    return currencyId;
  }

  public void setCurrencyId(Long currencyId) {
    this.currencyId = currencyId;
  }

  public PayDocuments businessUnit(BusinessUnits businessUnit) {
    this.businessUnit = businessUnit;
    return this;
  }

   /**
   * Get businessUnit
   * @return businessUnit
  **/
  @ApiModelProperty(value = "")
  public BusinessUnits getBusinessUnit() {
    return businessUnit;
  }

  public void setBusinessUnit(BusinessUnits businessUnit) {
    this.businessUnit = businessUnit;
  }

  public PayDocuments currency(Currencies currency) {
    this.currency = currency;
    return this;
  }

   /**
   * Get currency
   * @return currency
  **/
  @ApiModelProperty(value = "")
  public Currencies getCurrency() {
    return currency;
  }

  public void setCurrency(Currencies currency) {
    this.currency = currency;
  }

  public PayDocuments scpProvider(Object scpProvider) {
    this.scpProvider = scpProvider;
    return this;
  }

   /**
   * Get scpProvider
   * @return scpProvider
  **/
  @ApiModelProperty(value = "")
  public Object getScpProvider() {
    return scpProvider;
  }

  public void setScpProvider(Object scpProvider) {
    this.scpProvider = scpProvider;
  }

  public PayDocuments fundingPayDocumentDetails(List<FundingPayDocumentDetails> fundingPayDocumentDetails) {
    this.fundingPayDocumentDetails = fundingPayDocumentDetails;
    return this;
  }

  public PayDocuments addFundingPayDocumentDetailsItem(FundingPayDocumentDetails fundingPayDocumentDetailsItem) {
    if (this.fundingPayDocumentDetails == null) {
      this.fundingPayDocumentDetails = new ArrayList<FundingPayDocumentDetails>();
    }
    this.fundingPayDocumentDetails.add(fundingPayDocumentDetailsItem);
    return this;
  }

   /**
   * Get fundingPayDocumentDetails
   * @return fundingPayDocumentDetails
  **/
  @ApiModelProperty(value = "")
  public List<FundingPayDocumentDetails> getFundingPayDocumentDetails() {
    return fundingPayDocumentDetails;
  }

  public void setFundingPayDocumentDetails(List<FundingPayDocumentDetails> fundingPayDocumentDetails) {
    this.fundingPayDocumentDetails = fundingPayDocumentDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PayDocuments payDocuments = (PayDocuments) o;
    return Objects.equals(this.id, payDocuments.id) &&
        Objects.equals(this.totalAmount, payDocuments.totalAmount) &&
        Objects.equals(this.scpProviderId, payDocuments.scpProviderId) &&
        Objects.equals(this.businessUnitId, payDocuments.businessUnitId) &&
        Objects.equals(this.discriminator, payDocuments.discriminator) &&
        Objects.equals(this.currencyId, payDocuments.currencyId) &&
        Objects.equals(this.businessUnit, payDocuments.businessUnit) &&
        Objects.equals(this.currency, payDocuments.currency) &&
        Objects.equals(this.scpProvider, payDocuments.scpProvider) &&
        Objects.equals(this.fundingPayDocumentDetails, payDocuments.fundingPayDocumentDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, totalAmount, scpProviderId, businessUnitId, discriminator, currencyId, businessUnit, currency, scpProvider, fundingPayDocumentDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PayDocuments {\n");
    
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    totalAmount: ").append(toIndentedString(totalAmount)).append("\n");
    sb.append("    scpProviderId: ").append(toIndentedString(scpProviderId)).append("\n");
    sb.append("    businessUnitId: ").append(toIndentedString(businessUnitId)).append("\n");
    sb.append("    discriminator: ").append(toIndentedString(discriminator)).append("\n");
    sb.append("    currencyId: ").append(toIndentedString(currencyId)).append("\n");
    sb.append("    businessUnit: ").append(toIndentedString(businessUnit)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    scpProvider: ").append(toIndentedString(scpProvider)).append("\n");
    sb.append("    fundingPayDocumentDetails: ").append(toIndentedString(fundingPayDocumentDetails)).append("\n");
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

