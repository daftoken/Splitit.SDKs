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
    /// CancelInstallmentPlanRequest
    /// </summary>
    [DataContract]
    public partial class CancelInstallmentPlanRequest :  IEquatable<CancelInstallmentPlanRequest>
    {
        /// <summary>
        /// Gets or Sets RefundUnderCancelation
        /// </summary>
        [DataMember(Name="RefundUnderCancelation", EmitDefaultValue=false)]
        public RefundUnderCancelation RefundUnderCancelation { get; set; }
        /// <summary>
        /// Gets or Sets CancelationReason
        /// </summary>
        [DataMember(Name="CancelationReason", EmitDefaultValue=false)]
        public InstallmentPlanCancelationReason CancelationReason { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CancelInstallmentPlanRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CancelInstallmentPlanRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CancelInstallmentPlanRequest" /> class.
        /// </summary>
        /// <param name="installmentPlanNumber">installmentPlanNumber.</param>
        /// <param name="refundUnderCancelation">refundUnderCancelation (required).</param>
        /// <param name="cancelationReason">cancelationReason (required).</param>
        /// <param name="isExecutedUnattended">isExecutedUnattended (required).</param>
        /// <param name="partialResponseMapping">partialResponseMapping (required).</param>
        public CancelInstallmentPlanRequest(string installmentPlanNumber = default(string), RefundUnderCancelation refundUnderCancelation = default(RefundUnderCancelation), InstallmentPlanCancelationReason cancelationReason = default(InstallmentPlanCancelationReason), bool? isExecutedUnattended = default(bool?), bool? partialResponseMapping = default(bool?))
        {
            this.RefundUnderCancelation = refundUnderCancelation;
            this.CancelationReason = cancelationReason;
            this.IsExecutedUnattended = isExecutedUnattended;
            this.PartialResponseMapping = partialResponseMapping;
            this.InstallmentPlanNumber = installmentPlanNumber;
        }

        [DataMember(Name="RequestHeader", EmitDefaultValue=false)]
        internal RequestHeader RequestHeader { get; set; }
        
        /// <summary>
        /// Gets or Sets InstallmentPlanNumber
        /// </summary>
        [DataMember(Name="InstallmentPlanNumber", EmitDefaultValue=false)]
        public string InstallmentPlanNumber { get; set; }



        /// <summary>
        /// Gets or Sets IsExecutedUnattended
        /// </summary>
        [DataMember(Name="IsExecutedUnattended", EmitDefaultValue=false)]
        public bool? IsExecutedUnattended { get; set; }

        /// <summary>
        /// Gets or Sets PartialResponseMapping
        /// </summary>
        [DataMember(Name="PartialResponseMapping", EmitDefaultValue=false)]
        public bool? PartialResponseMapping { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CancelInstallmentPlanRequest {\n");
            sb.Append("  InstallmentPlanNumber: ").Append(InstallmentPlanNumber).Append("\n");
            sb.Append("  RefundUnderCancelation: ").Append(RefundUnderCancelation).Append("\n");
            sb.Append("  CancelationReason: ").Append(CancelationReason).Append("\n");
            sb.Append("  IsExecutedUnattended: ").Append(IsExecutedUnattended).Append("\n");
            sb.Append("  PartialResponseMapping: ").Append(PartialResponseMapping).Append("\n");
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
            return this.Equals(input as CancelInstallmentPlanRequest);
        }

        /// <summary>
        /// Returns true if CancelInstallmentPlanRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CancelInstallmentPlanRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CancelInstallmentPlanRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.InstallmentPlanNumber == input.InstallmentPlanNumber ||
                    (this.InstallmentPlanNumber != null &&
                    this.InstallmentPlanNumber.Equals(input.InstallmentPlanNumber))
                ) && 
                (
                    this.RefundUnderCancelation == input.RefundUnderCancelation ||
                    (this.RefundUnderCancelation != null &&
                    this.RefundUnderCancelation.Equals(input.RefundUnderCancelation))
                ) && 
                (
                    this.CancelationReason == input.CancelationReason ||
                    (this.CancelationReason != null &&
                    this.CancelationReason.Equals(input.CancelationReason))
                ) && 
                (
                    this.IsExecutedUnattended == input.IsExecutedUnattended ||
                    (this.IsExecutedUnattended != null &&
                    this.IsExecutedUnattended.Equals(input.IsExecutedUnattended))
                ) && 
                (
                    this.PartialResponseMapping == input.PartialResponseMapping ||
                    (this.PartialResponseMapping != null &&
                    this.PartialResponseMapping.Equals(input.PartialResponseMapping))
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
                if (this.InstallmentPlanNumber != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanNumber.GetHashCode();
                if (this.RefundUnderCancelation != null)
                    hashCode = hashCode * 59 + this.RefundUnderCancelation.GetHashCode();
                if (this.CancelationReason != null)
                    hashCode = hashCode * 59 + this.CancelationReason.GetHashCode();
                if (this.IsExecutedUnattended != null)
                    hashCode = hashCode * 59 + this.IsExecutedUnattended.GetHashCode();
                if (this.PartialResponseMapping != null)
                    hashCode = hashCode * 59 + this.PartialResponseMapping.GetHashCode();
                return hashCode;
            }
        }
    }

}
