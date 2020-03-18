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
    /// PaymentWizardData
    /// </summary>
    [DataContract]
    public partial class PaymentWizardData :  IEquatable<PaymentWizardData>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentWizardData" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PaymentWizardData() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentWizardData" /> class.
        /// </summary>
        /// <param name="requestedNumberOfInstallments">requestedNumberOfInstallments.</param>
        /// <param name="successExitURL">successExitURL.</param>
        /// <param name="errorExitURL">errorExitURL.</param>
        /// <param name="cancelExitURL">cancelExitURL.</param>
        /// <param name="successAsyncUrl">successAsyncUrl.</param>
        /// <param name="viewName">viewName.</param>
        /// <param name="isOpenedInIframe">isOpenedInIframe (required).</param>
        /// <param name="paymentFormMessage">paymentFormMessage.</param>
        public PaymentWizardData(string requestedNumberOfInstallments = default(string), string successExitURL = default(string), string errorExitURL = default(string), string cancelExitURL = default(string), string successAsyncUrl = default(string), string viewName = default(string), bool? isOpenedInIframe = default(bool?), string paymentFormMessage = default(string))
        {
            this.IsOpenedInIframe = isOpenedInIframe;
            this.RequestedNumberOfInstallments = requestedNumberOfInstallments;
            this.SuccessExitURL = successExitURL;
            this.ErrorExitURL = errorExitURL;
            this.CancelExitURL = cancelExitURL;
            this.SuccessAsyncUrl = successAsyncUrl;
            this.ViewName = viewName;
            this.PaymentFormMessage = paymentFormMessage;
        }

        
        /// <summary>
        /// Gets or Sets RequestedNumberOfInstallments
        /// </summary>
        [DataMember(Name="RequestedNumberOfInstallments", EmitDefaultValue=false)]
        public string RequestedNumberOfInstallments { get; set; }

        /// <summary>
        /// Gets or Sets SuccessExitURL
        /// </summary>
        [DataMember(Name="SuccessExitURL", EmitDefaultValue=false)]
        public string SuccessExitURL { get; set; }

        /// <summary>
        /// Gets or Sets ErrorExitURL
        /// </summary>
        [DataMember(Name="ErrorExitURL", EmitDefaultValue=false)]
        public string ErrorExitURL { get; set; }

        /// <summary>
        /// Gets or Sets CancelExitURL
        /// </summary>
        [DataMember(Name="CancelExitURL", EmitDefaultValue=false)]
        public string CancelExitURL { get; set; }

        /// <summary>
        /// Gets or Sets SuccessAsyncUrl
        /// </summary>
        [DataMember(Name="SuccessAsyncUrl", EmitDefaultValue=false)]
        public string SuccessAsyncUrl { get; set; }

        /// <summary>
        /// Gets or Sets ViewName
        /// </summary>
        [DataMember(Name="ViewName", EmitDefaultValue=false)]
        public string ViewName { get; set; }

        /// <summary>
        /// Gets or Sets IsOpenedInIframe
        /// </summary>
        [DataMember(Name="IsOpenedInIframe", EmitDefaultValue=false)]
        public bool? IsOpenedInIframe { get; set; }

        /// <summary>
        /// Gets or Sets PaymentFormMessage
        /// </summary>
        [DataMember(Name="PaymentFormMessage", EmitDefaultValue=false)]
        public string PaymentFormMessage { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PaymentWizardData {\n");
            sb.Append("  RequestedNumberOfInstallments: ").Append(RequestedNumberOfInstallments).Append("\n");
            sb.Append("  SuccessExitURL: ").Append(SuccessExitURL).Append("\n");
            sb.Append("  ErrorExitURL: ").Append(ErrorExitURL).Append("\n");
            sb.Append("  CancelExitURL: ").Append(CancelExitURL).Append("\n");
            sb.Append("  SuccessAsyncUrl: ").Append(SuccessAsyncUrl).Append("\n");
            sb.Append("  ViewName: ").Append(ViewName).Append("\n");
            sb.Append("  IsOpenedInIframe: ").Append(IsOpenedInIframe).Append("\n");
            sb.Append("  PaymentFormMessage: ").Append(PaymentFormMessage).Append("\n");
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
            return this.Equals(input as PaymentWizardData);
        }

        /// <summary>
        /// Returns true if PaymentWizardData instances are equal
        /// </summary>
        /// <param name="input">Instance of PaymentWizardData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PaymentWizardData input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.RequestedNumberOfInstallments == input.RequestedNumberOfInstallments ||
                    (this.RequestedNumberOfInstallments != null &&
                    this.RequestedNumberOfInstallments.Equals(input.RequestedNumberOfInstallments))
                ) && 
                (
                    this.SuccessExitURL == input.SuccessExitURL ||
                    (this.SuccessExitURL != null &&
                    this.SuccessExitURL.Equals(input.SuccessExitURL))
                ) && 
                (
                    this.ErrorExitURL == input.ErrorExitURL ||
                    (this.ErrorExitURL != null &&
                    this.ErrorExitURL.Equals(input.ErrorExitURL))
                ) && 
                (
                    this.CancelExitURL == input.CancelExitURL ||
                    (this.CancelExitURL != null &&
                    this.CancelExitURL.Equals(input.CancelExitURL))
                ) && 
                (
                    this.SuccessAsyncUrl == input.SuccessAsyncUrl ||
                    (this.SuccessAsyncUrl != null &&
                    this.SuccessAsyncUrl.Equals(input.SuccessAsyncUrl))
                ) && 
                (
                    this.ViewName == input.ViewName ||
                    (this.ViewName != null &&
                    this.ViewName.Equals(input.ViewName))
                ) && 
                (
                    this.IsOpenedInIframe == input.IsOpenedInIframe ||
                    (this.IsOpenedInIframe != null &&
                    this.IsOpenedInIframe.Equals(input.IsOpenedInIframe))
                ) && 
                (
                    this.PaymentFormMessage == input.PaymentFormMessage ||
                    (this.PaymentFormMessage != null &&
                    this.PaymentFormMessage.Equals(input.PaymentFormMessage))
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
                if (this.RequestedNumberOfInstallments != null)
                    hashCode = hashCode * 59 + this.RequestedNumberOfInstallments.GetHashCode();
                if (this.SuccessExitURL != null)
                    hashCode = hashCode * 59 + this.SuccessExitURL.GetHashCode();
                if (this.ErrorExitURL != null)
                    hashCode = hashCode * 59 + this.ErrorExitURL.GetHashCode();
                if (this.CancelExitURL != null)
                    hashCode = hashCode * 59 + this.CancelExitURL.GetHashCode();
                if (this.SuccessAsyncUrl != null)
                    hashCode = hashCode * 59 + this.SuccessAsyncUrl.GetHashCode();
                if (this.ViewName != null)
                    hashCode = hashCode * 59 + this.ViewName.GetHashCode();
                if (this.IsOpenedInIframe != null)
                    hashCode = hashCode * 59 + this.IsOpenedInIframe.GetHashCode();
                if (this.PaymentFormMessage != null)
                    hashCode = hashCode * 59 + this.PaymentFormMessage.GetHashCode();
                return hashCode;
            }
        }
    }

}
