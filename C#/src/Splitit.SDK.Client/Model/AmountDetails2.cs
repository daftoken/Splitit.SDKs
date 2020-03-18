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
    /// AmountDetails2
    /// </summary>
    [DataContract]
    public partial class AmountDetails2 :  IEquatable<AmountDetails2>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AmountDetails2" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected AmountDetails2() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="AmountDetails2" /> class.
        /// </summary>
        /// <param name="subTotal">subTotal (required).</param>
        /// <param name="tax">tax (required).</param>
        /// <param name="shipping">shipping (required).</param>
        public AmountDetails2(decimal? subTotal = default(decimal?), decimal? tax = default(decimal?), decimal? shipping = default(decimal?))
        {
            this.SubTotal = subTotal;
            this.Tax = tax;
            this.Shipping = shipping;
        }

        
        /// <summary>
        /// Gets or Sets SubTotal
        /// </summary>
        [DataMember(Name="SubTotal", EmitDefaultValue=false)]
        public decimal? SubTotal { get; set; }

        /// <summary>
        /// Gets or Sets Tax
        /// </summary>
        [DataMember(Name="Tax", EmitDefaultValue=false)]
        public decimal? Tax { get; set; }

        /// <summary>
        /// Gets or Sets Shipping
        /// </summary>
        [DataMember(Name="Shipping", EmitDefaultValue=false)]
        public decimal? Shipping { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class AmountDetails2 {\n");
            sb.Append("  SubTotal: ").Append(SubTotal).Append("\n");
            sb.Append("  Tax: ").Append(Tax).Append("\n");
            sb.Append("  Shipping: ").Append(Shipping).Append("\n");
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
            return this.Equals(input as AmountDetails2);
        }

        /// <summary>
        /// Returns true if AmountDetails2 instances are equal
        /// </summary>
        /// <param name="input">Instance of AmountDetails2 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(AmountDetails2 input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.SubTotal == input.SubTotal ||
                    (this.SubTotal != null &&
                    this.SubTotal.Equals(input.SubTotal))
                ) && 
                (
                    this.Tax == input.Tax ||
                    (this.Tax != null &&
                    this.Tax.Equals(input.Tax))
                ) && 
                (
                    this.Shipping == input.Shipping ||
                    (this.Shipping != null &&
                    this.Shipping.Equals(input.Shipping))
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
                if (this.SubTotal != null)
                    hashCode = hashCode * 59 + this.SubTotal.GetHashCode();
                if (this.Tax != null)
                    hashCode = hashCode * 59 + this.Tax.GetHashCode();
                if (this.Shipping != null)
                    hashCode = hashCode * 59 + this.Shipping.GetHashCode();
                return hashCode;
            }
        }
    }

}
