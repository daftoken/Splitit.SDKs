/*
 * splitit-web-api-public-sdk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.splitit;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-08-06T09:17:30.371Z")
public class Configuration {
    private static String _sandboxApiKey;
    private static String _productionApiKey;

    public static void addSandboxApiKey(String apiKey){
        _sandboxApiKey = apiKey;
    }

    public static void addProductionApiKey(String apiKey){
        _productionApiKey = apiKey;
    }

    /**
     * Get the sandbox API client.
     *
     * @return API client connecting to Splitit Sandbox environment.
     */
    public static ApiClient sandbox() {
        ApiClient client = new ApiClient("https://webapi.sandbox.splitit.com");
        client.addApiKey(Configuration._sandboxApiKey);
        return client;
    }

    /**
     * Get the production API client.
     *
     * @return API client connecting to Splitit Production environment.
     */
    public static ApiClient production() {
        ApiClient client = new ApiClient("https://webapi.production.splitit.com");
        client.addApiKey(Configuration._productionApiKey);
        return client;
    }
}