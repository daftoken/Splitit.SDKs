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
import com.splitit.sdk.model.AmountDetails2;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;

/**
 * AmountDetails
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-11-05T04:46:38.670Z")
public class AmountDetails  {
  @SerializedName("SubTotal")
  private BigDecimal subTotal = null;

  @SerializedName("Tax")
  private BigDecimal tax = null;

  @SerializedName("Shipping")
  private BigDecimal shipping = null;

  public AmountDetails subTotal(BigDecimal subTotal) {
    this.subTotal = subTotal;
    return this;
  }

   /**
   * Get subTotal
   * @return subTotal
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getSubTotal() {
    return subTotal;
  }

  public void setSubTotal(BigDecimal subTotal) {
    this.subTotal = subTotal;
  }

  public AmountDetails tax(BigDecimal tax) {
    this.tax = tax;
    return this;
  }

   /**
   * Get tax
   * @return tax
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getTax() {
    return tax;
  }

  public void setTax(BigDecimal tax) {
    this.tax = tax;
  }

  public AmountDetails shipping(BigDecimal shipping) {
    this.shipping = shipping;
    return this;
  }

   /**
   * Get shipping
   * @return shipping
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getShipping() {
    return shipping;
  }

  public void setShipping(BigDecimal shipping) {
    this.shipping = shipping;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AmountDetails amountDetails = (AmountDetails) o;
    return Objects.equals(this.subTotal, amountDetails.subTotal) &&
        Objects.equals(this.tax, amountDetails.tax) &&
        Objects.equals(this.shipping, amountDetails.shipping);
  }

  @Override
  public int hashCode() {
    return Objects.hash(subTotal, tax, shipping);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AmountDetails {\n");
    
    
    sb.append("    subTotal: ").append(toIndentedString(subTotal)).append("\n");
    sb.append("    tax: ").append(toIndentedString(tax)).append("\n");
    sb.append("    shipping: ").append(toIndentedString(shipping)).append("\n");
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

