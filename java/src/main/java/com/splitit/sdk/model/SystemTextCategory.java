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
import io.swagger.annotations.ApiModel;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * 
 */
@JsonAdapter(SystemTextCategory.Adapter.class)
public enum SystemTextCategory {
  
  TERMSANDCONDITIONS("TermsAndConditions"),
  
  EMAILCONTENT("EmailContent"),
  
  ERROR("Error"),
  
  EMAILTEMPLATE("EmailTemplate"),
  
  ADMINISTRATIONPOTRAL("AdministrationPotral"),
  
  RECEIPT("Receipt"),
  
  INSTALLMENTPLANSTATUS("InstallmentPlanStatus"),
  
  INSTALLMENTSTATUS("InstallmentStatus"),
  
  PURCHASEMETHOD("PurchaseMethod"),
  
  OPERATIONTYPE("OperationType"),
  
  CARDBRAND("CardBrand"),
  
  PAYMENTDETAILS("PaymentDetails"),
  
  COMMON("Common"),
  
  VPOS("VPos"),
  
  PAYMENTTRANSACTIONSHOPPERMESSAGE("PaymentTransactionShopperMessage"),
  
  TERMSANDCONDITIONSLEGAL("TermsAndConditionsLegal"),
  
  ECOMM("Ecomm"),
  
  SHOPPERSPLITITACCOUNT("ShopperSplititAccount"),
  
  SMSCONTENT("SMSContent"),
  
  POS("POS"),
  
  FLEXFIELDS("FlexFields"),
  
  MESSAGINGSYSTEM("MessagingSystem"),
  
  PAYMENTFORMV3("PaymentFormV3"),
  
  HOWSPLITITWORKS("HowSplititWorks"),
  
  UPSTREAMMESSAGING("UpstreamMessaging"),
  
  ONBOARDING("Onboarding"),
  
  UPDATECARDFORM("UpdateCardForm");

  private String value;

  SystemTextCategory(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static SystemTextCategory fromValue(String text) {
    for (SystemTextCategory b : SystemTextCategory.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<SystemTextCategory> {
    @Override
    public void write(final JsonWriter jsonWriter, final SystemTextCategory enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public SystemTextCategory read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return SystemTextCategory.fromValue(String.valueOf(value));
    }
  }
}

