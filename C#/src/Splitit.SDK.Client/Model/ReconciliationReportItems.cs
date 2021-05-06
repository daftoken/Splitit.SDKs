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
    /// ReconciliationReportItems
    /// </summary>
    [DataContract]
    public partial class ReconciliationReportItems :  IEquatable<ReconciliationReportItems>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ReconciliationReportItems" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ReconciliationReportItems() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ReconciliationReportItems" /> class.
        /// </summary>
        /// <param name="id">id (required).</param>
        /// <param name="gatewayAmount">gatewayAmount (required).</param>
        /// <param name="gatewayCount">gatewayCount (required).</param>
        /// <param name="pisamount">pisamount (required).</param>
        /// <param name="piscount">piscount (required).</param>
        /// <param name="isIdentical">isIdentical (required).</param>
        /// <param name="reconciliationReportId">reconciliationReportId (required).</param>
        /// <param name="reconciliationReport">reconciliationReport.</param>
        /// <param name="transactionType">transactionType (required).</param>
        /// <param name="gatewayType">gatewayType (required).</param>
        public ReconciliationReportItems(long? id = default(long?), decimal? gatewayAmount = default(decimal?), int? gatewayCount = default(int?), decimal? pisamount = default(decimal?), int? piscount = default(int?), bool? isIdentical = default(bool?), long? reconciliationReportId = default(long?), ReconciliationReports reconciliationReport = default(ReconciliationReports), OperationType transactionType = default(OperationType), ProcessorType gatewayType = default(ProcessorType))
        {
            this.Id = id;
            this.GatewayAmount = gatewayAmount;
            this.GatewayCount = gatewayCount;
            this.Pisamount = pisamount;
            this.Piscount = piscount;
            this.IsIdentical = isIdentical;
            this.ReconciliationReportId = reconciliationReportId;
            this.TransactionType = transactionType;
            this.GatewayType = gatewayType;
            this.ReconciliationReport = reconciliationReport;
        }

        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="Id", EmitDefaultValue=false)]
        public long? Id { get; set; }

        /// <summary>
        /// Gets or Sets GatewayAmount
        /// </summary>
        [DataMember(Name="GatewayAmount", EmitDefaultValue=false)]
        public decimal? GatewayAmount { get; set; }

        /// <summary>
        /// Gets or Sets GatewayCount
        /// </summary>
        [DataMember(Name="GatewayCount", EmitDefaultValue=false)]
        public int? GatewayCount { get; set; }

        /// <summary>
        /// Gets or Sets Pisamount
        /// </summary>
        [DataMember(Name="Pisamount", EmitDefaultValue=false)]
        public decimal? Pisamount { get; set; }

        /// <summary>
        /// Gets or Sets Piscount
        /// </summary>
        [DataMember(Name="Piscount", EmitDefaultValue=false)]
        public int? Piscount { get; set; }

        /// <summary>
        /// Gets or Sets IsIdentical
        /// </summary>
        [DataMember(Name="IsIdentical", EmitDefaultValue=false)]
        public bool? IsIdentical { get; set; }

        /// <summary>
        /// Gets or Sets ReconciliationReportId
        /// </summary>
        [DataMember(Name="ReconciliationReportId", EmitDefaultValue=false)]
        public long? ReconciliationReportId { get; set; }

        /// <summary>
        /// Gets or Sets ReconciliationReport
        /// </summary>
        [DataMember(Name="ReconciliationReport", EmitDefaultValue=false)]
        public ReconciliationReports ReconciliationReport { get; set; }

        /// <summary>
        /// Gets or Sets TransactionType
        /// </summary>
        [DataMember(Name="TransactionType", EmitDefaultValue=false)]
        public OperationType TransactionType { get; set; }

        /// <summary>
        /// Gets or Sets GatewayType
        /// </summary>
        [DataMember(Name="GatewayType", EmitDefaultValue=false)]
        public ProcessorType GatewayType { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ReconciliationReportItems {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  GatewayAmount: ").Append(GatewayAmount).Append("\n");
            sb.Append("  GatewayCount: ").Append(GatewayCount).Append("\n");
            sb.Append("  Pisamount: ").Append(Pisamount).Append("\n");
            sb.Append("  Piscount: ").Append(Piscount).Append("\n");
            sb.Append("  IsIdentical: ").Append(IsIdentical).Append("\n");
            sb.Append("  ReconciliationReportId: ").Append(ReconciliationReportId).Append("\n");
            sb.Append("  ReconciliationReport: ").Append(ReconciliationReport).Append("\n");
            sb.Append("  TransactionType: ").Append(TransactionType).Append("\n");
            sb.Append("  GatewayType: ").Append(GatewayType).Append("\n");
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
            return this.Equals(input as ReconciliationReportItems);
        }

        /// <summary>
        /// Returns true if ReconciliationReportItems instances are equal
        /// </summary>
        /// <param name="input">Instance of ReconciliationReportItems to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ReconciliationReportItems input)
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
                    this.GatewayAmount == input.GatewayAmount ||
                    (this.GatewayAmount != null &&
                    this.GatewayAmount.Equals(input.GatewayAmount))
                ) && 
                (
                    this.GatewayCount == input.GatewayCount ||
                    (this.GatewayCount != null &&
                    this.GatewayCount.Equals(input.GatewayCount))
                ) && 
                (
                    this.Pisamount == input.Pisamount ||
                    (this.Pisamount != null &&
                    this.Pisamount.Equals(input.Pisamount))
                ) && 
                (
                    this.Piscount == input.Piscount ||
                    (this.Piscount != null &&
                    this.Piscount.Equals(input.Piscount))
                ) && 
                (
                    this.IsIdentical == input.IsIdentical ||
                    (this.IsIdentical != null &&
                    this.IsIdentical.Equals(input.IsIdentical))
                ) && 
                (
                    this.ReconciliationReportId == input.ReconciliationReportId ||
                    (this.ReconciliationReportId != null &&
                    this.ReconciliationReportId.Equals(input.ReconciliationReportId))
                ) && 
                (
                    this.ReconciliationReport == input.ReconciliationReport ||
                    (this.ReconciliationReport != null &&
                    this.ReconciliationReport.Equals(input.ReconciliationReport))
                ) && 
                (
                    this.TransactionType == input.TransactionType ||
                    (this.TransactionType != null &&
                    this.TransactionType.Equals(input.TransactionType))
                ) && 
                (
                    this.GatewayType == input.GatewayType ||
                    (this.GatewayType != null &&
                    this.GatewayType.Equals(input.GatewayType))
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
                if (this.GatewayAmount != null)
                    hashCode = hashCode * 59 + this.GatewayAmount.GetHashCode();
                if (this.GatewayCount != null)
                    hashCode = hashCode * 59 + this.GatewayCount.GetHashCode();
                if (this.Pisamount != null)
                    hashCode = hashCode * 59 + this.Pisamount.GetHashCode();
                if (this.Piscount != null)
                    hashCode = hashCode * 59 + this.Piscount.GetHashCode();
                if (this.IsIdentical != null)
                    hashCode = hashCode * 59 + this.IsIdentical.GetHashCode();
                if (this.ReconciliationReportId != null)
                    hashCode = hashCode * 59 + this.ReconciliationReportId.GetHashCode();
                if (this.ReconciliationReport != null)
                    hashCode = hashCode * 59 + this.ReconciliationReport.GetHashCode();
                if (this.TransactionType != null)
                    hashCode = hashCode * 59 + this.TransactionType.GetHashCode();
                if (this.GatewayType != null)
                    hashCode = hashCode * 59 + this.GatewayType.GetHashCode();
                return hashCode;
            }
        }
    }

}
