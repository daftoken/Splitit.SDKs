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


package com.splitit.sdk.api;

import com.splitit.sdk.api.*;
import com.splitit.ApiClient;
import com.splitit.ApiException;
import com.splitit.sdk.model.LoginRequest;
import com.splitit.sdk.model.LoginResponse;



public class LoginApiAutologin extends LoginApi {
    public LoginApiAutologin(ApiClient apiClient) {
        super(apiClient);
    }

    /**
     * @param request  (required)
     * @return LoginResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public LoginResponse loginPost(LoginRequest request) throws ApiException {
        LoginResponse lr = super.loginPost(request);
        if (super.apiClient.isAutologin() && lr.getResponseHeader().isSucceeded()){
            super.apiClient.setSessionId(lr.getSessionId());
        }
        return lr;
    }
}
