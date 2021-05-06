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
import com.splitit.sdk.model.Currencies;
import com.splitit.sdk.model.EntityBase;
import com.splitit.sdk.model.FeesRuleDatas;
import com.splitit.sdk.model.FundingRuleDataScpProviderSetting;
import com.splitit.sdk.model.InstallmentPlans;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * InstallmentPlanTerminalDatas
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-06T07:48:08.244Z")
public class InstallmentPlanTerminalDatas  {
  @SerializedName("Id")
  private Long id = null;

  @SerializedName("ScpVariableCostAnnualPercent")
  private BigDecimal scpVariableCostAnnualPercent = null;

  @SerializedName("ScpFundingPercent")
  private BigDecimal scpFundingPercent = null;

  @SerializedName("ScpReservePoolPercent")
  private BigDecimal scpReservePoolPercent = null;

  @SerializedName("ScpReturnMerchantMaxDays")
  private Integer scpReturnMerchantMaxDays = null;

  @SerializedName("ScpRevenueSharePercent")
  private BigDecimal scpRevenueSharePercent = null;

  @SerializedName("ScpFixedCost")
  private BigDecimal scpFixedCost = null;

  @SerializedName("AccountingCurrencyId")
  private Long accountingCurrencyId = null;

  @SerializedName("FundingRuleScpSettingId")
  private Long fundingRuleScpSettingId = null;

  @SerializedName("FeesRuleDataId")
  private Long feesRuleDataId = null;

  @SerializedName("AccountingCurrency")
  private Currencies accountingCurrency = null;

  @SerializedName("FeesRuleData")
  private FeesRuleDatas feesRuleData = null;

  @SerializedName("FundingRuleScpSetting")
  private FundingRuleDataScpProviderSetting fundingRuleScpSetting = null;

  @SerializedName("InstallmentPlans")
  private List<InstallmentPlans> installmentPlans = null;

