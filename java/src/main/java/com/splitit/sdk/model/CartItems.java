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
import com.splitit.sdk.model.InstallmentPlans;
import com.splitit.sdk.model.Money2;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;

/**
 * CartItems
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-06T07:48:08.244Z")
public class CartItems  {
  @SerializedName("Id")
  private Long id = null;

  @SerializedName("Name")
  private String name = null;

  @SerializedName("Sku")
  private String sku = null;

  @SerializedName("PriceAmount")
  private BigDecimal priceAmount = null;

  @SerializedName("Quantity")
  private BigDecimal quantity = null;

  @SerializedName("Description")
  private String description = null;

  @SerializedName("InstallmentPlanId")
  private Long installmentPlanId = null;

  @SerializedName("InstallmentPlan")
  private InstallmentPlans installmentPlan = null;

  @SerializedName("Price")
  private Money2 price = null;

  public CartItems id(Long id) {
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

  public CartItems name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public CartItems sku(String sku) {
    this.sku = sku;
    return this;
  }

   /**
   * Get sku
   * @return sku
  **/
  @ApiModelProperty(value = "")
  public String getSku() {
    return sku;
  }

  public void setSku(String sku) {
    this.sku = sku;
  }

  public CartItems priceAmount(BigDecimal priceAmount) {
    this.priceAmount = priceAmount;
    return this;
  }

   /**
   * Get priceAmount
   * @return priceAmount
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getPriceAmount() {
    return priceAmount;
  }

  public void setPriceAmount(BigDecimal priceAmount) {
    this.priceAmount = priceAmount;
  }

  public CartItems quantity(BigDecimal quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * Get quantity
   * @return quantity
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getQuantity() {
    return quantity;
  }

  public void setQuantity(BigDecimal quantity) {
    this.quantity = quantity;
  }

  public CartItems description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @ApiModelProperty(value = "")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public CartItems installmentPlanId(Long installmentPlanId) {
    this.installmentPlanId = installmentPlanId;
    return this;
  }

   /**
   * Get installmentPlanId
   * @return installmentPlanId
  **/
  @ApiModelProperty(value = "")
  public Long getInstallmentPlanId() {
    return installmentPlanId;
  }

  public void setInstallmentPlanId(Long installmentPlanId) {
    this.installmentPlanId = installmentPlanId;
  }

  public CartItems installmentPlan(InstallmentPlans installmentPlan) {
    this.installmentPlan = installmentPlan;
    return this;
  }

   /**
   * Get installmentPlan
   * @return installmentPlan
  **/
  @ApiModelProperty(value = "")
  public InstallmentPlans getInstallmentPlan() {
    return installmentPlan;
  }

  public void setInstallmentPlan(InstallmentPlans installmentPlan) {
    this.installmentPlan = installmentPlan;
  }

  public CartItems price(Money2 price) {
    this.price = price;
    return this;
  }

   /**
   * Get price
   * @return price
  **/
  @ApiModelProperty(value = "")
  public Money2 getPrice() {
    return price;
  }

  public void setPrice(Money2 price) {
    this.price = price;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CartItems cartItems = (CartItems) o;
    return Objects.equals(this.id, cartItems.id) &&
        Objects.equals(this.name, cartItems.name) &&
        Objects.equals(this.sku, cartItems.sku) &&
        Objects.equals(this.priceAmount, cartItems.priceAmount) &&
        Objects.equals(this.quantity, cartItems.quantity) &&
        Objects.equals(this.description, cartItems.description) &&
        Objects.equals(this.installmentPlanId, cartItems.installmentPlanId) &&
        Objects.equals(this.installmentPlan, cartItems.installmentPlan) &&
        Objects.equals(this.price, cartItems.price);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, sku, priceAmount, quantity, description, installmentPlanId, installmentPlan, price);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CartItems {\n");
    
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    sku: ").append(toIndentedString(sku)).append("\n");
    sb.append("    priceAmount: ").append(toIndentedString(priceAmount)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    installmentPlanId: ").append(toIndentedString(installmentPlanId)).append("\n");
    sb.append("    installmentPlan: ").append(toIndentedString(installmentPlan)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
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

