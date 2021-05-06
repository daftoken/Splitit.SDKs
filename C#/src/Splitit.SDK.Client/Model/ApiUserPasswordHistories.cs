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
    /// ApiUserPasswordHistories
    /// </summary>
    [DataContract]
    public partial class ApiUserPasswordHistories :  IEquatable<ApiUserPasswordHistories>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApiUserPasswordHistories" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ApiUserPasswordHistories() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ApiUserPasswordHistories" /> class.
        /// </summary>
        /// <param name="id">id (required).</param>
        /// <param name="password">password.</param>
        /// <param name="passwordHash">passwordHash.</param>
        /// <param name="apiUserId">apiUserId (required).</param>
        /// <param name="apiUser">apiUser.</param>
        public ApiUserPasswordHistories(long? id = default(long?), string password = default(string), string passwordHash = default(string), long? apiUserId = default(long?), ApiUsers apiUser = default(ApiUsers))
        {
            this.Id = id;
            this.ApiUserId = apiUserId;
            this.Password = password;
            this.PasswordHash = passwordHash;
            this.ApiUser = apiUser;
        }

        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="Id", EmitDefaultValue=false)]
        public long? Id { get; set; }

        /// <summary>
        /// Gets or Sets Password
        /// </summary>
        [DataMember(Name="Password", EmitDefaultValue=false)]
        public string Password { get; set; }

        /// <summary>
        /// Gets or Sets PasswordHash
        /// </summary>
        [DataMember(Name="PasswordHash", EmitDefaultValue=false)]
        public string PasswordHash { get; set; }

        /// <summary>
        /// Gets or Sets ApiUserId
        /// </summary>
        [DataMember(Name="ApiUserId", EmitDefaultValue=false)]
        public long? ApiUserId { get; set; }

        /// <summary>
        /// Gets or Sets ApiUser
        /// </summary>
        [DataMember(Name="ApiUser", EmitDefaultValue=false)]
        public ApiUsers ApiUser { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ApiUserPasswordHistories {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Password: ").Append(Password).Append("\n");
            sb.Append("  PasswordHash: ").Append(PasswordHash).Append("\n");
            sb.Append("  ApiUserId: ").Append(ApiUserId).Append("\n");
            sb.Append("  ApiUser: ").Append(ApiUser).Append("\n");
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
            return this.Equals(input as ApiUserPasswordHistories);
        }

        /// <summary>
        /// Returns true if ApiUserPasswordHistories instances are equal
        /// </summary>
        /// <param name="input">Instance of ApiUserPasswordHistories to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ApiUserPasswordHistories input)
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
                    this.Password == input.Password ||
                    (this.Password != null &&
                    this.Password.Equals(input.Password))
                ) && 
                (
                    this.PasswordHash == input.PasswordHash ||
                    (this.PasswordHash != null &&
                    this.PasswordHash.Equals(input.PasswordHash))
                ) && 
                (
                    this.ApiUserId == input.ApiUserId ||
                    (this.ApiUserId != null &&
                    this.ApiUserId.Equals(input.ApiUserId))
                ) && 
                (
                    this.ApiUser == input.ApiUser ||
                    (this.ApiUser != null &&
                    this.ApiUser.Equals(input.ApiUser))
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
                if (this.Password != null)
                    hashCode = hashCode * 59 + this.Password.GetHashCode();
                if (this.PasswordHash != null)
                    hashCode = hashCode * 59 + this.PasswordHash.GetHashCode();
                if (this.ApiUserId != null)
                    hashCode = hashCode * 59 + this.ApiUserId.GetHashCode();
                if (this.ApiUser != null)
                    hashCode = hashCode * 59 + this.ApiUser.GetHashCode();
                return hashCode;
            }
        }
    }

}
