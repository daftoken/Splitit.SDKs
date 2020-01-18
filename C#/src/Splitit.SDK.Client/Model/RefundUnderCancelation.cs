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
    /// Defines RefundUnderCancelation
    /// </summary>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum RefundUnderCancelation
    {
        
        /// <summary>
        /// Enum None for value: None
        /// </summary>
        [EnumMember(Value = "None")]
        None = 1,
        
        /// <summary>
        /// Enum NoRefunds for value: NoRefunds
        /// </summary>
        [EnumMember(Value = "NoRefunds")]
        NoRefunds = 2,
        
        /// <summary>
        /// Enum OnlyIfAFullRefundIsPossible for value: OnlyIfAFullRefundIsPossible
        /// </summary>
        [EnumMember(Value = "OnlyIfAFullRefundIsPossible")]
        OnlyIfAFullRefundIsPossible = 3,
        
        /// <summary>
        /// Enum Choose for value: Choose
        /// </summary>
        [EnumMember(Value = "Choose")]
        Choose = 4
    }

}
