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
import com.splitit.sdk.model.InstallmentPlanEventSubscriberRecordSendLogs;
import com.splitit.sdk.model.InstallmentPlanEvents;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * InstallmentPlanEventSubscriberRecords
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-06T07:48:08.244Z")
public class InstallmentPlanEventSubscriberRecords  {
  @SerializedName("Id")
  private Long id = null;

  @SerializedName("InstallmentPlanEventId")
  private Long installmentPlanEventId = null;

  @SerializedName("SerializedInstallmentPlanEventMessage")
  private String serializedInstallmentPlanEventMessage = null;

  @SerializedName("IsAcknowledged")
  private Boolean isAcknowledged = null;

  @SerializedName("SubscriberType")
  private String subscriberType = null;

  @SerializedName("InstallmentPlanEvent")
  private InstallmentPlanEvents installmentPlanEvent = null;

  @SerializedName("InstallmentPlanEventSubscriberRecordSendLogs")
  private List<InstallmentPlanEventSubscriberRecordSendLogs> installmentPlanEventSubscriberRecordSendLogs = null;

  public InstallmentPlanEventSubscriberRecords id(Long id) {
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

  public InstallmentPlanEventSubscriberRecords installmentPlanEventId(Long installmentPlanEventId) {
    this.installmentPlanEventId = installmentPlanEventId;
    return this;
  }

   /**
   * Get installmentPlanEventId
   * @return installmentPlanEventId
  **/
  @ApiModelProperty(required = true, value = "")
  public Long getInstallmentPlanEventId() {
    return installmentPlanEventId;
  }

  public void setInstallmentPlanEventId(Long installmentPlanEventId) {
    this.installmentPlanEventId = installmentPlanEventId;
  }

  public InstallmentPlanEventSubscriberRecords serializedInstallmentPlanEventMessage(String serializedInstallmentPlanEventMessage) {
    this.serializedInstallmentPlanEventMessage = serializedInstallmentPlanEventMessage;
    return this;
  }

   /**
   * Get serializedInstallmentPlanEventMessage
   * @return serializedInstallmentPlanEventMessage
  **/
  @ApiModelProperty(value = "")
  public String getSerializedInstallmentPlanEventMessage() {
    return serializedInstallmentPlanEventMessage;
  }

  public void setSerializedInstallmentPlanEventMessage(String serializedInstallmentPlanEventMessage) {
    this.serializedInstallmentPlanEventMessage = serializedInstallmentPlanEventMessage;
  }

  public InstallmentPlanEventSubscriberRecords isAcknowledged(Boolean isAcknowledged) {
    this.isAcknowledged = isAcknowledged;
    return this;
  }

   /**
   * Get isAcknowledged
   * @return isAcknowledged
  **/
  @ApiModelProperty(required = true, value = "")
  public Boolean isIsAcknowledged() {
    return isAcknowledged;
  }

  public void setIsAcknowledged(Boolean isAcknowledged) {
    this.isAcknowledged = isAcknowledged;
  }

  public InstallmentPlanEventSubscriberRecords subscriberType(String subscriberType) {
    this.subscriberType = subscriberType;
    return this;
  }

   /**
   * Get subscriberType
   * @return subscriberType
  **/
  @ApiModelProperty(value = "")
  public String getSubscriberType() {
    return subscriberType;
  }

  public void setSubscriberType(String subscriberType) {
    this.subscriberType = subscriberType;
  }

  public InstallmentPlanEventSubscriberRecords installmentPlanEvent(InstallmentPlanEvents installmentPlanEvent) {
    this.installmentPlanEvent = installmentPlanEvent;
    return this;
  }

   /**
   * Get installmentPlanEvent
   * @return installmentPlanEvent
  **/
  @ApiModelProperty(value = "")
  public InstallmentPlanEvents getInstallmentPlanEvent() {
    return installmentPlanEvent;
  }

  public void setInstallmentPlanEvent(InstallmentPlanEvents installmentPlanEvent) {
    this.installmentPlanEvent = installmentPlanEvent;
  }

  public InstallmentPlanEventSubscriberRecords installmentPlanEventSubscriberRecordSendLogs(List<InstallmentPlanEventSubscriberRecordSendLogs> installmentPlanEventSubscriberRecordSendLogs) {
    this.installmentPlanEventSubscriberRecordSendLogs = installmentPlanEventSubscriberRecordSendLogs;
    return this;
  }

  public InstallmentPlanEventSubscriberRecords addInstallmentPlanEventSubscriberRecordSendLogsItem(InstallmentPlanEventSubscriberRecordSendLogs installmentPlanEventSubscriberRecordSendLogsItem) {
    if (this.installmentPlanEventSubscriberRecordSendLogs == null) {
      this.installmentPlanEventSubscriberRecordSendLogs = new ArrayList<InstallmentPlanEventSubscriberRecordSendLogs>();
    }
    this.installmentPlanEventSubscriberRecordSendLogs.add(installmentPlanEventSubscriberRecordSendLogsItem);
    return this;
  }

   /**
   * Get installmentPlanEventSubscriberRecordSendLogs
   * @return installmentPlanEventSubscriberRecordSendLogs
  **/
  @ApiModelProperty(value = "")
  public List<InstallmentPlanEventSubscriberRecordSendLogs> getInstallmentPlanEventSubscriberRecordSendLogs() {
    return installmentPlanEventSubscriberRecordSendLogs;
  }

  public void setInstallmentPlanEventSubscriberRecordSendLogs(List<InstallmentPlanEventSubscriberRecordSendLogs> installmentPlanEventSubscriberRecordSendLogs) {
    this.installmentPlanEventSubscriberRecordSendLogs = installmentPlanEventSubscriberRecordSendLogs;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InstallmentPlanEventSubscriberRecords installmentPlanEventSubscriberRecords = (InstallmentPlanEventSubscriberRecords) o;
    return Objects.equals(this.id, installmentPlanEventSubscriberRecords.id) &&
        Objects.equals(this.installmentPlanEventId, installmentPlanEventSubscriberRecords.installmentPlanEventId) &&
        Objects.equals(this.serializedInstallmentPlanEventMessage, installmentPlanEventSubscriberRecords.serializedInstallmentPlanEventMessage) &&
        Objects.equals(this.isAcknowledged, installmentPlanEventSubscriberRecords.isAcknowledged) &&
        Objects.equals(this.subscriberType, installmentPlanEventSubscriberRecords.subscriberType) &&
        Objects.equals(this.installmentPlanEvent, installmentPlanEventSubscriberRecords.installmentPlanEvent) &&
        Objects.equals(this.installmentPlanEventSubscriberRecordSendLogs, installmentPlanEventSubscriberRecords.installmentPlanEventSubscriberRecordSendLogs);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, installmentPlanEventId, serializedInstallmentPlanEventMessage, isAcknowledged, subscriberType, installmentPlanEvent, installmentPlanEventSubscriberRecordSendLogs);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InstallmentPlanEventSubscriberRecords {\n");
    
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    installmentPlanEventId: ").append(toIndentedString(installmentPlanEventId)).append("\n");
    sb.append("    serializedInstallmentPlanEventMessage: ").append(toIndentedString(serializedInstallmentPlanEventMessage)).append("\n");
    sb.append("    isAcknowledged: ").append(toIndentedString(isAcknowledged)).append("\n");
    sb.append("    subscriberType: ").append(toIndentedString(subscriberType)).append("\n");
    sb.append("    installmentPlanEvent: ").append(toIndentedString(installmentPlanEvent)).append("\n");
    sb.append("    installmentPlanEventSubscriberRecordSendLogs: ").append(toIndentedString(installmentPlanEventSubscriberRecordSendLogs)).append("\n");
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

