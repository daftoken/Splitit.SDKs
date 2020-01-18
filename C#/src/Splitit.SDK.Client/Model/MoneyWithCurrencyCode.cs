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
    /// MoneyWithCurrencyCode
    /// </summary>
    [DataContract]
    public partial class MoneyWithCurrencyCode :  IEquatable<MoneyWithCurrencyCode>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MoneyWithCurrencyCode" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected MoneyWithCurrencyCode() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="MoneyWithCurrencyCode" /> class.
        /// </summary>
        /// <param name="value">value (required).</param>
        /// <param name="currencyCode">currencyCode.</param>
        public MoneyWithCurrencyCode(decimal? value = default(decimal?), string currencyCode = default(string))
        {
            // to ensure "value" is required (not null)
            if (value == null)
            {
                throw new InvalidDataException("value is a required property for MoneyWithCurrencyCode and cannot be null");
            }
            else
            {
                this.Value = value;
            }
            this.CurrencyCode = currencyCode;
        }

        
        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name="Value", EmitDefaultValue=false)]
        public decimal? Value { get; set; }

        /// <summary>
        /// Gets or Sets CurrencyCode
        /// </summary>
        [DataMember(Name="CurrencyCode", EmitDefaultValue=false)]
        public string CurrencyCode { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MoneyWithCurrencyCode {\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  CurrencyCode: ").Append(CurrencyCode).Append("\n");
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
            return this.Equals(input as MoneyWithCurrencyCode);
        }

        /// <summary>
        /// Returns true if MoneyWithCurrencyCode instances are equal
        /// </summary>
        /// <param name="input">Instance of MoneyWithCurrencyCode to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MoneyWithCurrencyCode input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
                ) && 
                (
                    this.CurrencyCode == input.CurrencyCode ||
                    (this.CurrencyCode != null &&
                    this.CurrencyCode.Equals(input.CurrencyCode))
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
                if (this.Value != null)
                    hashCode = hashCode * 59 + this.Value.GetHashCode();
                if (this.CurrencyCode != null)
                    hashCode = hashCode * 59 + this.CurrencyCode.GetHashCode();
                return hashCode;
            }
        }
    }

}
