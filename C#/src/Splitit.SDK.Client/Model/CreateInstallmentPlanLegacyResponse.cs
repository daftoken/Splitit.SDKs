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
    /// CreateInstallmentPlanLegacyResponse
    /// </summary>
    [DataContract]
    public partial class CreateInstallmentPlanLegacyResponse :  IEquatable<CreateInstallmentPlanLegacyResponse>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateInstallmentPlanLegacyResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateInstallmentPlanLegacyResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateInstallmentPlanLegacyResponse" /> class.
        /// </summary>
        /// <param name="apiKey">apiKey.</param>
        /// <param name="installmentPlanStatus">installmentPlanStatus (required).</param>
        /// <param name="result">result (required).</param>
        /// <param name="paymentGateway">paymentGateway.</param>
        /// <param name="email">email.</param>
        /// <param name="consumerFullName">consumerFullName.</param>
        /// <param name="paramX">paramX.</param>
        /// <param name="installmentNumber">installmentNumber (required).</param>
        /// <param name="amount">amount (required).</param>
        /// <param name="currencyName">currencyName.</param>
        /// <param name="currencySymbol">currencySymbol.</param>
        /// <param name="installmentPlanNumber">installmentPlanNumber.</param>
        /// <param name="responseHeader">responseHeader.</param>
        public CreateInstallmentPlanLegacyResponse(string apiKey = default(string), int? installmentPlanStatus = default(int?), int? result = default(int?), string paymentGateway = default(string), string email = default(string), string consumerFullName = default(string), string paramX = default(string), int? installmentNumber = default(int?), decimal? amount = default(decimal?), string currencyName = default(string), string currencySymbol = default(string), string installmentPlanNumber = default(string), ResponseHeader responseHeader = default(ResponseHeader))
        {
            // to ensure "installmentPlanStatus" is required (not null)
            if (installmentPlanStatus == null)
            {
                throw new InvalidDataException("installmentPlanStatus is a required property for CreateInstallmentPlanLegacyResponse and cannot be null");
            }
            else
            {
                this.InstallmentPlanStatus = installmentPlanStatus;
            }
            // to ensure "result" is required (not null)
            if (result == null)
            {
                throw new InvalidDataException("result is a required property for CreateInstallmentPlanLegacyResponse and cannot be null");
            }
            else
            {
                this.Result = result;
            }
            // to ensure "installmentNumber" is required (not null)
            if (installmentNumber == null)
            {
                throw new InvalidDataException("installmentNumber is a required property for CreateInstallmentPlanLegacyResponse and cannot be null");
            }
            else
            {
                this.InstallmentNumber = installmentNumber;
            }
            // to ensure "amount" is required (not null)
            if (amount == null)
            {
                throw new InvalidDataException("amount is a required property for CreateInstallmentPlanLegacyResponse and cannot be null");
            }
            else
            {
                this.Amount = amount;
            }
            this.ApiKey = apiKey;
            this.PaymentGateway = paymentGateway;
            this.Email = email;
            this.ConsumerFullName = consumerFullName;
            this.ParamX = paramX;
            this.CurrencyName = currencyName;
            this.CurrencySymbol = currencySymbol;
            this.InstallmentPlanNumber = installmentPlanNumber;
            this.ResponseHeader = responseHeader;
        }

        
        /// <summary>
        /// Gets or Sets ApiKey
        /// </summary>
        [DataMember(Name="ApiKey", EmitDefaultValue=false)]
        public string ApiKey { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentPlanStatus
        /// </summary>
        [DataMember(Name="InstallmentPlanStatus", EmitDefaultValue=false)]
        public int? InstallmentPlanStatus { get; set; }

        /// <summary>
        /// Gets or Sets Result
        /// </summary>
        [DataMember(Name="Result", EmitDefaultValue=false)]
        public int? Result { get; set; }

        /// <summary>
        /// Gets or Sets PaymentGateway
        /// </summary>
        [DataMember(Name="PaymentGateway", EmitDefaultValue=false)]
        public string PaymentGateway { get; set; }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name="Email", EmitDefaultValue=false)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets ConsumerFullName
        /// </summary>
        [DataMember(Name="ConsumerFullName", EmitDefaultValue=false)]
        public string ConsumerFullName { get; set; }

        /// <summary>
        /// Gets or Sets ParamX
        /// </summary>
        [DataMember(Name="ParamX", EmitDefaultValue=false)]
        public string ParamX { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentNumber
        /// </summary>
        [DataMember(Name="InstallmentNumber", EmitDefaultValue=false)]
        public int? InstallmentNumber { get; set; }

        /// <summary>
        /// Gets or Sets Amount
        /// </summary>
        [DataMember(Name="Amount", EmitDefaultValue=false)]
        public decimal? Amount { get; set; }

        /// <summary>
        /// Gets or Sets CurrencyName
        /// </summary>
        [DataMember(Name="CurrencyName", EmitDefaultValue=false)]
        public string CurrencyName { get; set; }

        /// <summary>
        /// Gets or Sets CurrencySymbol
        /// </summary>
        [DataMember(Name="CurrencySymbol", EmitDefaultValue=false)]
        public string CurrencySymbol { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentPlanNumber
        /// </summary>
        [DataMember(Name="InstallmentPlanNumber", EmitDefaultValue=false)]
        public string InstallmentPlanNumber { get; set; }

        /// <summary>
        /// Gets or Sets ResponseHeader
        /// </summary>
        [DataMember(Name="ResponseHeader", EmitDefaultValue=false)]
        public ResponseHeader ResponseHeader { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateInstallmentPlanLegacyResponse {\n");
            sb.Append("  ApiKey: ").Append(ApiKey).Append("\n");
            sb.Append("  InstallmentPlanStatus: ").Append(InstallmentPlanStatus).Append("\n");
            sb.Append("  Result: ").Append(Result).Append("\n");
            sb.Append("  PaymentGateway: ").Append(PaymentGateway).Append("\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  ConsumerFullName: ").Append(ConsumerFullName).Append("\n");
            sb.Append("  ParamX: ").Append(ParamX).Append("\n");
            sb.Append("  InstallmentNumber: ").Append(InstallmentNumber).Append("\n");
            sb.Append("  Amount: ").Append(Amount).Append("\n");
            sb.Append("  CurrencyName: ").Append(CurrencyName).Append("\n");
            sb.Append("  CurrencySymbol: ").Append(CurrencySymbol).Append("\n");
            sb.Append("  InstallmentPlanNumber: ").Append(InstallmentPlanNumber).Append("\n");
            sb.Append("  ResponseHeader: ").Append(ResponseHeader).Append("\n");
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
            return this.Equals(input as CreateInstallmentPlanLegacyResponse);
        }

        /// <summary>
        /// Returns true if CreateInstallmentPlanLegacyResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateInstallmentPlanLegacyResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateInstallmentPlanLegacyResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ApiKey == input.ApiKey ||
                    (this.ApiKey != null &&
                    this.ApiKey.Equals(input.ApiKey))
                ) && 
                (
                    this.InstallmentPlanStatus == input.InstallmentPlanStatus ||
                    (this.InstallmentPlanStatus != null &&
                    this.InstallmentPlanStatus.Equals(input.InstallmentPlanStatus))
                ) && 
                (
                    this.Result == input.Result ||
                    (this.Result != null &&
                    this.Result.Equals(input.Result))
                ) && 
                (
                    this.PaymentGateway == input.PaymentGateway ||
                    (this.PaymentGateway != null &&
                    this.PaymentGateway.Equals(input.PaymentGateway))
                ) && 
                (
                    this.Email == input.Email ||
                    (this.Email != null &&
                    this.Email.Equals(input.Email))
                ) && 
                (
                    this.ConsumerFullName == input.ConsumerFullName ||
                    (this.ConsumerFullName != null &&
                    this.ConsumerFullName.Equals(input.ConsumerFullName))
                ) && 
                (
                    this.ParamX == input.ParamX ||
                    (this.ParamX != null &&
                    this.ParamX.Equals(input.ParamX))
                ) && 
                (
                    this.InstallmentNumber == input.InstallmentNumber ||
                    (this.InstallmentNumber != null &&
                    this.InstallmentNumber.Equals(input.InstallmentNumber))
                ) && 
                (
                    this.Amount == input.Amount ||
                    (this.Amount != null &&
                    this.Amount.Equals(input.Amount))
                ) && 
                (
                    this.CurrencyName == input.CurrencyName ||
                    (this.CurrencyName != null &&
                    this.CurrencyName.Equals(input.CurrencyName))
                ) && 
                (
                    this.CurrencySymbol == input.CurrencySymbol ||
                    (this.CurrencySymbol != null &&
                    this.CurrencySymbol.Equals(input.CurrencySymbol))
                ) && 
                (
                    this.InstallmentPlanNumber == input.InstallmentPlanNumber ||
                    (this.InstallmentPlanNumber != null &&
                    this.InstallmentPlanNumber.Equals(input.InstallmentPlanNumber))
                ) && 
                (
                    this.ResponseHeader == input.ResponseHeader ||
                    (this.ResponseHeader != null &&
                    this.ResponseHeader.Equals(input.ResponseHeader))
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
                if (this.ApiKey != null)
                    hashCode = hashCode * 59 + this.ApiKey.GetHashCode();
                if (this.InstallmentPlanStatus != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanStatus.GetHashCode();
                if (this.Result != null)
                    hashCode = hashCode * 59 + this.Result.GetHashCode();
                if (this.PaymentGateway != null)
                    hashCode = hashCode * 59 + this.PaymentGateway.GetHashCode();
                if (this.Email != null)
                    hashCode = hashCode * 59 + this.Email.GetHashCode();
                if (this.ConsumerFullName != null)
                    hashCode = hashCode * 59 + this.ConsumerFullName.GetHashCode();
                if (this.ParamX != null)
                    hashCode = hashCode * 59 + this.ParamX.GetHashCode();
                if (this.InstallmentNumber != null)
                    hashCode = hashCode * 59 + this.InstallmentNumber.GetHashCode();
                if (this.Amount != null)
                    hashCode = hashCode * 59 + this.Amount.GetHashCode();
                if (this.CurrencyName != null)
                    hashCode = hashCode * 59 + this.CurrencyName.GetHashCode();
                if (this.CurrencySymbol != null)
                    hashCode = hashCode * 59 + this.CurrencySymbol.GetHashCode();
                if (this.InstallmentPlanNumber != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanNumber.GetHashCode();
                if (this.ResponseHeader != null)
                    hashCode = hashCode * 59 + this.ResponseHeader.GetHashCode();
                return hashCode;
            }
        }
    }

}
