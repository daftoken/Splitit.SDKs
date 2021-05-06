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
    /// Defines AgentFeeType
    /// </summary>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum AgentFeeType
    {
        
        /// <summary>
        /// Enum FlatFee for value: FlatFee
        /// </summary>
        [EnumMember(Value = "FlatFee")]
        FlatFee = 1,
        
        /// <summary>
        /// Enum BuyRate for value: BuyRate
        /// </summary>
        [EnumMember(Value = "BuyRate")]
        BuyRate = 2
    }

}
