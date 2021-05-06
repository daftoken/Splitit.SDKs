/* 
 * splitit-web-api-public-sdk
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using SwaggerDateConverter = Splitit.SDK.Client.Client.SwaggerDateConverter;

namespace Splitit.SDK.Client.Model
{
    /// <summary>
    /// InstallmentPlanAuditLogs
    /// </summary>
    [DataContract]
    public partial class InstallmentPlanAuditLogs :  IEquatable<InstallmentPlanAuditLogs>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlanAuditLogs" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InstallmentPlanAuditLogs() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlanAuditLogs" /> class.
        /// </summary>
        /// <param name="id">id (required).</param>
        /// <param name="activityExecutionDate">activityExecutionDate (required).</param>
        /// <param name="userId">userId.</param>
        /// <param name="userUniqueId">userUniqueId.</param>
        /// <param name="businessActivity">businessActivity (required).</param>
        /// <param name="traceId">traceId.</param>
        /// <param name="result">result (required).</param>
        /// <param name="versionedTouchPoint">versionedTouchPoint.</param>
        /// <param name="versionedTouchPointId">versionedTouchPointId.</param>
        /// <param name="discriminator">discriminator.</param>
        /// <param name="additionalInfo">additionalInfo.</param>
        /// <param name="userType">userType.</param>
        /// <param name="installmentPlanId">installmentPlanId.</param>
        /// <param name="creatingIPAddress">creatingIPAddress.</param>
        /// <param name="cardId">cardId.</param>
        /// <param name="card">card.</param>
        /// <param name="installmentPlan">installmentPlan.</param>
        /// <param name="errorCode">errorCode.</param>
        public InstallmentPlanAuditLogs(long? id = default(long?), DateTime? activityExecutionDate = default(DateTime?), long? userId = default(long?), string userUniqueId = default(string), BusinessActivity businessActivity = default(BusinessActivity), string traceId = default(string), bool? result = default(bool?), VersionedTouchPoints versionedTouchPoint = default(VersionedTouchPoints), long? versionedTouchPointId = default(long?), string discriminator = default(string), string additionalInfo = default(string), UserType userType = default(UserType), long? installmentPlanId = default(long?), string creatingIPAddress = default(string), long? cardId = default(long?), Cards card = default(Cards), InstallmentPlans installmentPlan = default(InstallmentPlans), PisErrorCodes errorCode = default(PisErrorCodes))
        {
            this.Id = id;
            this.ActivityExecutionDate = activityExecutionDate;
            this.BusinessActivity = businessActivity;
            this.Result = result;
            this.UserId = userId;
            this.UserUniqueId = userUniqueId;
            this.TraceId = traceId;
            this.VersionedTouchPoint = versionedTouchPoint;
            this.VersionedTouchPointId = versionedTouchPointId;
            this.Discriminator = discriminator;
            this.AdditionalInfo = additionalInfo;
            this.UserType = userType;
            this.InstallmentPlanId = installmentPlanId;
            this.CreatingIPAddress = creatingIPAddress;
            this.CardId = cardId;
            this.Card = card;
            this.InstallmentPlan = installmentPlan;
            this.ErrorCode = errorCode;
        }

        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="Id", EmitDefaultValue=false)]
        public long? Id { get; set; }

        /// <summary>
        /// Gets or Sets ActivityExecutionDate
        /// </summary>
        [DataMember(Name="ActivityExecutionDate", EmitDefaultValue=false)]
        public DateTime? ActivityExecutionDate { get; set; }

        /// <summary>
        /// Gets or Sets UserId
        /// </summary>
        [DataMember(Name="UserId", EmitDefaultValue=false)]
        public long? UserId { get; set; }

        /// <summary>
        /// Gets or Sets UserUniqueId
        /// </summary>
        [DataMember(Name="UserUniqueId", EmitDefaultValue=false)]
        public string UserUniqueId { get; set; }

        /// <summary>
        /// Gets or Sets BusinessActivity
        /// </summary>
        [DataMember(Name="BusinessActivity", EmitDefaultValue=false)]
        public BusinessActivity BusinessActivity { get; set; }

        /// <summary>
        /// Gets or Sets TraceId
        /// </summary>
        [DataMember(Name="TraceId", EmitDefaultValue=false)]
        public string TraceId { get; set; }

        /// <summary>
        /// Gets or Sets Result
        /// </summary>
        [DataMember(Name="Result", EmitDefaultValue=false)]
        public bool? Result { get; set; }

        /// <summary>
        /// Gets or Sets VersionedTouchPoint
        /// </summary>
        [DataMember(Name="VersionedTouchPoint", EmitDefaultValue=false)]
        public VersionedTouchPoints VersionedTouchPoint { get; set; }

        /// <summary>
        /// Gets or Sets VersionedTouchPointId
        /// </summary>
        [DataMember(Name="VersionedTouchPointId", EmitDefaultValue=false)]
        public long? VersionedTouchPointId { get; set; }

        /// <summary>
        /// Gets or Sets Discriminator
        /// </summary>
        [DataMember(Name="Discriminator", EmitDefaultValue=false)]
        public string Discriminator { get; set; }

        /// <summary>
        /// Gets or Sets AdditionalInfo
        /// </summary>
        [DataMember(Name="AdditionalInfo", EmitDefaultValue=false)]
        public string AdditionalInfo { get; set; }

        /// <summary>
        /// Gets or Sets UserType
        /// </summary>
        [DataMember(Name="UserType", EmitDefaultValue=false)]
        public UserType UserType { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentPlanId
        /// </summary>
        [DataMember(Name="InstallmentPlanId", EmitDefaultValue=false)]
        public long? InstallmentPlanId { get; set; }

        /// <summary>
        /// Gets or Sets CreatingIPAddress
        /// </summary>
        [DataMember(Name="CreatingIPAddress", EmitDefaultValue=false)]
        public string CreatingIPAddress { get; set; }

        /// <summary>
        /// Gets or Sets CardId
        /// </summary>
        [DataMember(Name="CardId", EmitDefaultValue=false)]
        public long? CardId { get; set; }

        /// <summary>
        /// Gets or Sets Card
        /// </summary>
        [DataMember(Name="Card", EmitDefaultValue=false)]
        public Cards Card { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentPlan
        /// </summary>
        [DataMember(Name="InstallmentPlan", EmitDefaultValue=false)]
        public InstallmentPlans InstallmentPlan { get; set; }

        /// <summary>
        /// Gets or Sets ErrorCode
        /// </summary>
        [DataMember(Name="ErrorCode", EmitDefaultValue=false)]
        public PisErrorCodes ErrorCode { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InstallmentPlanAuditLogs {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  ActivityExecutionDate: ").Append(ActivityExecutionDate).Append("\n");
            sb.Append("  UserId: ").Append(UserId).Append("\n");
            sb.Append("  UserUniqueId: ").Append(UserUniqueId).Append("\n");
            sb.Append("  BusinessActivity: ").Append(BusinessActivity).Append("\n");
            sb.Append("  TraceId: ").Append(TraceId).Append("\n");
            sb.Append("  Result: ").Append(Result).Append("\n");
            sb.Append("  VersionedTouchPoint: ").Append(VersionedTouchPoint).Append("\n");
            sb.Append("  VersionedTouchPointId: ").Append(VersionedTouchPointId).Append("\n");
            sb.Append("  Discriminator: ").Append(Discriminator).Append("\n");
            sb.Append("  AdditionalInfo: ").Append(AdditionalInfo).Append("\n");
            sb.Append("  UserType: ").Append(UserType).Append("\n");
            sb.Append("  InstallmentPlanId: ").Append(InstallmentPlanId).Append("\n");
            sb.Append("  CreatingIPAddress: ").Append(CreatingIPAddress).Append("\n");
            sb.Append("  CardId: ").Append(CardId).Append("\n");
            sb.Append("  Card: ").Append(Card).Append("\n");
            sb.Append("  InstallmentPlan: ").Append(InstallmentPlan).Append("\n");
            sb.Append("  ErrorCode: ").Append(ErrorCode).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as InstallmentPlanAuditLogs);
        }

        /// <summary>
        /// Returns true if InstallmentPlanAuditLogs instances are equal
        /// </summary>
        /// <param name="input">Instance of InstallmentPlanAuditLogs to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InstallmentPlanAuditLogs input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.ActivityExecutionDate == input.ActivityExecutionDate ||
                    (this.ActivityExecutionDate != null &&
                    this.ActivityExecutionDate.Equals(input.ActivityExecutionDate))
                ) && 
                (
                    this.UserId == input.UserId ||
                    (this.UserId != null &&
                    this.UserId.Equals(input.UserId))
                ) && 
                (
                    this.UserUniqueId == input.UserUniqueId ||
                    (this.UserUniqueId != null &&
                    this.UserUniqueId.Equals(input.UserUniqueId))
                ) && 
                (
                    this.BusinessActivity == input.BusinessActivity ||
                    (this.BusinessActivity != null &&
                    this.BusinessActivity.Equals(input.BusinessActivity))
                ) && 
                (
                    this.TraceId == input.TraceId ||
                    (this.TraceId != null &&
                    this.TraceId.Equals(input.TraceId))
                ) && 
                (
                    this.Result == input.Result ||
                    (this.Result != null &&
                    this.Result.Equals(input.Result))
                ) && 
                (
                    this.VersionedTouchPoint == input.VersionedTouchPoint ||
                    (this.VersionedTouchPoint != null &&
                    this.VersionedTouchPoint.Equals(input.VersionedTouchPoint))
                ) && 
                (
                    this.VersionedTouchPointId == input.VersionedTouchPointId ||
                    (this.VersionedTouchPointId != null &&
                    this.VersionedTouchPointId.Equals(input.VersionedTouchPointId))
                ) && 
                (
                    this.Discriminator == input.Discriminator ||
                    (this.Discriminator != null &&
                    this.Discriminator.Equals(input.Discriminator))
                ) && 
                (
                    this.AdditionalInfo == input.AdditionalInfo ||
                    (this.AdditionalInfo != null &&
                    this.AdditionalInfo.Equals(input.AdditionalInfo))
                ) && 
                (
                    this.UserType == input.UserType ||
                    (this.UserType != null &&
                    this.UserType.Equals(input.UserType))
                ) && 
                (
                    this.InstallmentPlanId == input.InstallmentPlanId ||
                    (this.InstallmentPlanId != null &&
                    this.InstallmentPlanId.Equals(input.InstallmentPlanId))
                ) && 
                (
                    this.CreatingIPAddress == input.CreatingIPAddress ||
                    (this.CreatingIPAddress != null &&
                    this.CreatingIPAddress.Equals(input.CreatingIPAddress))
                ) && 
                (
                    this.CardId == input.CardId ||
                    (this.CardId != null &&
                    this.CardId.Equals(input.CardId))
                ) && 
                (
                    this.Card == input.Card ||
                    (this.Card != null &&
                    this.Card.Equals(input.Card))
                ) && 
                (
                    this.InstallmentPlan == input.InstallmentPlan ||
                    (this.InstallmentPlan != null &&
                    this.InstallmentPlan.Equals(input.InstallmentPlan))
                ) && 
                (
                    this.ErrorCode == input.ErrorCode ||
                    (this.ErrorCode != null &&
                    this.ErrorCode.Equals(input.ErrorCode))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.ActivityExecutionDate != null)
                    hashCode = hashCode * 59 + this.ActivityExecutionDate.GetHashCode();
                if (this.UserId != null)
                    hashCode = hashCode * 59 + this.UserId.GetHashCode();
                if (this.UserUniqueId != null)
                    hashCode = hashCode * 59 + this.UserUniqueId.GetHashCode();
                if (this.BusinessActivity != null)
                    hashCode = hashCode * 59 + this.BusinessActivity.GetHashCode();
                if (this.TraceId != null)
                    hashCode = hashCode * 59 + this.TraceId.GetHashCode();
                if (this.Result != null)
                    hashCode = hashCode * 59 + this.Result.GetHashCode();
                if (this.VersionedTouchPoint != null)
                    hashCode = hashCode * 59 + this.VersionedTouchPoint.GetHashCode();
                if (this.VersionedTouchPointId != null)
                    hashCode = hashCode * 59 + this.VersionedTouchPointId.GetHashCode();
                if (this.Discriminator != null)
                    hashCode = hashCode * 59 + this.Discriminator.GetHashCode();
                if (this.AdditionalInfo != null)
                    hashCode = hashCode * 59 + this.AdditionalInfo.GetHashCode();
                if (this.UserType != null)
                    hashCode = hashCode * 59 + this.UserType.GetHashCode();
                if (this.InstallmentPlanId != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanId.GetHashCode();
                if (this.CreatingIPAddress != null)
                    hashCode = hashCode * 59 + this.CreatingIPAddress.GetHashCode();
                if (this.CardId != null)
                    hashCode = hashCode * 59 + this.CardId.GetHashCode();
                if (this.Card != null)
                    hashCode = hashCode * 59 + this.Card.GetHashCode();
                if (this.InstallmentPlan != null)
                    hashCode = hashCode * 59 + this.InstallmentPlan.GetHashCode();
                if (this.ErrorCode != null)
                    hashCode = hashCode * 59 + this.ErrorCode.GetHashCode();
                return hashCode;
            }
        }
    }

}
