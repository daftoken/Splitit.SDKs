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
    /// UserWithActionItem
    /// </summary>
    [DataContract]
    public partial class UserWithActionItem :  IEquatable<UserWithActionItem>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserWithActionItem" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UserWithActionItem() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UserWithActionItem" /> class.
        /// </summary>
        /// <param name="id">id (required).</param>
        /// <param name="culture">culture.</param>
        /// <param name="userFullName">userFullName.</param>
        /// <param name="phoneNumber">phoneNumber.</param>
        /// <param name="role">role.</param>
        /// <param name="userName">userName.</param>
        /// <param name="uniqueId">uniqueId.</param>
        /// <param name="loginAttempt">loginAttempt (required).</param>
        /// <param name="maxInvalidLoginAttempts">maxInvalidLoginAttempts (required).</param>
        /// <param name="status">status (required).</param>
        /// <param name="isLocked">isLocked (required).</param>
        /// <param name="email">email.</param>
        /// <param name="cultureName">cultureName.</param>
        /// <param name="roleId">roleId (required).</param>
        /// <param name="loginUserName">loginUserName.</param>
        /// <param name="lastTimeLogin">lastTimeLogin (required).</param>
        /// <param name="isDataPrivateRestricted">isDataPrivateRestricted (required).</param>
        /// <param name="firstName">firstName.</param>
        /// <param name="lastName">lastName.</param>
        /// <param name="jobTitle">jobTitle.</param>
        /// <param name="faxNumber">faxNumber.</param>
        /// <param name="mobileNumber">mobileNumber.</param>
        /// <param name="workPhoneNumber">workPhoneNumber.</param>
        /// <param name="notes">notes.</param>
        /// <param name="type">type (required).</param>
        public UserWithActionItem(long? id = default(long?), string culture = default(string), string userFullName = default(string), string phoneNumber = default(string), Roles role = default(Roles), string userName = default(string), string uniqueId = default(string), int? loginAttempt = default(int?), int? maxInvalidLoginAttempts = default(int?), UserStatus status = default(UserStatus), bool? isLocked = default(bool?), string email = default(string), string cultureName = default(string), long? roleId = default(long?), string loginUserName = default(string), DateTime? lastTimeLogin = default(DateTime?), bool? isDataPrivateRestricted = default(bool?), string firstName = default(string), string lastName = default(string), string jobTitle = default(string), string faxNumber = default(string), string mobileNumber = default(string), string workPhoneNumber = default(string), string notes = default(string), UserPermissionLevel type = default(UserPermissionLevel))
        {
            this.Id = id;
            this.LoginAttempt = loginAttempt;
            this.MaxInvalidLoginAttempts = maxInvalidLoginAttempts;
            this.Status = status;
            this.IsLocked = isLocked;
            this.RoleId = roleId;
            this.LastTimeLogin = lastTimeLogin;
            this.IsDataPrivateRestricted = isDataPrivateRestricted;
            this.Type = type;
            this.Culture = culture;
            this.UserFullName = userFullName;
            this.PhoneNumber = phoneNumber;
            this.Role = role;
            this.UserName = userName;
            this.UniqueId = uniqueId;
            this.Email = email;
            this.CultureName = cultureName;
            this.LoginUserName = loginUserName;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.JobTitle = jobTitle;
            this.FaxNumber = faxNumber;
            this.MobileNumber = mobileNumber;
            this.WorkPhoneNumber = workPhoneNumber;
            this.Notes = notes;
        }

        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="Id", EmitDefaultValue=false)]
        public long? Id { get; set; }

        /// <summary>
        /// Gets or Sets Culture
        /// </summary>
        [DataMember(Name="Culture", EmitDefaultValue=false)]
        public string Culture { get; set; }

        /// <summary>
        /// Gets or Sets UserFullName
        /// </summary>
        [DataMember(Name="UserFullName", EmitDefaultValue=false)]
        public string UserFullName { get; set; }

        /// <summary>
        /// Gets or Sets PhoneNumber
        /// </summary>
        [DataMember(Name="PhoneNumber", EmitDefaultValue=false)]
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Gets or Sets Role
        /// </summary>
        [DataMember(Name="Role", EmitDefaultValue=false)]
        public Roles Role { get; set; }

        /// <summary>
        /// Gets or Sets UserName
        /// </summary>
        [DataMember(Name="UserName", EmitDefaultValue=false)]
        public string UserName { get; set; }

        /// <summary>
        /// Gets or Sets UniqueId
        /// </summary>
        [DataMember(Name="UniqueId", EmitDefaultValue=false)]
        public string UniqueId { get; set; }

        /// <summary>
        /// Gets or Sets LoginAttempt
        /// </summary>
        [DataMember(Name="LoginAttempt", EmitDefaultValue=false)]
        public int? LoginAttempt { get; set; }

        /// <summary>
        /// Gets or Sets MaxInvalidLoginAttempts
        /// </summary>
        [DataMember(Name="MaxInvalidLoginAttempts", EmitDefaultValue=false)]
        public int? MaxInvalidLoginAttempts { get; set; }

        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name="Status", EmitDefaultValue=false)]
        public UserStatus Status { get; set; }

        /// <summary>
        /// Gets or Sets IsLocked
        /// </summary>
        [DataMember(Name="IsLocked", EmitDefaultValue=false)]
        public bool? IsLocked { get; set; }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name="Email", EmitDefaultValue=false)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets CultureName
        /// </summary>
        [DataMember(Name="CultureName", EmitDefaultValue=false)]
        public string CultureName { get; set; }

        /// <summary>
        /// Gets or Sets RoleId
        /// </summary>
        [DataMember(Name="RoleId", EmitDefaultValue=false)]
        public long? RoleId { get; set; }

        /// <summary>
        /// Gets or Sets LoginUserName
        /// </summary>
        [DataMember(Name="LoginUserName", EmitDefaultValue=false)]
        public string LoginUserName { get; set; }

        /// <summary>
        /// Gets or Sets LastTimeLogin
        /// </summary>
        [DataMember(Name="LastTimeLogin", EmitDefaultValue=false)]
        public DateTime? LastTimeLogin { get; set; }

        /// <summary>
        /// Gets or Sets IsDataPrivateRestricted
        /// </summary>
        [DataMember(Name="IsDataPrivateRestricted", EmitDefaultValue=false)]
        public bool? IsDataPrivateRestricted { get; set; }

        /// <summary>
        /// Gets or Sets FirstName
        /// </summary>
        [DataMember(Name="FirstName", EmitDefaultValue=false)]
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or Sets LastName
        /// </summary>
        [DataMember(Name="LastName", EmitDefaultValue=false)]
        public string LastName { get; set; }

        /// <summary>
        /// Gets or Sets JobTitle
        /// </summary>
        [DataMember(Name="JobTitle", EmitDefaultValue=false)]
        public string JobTitle { get; set; }

        /// <summary>
        /// Gets or Sets FaxNumber
        /// </summary>
        [DataMember(Name="FaxNumber", EmitDefaultValue=false)]
        public string FaxNumber { get; set; }

        /// <summary>
        /// Gets or Sets MobileNumber
        /// </summary>
        [DataMember(Name="MobileNumber", EmitDefaultValue=false)]
        public string MobileNumber { get; set; }

        /// <summary>
        /// Gets or Sets WorkPhoneNumber
        /// </summary>
        [DataMember(Name="WorkPhoneNumber", EmitDefaultValue=false)]
        public string WorkPhoneNumber { get; set; }

        /// <summary>
        /// Gets or Sets Notes
        /// </summary>
        [DataMember(Name="Notes", EmitDefaultValue=false)]
        public string Notes { get; set; }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name="Type", EmitDefaultValue=false)]
        public UserPermissionLevel Type { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UserWithActionItem {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Culture: ").Append(Culture).Append("\n");
            sb.Append("  UserFullName: ").Append(UserFullName).Append("\n");
            sb.Append("  PhoneNumber: ").Append(PhoneNumber).Append("\n");
            sb.Append("  Role: ").Append(Role).Append("\n");
            sb.Append("  UserName: ").Append(UserName).Append("\n");
            sb.Append("  UniqueId: ").Append(UniqueId).Append("\n");
            sb.Append("  LoginAttempt: ").Append(LoginAttempt).Append("\n");
            sb.Append("  MaxInvalidLoginAttempts: ").Append(MaxInvalidLoginAttempts).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  IsLocked: ").Append(IsLocked).Append("\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  CultureName: ").Append(CultureName).Append("\n");
            sb.Append("  RoleId: ").Append(RoleId).Append("\n");
            sb.Append("  LoginUserName: ").Append(LoginUserName).Append("\n");
            sb.Append("  LastTimeLogin: ").Append(LastTimeLogin).Append("\n");
            sb.Append("  IsDataPrivateRestricted: ").Append(IsDataPrivateRestricted).Append("\n");
            sb.Append("  FirstName: ").Append(FirstName).Append("\n");
            sb.Append("  LastName: ").Append(LastName).Append("\n");
            sb.Append("  JobTitle: ").Append(JobTitle).Append("\n");
            sb.Append("  FaxNumber: ").Append(FaxNumber).Append("\n");
            sb.Append("  MobileNumber: ").Append(MobileNumber).Append("\n");
            sb.Append("  WorkPhoneNumber: ").Append(WorkPhoneNumber).Append("\n");
            sb.Append("  Notes: ").Append(Notes).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
            return this.Equals(input as UserWithActionItem);
        }

        /// <summary>
        /// Returns true if UserWithActionItem instances are equal
        /// </summary>
        /// <param name="input">Instance of UserWithActionItem to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UserWithActionItem input)
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
                    this.Culture == input.Culture ||
                    (this.Culture != null &&
                    this.Culture.Equals(input.Culture))
                ) && 
                (
                    this.UserFullName == input.UserFullName ||
                    (this.UserFullName != null &&
                    this.UserFullName.Equals(input.UserFullName))
                ) && 
                (
                    this.PhoneNumber == input.PhoneNumber ||
                    (this.PhoneNumber != null &&
                    this.PhoneNumber.Equals(input.PhoneNumber))
                ) && 
                (
                    this.Role == input.Role ||
                    (this.Role != null &&
                    this.Role.Equals(input.Role))
                ) && 
                (
                    this.UserName == input.UserName ||
                    (this.UserName != null &&
                    this.UserName.Equals(input.UserName))
                ) && 
                (
                    this.UniqueId == input.UniqueId ||
                    (this.UniqueId != null &&
                    this.UniqueId.Equals(input.UniqueId))
                ) && 
                (
                    this.LoginAttempt == input.LoginAttempt ||
                    (this.LoginAttempt != null &&
                    this.LoginAttempt.Equals(input.LoginAttempt))
                ) && 
                (
                    this.MaxInvalidLoginAttempts == input.MaxInvalidLoginAttempts ||
                    (this.MaxInvalidLoginAttempts != null &&
                    this.MaxInvalidLoginAttempts.Equals(input.MaxInvalidLoginAttempts))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                ) && 
                (
                    this.IsLocked == input.IsLocked ||
                    (this.IsLocked != null &&
                    this.IsLocked.Equals(input.IsLocked))
                ) && 
                (
                    this.Email == input.Email ||
                    (this.Email != null &&
                    this.Email.Equals(input.Email))
                ) && 
                (
                    this.CultureName == input.CultureName ||
                    (this.CultureName != null &&
                    this.CultureName.Equals(input.CultureName))
                ) && 
                (
                    this.RoleId == input.RoleId ||
                    (this.RoleId != null &&
                    this.RoleId.Equals(input.RoleId))
                ) && 
                (
                    this.LoginUserName == input.LoginUserName ||
                    (this.LoginUserName != null &&
                    this.LoginUserName.Equals(input.LoginUserName))
                ) && 
                (
                    this.LastTimeLogin == input.LastTimeLogin ||
                    (this.LastTimeLogin != null &&
                    this.LastTimeLogin.Equals(input.LastTimeLogin))
                ) && 
                (
                    this.IsDataPrivateRestricted == input.IsDataPrivateRestricted ||
                    (this.IsDataPrivateRestricted != null &&
                    this.IsDataPrivateRestricted.Equals(input.IsDataPrivateRestricted))
                ) && 
                (
                    this.FirstName == input.FirstName ||
                    (this.FirstName != null &&
                    this.FirstName.Equals(input.FirstName))
                ) && 
                (
                    this.LastName == input.LastName ||
                    (this.LastName != null &&
                    this.LastName.Equals(input.LastName))
                ) && 
                (
                    this.JobTitle == input.JobTitle ||
                    (this.JobTitle != null &&
                    this.JobTitle.Equals(input.JobTitle))
                ) && 
                (
                    this.FaxNumber == input.FaxNumber ||
                    (this.FaxNumber != null &&
                    this.FaxNumber.Equals(input.FaxNumber))
                ) && 
                (
                    this.MobileNumber == input.MobileNumber ||
                    (this.MobileNumber != null &&
                    this.MobileNumber.Equals(input.MobileNumber))
                ) && 
                (
                    this.WorkPhoneNumber == input.WorkPhoneNumber ||
                    (this.WorkPhoneNumber != null &&
                    this.WorkPhoneNumber.Equals(input.WorkPhoneNumber))
                ) && 
                (
                    this.Notes == input.Notes ||
                    (this.Notes != null &&
                    this.Notes.Equals(input.Notes))
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
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
                if (this.Culture != null)
                    hashCode = hashCode * 59 + this.Culture.GetHashCode();
                if (this.UserFullName != null)
                    hashCode = hashCode * 59 + this.UserFullName.GetHashCode();
                if (this.PhoneNumber != null)
                    hashCode = hashCode * 59 + this.PhoneNumber.GetHashCode();
                if (this.Role != null)
                    hashCode = hashCode * 59 + this.Role.GetHashCode();
                if (this.UserName != null)
                    hashCode = hashCode * 59 + this.UserName.GetHashCode();
                if (this.UniqueId != null)
                    hashCode = hashCode * 59 + this.UniqueId.GetHashCode();
                if (this.LoginAttempt != null)
                    hashCode = hashCode * 59 + this.LoginAttempt.GetHashCode();
                if (this.MaxInvalidLoginAttempts != null)
                    hashCode = hashCode * 59 + this.MaxInvalidLoginAttempts.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
                if (this.IsLocked != null)
                    hashCode = hashCode * 59 + this.IsLocked.GetHashCode();
                if (this.Email != null)
                    hashCode = hashCode * 59 + this.Email.GetHashCode();
                if (this.CultureName != null)
                    hashCode = hashCode * 59 + this.CultureName.GetHashCode();
                if (this.RoleId != null)
                    hashCode = hashCode * 59 + this.RoleId.GetHashCode();
                if (this.LoginUserName != null)
                    hashCode = hashCode * 59 + this.LoginUserName.GetHashCode();
                if (this.LastTimeLogin != null)
                    hashCode = hashCode * 59 + this.LastTimeLogin.GetHashCode();
                if (this.IsDataPrivateRestricted != null)
                    hashCode = hashCode * 59 + this.IsDataPrivateRestricted.GetHashCode();
                if (this.FirstName != null)
                    hashCode = hashCode * 59 + this.FirstName.GetHashCode();
                if (this.LastName != null)
                    hashCode = hashCode * 59 + this.LastName.GetHashCode();
                if (this.JobTitle != null)
                    hashCode = hashCode * 59 + this.JobTitle.GetHashCode();
                if (this.FaxNumber != null)
                    hashCode = hashCode * 59 + this.FaxNumber.GetHashCode();
                if (this.MobileNumber != null)
                    hashCode = hashCode * 59 + this.MobileNumber.GetHashCode();
                if (this.WorkPhoneNumber != null)
                    hashCode = hashCode * 59 + this.WorkPhoneNumber.GetHashCode();
                if (this.Notes != null)
                    hashCode = hashCode * 59 + this.Notes.GetHashCode();
                if (this.Type != null)
                    hashCode = hashCode * 59 + this.Type.GetHashCode();
                return hashCode;
            }
        }
    }

}
