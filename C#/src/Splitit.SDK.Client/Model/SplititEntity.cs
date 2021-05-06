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
    /// Defines SplititEntity
    /// </summary>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum SplititEntity
    {
        
        /// <summary>
        /// Enum NotSet for value: NotSet
        /// </summary>
        [EnumMember(Value = "NotSet")]
        NotSet = 1,
        
        /// <summary>
        /// Enum SplititLtd for value: SplititLtd
        /// </summary>
        [EnumMember(Value = "SplititLtd")]
        SplititLtd = 2,
        
        /// <summary>
        /// Enum SplititUkLtd for value: SplititUkLtd
        /// </summary>
        [EnumMember(Value = "SplititUkLtd")]
        SplititUkLtd = 3,
        
        /// <summary>
        /// Enum SplititUsaInc for value: SplititUsaInc
        /// </summary>
        [EnumMember(Value = "SplititUsaInc")]
        SplititUsaInc = 4,
        
        /// <summary>
        /// Enum SplititCapitalInc for value: SplititCapitalInc
        /// </summary>
        [EnumMember(Value = "SplititCapitalInc")]
        SplititCapitalInc = 5,
        
        /// <summary>
        /// Enum SplititCapitalUkLtd for value: SplititCapitalUkLtd
        /// </summary>
        [EnumMember(Value = "SplititCapitalUkLtd")]
        SplititCapitalUkLtd = 6,
        
        /// <summary>
        /// Enum SplititPaymentsLtd for value: SplititPaymentsLtd
        /// </summary>
        [EnumMember(Value = "SplititPaymentsLtd")]
        SplititPaymentsLtd = 7,
        
        /// <summary>
        /// Enum SplititAustraliaCapitalPtyLtd for value: SplititAustraliaCapitalPtyLtd
        /// </summary>
        [EnumMember(Value = "SplititAustraliaCapitalPtyLtd")]
        SplititAustraliaCapitalPtyLtd = 8,
        
        /// <summary>
        /// Enum SplititAustraliaPtyLtd for value: SplititAustraliaPtyLtd
        /// </summary>
        [EnumMember(Value = "SplititAustraliaPtyLtd")]
        SplititAustraliaPtyLtd = 9
    }

}
