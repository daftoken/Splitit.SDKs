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
    /// PaymentWizardDataResponse
    /// </summary>
    [DataContract]
    public partial class PaymentWizardDataResponse :  IEquatable<PaymentWizardDataResponse>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentWizardDataResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PaymentWizardDataResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentWizardDataResponse" /> class.
        /// </summary>
        /// <param name="requestedNumberOfInstallments">requestedNumberOfInstallments.</param>
        /// <param name="successExitURL">successExitURL.</param>
        /// <param name="errorExitURL">errorExitURL.</param>
        /// <param name="cancelExitURL">cancelExitURL.</param>
        /// <param name="successAsyncUrl">successAsyncUrl.</param>
        /// <param name="viewName">viewName.</param>
        /// <param name="isOpenedInIframe">isOpenedInIframe (required).</param>
        /// <param name="paymentFormMessage">paymentFormMessage.</param>
        /// <param name="showAddressElements">showAddressElements.</param>
        /// <param name="currencyDisplay">currencyDisplay.</param>
        /// <param name="forceDisplayImportantNotes">forceDisplayImportantNotes (required).</param>
        /// <param name="showShopperDetailsExpendedOnStart">showShopperDetailsExpendedOnStart (required).</param>
        /// <param name="showPaymentScheduleRequiredCredit">showPaymentScheduleRequiredCredit (required).</param>
        /// <param name="isShopperEmailMandatory">isShopperEmailMandatory (required).</param>
        /// <param name="isShopperPhoneMandatory">isShopperPhoneMandatory (required).</param>
        /// <param name="numberOfInstallmentsSelectionsOption">numberOfInstallmentsSelectionsOption.</param>
        /// <param name="addressIsReadonly">addressIsReadonly (required).</param>
        /// <param name="logoURL">logoURL.</param>
        /// <param name="paymentFormMessages">paymentFormMessages.</param>
        public PaymentWizardDataResponse(string requestedNumberOfInstallments = default(string), string successExitURL = default(string), string errorExitURL = default(string), string cancelExitURL = default(string), string successAsyncUrl = default(string), string viewName = default(string), bool? isOpenedInIframe = default(bool?), string paymentFormMessage = default(string), string showAddressElements = default(string), Currency currencyDisplay = default(Currency), bool? forceDisplayImportantNotes = default(bool?), bool? showShopperDetailsExpendedOnStart = default(bool?), bool? showPaymentScheduleRequiredCredit = default(bool?), bool? isShopperEmailMandatory = default(bool?), bool? isShopperPhoneMandatory = default(bool?), string numberOfInstallmentsSelectionsOption = default(string), bool? addressIsReadonly = default(bool?), string logoURL = default(string), List<string> paymentFormMessages = default(List<string>))
        {
            this.IsOpenedInIframe = isOpenedInIframe;
            this.ForceDisplayImportantNotes = forceDisplayImportantNotes;
            this.ShowShopperDetailsExpendedOnStart = showShopperDetailsExpendedOnStart;
            this.ShowPaymentScheduleRequiredCredit = showPaymentScheduleRequiredCredit;
            this.IsShopperEmailMandatory = isShopperEmailMandatory;
            this.IsShopperPhoneMandatory = isShopperPhoneMandatory;
            this.AddressIsReadonly = addressIsReadonly;
            this.RequestedNumberOfInstallments = requestedNumberOfInstallments;
            this.SuccessExitURL = successExitURL;
            this.ErrorExitURL = errorExitURL;
            this.CancelExitURL = cancelExitURL;
            this.SuccessAsyncUrl = successAsyncUrl;
            this.ViewName = viewName;
            this.PaymentFormMessage = paymentFormMessage;
            this.ShowAddressElements = showAddressElements;
            this.CurrencyDisplay = currencyDisplay;
            this.NumberOfInstallmentsSelectionsOption = numberOfInstallmentsSelectionsOption;
            this.LogoURL = logoURL;
            this.PaymentFormMessages = paymentFormMessages;
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
        /// Gets or Sets ShowAddressElements
        /// </summary>
        [DataMember(Name="ShowAddressElements", EmitDefaultValue=false)]
        public string ShowAddressElements { get; set; }

        /// <summary>
        /// Gets or Sets CurrencyDisplay
        /// </summary>
        [DataMember(Name="CurrencyDisplay", EmitDefaultValue=false)]
        public Currency CurrencyDisplay { get; set; }

        /// <summary>
        /// Gets or Sets ForceDisplayImportantNotes
        /// </summary>
        [DataMember(Name="ForceDisplayImportantNotes", EmitDefaultValue=false)]
        public bool? ForceDisplayImportantNotes { get; set; }

        /// <summary>
        /// Gets or Sets ShowShopperDetailsExpendedOnStart
        /// </summary>
        [DataMember(Name="ShowShopperDetailsExpendedOnStart", EmitDefaultValue=false)]
        public bool? ShowShopperDetailsExpendedOnStart { get; set; }

        /// <summary>
        /// Gets or Sets ShowPaymentScheduleRequiredCredit
        /// </summary>
        [DataMember(Name="ShowPaymentScheduleRequiredCredit", EmitDefaultValue=false)]
        public bool? ShowPaymentScheduleRequiredCredit { get; set; }

        /// <summary>
        /// Gets or Sets IsShopperEmailMandatory
        /// </summary>
        [DataMember(Name="IsShopperEmailMandatory", EmitDefaultValue=false)]
        public bool? IsShopperEmailMandatory { get; set; }

        /// <summary>
        /// Gets or Sets IsShopperPhoneMandatory
        /// </summary>
        [DataMember(Name="IsShopperPhoneMandatory", EmitDefaultValue=false)]
        public bool? IsShopperPhoneMandatory { get; set; }

        /// <summary>
        /// Gets or Sets NumberOfInstallmentsSelectionsOption
        /// </summary>
        [DataMember(Name="NumberOfInstallmentsSelectionsOption", EmitDefaultValue=false)]
        public string NumberOfInstallmentsSelectionsOption { get; set; }

        /// <summary>
        /// Gets or Sets AddressIsReadonly
        /// </summary>
        [DataMember(Name="AddressIsReadonly", EmitDefaultValue=false)]
        public bool? AddressIsReadonly { get; set; }

        /// <summary>
        /// Gets or Sets LogoURL
        /// </summary>
        [DataMember(Name="LogoURL", EmitDefaultValue=false)]
        public string LogoURL { get; set; }

        /// <summary>
        /// Gets or Sets PaymentFormMessages
        /// </summary>
        [DataMember(Name="PaymentFormMessages", EmitDefaultValue=false)]
        public List<string> PaymentFormMessages { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PaymentWizardDataResponse {\n");
            sb.Append("  RequestedNumberOfInstallments: ").Append(RequestedNumberOfInstallments).Append("\n");
            sb.Append("  SuccessExitURL: ").Append(SuccessExitURL).Append("\n");
            sb.Append("  ErrorExitURL: ").Append(ErrorExitURL).Append("\n");
            sb.Append("  CancelExitURL: ").Append(CancelExitURL).Append("\n");
            sb.Append("  SuccessAsyncUrl: ").Append(SuccessAsyncUrl).Append("\n");
            sb.Append("  ViewName: ").Append(ViewName).Append("\n");
            sb.Append("  IsOpenedInIframe: ").Append(IsOpenedInIframe).Append("\n");
            sb.Append("  PaymentFormMessage: ").Append(PaymentFormMessage).Append("\n");
            sb.Append("  ShowAddressElements: ").Append(ShowAddressElements).Append("\n");
            sb.Append("  CurrencyDisplay: ").Append(CurrencyDisplay).Append("\n");
            sb.Append("  ForceDisplayImportantNotes: ").Append(ForceDisplayImportantNotes).Append("\n");
            sb.Append("  ShowShopperDetailsExpendedOnStart: ").Append(ShowShopperDetailsExpendedOnStart).Append("\n");
            sb.Append("  ShowPaymentScheduleRequiredCredit: ").Append(ShowPaymentScheduleRequiredCredit).Append("\n");
            sb.Append("  IsShopperEmailMandatory: ").Append(IsShopperEmailMandatory).Append("\n");
            sb.Append("  IsShopperPhoneMandatory: ").Append(IsShopperPhoneMandatory).Append("\n");
            sb.Append("  NumberOfInstallmentsSelectionsOption: ").Append(NumberOfInstallmentsSelectionsOption).Append("\n");
            sb.Append("  AddressIsReadonly: ").Append(AddressIsReadonly).Append("\n");
            sb.Append("  LogoURL: ").Append(LogoURL).Append("\n");
            sb.Append("  PaymentFormMessages: ").Append(PaymentFormMessages).Append("\n");
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
            return this.Equals(input as PaymentWizardDataResponse);
        }

        /// <summary>
        /// Returns true if PaymentWizardDataResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of PaymentWizardDataResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PaymentWizardDataResponse input)
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
                ) && 
                (
                    this.ShowAddressElements == input.ShowAddressElements ||
                    (this.ShowAddressElements != null &&
                    this.ShowAddressElements.Equals(input.ShowAddressElements))
                ) && 
                (
                    this.CurrencyDisplay == input.CurrencyDisplay ||
                    (this.CurrencyDisplay != null &&
                    this.CurrencyDisplay.Equals(input.CurrencyDisplay))
                ) && 
                (
                    this.ForceDisplayImportantNotes == input.ForceDisplayImportantNotes ||
                    (this.ForceDisplayImportantNotes != null &&
                    this.ForceDisplayImportantNotes.Equals(input.ForceDisplayImportantNotes))
                ) && 
                (
                    this.ShowShopperDetailsExpendedOnStart == input.ShowShopperDetailsExpendedOnStart ||
                    (this.ShowShopperDetailsExpendedOnStart != null &&
                    this.ShowShopperDetailsExpendedOnStart.Equals(input.ShowShopperDetailsExpendedOnStart))
                ) && 
                (
                    this.ShowPaymentScheduleRequiredCredit == input.ShowPaymentScheduleRequiredCredit ||
                    (this.ShowPaymentScheduleRequiredCredit != null &&
                    this.ShowPaymentScheduleRequiredCredit.Equals(input.ShowPaymentScheduleRequiredCredit))
                ) && 
                (
                    this.IsShopperEmailMandatory == input.IsShopperEmailMandatory ||
                    (this.IsShopperEmailMandatory != null &&
                    this.IsShopperEmailMandatory.Equals(input.IsShopperEmailMandatory))
                ) && 
                (
                    this.IsShopperPhoneMandatory == input.IsShopperPhoneMandatory ||
                    (this.IsShopperPhoneMandatory != null &&
                    this.IsShopperPhoneMandatory.Equals(input.IsShopperPhoneMandatory))
                ) && 
                (
                    this.NumberOfInstallmentsSelectionsOption == input.NumberOfInstallmentsSelectionsOption ||
                    (this.NumberOfInstallmentsSelectionsOption != null &&
                    this.NumberOfInstallmentsSelectionsOption.Equals(input.NumberOfInstallmentsSelectionsOption))
                ) && 
                (
                    this.AddressIsReadonly == input.AddressIsReadonly ||
                    (this.AddressIsReadonly != null &&
                    this.AddressIsReadonly.Equals(input.AddressIsReadonly))
                ) && 
                (
                    this.LogoURL == input.LogoURL ||
                    (this.LogoURL != null &&
                    this.LogoURL.Equals(input.LogoURL))
                ) && 
                (
                    this.PaymentFormMessages == input.PaymentFormMessages ||
                    this.PaymentFormMessages != null &&
                    this.PaymentFormMessages.SequenceEqual(input.PaymentFormMessages)
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
                if (this.ShowAddressElements != null)
                    hashCode = hashCode * 59 + this.ShowAddressElements.GetHashCode();
                if (this.CurrencyDisplay != null)
                    hashCode = hashCode * 59 + this.CurrencyDisplay.GetHashCode();
                if (this.ForceDisplayImportantNotes != null)
                    hashCode = hashCode * 59 + this.ForceDisplayImportantNotes.GetHashCode();
                if (this.ShowShopperDetailsExpendedOnStart != null)
                    hashCode = hashCode * 59 + this.ShowShopperDetailsExpendedOnStart.GetHashCode();
                if (this.ShowPaymentScheduleRequiredCredit != null)
                    hashCode = hashCode * 59 + this.ShowPaymentScheduleRequiredCredit.GetHashCode();
                if (this.IsShopperEmailMandatory != null)
                    hashCode = hashCode * 59 + this.IsShopperEmailMandatory.GetHashCode();
                if (this.IsShopperPhoneMandatory != null)
                    hashCode = hashCode * 59 + this.IsShopperPhoneMandatory.GetHashCode();
                if (this.NumberOfInstallmentsSelectionsOption != null)
                    hashCode = hashCode * 59 + this.NumberOfInstallmentsSelectionsOption.GetHashCode();
                if (this.AddressIsReadonly != null)
                    hashCode = hashCode * 59 + this.AddressIsReadonly.GetHashCode();
                if (this.LogoURL != null)
                    hashCode = hashCode * 59 + this.LogoURL.GetHashCode();
                if (this.PaymentFormMessages != null)
                    hashCode = hashCode * 59 + this.PaymentFormMessages.GetHashCode();
                return hashCode;
            }
        }
    }

}
