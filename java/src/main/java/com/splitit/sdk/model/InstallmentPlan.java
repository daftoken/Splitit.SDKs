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
import com.splitit.sdk.model.CardData;
import com.splitit.sdk.model.ConsumerData;
import com.splitit.sdk.model.FraudCheck;
import com.splitit.sdk.model.Installment2;
import com.splitit.sdk.model.MerchantRef;
import com.splitit.sdk.model.Money;
import com.splitit.sdk.model.ReAuthorization;
import com.splitit.sdk.model.ReferenceEntityBase;
import com.splitit.sdk.model.TestModes;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.threeten.bp.OffsetDateTime;

/**
 * InstallmentPlan
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-06T07:48:08.244Z")
public class InstallmentPlan  {
  @SerializedName("InstallmentPlanNumber")
  private String installmentPlanNumber = null;

  @SerializedName("InstallmentPlanStatus")
  private ReferenceEntityBase installmentPlanStatus = null;

  @SerializedName("Amount")
  private Money amount = null;

  @SerializedName("OutstandingAmount")
  private Money outstandingAmount = null;

  @SerializedName("NumberOfInstallments")
  private Integer numberOfInstallments = null;

  @SerializedName("NumberOfProcessedInstallments")
  private Integer numberOfProcessedInstallments = null;

  @SerializedName("OriginalAmount")
  private Money originalAmount = null;

  @SerializedName("RefundAmount")
  private Money refundAmount = null;

  @SerializedName("Consumer")
  private ConsumerData consumer = null;

  @SerializedName("ActiveCard")
  private CardData activeCard = null;

  @SerializedName("FraudCheck")
  private FraudCheck fraudCheck = null;

  @SerializedName("Merchant")
  private MerchantRef merchant = null;

  @SerializedName("RefOrderNumber")
  private String refOrderNumber = null;

  @SerializedName("PurchaseMethod")
  private ReferenceEntityBase purchaseMethod = null;

  @SerializedName("Strategy")
  private ReferenceEntityBase strategy = null;

  @SerializedName("DelayResolution")
  private ReferenceEntityBase delayResolution = null;

  @SerializedName("ExtendedParams")
  private Map<String, String> extendedParams = null;

  @SerializedName("IsFullCaptured")
  private Boolean isFullCaptured = null;

  @SerializedName("IsChargedBack")
  private Boolean isChargedBack = null;

  @SerializedName("ArePaymentsOnHold")
  private Boolean arePaymentsOnHold = null;

  @SerializedName("ScpFundingPercent")
  private BigDecimal scpFundingPercent = null;

  @SerializedName("IsFunded")
  private Boolean isFunded = null;

  @SerializedName("TestMode")
  private TestModes testMode = null;

  @SerializedName("CreationDateTime")
  private OffsetDateTime creationDateTime = null;

  @SerializedName("Installments")
  private List<Installment2> installments = null;

  @SerializedName("SecureAuthorizations")
  private List<ReAuthorization> secureAuthorizations = null;

  @SerializedName("LogoUrl")
  private String logoUrl = null;

  public InstallmentPlan installmentPlanNumber(String installmentPlanNumber) {
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

  public InstallmentPlan installmentPlanStatus(ReferenceEntityBase installmentPlanStatus) {
    this.installmentPlanStatus = installmentPlanStatus;
    return this;
  }

   /**
   * Get installmentPlanStatus
   * @return installmentPlanStatus
  **/
  @ApiModelProperty(value = "")
  public ReferenceEntityBase getInstallmentPlanStatus() {
    return installmentPlanStatus;
  }

  public void setInstallmentPlanStatus(ReferenceEntityBase installmentPlanStatus) {
    this.installmentPlanStatus = installmentPlanStatus;
  }

  public InstallmentPlan amount(Money amount) {
    this.amount = amount;
    return this;
  }

   /**
   * Get amount
   * @return amount
  **/
  @ApiModelProperty(value = "")
  public Money getAmount() {
    return amount;
  }

  public void setAmount(Money amount) {
    this.amount = amount;
  }

  public InstallmentPlan outstandingAmount(Money outstandingAmount) {
    this.outstandingAmount = outstandingAmount;
    return this;
  }

   /**
   * Get outstandingAmount
   * @return outstandingAmount
  **/
  @ApiModelProperty(value = "")
  public Money getOutstandingAmount() {
    return outstandingAmount;
  }

  public void setOutstandingAmount(Money outstandingAmount) {
    this.outstandingAmount = outstandingAmount;
  }

  public InstallmentPlan numberOfInstallments(Integer numberOfInstallments) {
    this.numberOfInstallments = numberOfInstallments;
    return this;
  }

   /**
   * Get numberOfInstallments
   * @return numberOfInstallments
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getNumberOfInstallments() {
    return numberOfInstallments;
  }

  public void setNumberOfInstallments(Integer numberOfInstallments) {
    this.numberOfInstallments = numberOfInstallments;
  }

  public InstallmentPlan numberOfProcessedInstallments(Integer numberOfProcessedInstallments) {
    this.numberOfProcessedInstallments = numberOfProcessedInstallments;
    return this;
  }

   /**
   * Get numberOfProcessedInstallments
   * @return numberOfProcessedInstallments
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getNumberOfProcessedInstallments() {
    return numberOfProcessedInstallments;
  }

  public void setNumberOfProcessedInstallments(Integer numberOfProcessedInstallments) {
    this.numberOfProcessedInstallments = numberOfProcessedInstallments;
  }

  public InstallmentPlan originalAmount(Money originalAmount) {
    this.originalAmount = originalAmount;
    return this;
  }

   /**
   * Get originalAmount
   * @return originalAmount
  **/
  @ApiModelProperty(value = "")
  public Money getOriginalAmount() {
    return originalAmount;
  }

  public void setOriginalAmount(Money originalAmount) {
    this.originalAmount = originalAmount;
  }

  public InstallmentPlan refundAmount(Money refundAmount) {
    this.refundAmount = refundAmount;
    return this;
  }

   /**
   * Get refundAmount
   * @return refundAmount
  **/
  @ApiModelProperty(value = "")
  public Money getRefundAmount() {
    return refundAmount;
  }

  public void setRefundAmount(Money refundAmount) {
    this.refundAmount = refundAmount;
  }

  public InstallmentPlan consumer(ConsumerData consumer) {
    this.consumer = consumer;
    return this;
  }

   /**
   * Get consumer
   * @return consumer
  **/
  @ApiModelProperty(value = "")
  public ConsumerData getConsumer() {
    return consumer;
  }

  public void setConsumer(ConsumerData consumer) {
    this.consumer = consumer;
  }

  public InstallmentPlan activeCard(CardData activeCard) {
    this.activeCard = activeCard;
    return this;
  }

   /**
   * Get activeCard
   * @return activeCard
  **/
  @ApiModelProperty(value = "")
  public CardData getActiveCard() {
    return activeCard;
  }

  public void setActiveCard(CardData activeCard) {
    this.activeCard = activeCard;
  }

  public InstallmentPlan fraudCheck(FraudCheck fraudCheck) {
    this.fraudCheck = fraudCheck;
    return this;
  }

   /**
   * Get fraudCheck
   * @return fraudCheck
  **/
  @ApiModelProperty(value = "")
  public FraudCheck getFraudCheck() {
    return fraudCheck;
  }

  public void setFraudCheck(FraudCheck fraudCheck) {
    this.fraudCheck = fraudCheck;
  }

  public InstallmentPlan merchant(MerchantRef merchant) {
    this.merchant = merchant;
    return this;
  }

   /**
   * Get merchant
   * @return merchant
  **/
  @ApiModelProperty(value = "")
  public MerchantRef getMerchant() {
    return merchant;
  }

  public void setMerchant(MerchantRef merchant) {
    this.merchant = merchant;
  }

  public InstallmentPlan refOrderNumber(String refOrderNumber) {
    this.refOrderNumber = refOrderNumber;
    return this;
  }

   /**
   * Get refOrderNumber
   * @return refOrderNumber
  **/
  @ApiModelProperty(value = "")
  public String getRefOrderNumber() {
    return refOrderNumber;
  }

  public void setRefOrderNumber(String refOrderNumber) {
    this.refOrderNumber = refOrderNumber;
  }

  public InstallmentPlan purchaseMethod(ReferenceEntityBase purchaseMethod) {
    this.purchaseMethod = purchaseMethod;
    return this;
  }

   /**
   * Get purchaseMethod
   * @return purchaseMethod
  **/
  @ApiModelProperty(value = "")
  public ReferenceEntityBase getPurchaseMethod() {
    return purchaseMethod;
  }

  public void setPurchaseMethod(ReferenceEntityBase purchaseMethod) {
    this.purchaseMethod = purchaseMethod;
  }

  public InstallmentPlan strategy(ReferenceEntityBase strategy) {
    this.strategy = strategy;
    return this;
  }

   /**
   * Get strategy
   * @return strategy
  **/
  @ApiModelProperty(value = "")
  public ReferenceEntityBase getStrategy() {
    return strategy;
  }

  public void setStrategy(ReferenceEntityBase strategy) {
    this.strategy = strategy;
  }

  public InstallmentPlan delayResolution(ReferenceEntityBase delayResolution) {
    this.delayResolution = delayResolution;
    return this;
  }

   /**
   * Get delayResolution
   * @return delayResolution
  **/
  @ApiModelProperty(value = "")
  public ReferenceEntityBase getDelayResolution() {
    return delayResolution;
  }

  public void setDelayResolution(ReferenceEntityBase delayResolution) {
    this.delayResolution = delayResolution;
  }

  public InstallmentPlan extendedParams(Map<String, String> extendedParams) {
    this.extendedParams = extendedParams;
    return this;
  }

  public InstallmentPlan putExtendedParamsItem(String key, String extendedParamsItem) {
    if (this.extendedParams == null) {
      this.extendedParams = new HashMap<String, String>();
    }
    this.extendedParams.put(key, extendedParamsItem);
    return this;
  }

   /**
   * Get extendedParams
   * @return extendedParams
  **/
  @ApiModelProperty(value = "")
  public Map<String, String> getExtendedParams() {
    return extendedParams;
  }

  public void setExtendedParams(Map<String, String> extendedParams) {
    this.extendedParams = extendedParams;
  }

  public InstallmentPlan isFullCaptured(Boolean isFullCaptured) {
    this.isFullCaptured = isFullCaptured;
    return this;
  }

   /**
   * Get isFullCaptured
   * @return isFullCaptured
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsFullCaptured() {
    return isFullCaptured;
  }

  public void setIsFullCaptured(Boolean isFullCaptured) {
    this.isFullCaptured = isFullCaptured;
  }

  public InstallmentPlan isChargedBack(Boolean isChargedBack) {
    this.isChargedBack = isChargedBack;
    return this;
  }

   /**
   * Get isChargedBack
   * @return isChargedBack
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsChargedBack() {
    return isChargedBack;
  }

  public void setIsChargedBack(Boolean isChargedBack) {
    this.isChargedBack = isChargedBack;
  }

  public InstallmentPlan arePaymentsOnHold(Boolean arePaymentsOnHold) {
    this.arePaymentsOnHold = arePaymentsOnHold;
    return this;
  }

   /**
   * Get arePaymentsOnHold
   * @return arePaymentsOnHold
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isArePaymentsOnHold() {
    return arePaymentsOnHold;
  }

  public void setArePaymentsOnHold(Boolean arePaymentsOnHold) {
    this.arePaymentsOnHold = arePaymentsOnHold;
  }

  public InstallmentPlan scpFundingPercent(BigDecimal scpFundingPercent) {
    this.scpFundingPercent = scpFundingPercent;
    return this;
  }

   /**
   * Get scpFundingPercent
   * @return scpFundingPercent
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getScpFundingPercent() {
    return scpFundingPercent;
  }

  public void setScpFundingPercent(BigDecimal scpFundingPercent) {
    this.scpFundingPercent = scpFundingPercent;
  }

  public InstallmentPlan isFunded(Boolean isFunded) {
    this.isFunded = isFunded;
    return this;
  }

   /**
   * Get isFunded
   * @return isFunded
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsFunded() {
    return isFunded;
  }

  public void setIsFunded(Boolean isFunded) {
    this.isFunded = isFunded;
  }

  public InstallmentPlan testMode(TestModes testMode) {
    this.testMode = testMode;
    return this;
  }

   /**
   * Get testMode
   * @return testMode
  **/
  @ApiModelProperty(required = true, value = "")
  public TestModes getTestMode() {
    return testMode;
  }

  public void setTestMode(TestModes testMode) {
    this.testMode = testMode;
  }

  public InstallmentPlan creationDateTime(OffsetDateTime creationDateTime) {
    this.creationDateTime = creationDateTime;
    return this;
  }

   /**
   * Get creationDateTime
   * @return creationDateTime
  **/
  @ApiModelProperty(required = true, value = "")
  public OffsetDateTime getCreationDateTime() {
    return creationDateTime;
  }

  public void setCreationDateTime(OffsetDateTime creationDateTime) {
    this.creationDateTime = creationDateTime;
  }

  public InstallmentPlan installments(List<Installment2> installments) {
    this.installments = installments;
    return this;
  }

  public InstallmentPlan addInstallmentsItem(Installment2 installmentsItem) {
    if (this.installments == null) {
      this.installments = new ArrayList<Installment2>();
    }
    this.installments.add(installmentsItem);
    return this;
  }

   /**
   * Get installments
   * @return installments
  **/
  @ApiModelProperty(value = "")
  public List<Installment2> getInstallments() {
    return installments;
  }

  public void setInstallments(List<Installment2> installments) {
    this.installments = installments;
  }

  public InstallmentPlan secureAuthorizations(List<ReAuthorization> secureAuthorizations) {
    this.secureAuthorizations = secureAuthorizations;
    return this;
  }

  public InstallmentPlan addSecureAuthorizationsItem(ReAuthorization secureAuthorizationsItem) {
    if (this.secureAuthorizations == null) {
      this.secureAuthorizations = new ArrayList<ReAuthorization>();
    }
    this.secureAuthorizations.add(secureAuthorizationsItem);
    return this;
  }

   /**
   * Get secureAuthorizations
   * @return secureAuthorizations
  **/
  @ApiModelProperty(value = "")
  public List<ReAuthorization> getSecureAuthorizations() {
    return secureAuthorizations;
  }

  public void setSecureAuthorizations(List<ReAuthorization> secureAuthorizations) {
    this.secureAuthorizations = secureAuthorizations;
  }

  public InstallmentPlan logoUrl(String logoUrl) {
    this.logoUrl = logoUrl;
    return this;
  }

   /**
   * Get logoUrl
   * @return logoUrl
  **/
  @ApiModelProperty(value = "")
  public String getLogoUrl() {
    return logoUrl;
  }

  public void setLogoUrl(String logoUrl) {
    this.logoUrl = logoUrl;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InstallmentPlan installmentPlan = (InstallmentPlan) o;
    return Objects.equals(this.installmentPlanNumber, installmentPlan.installmentPlanNumber) &&
        Objects.equals(this.installmentPlanStatus, installmentPlan.installmentPlanStatus) &&
        Objects.equals(this.amount, installmentPlan.amount) &&
        Objects.equals(this.outstandingAmount, installmentPlan.outstandingAmount) &&
        Objects.equals(this.numberOfInstallments, installmentPlan.numberOfInstallments) &&
        Objects.equals(this.numberOfProcessedInstallments, installmentPlan.numberOfProcessedInstallments) &&
        Objects.equals(this.originalAmount, installmentPlan.originalAmount) &&
        Objects.equals(this.refundAmount, installmentPlan.refundAmount) &&
        Objects.equals(this.consumer, installmentPlan.consumer) &&
        Objects.equals(this.activeCard, installmentPlan.activeCard) &&
        Objects.equals(this.fraudCheck, installmentPlan.fraudCheck) &&
        Objects.equals(this.merchant, installmentPlan.merchant) &&
        Objects.equals(this.refOrderNumber, installmentPlan.refOrderNumber) &&
        Objects.equals(this.purchaseMethod, installmentPlan.purchaseMethod) &&
        Objects.equals(this.strategy, installmentPlan.strategy) &&
        Objects.equals(this.delayResolution, installmentPlan.delayResolution) &&
        Objects.equals(this.extendedParams, installmentPlan.extendedParams) &&
        Objects.equals(this.isFullCaptured, installmentPlan.isFullCaptured) &&
        Objects.equals(this.isChargedBack, installmentPlan.isChargedBack) &&
        Objects.equals(this.arePaymentsOnHold, installmentPlan.arePaymentsOnHold) &&
        Objects.equals(this.scpFundingPercent, installmentPlan.scpFundingPercent) &&
        Objects.equals(this.isFunded, installmentPlan.isFunded) &&
        Objects.equals(this.testMode, installmentPlan.testMode) &&
        Objects.equals(this.creationDateTime, installmentPlan.creationDateTime) &&
        Objects.equals(this.installments, installmentPlan.installments) &&
        Objects.equals(this.secureAuthorizations, installmentPlan.secureAuthorizations) &&
        Objects.equals(this.logoUrl, installmentPlan.logoUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(installmentPlanNumber, installmentPlanStatus, amount, outstandingAmount, numberOfInstallments, numberOfProcessedInstallments, originalAmount, refundAmount, consumer, activeCard, fraudCheck, merchant, refOrderNumber, purchaseMethod, strategy, delayResolution, extendedParams, isFullCaptured, isChargedBack, arePaymentsOnHold, scpFundingPercent, isFunded, testMode, creationDateTime, installments, secureAuthorizations, logoUrl);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InstallmentPlan {\n");
    
    
    sb.append("    installmentPlanNumber: ").append(toIndentedString(installmentPlanNumber)).append("\n");
    sb.append("    installmentPlanStatus: ").append(toIndentedString(installmentPlanStatus)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    outstandingAmount: ").append(toIndentedString(outstandingAmount)).append("\n");
    sb.append("    numberOfInstallments: ").append(toIndentedString(numberOfInstallments)).append("\n");
    sb.append("    numberOfProcessedInstallments: ").append(toIndentedString(numberOfProcessedInstallments)).append("\n");
    sb.append("    originalAmount: ").append(toIndentedString(originalAmount)).append("\n");
    sb.append("    refundAmount: ").append(toIndentedString(refundAmount)).append("\n");
    sb.append("    consumer: ").append(toIndentedString(consumer)).append("\n");
    sb.append("    activeCard: ").append(toIndentedString(activeCard)).append("\n");
    sb.append("    fraudCheck: ").append(toIndentedString(fraudCheck)).append("\n");
    sb.append("    merchant: ").append(toIndentedString(merchant)).append("\n");
    sb.append("    refOrderNumber: ").append(toIndentedString(refOrderNumber)).append("\n");
    sb.append("    purchaseMethod: ").append(toIndentedString(purchaseMethod)).append("\n");
    sb.append("    strategy: ").append(toIndentedString(strategy)).append("\n");
    sb.append("    delayResolution: ").append(toIndentedString(delayResolution)).append("\n");
    sb.append("    extendedParams: ").append(toIndentedString(extendedParams)).append("\n");
    sb.append("    isFullCaptured: ").append(toIndentedString(isFullCaptured)).append("\n");
    sb.append("    isChargedBack: ").append(toIndentedString(isChargedBack)).append("\n");
    sb.append("    arePaymentsOnHold: ").append(toIndentedString(arePaymentsOnHold)).append("\n");
    sb.append("    scpFundingPercent: ").append(toIndentedString(scpFundingPercent)).append("\n");
    sb.append("    isFunded: ").append(toIndentedString(isFunded)).append("\n");
    sb.append("    testMode: ").append(toIndentedString(testMode)).append("\n");
    sb.append("    creationDateTime: ").append(toIndentedString(creationDateTime)).append("\n");
    sb.append("    installments: ").append(toIndentedString(installments)).append("\n");
    sb.append("    secureAuthorizations: ").append(toIndentedString(secureAuthorizations)).append("\n");
    sb.append("    logoUrl: ").append(toIndentedString(logoUrl)).append("\n");
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

