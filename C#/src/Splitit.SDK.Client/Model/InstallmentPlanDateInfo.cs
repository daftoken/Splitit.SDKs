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
    /// InstallmentPlanDateInfo
    /// </summary>
    [DataContract]
    public partial class InstallmentPlanDateInfo :  IEquatable<InstallmentPlanDateInfo>
    {
        /// <summary>
        /// Gets or Sets InstallmentsPlanDateType
        /// </summary>
        [DataMember(Name="InstallmentsPlanDateType", EmitDefaultValue=false)]
        public InstallmentsPlanDateType InstallmentsPlanDateType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlanDateInfo" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InstallmentPlanDateInfo() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlanDateInfo" /> class.
        /// </summary>
        /// <param name="installmentsPlanDateType">installmentsPlanDateType (required).</param>
        /// <param name="startDate">startDate.</param>
        /// <param name="endDate">endDate.</param>
        /// <param name="allDates">allDates (required).</param>
        public InstallmentPlanDateInfo(InstallmentsPlanDateType installmentsPlanDateType = default(InstallmentsPlanDateType), string startDate = default(string), string endDate = default(string), bool? allDates = default(bool?))
        {
            this.InstallmentsPlanDateType = installmentsPlanDateType;
            this.AllDates = allDates;
            this.StartDate = startDate;
            this.EndDate = endDate;
        }

        

        /// <summary>
        /// Gets or Sets StartDate
        /// </summary>
        [DataMember(Name="StartDate", EmitDefaultValue=false)]
        public string StartDate { get; set; }

        /// <summary>
        /// Gets or Sets EndDate
        /// </summary>
        [DataMember(Name="EndDate", EmitDefaultValue=false)]
        public string EndDate { get; set; }

        /// <summary>
        /// Gets or Sets AllDates
        /// </summary>
        [DataMember(Name="AllDates", EmitDefaultValue=false)]
        public bool? AllDates { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InstallmentPlanDateInfo {\n");
            sb.Append("  InstallmentsPlanDateType: ").Append(InstallmentsPlanDateType).Append("\n");
            sb.Append("  StartDate: ").Append(StartDate).Append("\n");
            sb.Append("  EndDate: ").Append(EndDate).Append("\n");
            sb.Append("  AllDates: ").Append(AllDates).Append("\n");
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
            return this.Equals(input as InstallmentPlanDateInfo);
        }

        /// <summary>
        /// Returns true if InstallmentPlanDateInfo instances are equal
        /// </summary>
        /// <param name="input">Instance of InstallmentPlanDateInfo to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InstallmentPlanDateInfo input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.InstallmentsPlanDateType == input.InstallmentsPlanDateType ||
                    (this.InstallmentsPlanDateType != null &&
                    this.InstallmentsPlanDateType.Equals(input.InstallmentsPlanDateType))
                ) && 
                (
                    this.StartDate == input.StartDate ||
                    (this.StartDate != null &&
                    this.StartDate.Equals(input.StartDate))
                ) && 
                (
                    this.EndDate == input.EndDate ||
                    (this.EndDate != null &&
                    this.EndDate.Equals(input.EndDate))
                ) && 
                (
                    this.AllDates == input.AllDates ||
                    (this.AllDates != null &&
                    this.AllDates.Equals(input.AllDates))
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
                if (this.InstallmentsPlanDateType != null)
                    hashCode = hashCode * 59 + this.InstallmentsPlanDateType.GetHashCode();
                if (this.StartDate != null)
                    hashCode = hashCode * 59 + this.StartDate.GetHashCode();
                if (this.EndDate != null)
                    hashCode = hashCode * 59 + this.EndDate.GetHashCode();
                if (this.AllDates != null)
                    hashCode = hashCode * 59 + this.AllDates.GetHashCode();
                return hashCode;
            }
        }
    }

}
