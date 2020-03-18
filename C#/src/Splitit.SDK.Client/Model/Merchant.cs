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
    /// Merchant
    /// </summary>
    [DataContract]
    public partial class Merchant :  IEquatable<Merchant>
    {
        /// <summary>
        /// Gets or Sets Vertical
        /// </summary>
        [DataMember(Name="Vertical", EmitDefaultValue=false)]
        public MerchantVertical Vertical { get; set; }
        /// <summary>
        /// Gets or Sets SplititCurrentEntity
        /// </summary>
        [DataMember(Name="SplititCurrentEntity", EmitDefaultValue=false)]
        public SplititEntity SplititCurrentEntity { get; set; }
        /// <summary>
        /// Gets or Sets SplititSigningEntity
        /// </summary>
        [DataMember(Name="SplititSigningEntity", EmitDefaultValue=false)]
        public SplititEntity SplititSigningEntity { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Merchant" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Merchant() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Merchant" /> class.
        /// </summary>
        /// <param name="id">id (required).</param>
        /// <param name="name">name.</param>
        /// <param name="address">address.</param>
        /// <param name="splititMerchantId">splititMerchantId.</param>
        /// <param name="crmId">crmId.</param>
        /// <param name="businessLegalName">businessLegalName.</param>
        /// <param name="businessDBAName">businessDBAName.</param>
        /// <param name="businessUnitId">businessUnitId (required).</param>
        /// <param name="onBoardingStatus">onBoardingStatus (required).</param>
        /// <param name="vertical">vertical (required).</param>
        /// <param name="email">email.</param>
        /// <param name="websiteUrl">websiteUrl.</param>
        /// <param name="logoImageFileContent">logoImageFileContent.</param>
        /// <param name="logoImageFileExt">logoImageFileExt.</param>
        /// <param name="logoImageUrl">logoImageUrl.</param>
        /// <param name="createdDateTime">createdDateTime (required).</param>
        /// <param name="transactionCurrencies">transactionCurrencies.</param>
        /// <param name="accountCurrencies">accountCurrencies.</param>
        /// <param name="accountCurrencyIsTransactionCurrencies">accountCurrencyIsTransactionCurrencies (required).</param>
        /// <param name="billingAddress">billingAddress.</param>
        /// <param name="vatTaxId">vatTaxId.</param>
        /// <param name="registeredCountryOfBusinessId">registeredCountryOfBusinessId.</param>
        /// <param name="registeredCountryOfBusinessCode">registeredCountryOfBusinessCode.</param>
        /// <param name="registeredStateOfBusinessId">registeredStateOfBusinessId.</param>
        /// <param name="registeredStateOfBusinessCode">registeredStateOfBusinessCode.</param>
        /// <param name="merchantCountryId">merchantCountryId.</param>
        /// <param name="merchantCountryCode">merchantCountryCode.</param>
        /// <param name="merchantStateId">merchantStateId.</param>
        /// <param name="merchantStateCode">merchantStateCode.</param>
        /// <param name="bankDetails">bankDetails.</param>
        /// <param name="salesAssociate">salesAssociate.</param>
        /// <param name="partner">partner.</param>
        /// <param name="splititCurrentEntity">splititCurrentEntity (required).</param>
        /// <param name="splititSigningEntity">splititSigningEntity (required).</param>
        /// <param name="businessContact">businessContact.</param>
        /// <param name="technicalContact">technicalContact.</param>
        /// <param name="financialContact">financialContact.</param>
        public Merchant(long? id = default(long?), string name = default(string), string address = default(string), string splititMerchantId = default(string), string crmId = default(string), string businessLegalName = default(string), string businessDBAName = default(string), long? businessUnitId = default(long?), int? onBoardingStatus = default(int?), MerchantVertical vertical = default(MerchantVertical), string email = default(string), string websiteUrl = default(string), byte[] logoImageFileContent = default(byte[]), string logoImageFileExt = default(string), string logoImageUrl = default(string), DateTime? createdDateTime = default(DateTime?), List<Currency> transactionCurrencies = default(List<Currency>), List<Currency> accountCurrencies = default(List<Currency>), bool? accountCurrencyIsTransactionCurrencies = default(bool?), AddressData billingAddress = default(AddressData), string vatTaxId = default(string), string registeredCountryOfBusinessId = default(string), string registeredCountryOfBusinessCode = default(string), string registeredStateOfBusinessId = default(string), string registeredStateOfBusinessCode = default(string), string merchantCountryId = default(string), string merchantCountryCode = default(string), string merchantStateId = default(string), string merchantStateCode = default(string), BankDetails bankDetails = default(BankDetails), SalesAssociate salesAssociate = default(SalesAssociate), Agent partner = default(Agent), SplititEntity splititCurrentEntity = default(SplititEntity), SplititEntity splititSigningEntity = default(SplititEntity), ContactPerson businessContact = default(ContactPerson), ContactPerson technicalContact = default(ContactPerson), ContactPerson financialContact = default(ContactPerson))
        {
            this.Id = id;
            this.BusinessUnitId = businessUnitId;
            this.OnBoardingStatus = onBoardingStatus;
            this.Vertical = vertical;
            this.CreatedDateTime = createdDateTime;
            this.AccountCurrencyIsTransactionCurrencies = accountCurrencyIsTransactionCurrencies;
            this.SplititCurrentEntity = splititCurrentEntity;
            this.SplititSigningEntity = splititSigningEntity;
            this.Name = name;
            this.Address = address;
            this.SplititMerchantId = splititMerchantId;
            this.CrmId = crmId;
            this.BusinessLegalName = businessLegalName;
            this.BusinessDBAName = businessDBAName;
            this.Email = email;
            this.WebsiteUrl = websiteUrl;
            this.LogoImageFileContent = logoImageFileContent;
            this.LogoImageFileExt = logoImageFileExt;
            this.LogoImageUrl = logoImageUrl;
            this.TransactionCurrencies = transactionCurrencies;
            this.AccountCurrencies = accountCurrencies;
            this.BillingAddress = billingAddress;
            this.VatTaxId = vatTaxId;
            this.RegisteredCountryOfBusinessId = registeredCountryOfBusinessId;
            this.RegisteredCountryOfBusinessCode = registeredCountryOfBusinessCode;
            this.RegisteredStateOfBusinessId = registeredStateOfBusinessId;
            this.RegisteredStateOfBusinessCode = registeredStateOfBusinessCode;
            this.MerchantCountryId = merchantCountryId;
            this.MerchantCountryCode = merchantCountryCode;
            this.MerchantStateId = merchantStateId;
            this.MerchantStateCode = merchantStateCode;
            this.BankDetails = bankDetails;
            this.SalesAssociate = salesAssociate;
            this.Partner = partner;
            this.BusinessContact = businessContact;
            this.TechnicalContact = technicalContact;
            this.FinancialContact = financialContact;
        }

        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="Id", EmitDefaultValue=false)]
        public long? Id { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="Name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Address
        /// </summary>
        [DataMember(Name="Address", EmitDefaultValue=false)]
        public string Address { get; set; }

        /// <summary>
        /// Gets or Sets SplititMerchantId
        /// </summary>
        [DataMember(Name="SplititMerchantId", EmitDefaultValue=false)]
        public string SplititMerchantId { get; set; }

        /// <summary>
        /// Gets or Sets CrmId
        /// </summary>
        [DataMember(Name="CrmId", EmitDefaultValue=false)]
        public string CrmId { get; set; }

        /// <summary>
        /// Gets or Sets BusinessLegalName
        /// </summary>
        [DataMember(Name="BusinessLegalName", EmitDefaultValue=false)]
        public string BusinessLegalName { get; set; }

        /// <summary>
        /// Gets or Sets BusinessDBAName
        /// </summary>
        [DataMember(Name="BusinessDBAName", EmitDefaultValue=false)]
        public string BusinessDBAName { get; set; }

        /// <summary>
        /// Gets or Sets BusinessUnitId
        /// </summary>
        [DataMember(Name="BusinessUnitId", EmitDefaultValue=false)]
        public long? BusinessUnitId { get; set; }

        /// <summary>
        /// Gets or Sets OnBoardingStatus
        /// </summary>
        [DataMember(Name="OnBoardingStatus", EmitDefaultValue=false)]
        public int? OnBoardingStatus { get; set; }


        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name="Email", EmitDefaultValue=false)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets WebsiteUrl
        /// </summary>
        [DataMember(Name="WebsiteUrl", EmitDefaultValue=false)]
        public string WebsiteUrl { get; set; }

        /// <summary>
        /// Gets or Sets LogoImageFileContent
        /// </summary>
        [DataMember(Name="LogoImageFileContent", EmitDefaultValue=false)]
        public byte[] LogoImageFileContent { get; set; }

        /// <summary>
        /// Gets or Sets LogoImageFileExt
        /// </summary>
        [DataMember(Name="LogoImageFileExt", EmitDefaultValue=false)]
        public string LogoImageFileExt { get; set; }

        /// <summary>
        /// Gets or Sets LogoImageUrl
        /// </summary>
        [DataMember(Name="LogoImageUrl", EmitDefaultValue=false)]
        public string LogoImageUrl { get; set; }

        /// <summary>
        /// Gets or Sets CreatedDateTime
        /// </summary>
        [DataMember(Name="CreatedDateTime", EmitDefaultValue=false)]
        public DateTime? CreatedDateTime { get; set; }

        /// <summary>
        /// Gets or Sets TransactionCurrencies
        /// </summary>
        [DataMember(Name="TransactionCurrencies", EmitDefaultValue=false)]
        public List<Currency> TransactionCurrencies { get; set; }

        /// <summary>
        /// Gets or Sets AccountCurrencies
        /// </summary>
        [DataMember(Name="AccountCurrencies", EmitDefaultValue=false)]
        public List<Currency> AccountCurrencies { get; set; }

        /// <summary>
        /// Gets or Sets AccountCurrencyIsTransactionCurrencies
        /// </summary>
        [DataMember(Name="AccountCurrencyIsTransactionCurrencies", EmitDefaultValue=false)]
        public bool? AccountCurrencyIsTransactionCurrencies { get; set; }

        /// <summary>
        /// Gets or Sets BillingAddress
        /// </summary>
        [DataMember(Name="BillingAddress", EmitDefaultValue=false)]
        public AddressData BillingAddress { get; set; }

        /// <summary>
        /// Gets or Sets VatTaxId
        /// </summary>
        [DataMember(Name="VatTaxId", EmitDefaultValue=false)]
        public string VatTaxId { get; set; }

        /// <summary>
        /// Gets or Sets RegisteredCountryOfBusinessId
        /// </summary>
        [DataMember(Name="RegisteredCountryOfBusinessId", EmitDefaultValue=false)]
        public string RegisteredCountryOfBusinessId { get; set; }

        /// <summary>
        /// Gets or Sets RegisteredCountryOfBusinessCode
        /// </summary>
        [DataMember(Name="RegisteredCountryOfBusinessCode", EmitDefaultValue=false)]
        public string RegisteredCountryOfBusinessCode { get; set; }

        /// <summary>
        /// Gets or Sets RegisteredStateOfBusinessId
        /// </summary>
        [DataMember(Name="RegisteredStateOfBusinessId", EmitDefaultValue=false)]
        public string RegisteredStateOfBusinessId { get; set; }

        /// <summary>
        /// Gets or Sets RegisteredStateOfBusinessCode
        /// </summary>
        [DataMember(Name="RegisteredStateOfBusinessCode", EmitDefaultValue=false)]
        public string RegisteredStateOfBusinessCode { get; set; }

        /// <summary>
        /// Gets or Sets MerchantCountryId
        /// </summary>
        [DataMember(Name="MerchantCountryId", EmitDefaultValue=false)]
        public string MerchantCountryId { get; set; }

        /// <summary>
        /// Gets or Sets MerchantCountryCode
        /// </summary>
        [DataMember(Name="MerchantCountryCode", EmitDefaultValue=false)]
        public string MerchantCountryCode { get; set; }

        /// <summary>
        /// Gets or Sets MerchantStateId
        /// </summary>
        [DataMember(Name="MerchantStateId", EmitDefaultValue=false)]
        public string MerchantStateId { get; set; }

        /// <summary>
        /// Gets or Sets MerchantStateCode
        /// </summary>
        [DataMember(Name="MerchantStateCode", EmitDefaultValue=false)]
        public string MerchantStateCode { get; set; }

        /// <summary>
        /// Gets or Sets BankDetails
        /// </summary>
        [DataMember(Name="BankDetails", EmitDefaultValue=false)]
        public BankDetails BankDetails { get; set; }

        /// <summary>
        /// Gets or Sets SalesAssociate
        /// </summary>
        [DataMember(Name="SalesAssociate", EmitDefaultValue=false)]
        public SalesAssociate SalesAssociate { get; set; }

        /// <summary>
        /// Gets or Sets Partner
        /// </summary>
        [DataMember(Name="Partner", EmitDefaultValue=false)]
        public Agent Partner { get; set; }



        /// <summary>
        /// Gets or Sets BusinessContact
        /// </summary>
        [DataMember(Name="BusinessContact", EmitDefaultValue=false)]
        public ContactPerson BusinessContact { get; set; }

        /// <summary>
        /// Gets or Sets TechnicalContact
        /// </summary>
        [DataMember(Name="TechnicalContact", EmitDefaultValue=false)]
        public ContactPerson TechnicalContact { get; set; }

        /// <summary>
        /// Gets or Sets FinancialContact
        /// </summary>
        [DataMember(Name="FinancialContact", EmitDefaultValue=false)]
        public ContactPerson FinancialContact { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Merchant {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Address: ").Append(Address).Append("\n");
            sb.Append("  SplititMerchantId: ").Append(SplititMerchantId).Append("\n");
            sb.Append("  CrmId: ").Append(CrmId).Append("\n");
            sb.Append("  BusinessLegalName: ").Append(BusinessLegalName).Append("\n");
            sb.Append("  BusinessDBAName: ").Append(BusinessDBAName).Append("\n");
            sb.Append("  BusinessUnitId: ").Append(BusinessUnitId).Append("\n");
            sb.Append("  OnBoardingStatus: ").Append(OnBoardingStatus).Append("\n");
            sb.Append("  Vertical: ").Append(Vertical).Append("\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  WebsiteUrl: ").Append(WebsiteUrl).Append("\n");
            sb.Append("  LogoImageFileContent: ").Append(LogoImageFileContent).Append("\n");
            sb.Append("  LogoImageFileExt: ").Append(LogoImageFileExt).Append("\n");
            sb.Append("  LogoImageUrl: ").Append(LogoImageUrl).Append("\n");
            sb.Append("  CreatedDateTime: ").Append(CreatedDateTime).Append("\n");
            sb.Append("  TransactionCurrencies: ").Append(TransactionCurrencies).Append("\n");
            sb.Append("  AccountCurrencies: ").Append(AccountCurrencies).Append("\n");
            sb.Append("  AccountCurrencyIsTransactionCurrencies: ").Append(AccountCurrencyIsTransactionCurrencies).Append("\n");
            sb.Append("  BillingAddress: ").Append(BillingAddress).Append("\n");
            sb.Append("  VatTaxId: ").Append(VatTaxId).Append("\n");
            sb.Append("  RegisteredCountryOfBusinessId: ").Append(RegisteredCountryOfBusinessId).Append("\n");
            sb.Append("  RegisteredCountryOfBusinessCode: ").Append(RegisteredCountryOfBusinessCode).Append("\n");
            sb.Append("  RegisteredStateOfBusinessId: ").Append(RegisteredStateOfBusinessId).Append("\n");
            sb.Append("  RegisteredStateOfBusinessCode: ").Append(RegisteredStateOfBusinessCode).Append("\n");
            sb.Append("  MerchantCountryId: ").Append(MerchantCountryId).Append("\n");
            sb.Append("  MerchantCountryCode: ").Append(MerchantCountryCode).Append("\n");
            sb.Append("  MerchantStateId: ").Append(MerchantStateId).Append("\n");
            sb.Append("  MerchantStateCode: ").Append(MerchantStateCode).Append("\n");
            sb.Append("  BankDetails: ").Append(BankDetails).Append("\n");
            sb.Append("  SalesAssociate: ").Append(SalesAssociate).Append("\n");
            sb.Append("  Partner: ").Append(Partner).Append("\n");
            sb.Append("  SplititCurrentEntity: ").Append(SplititCurrentEntity).Append("\n");
            sb.Append("  SplititSigningEntity: ").Append(SplititSigningEntity).Append("\n");
            sb.Append("  BusinessContact: ").Append(BusinessContact).Append("\n");
            sb.Append("  TechnicalContact: ").Append(TechnicalContact).Append("\n");
            sb.Append("  FinancialContact: ").Append(FinancialContact).Append("\n");
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
            return this.Equals(input as Merchant);
        }

        /// <summary>
        /// Returns true if Merchant instances are equal
        /// </summary>
        /// <param name="input">Instance of Merchant to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Merchant input)
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
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Address == input.Address ||
                    (this.Address != null &&
                    this.Address.Equals(input.Address))
                ) && 
                (
                    this.SplititMerchantId == input.SplititMerchantId ||
                    (this.SplititMerchantId != null &&
                    this.SplititMerchantId.Equals(input.SplititMerchantId))
                ) && 
                (
                    this.CrmId == input.CrmId ||
                    (this.CrmId != null &&
                    this.CrmId.Equals(input.CrmId))
                ) && 
                (
                    this.BusinessLegalName == input.BusinessLegalName ||
                    (this.BusinessLegalName != null &&
                    this.BusinessLegalName.Equals(input.BusinessLegalName))
                ) && 
                (
                    this.BusinessDBAName == input.BusinessDBAName ||
                    (this.BusinessDBAName != null &&
                    this.BusinessDBAName.Equals(input.BusinessDBAName))
                ) && 
                (
                    this.BusinessUnitId == input.BusinessUnitId ||
                    (this.BusinessUnitId != null &&
                    this.BusinessUnitId.Equals(input.BusinessUnitId))
                ) && 
                (
                    this.OnBoardingStatus == input.OnBoardingStatus ||
                    (this.OnBoardingStatus != null &&
                    this.OnBoardingStatus.Equals(input.OnBoardingStatus))
                ) && 
                (
                    this.Vertical == input.Vertical ||
                    (this.Vertical != null &&
                    this.Vertical.Equals(input.Vertical))
                ) && 
                (
                    this.Email == input.Email ||
                    (this.Email != null &&
                    this.Email.Equals(input.Email))
                ) && 
                (
                    this.WebsiteUrl == input.WebsiteUrl ||
                    (this.WebsiteUrl != null &&
                    this.WebsiteUrl.Equals(input.WebsiteUrl))
                ) && 
                (
                    this.LogoImageFileContent == input.LogoImageFileContent ||
                    (this.LogoImageFileContent != null &&
                    this.LogoImageFileContent.Equals(input.LogoImageFileContent))
                ) && 
                (
                    this.LogoImageFileExt == input.LogoImageFileExt ||
                    (this.LogoImageFileExt != null &&
                    this.LogoImageFileExt.Equals(input.LogoImageFileExt))
                ) && 
                (
                    this.LogoImageUrl == input.LogoImageUrl ||
                    (this.LogoImageUrl != null &&
                    this.LogoImageUrl.Equals(input.LogoImageUrl))
                ) && 
                (
                    this.CreatedDateTime == input.CreatedDateTime ||
                    (this.CreatedDateTime != null &&
                    this.CreatedDateTime.Equals(input.CreatedDateTime))
                ) && 
                (
                    this.TransactionCurrencies == input.TransactionCurrencies ||
                    this.TransactionCurrencies != null &&
                    this.TransactionCurrencies.SequenceEqual(input.TransactionCurrencies)
                ) && 
                (
                    this.AccountCurrencies == input.AccountCurrencies ||
                    this.AccountCurrencies != null &&
                    this.AccountCurrencies.SequenceEqual(input.AccountCurrencies)
                ) && 
                (
                    this.AccountCurrencyIsTransactionCurrencies == input.AccountCurrencyIsTransactionCurrencies ||
                    (this.AccountCurrencyIsTransactionCurrencies != null &&
                    this.AccountCurrencyIsTransactionCurrencies.Equals(input.AccountCurrencyIsTransactionCurrencies))
                ) && 
                (
                    this.BillingAddress == input.BillingAddress ||
                    (this.BillingAddress != null &&
                    this.BillingAddress.Equals(input.BillingAddress))
                ) && 
                (
                    this.VatTaxId == input.VatTaxId ||
                    (this.VatTaxId != null &&
                    this.VatTaxId.Equals(input.VatTaxId))
                ) && 
                (
                    this.RegisteredCountryOfBusinessId == input.RegisteredCountryOfBusinessId ||
                    (this.RegisteredCountryOfBusinessId != null &&
                    this.RegisteredCountryOfBusinessId.Equals(input.RegisteredCountryOfBusinessId))
                ) && 
                (
                    this.RegisteredCountryOfBusinessCode == input.RegisteredCountryOfBusinessCode ||
                    (this.RegisteredCountryOfBusinessCode != null &&
                    this.RegisteredCountryOfBusinessCode.Equals(input.RegisteredCountryOfBusinessCode))
                ) && 
                (
                    this.RegisteredStateOfBusinessId == input.RegisteredStateOfBusinessId ||
                    (this.RegisteredStateOfBusinessId != null &&
                    this.RegisteredStateOfBusinessId.Equals(input.RegisteredStateOfBusinessId))
                ) && 
                (
                    this.RegisteredStateOfBusinessCode == input.RegisteredStateOfBusinessCode ||
                    (this.RegisteredStateOfBusinessCode != null &&
                    this.RegisteredStateOfBusinessCode.Equals(input.RegisteredStateOfBusinessCode))
                ) && 
                (
                    this.MerchantCountryId == input.MerchantCountryId ||
                    (this.MerchantCountryId != null &&
                    this.MerchantCountryId.Equals(input.MerchantCountryId))
                ) && 
                (
                    this.MerchantCountryCode == input.MerchantCountryCode ||
                    (this.MerchantCountryCode != null &&
                    this.MerchantCountryCode.Equals(input.MerchantCountryCode))
                ) && 
                (
                    this.MerchantStateId == input.MerchantStateId ||
                    (this.MerchantStateId != null &&
                    this.MerchantStateId.Equals(input.MerchantStateId))
                ) && 
                (
                    this.MerchantStateCode == input.MerchantStateCode ||
                    (this.MerchantStateCode != null &&
                    this.MerchantStateCode.Equals(input.MerchantStateCode))
                ) && 
                (
                    this.BankDetails == input.BankDetails ||
                    (this.BankDetails != null &&
                    this.BankDetails.Equals(input.BankDetails))
                ) && 
                (
                    this.SalesAssociate == input.SalesAssociate ||
                    (this.SalesAssociate != null &&
                    this.SalesAssociate.Equals(input.SalesAssociate))
                ) && 
                (
                    this.Partner == input.Partner ||
                    (this.Partner != null &&
                    this.Partner.Equals(input.Partner))
                ) && 
                (
                    this.SplititCurrentEntity == input.SplititCurrentEntity ||
                    (this.SplititCurrentEntity != null &&
                    this.SplititCurrentEntity.Equals(input.SplititCurrentEntity))
                ) && 
                (
                    this.SplititSigningEntity == input.SplititSigningEntity ||
                    (this.SplititSigningEntity != null &&
                    this.SplititSigningEntity.Equals(input.SplititSigningEntity))
                ) && 
                (
                    this.BusinessContact == input.BusinessContact ||
                    (this.BusinessContact != null &&
                    this.BusinessContact.Equals(input.BusinessContact))
                ) && 
                (
                    this.TechnicalContact == input.TechnicalContact ||
                    (this.TechnicalContact != null &&
                    this.TechnicalContact.Equals(input.TechnicalContact))
                ) && 
                (
                    this.FinancialContact == input.FinancialContact ||
                    (this.FinancialContact != null &&
                    this.FinancialContact.Equals(input.FinancialContact))
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Address != null)
                    hashCode = hashCode * 59 + this.Address.GetHashCode();
                if (this.SplititMerchantId != null)
                    hashCode = hashCode * 59 + this.SplititMerchantId.GetHashCode();
                if (this.CrmId != null)
                    hashCode = hashCode * 59 + this.CrmId.GetHashCode();
                if (this.BusinessLegalName != null)
                    hashCode = hashCode * 59 + this.BusinessLegalName.GetHashCode();
                if (this.BusinessDBAName != null)
                    hashCode = hashCode * 59 + this.BusinessDBAName.GetHashCode();
                if (this.BusinessUnitId != null)
                    hashCode = hashCode * 59 + this.BusinessUnitId.GetHashCode();
                if (this.OnBoardingStatus != null)
                    hashCode = hashCode * 59 + this.OnBoardingStatus.GetHashCode();
                if (this.Vertical != null)
                    hashCode = hashCode * 59 + this.Vertical.GetHashCode();
                if (this.Email != null)
                    hashCode = hashCode * 59 + this.Email.GetHashCode();
                if (this.WebsiteUrl != null)
                    hashCode = hashCode * 59 + this.WebsiteUrl.GetHashCode();
                if (this.LogoImageFileContent != null)
                    hashCode = hashCode * 59 + this.LogoImageFileContent.GetHashCode();
                if (this.LogoImageFileExt != null)
                    hashCode = hashCode * 59 + this.LogoImageFileExt.GetHashCode();
                if (this.LogoImageUrl != null)
                    hashCode = hashCode * 59 + this.LogoImageUrl.GetHashCode();
                if (this.CreatedDateTime != null)
                    hashCode = hashCode * 59 + this.CreatedDateTime.GetHashCode();
                if (this.TransactionCurrencies != null)
                    hashCode = hashCode * 59 + this.TransactionCurrencies.GetHashCode();
                if (this.AccountCurrencies != null)
                    hashCode = hashCode * 59 + this.AccountCurrencies.GetHashCode();
                if (this.AccountCurrencyIsTransactionCurrencies != null)
                    hashCode = hashCode * 59 + this.AccountCurrencyIsTransactionCurrencies.GetHashCode();
                if (this.BillingAddress != null)
                    hashCode = hashCode * 59 + this.BillingAddress.GetHashCode();
                if (this.VatTaxId != null)
                    hashCode = hashCode * 59 + this.VatTaxId.GetHashCode();
                if (this.RegisteredCountryOfBusinessId != null)
                    hashCode = hashCode * 59 + this.RegisteredCountryOfBusinessId.GetHashCode();
                if (this.RegisteredCountryOfBusinessCode != null)
                    hashCode = hashCode * 59 + this.RegisteredCountryOfBusinessCode.GetHashCode();
                if (this.RegisteredStateOfBusinessId != null)
                    hashCode = hashCode * 59 + this.RegisteredStateOfBusinessId.GetHashCode();
                if (this.RegisteredStateOfBusinessCode != null)
                    hashCode = hashCode * 59 + this.RegisteredStateOfBusinessCode.GetHashCode();
                if (this.MerchantCountryId != null)
                    hashCode = hashCode * 59 + this.MerchantCountryId.GetHashCode();
                if (this.MerchantCountryCode != null)
                    hashCode = hashCode * 59 + this.MerchantCountryCode.GetHashCode();
                if (this.MerchantStateId != null)
                    hashCode = hashCode * 59 + this.MerchantStateId.GetHashCode();
                if (this.MerchantStateCode != null)
                    hashCode = hashCode * 59 + this.MerchantStateCode.GetHashCode();
                if (this.BankDetails != null)
                    hashCode = hashCode * 59 + this.BankDetails.GetHashCode();
                if (this.SalesAssociate != null)
                    hashCode = hashCode * 59 + this.SalesAssociate.GetHashCode();
                if (this.Partner != null)
                    hashCode = hashCode * 59 + this.Partner.GetHashCode();
                if (this.SplititCurrentEntity != null)
                    hashCode = hashCode * 59 + this.SplititCurrentEntity.GetHashCode();
                if (this.SplititSigningEntity != null)
                    hashCode = hashCode * 59 + this.SplititSigningEntity.GetHashCode();
                if (this.BusinessContact != null)
                    hashCode = hashCode * 59 + this.BusinessContact.GetHashCode();
                if (this.TechnicalContact != null)
                    hashCode = hashCode * 59 + this.TechnicalContact.GetHashCode();
                if (this.FinancialContact != null)
                    hashCode = hashCode * 59 + this.FinancialContact.GetHashCode();
                return hashCode;
            }
        }
    }

}
