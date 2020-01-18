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
using System.Collections.Generic;
using Splitit.SDK.Client.Model;
using System.Reflection;

namespace Splitit.SDK.Client.Client
{
    /// <summary>
    /// API Response
    /// </summary>
    public class ApiResponse<T>
    {
        /// <summary>
        /// Gets or sets the status code (HTTP status code)
        /// </summary>
        /// <value>The status code.</value>
        public int StatusCode { get; private set; }

        /// <summary>
        /// Gets or sets the HTTP headers
        /// </summary>
        /// <value>HTTP headers</value>
        public IDictionary<string, string> Headers { get; private set; }

        /// <summary>
        /// Gets or sets the data (parsed HTTP body)
        /// </summary>
        /// <value>The data.</value>
        public T Data { get; private set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="ApiResponse&lt;T&gt;" /> class.
        /// </summary>
        /// <param name="statusCode">HTTP status code.</param>
        /// <param name="headers">HTTP headers.</param>
        /// <param name="data">Data (parsed HTTP body)</param>
        public ApiResponse(int statusCode, IDictionary<string, string> headers, T data)
        {
            this.StatusCode= statusCode;
            this.Headers = headers;
            this.Data = data;
        }

        public void Validate()
        {
            if (this.Data == null)
            {
                throw new SplititApiException("-1", "No data in the response.");
            }

            var prop = this.Data.GetType().GetProperties()
                .Where(p => p.PropertyType == typeof(ResponseHeader))
                .FirstOrDefault();

            if (prop != null)
            {
                var headerVal = prop.GetValue(this.Data) as ResponseHeader;
                if (headerVal != null)
                {
                    if (headerVal.Succeeded != true)
                    {
                        throw SplititApiException.FromResponse(headerVal);   
                    }
                }
            }
        }

    }

}
