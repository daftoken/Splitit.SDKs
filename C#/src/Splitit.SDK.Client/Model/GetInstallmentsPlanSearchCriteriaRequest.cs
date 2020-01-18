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
    /// GetInstallmentsPlanSearchCriteriaRequest
    /// </summary>
    [DataContract]
    public partial class GetInstallmentsPlanSearchCriteriaRequest :  IEquatable<GetInstallmentsPlanSearchCriteriaRequest>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetInstallmentsPlanSearchCriteriaRequest" /> class.
        /// </summary>
        /// <param name="queryCriteria">queryCriteria.</param>
        /// <param name="loadRelated">loadRelated.</param>
        /// <param name="pagingRequest">pagingRequest.</param>
        public GetInstallmentsPlanSearchCriteriaRequest(InstallmentPlanQueryCriteria queryCriteria = default(InstallmentPlanQueryCriteria), RelationsLoad loadRelated = default(RelationsLoad), PagingRequestHeader pagingRequest = default(PagingRequestHeader))
        {
            this.QueryCriteria = queryCriteria;
            this.LoadRelated = loadRelated;
            this.PagingRequest = pagingRequest;
        }

        [DataMember(Name="RequestHeader", EmitDefaultValue=false)]
        internal RequestHeader RequestHeader { get; set; }
        
        /// <summary>
        /// Gets or Sets QueryCriteria
        /// </summary>
        [DataMember(Name="QueryCriteria", EmitDefaultValue=false)]
        public InstallmentPlanQueryCriteria QueryCriteria { get; set; }

        /// <summary>
        /// Gets or Sets LoadRelated
        /// </summary>
        [DataMember(Name="LoadRelated", EmitDefaultValue=false)]
        public RelationsLoad LoadRelated { get; set; }

        /// <summary>
        /// Gets or Sets PagingRequest
        /// </summary>
        [DataMember(Name="PagingRequest", EmitDefaultValue=false)]
        public PagingRequestHeader PagingRequest { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GetInstallmentsPlanSearchCriteriaRequest {\n");
            sb.Append("  QueryCriteria: ").Append(QueryCriteria).Append("\n");
            sb.Append("  LoadRelated: ").Append(LoadRelated).Append("\n");
            sb.Append("  PagingRequest: ").Append(PagingRequest).Append("\n");
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
            return this.Equals(input as GetInstallmentsPlanSearchCriteriaRequest);
        }

        /// <summary>
        /// Returns true if GetInstallmentsPlanSearchCriteriaRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of GetInstallmentsPlanSearchCriteriaRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetInstallmentsPlanSearchCriteriaRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.QueryCriteria == input.QueryCriteria ||
                    (this.QueryCriteria != null &&
                    this.QueryCriteria.Equals(input.QueryCriteria))
                ) && 
                (
                    this.LoadRelated == input.LoadRelated ||
                    (this.LoadRelated != null &&
                    this.LoadRelated.Equals(input.LoadRelated))
                ) && 
                (
                    this.PagingRequest == input.PagingRequest ||
                    (this.PagingRequest != null &&
                    this.PagingRequest.Equals(input.PagingRequest))
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
                if (this.QueryCriteria != null)
                    hashCode = hashCode * 59 + this.QueryCriteria.GetHashCode();
                if (this.LoadRelated != null)
                    hashCode = hashCode * 59 + this.LoadRelated.GetHashCode();
                if (this.PagingRequest != null)
                    hashCode = hashCode * 59 + this.PagingRequest.GetHashCode();
                return hashCode;
            }
        }
    }

}