  public InstallmentPlanTerminalDatas id(Long id) {
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

  public InstallmentPlanTerminalDatas scpVariableCostAnnualPercent(BigDecimal scpVariableCostAnnualPercent) {
    this.scpVariableCostAnnualPercent = scpVariableCostAnnualPercent;
    return this;
  }

   /**
   * Get scpVariableCostAnnualPercent
   * @return scpVariableCostAnnualPercent
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getScpVariableCostAnnualPercent() {
    return scpVariableCostAnnualPercent;
  }

  public void setScpVariableCostAnnualPercent(BigDecimal scpVariableCostAnnualPercent) {
    this.scpVariableCostAnnualPercent = scpVariableCostAnnualPercent;
  }

  public InstallmentPlanTerminalDatas scpFundingPercent(BigDecimal scpFundingPercent) {
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

  public InstallmentPlanTerminalDatas scpReservePoolPercent(BigDecimal scpReservePoolPercent) {
    this.scpReservePoolPercent = scpReservePoolPercent;
    return this;
  }

   /**
   * Get scpReservePoolPercent
   * @return scpReservePoolPercent
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getScpReservePoolPercent() {
    return scpReservePoolPercent;
  }

  public void setScpReservePoolPercent(BigDecimal scpReservePoolPercent) {
    this.scpReservePoolPercent = scpReservePoolPercent;
  }

  public InstallmentPlanTerminalDatas scpReturnMerchantMaxDays(Integer scpReturnMerchantMaxDays) {
    this.scpReturnMerchantMaxDays = scpReturnMerchantMaxDays;
    return this;
  }

   /**
   * Get scpReturnMerchantMaxDays
   * @return scpReturnMerchantMaxDays
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getScpReturnMerchantMaxDays() {
    return scpReturnMerchantMaxDays;
  }

  public void setScpReturnMerchantMaxDays(Integer scpReturnMerchantMaxDays) {
    this.scpReturnMerchantMaxDays = scpReturnMerchantMaxDays;
  }

  public InstallmentPlanTerminalDatas scpRevenueSharePercent(BigDecimal scpRevenueSharePercent) {
    this.scpRevenueSharePercent = scpRevenueSharePercent;
    return this;
  }

   /**
   * Get scpRevenueSharePercent
   * @return scpRevenueSharePercent
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getScpRevenueSharePercent() {
    return scpRevenueSharePercent;
  }

  public void setScpRevenueSharePercent(BigDecimal scpRevenueSharePercent) {
    this.scpRevenueSharePercent = scpRevenueSharePercent;
  }

  public InstallmentPlanTerminalDatas scpFixedCost(BigDecimal scpFixedCost) {
    this.scpFixedCost = scpFixedCost;
    return this;
  }

   /**
   * Get scpFixedCost
   * @return scpFixedCost
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getScpFixedCost() {
    return scpFixedCost;
  }

  public void setScpFixedCost(BigDecimal scpFixedCost) {
    this.scpFixedCost = scpFixedCost;
  }

  public InstallmentPlanTerminalDatas accountingCurrencyId(Long accountingCurrencyId) {
    this.accountingCurrencyId = accountingCurrencyId;
    return this;
  }

   /**
   * Get accountingCurrencyId
   * @return accountingCurrencyId
  **/
  @ApiModelProperty(value = "")
  public Long getAccountingCurrencyId() {
    return accountingCurrencyId;
  }

  public void setAccountingCurrencyId(Long accountingCurrencyId) {
    this.accountingCurrencyId = accountingCurrencyId;
  }

  public InstallmentPlanTerminalDatas fundingRuleScpSettingId(Long fundingRuleScpSettingId) {
    this.fundingRuleScpSettingId = fundingRuleScpSettingId;
    return this;
  }

   /**
   * Get fundingRuleScpSettingId
   * @return fundingRuleScpSettingId
  **/
  @ApiModelProperty(value = "")
  public Long getFundingRuleScpSettingId() {
    return fundingRuleScpSettingId;
  }

  public void setFundingRuleScpSettingId(Long fundingRuleScpSettingId) {
    this.fundingRuleScpSettingId = fundingRuleScpSettingId;
  }

  public InstallmentPlanTerminalDatas feesRuleDataId(Long feesRuleDataId) {
    this.feesRuleDataId = feesRuleDataId;
    return this;
  }

   /**
   * Get feesRuleDataId
   * @return feesRuleDataId
  **/
  @ApiModelProperty(value = "")
  public Long getFeesRuleDataId() {
    return feesRuleDataId;
  }

  public void setFeesRuleDataId(Long feesRuleDataId) {
    this.feesRuleDataId = feesRuleDataId;
  }

  public InstallmentPlanTerminalDatas accountingCurrency(Currencies accountingCurrency) {
    this.accountingCurrency = accountingCurrency;
    return this;
  }

   /**
   * Get accountingCurrency
   * @return accountingCurrency
  **/
  @ApiModelProperty(value = "")
  public Currencies getAccountingCurrency() {
    return accountingCurrency;
  }

  public void setAccountingCurrency(Currencies accountingCurrency) {
    this.accountingCurrency = accountingCurrency;
  }

  public InstallmentPlanTerminalDatas feesRuleData(FeesRuleDatas feesRuleData) {
    this.feesRuleData = feesRuleData;
    return this;
  }

   /**
   * Get feesRuleData
   * @return feesRuleData
  **/
  @ApiModelProperty(value = "")
  public FeesRuleDatas getFeesRuleData() {
    return feesRuleData;
  }

  public void setFeesRuleData(FeesRuleDatas feesRuleData) {
    this.feesRuleData = feesRuleData;
  }

  public InstallmentPlanTerminalDatas fundingRuleScpSetting(FundingRuleDataScpProviderSetting fundingRuleScpSetting) {
    this.fundingRuleScpSetting = fundingRuleScpSetting;
    return this;
  }

   /**
   * Get fundingRuleScpSetting
   * @return fundingRuleScpSetting
  **/
  @ApiModelProperty(value = "")
  public FundingRuleDataScpProviderSetting getFundingRuleScpSetting() {
    return fundingRuleScpSetting;
  }

  public void setFundingRuleScpSetting(FundingRuleDataScpProviderSetting fundingRuleScpSetting) {
    this.fundingRuleScpSetting = fundingRuleScpSetting;
  }

  public InstallmentPlanTerminalDatas installmentPlans(List<InstallmentPlans> installmentPlans) {
    this.installmentPlans = installmentPlans;
    return this;
  }

  public InstallmentPlanTerminalDatas addInstallmentPlansItem(InstallmentPlans installmentPlansItem) {
    if (this.installmentPlans == null) {
      this.installmentPlans = new ArrayList<InstallmentPlans>();
    }
    this.installmentPlans.add(installmentPlansItem);
    return this;
  }

   /**
   * Get installmentPlans
   * @return installmentPlans
  **/
  @ApiModelProperty(value = "")
  public List<InstallmentPlans> getInstallmentPlans() {
    return installmentPlans;
  }

  public void setInstallmentPlans(List<InstallmentPlans> installmentPlans) {
    this.installmentPlans = installmentPlans;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InstallmentPlanTerminalDatas installmentPlanTerminalDatas = (InstallmentPlanTerminalDatas) o;
    return Objects.equals(this.id, installmentPlanTerminalDatas.id) &&
        Objects.equals(this.scpVariableCostAnnualPercent, installmentPlanTerminalDatas.scpVariableCostAnnualPercent) &&
        Objects.equals(this.scpFundingPercent, installmentPlanTerminalDatas.scpFundingPercent) &&
        Objects.equals(this.scpReservePoolPercent, installmentPlanTerminalDatas.scpReservePoolPercent) &&
        Objects.equals(this.scpReturnMerchantMaxDays, installmentPlanTerminalDatas.scpReturnMerchantMaxDays) &&
        Objects.equals(this.scpRevenueSharePercent, installmentPlanTerminalDatas.scpRevenueSharePercent) &&
        Objects.equals(this.scpFixedCost, installmentPlanTerminalDatas.scpFixedCost) &&
        Objects.equals(this.accountingCurrencyId, installmentPlanTerminalDatas.accountingCurrencyId) &&
        Objects.equals(this.fundingRuleScpSettingId, installmentPlanTerminalDatas.fundingRuleScpSettingId) &&
        Objects.equals(this.feesRuleDataId, installmentPlanTerminalDatas.feesRuleDataId) &&
        Objects.equals(this.accountingCurrency, installmentPlanTerminalDatas.accountingCurrency) &&
        Objects.equals(this.feesRuleData, installmentPlanTerminalDatas.feesRuleData) &&
        Objects.equals(this.fundingRuleScpSetting, installmentPlanTerminalDatas.fundingRuleScpSetting) &&
        Objects.equals(this.installmentPlans, installmentPlanTerminalDatas.installmentPlans);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, scpVariableCostAnnualPercent, scpFundingPercent, scpReservePoolPercent, scpReturnMerchantMaxDays, scpRevenueSharePercent, scpFixedCost, accountingCurrencyId, fundingRuleScpSettingId, feesRuleDataId, accountingCurrency, feesRuleData, fundingRuleScpSetting, installmentPlans);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InstallmentPlanTerminalDatas {\n");
    
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    scpVariableCostAnnualPercent: ").append(toIndentedString(scpVariableCostAnnualPercent)).append("\n");
    sb.append("    scpFundingPercent: ").append(toIndentedString(scpFundingPercent)).append("\n");
    sb.append("    scpReservePoolPercent: ").append(toIndentedString(scpReservePoolPercent)).append("\n");
    sb.append("    scpReturnMerchantMaxDays: ").append(toIndentedString(scpReturnMerchantMaxDays)).append("\n");
    sb.append("    scpRevenueSharePercent: ").append(toIndentedString(scpRevenueSharePercent)).append("\n");
    sb.append("    scpFixedCost: ").append(toIndentedString(scpFixedCost)).append("\n");
    sb.append("    accountingCurrencyId: ").append(toIndentedString(accountingCurrencyId)).append("\n");
    sb.append("    fundingRuleScpSettingId: ").append(toIndentedString(fundingRuleScpSettingId)).append("\n");
    sb.append("    feesRuleDataId: ").append(toIndentedString(feesRuleDataId)).append("\n");
    sb.append("    accountingCurrency: ").append(toIndentedString(accountingCurrency)).append("\n");
    sb.append("    feesRuleData: ").append(toIndentedString(feesRuleData)).append("\n");
    sb.append("    fundingRuleScpSetting: ").append(toIndentedString(fundingRuleScpSetting)).append("\n");
    sb.append("    installmentPlans: ").append(toIndentedString(installmentPlans)).append("\n");
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

