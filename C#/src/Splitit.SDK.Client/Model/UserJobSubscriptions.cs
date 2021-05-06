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
    /// UserJobSubscriptions
    /// </summary>
    [DataContract]
    public partial class UserJobSubscriptions :  IEquatable<UserJobSubscriptions>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserJobSubscriptions" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UserJobSubscriptions() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UserJobSubscriptions" /> class.
        /// </summary>
        /// <param name="id">id (required).</param>
        /// <param name="pisUserUniqueId">pisUserUniqueId.</param>
        /// <param name="pisUserId">pisUserId (required).</param>
        /// <param name="splititJobDefinitionId">splititJobDefinitionId (required).</param>
        /// <param name="pisUser">pisUser.</param>
        /// <param name="splititJobDefinition">splititJobDefinition.</param>
        public UserJobSubscriptions(long? id = default(long?), string pisUserUniqueId = default(string), long? pisUserId = default(long?), long? splititJobDefinitionId = default(long?), Object pisUser = default(Object), SplititJobDefinitions splititJobDefinition = default(SplititJobDefinitions))
        {
            this.Id = id;
            this.PisUserId = pisUserId;
            this.SplititJobDefinitionId = splititJobDefinitionId;
            this.PisUserUniqueId = pisUserUniqueId;
            this.PisUser = pisUser;
            this.SplititJobDefinition = splititJobDefinition;
        }

        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="Id", EmitDefaultValue=false)]
        public long? Id { get; set; }

        /// <summary>
        /// Gets or Sets PisUserUniqueId
        /// </summary>
        [DataMember(Name="PisUserUniqueId", EmitDefaultValue=false)]
        public string PisUserUniqueId { get; set; }

        /// <summary>
        /// Gets or Sets PisUserId
        /// </summary>
        [DataMember(Name="PisUserId", EmitDefaultValue=false)]
        public long? PisUserId { get; set; }

        /// <summary>
        /// Gets or Sets SplititJobDefinitionId
        /// </summary>
        [DataMember(Name="SplititJobDefinitionId", EmitDefaultValue=false)]
        public long? SplititJobDefinitionId { get; set; }

        /// <summary>
        /// Gets or Sets PisUser
        /// </summary>
        [DataMember(Name="PisUser", EmitDefaultValue=false)]
        public Object PisUser { get; set; }

        /// <summary>
        /// Gets or Sets SplititJobDefinition
        /// </summary>
        [DataMember(Name="SplititJobDefinition", EmitDefaultValue=false)]
        public SplititJobDefinitions SplititJobDefinition { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UserJobSubscriptions {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  PisUserUniqueId: ").Append(PisUserUniqueId).Append("\n");
            sb.Append("  PisUserId: ").Append(PisUserId).Append("\n");
            sb.Append("  SplititJobDefinitionId: ").Append(SplititJobDefinitionId).Append("\n");
            sb.Append("  PisUser: ").Append(PisUser).Append("\n");
            sb.Append("  SplititJobDefinition: ").Append(SplititJobDefinition).Append("\n");
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
            return this.Equals(input as UserJobSubscriptions);
        }

        /// <summary>
        /// Returns true if UserJobSubscriptions instances are equal
        /// </summary>
        /// <param name="input">Instance of UserJobSubscriptions to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UserJobSubscriptions input)
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
                    this.PisUserUniqueId == input.PisUserUniqueId ||
                    (this.PisUserUniqueId != null &&
                    this.PisUserUniqueId.Equals(input.PisUserUniqueId))
                ) && 
                (
                    this.PisUserId == input.PisUserId ||
                    (this.PisUserId != null &&
                    this.PisUserId.Equals(input.PisUserId))
                ) && 
                (
                    this.SplititJobDefinitionId == input.SplititJobDefinitionId ||
                    (this.SplititJobDefinitionId != null &&
                    this.SplititJobDefinitionId.Equals(input.SplititJobDefinitionId))
                ) && 
                (
                    this.PisUser == input.PisUser ||
                    (this.PisUser != null &&
                    this.PisUser.Equals(input.PisUser))
                ) && 
                (
                    this.SplititJobDefinition == input.SplititJobDefinition ||
                    (this.SplititJobDefinition != null &&
                    this.SplititJobDefinition.Equals(input.SplititJobDefinition))
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
                if (this.PisUserUniqueId != null)
                    hashCode = hashCode * 59 + this.PisUserUniqueId.GetHashCode();
                if (this.PisUserId != null)
                    hashCode = hashCode * 59 + this.PisUserId.GetHashCode();
                if (this.SplititJobDefinitionId != null)
                    hashCode = hashCode * 59 + this.SplititJobDefinitionId.GetHashCode();
                if (this.PisUser != null)
                    hashCode = hashCode * 59 + this.PisUser.GetHashCode();
                if (this.SplititJobDefinition != null)
                    hashCode = hashCode * 59 + this.SplititJobDefinition.GetHashCode();
                return hashCode;
            }
        }
    }

}
