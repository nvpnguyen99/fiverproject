/*
 * Fiverr
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.30
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient";

/**
* Auth service.
* @module api/AuthApi
* @version v1
*/
export class AuthApi {

    /**
    * Constructs a new AuthApi. 
    * @alias module:api/AuthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {module:model/ThongTinNguoiDung} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    dangKyWithHttpInfo(tokenCybersoft, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'tokenCybersoft' is set
      if (tokenCybersoft === undefined || tokenCybersoft === null) {
        throw new Error("Missing the required parameter 'tokenCybersoft' when calling dangKy");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'tokenCybersoft': tokenCybersoft
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/auth/signup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {module:model/ThongTinNguoiDung} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    dangKy(tokenCybersoft, opts) {
      return this.dangKyWithHttpInfo(tokenCybersoft, opts)
        .then(function(response_and_data) {
          return response_and_data.response.body;
        });
    }


    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {module:model/DangNhapView} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    dangNhapWithHttpInfo(tokenCybersoft, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'tokenCybersoft' is set
      if (tokenCybersoft === undefined || tokenCybersoft === null) {
        throw new Error("Missing the required parameter 'tokenCybersoft' when calling dangNhap");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'tokenCybersoft': tokenCybersoft
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/auth/signin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {module:model/DangNhapView} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    dangNhap(tokenCybersoft, opts) {
      return this.dangNhapWithHttpInfo(tokenCybersoft, opts)
        .then(function(response_and_data) {
          return response_and_data.response.body;
        });
    }


}
