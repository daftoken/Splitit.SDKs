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
    /// InstallmentPlanStatusLogEntries
    /// </summary>
    [DataContract]
    public partial class InstallmentPlanStatusLogEntries :  IEquatable<InstallmentPlanStatusLogEntries>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlanStatusLogEntries" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InstallmentPlanStatusLogEntries() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlanStatusLogEntries" /> class.
        /// </summary>
        /// <param name="id">id (required).</param>
        /// <param name="planId">planId (required).</param>
        /// <param name="plan">plan.</param>
        /// <param name="status">status (required).</param>
        public InstallmentPlanStatusLogEntries(long? id = default(long?), long? planId = default(long?), InstallmentPlans plan = default(InstallmentPlans), InstallmentPlanStatus status = default(InstallmentPlanStatus))
        {
            this.Id = id;
            this.PlanId = planId;
            this.Status = status;
            this.Plan = plan;
        }

        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="Id", EmitDefaultValue=false)]
        public long? Id { get; set; }

        /// <summary>
        /// Gets or Sets PlanId
        /// </summary>
        [DataMember(Name="PlanId", EmitDefaultValue=false)]
        public long? PlanId { get; set; }

        /// <summary>
        /// Gets or Sets Plan
        /// </summary>
        [DataMember(Name="Plan", EmitDefaultValue=false)]
        public InstallmentPlans Plan { get; set; }

        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name="Status", EmitDefaultValue=false)]
        public InstallmentPlanStatus Status { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InstallmentPlanStatusLogEntries {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  PlanId: ").Append(PlanId).Append("\n");
            sb.Append("  Plan: ").Append(Plan).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
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
            return this.Equals(input as InstallmentPlanStatusLogEntries);
        }

        /// <summary>
        /// Returns true if InstallmentPlanStatusLogEntries instances are equal
        /// </summary>
        /// <param name="input">Instance of InstallmentPlanStatusLogEntries to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InstallmentPlanStatusLogEntries input)
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
                    this.PlanId == input.PlanId ||
                    (this.PlanId != null &&
                    this.PlanId.Equals(input.PlanId))
                ) && 
                (
                    this.Plan == input.Plan ||
                    (this.Plan != null &&
                    this.Plan.Equals(input.Plan))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
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
                if (this.PlanId != null)
                    hashCode = hashCode * 59 + this.PlanId.GetHashCode();
                if (this.Plan != null)
                    hashCode = hashCode * 59 + this.Plan.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
                return hashCode;
            }
        }
    }

}
