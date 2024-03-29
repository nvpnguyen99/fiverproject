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
* NguoiDung service.
* @module api/NguoiDungApi
* @version v1
*/
export class NguoiDungApi {

    /**
    * Constructs a new NguoiDungApi. 
    * @alias module:api/NguoiDungApi
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
     * @param {Number} opts.id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    callDeleteWithHttpInfo(tokenCybersoft, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'tokenCybersoft' is set
      if (tokenCybersoft === undefined || tokenCybersoft === null) {
        throw new Error("Missing the required parameter 'tokenCybersoft' when calling callDelete");
      }


      let pathParams = {
      };
      let queryParams = {
        'id': opts['id']
      };
      let headerParams = {
        'tokenCybersoft': tokenCybersoft
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    callDelete(tokenCybersoft, opts) {
      return this.callDeleteWithHttpInfo(tokenCybersoft, opts)
        .then(function(response_and_data) {
          return response_and_data.response.body;
        });
    }


    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    getWithHttpInfo(tokenCybersoft) {
      let postBody = null;

      // verify the required parameter 'tokenCybersoft' is set
      if (tokenCybersoft === undefined || tokenCybersoft === null) {
        throw new Error("Missing the required parameter 'tokenCybersoft' when calling get");
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
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    get(tokenCybersoft) {
      return this.getWithHttpInfo(tokenCybersoft)
        .then(function(response_and_data) {
          return response_and_data.response.body;
        });
    }


    /**
     * @param {String} tenNguoiDung 
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    getByNameWithHttpInfo(tenNguoiDung, tokenCybersoft) {
      let postBody = null;

      // verify the required parameter 'tenNguoiDung' is set
      if (tenNguoiDung === undefined || tenNguoiDung === null) {
        throw new Error("Missing the required parameter 'tenNguoiDung' when calling getByName");
      }

      // verify the required parameter 'tokenCybersoft' is set
      if (tokenCybersoft === undefined || tokenCybersoft === null) {
        throw new Error("Missing the required parameter 'tokenCybersoft' when calling getByName");
      }


      let pathParams = {
        'TenNguoiDung': tenNguoiDung
      };
      let queryParams = {
      };
      let headerParams = {
        'tokenCybersoft': tokenCybersoft
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/users/search/{TenNguoiDung}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} tenNguoiDung 
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getByName(tenNguoiDung, tokenCybersoft) {
      return this.getByNameWithHttpInfo(tenNguoiDung, tokenCybersoft)
        .then(function(response_and_data) {
          return response_and_data.response.body;
        });
    }


    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageIndex 
     * @param {Number} opts.pageSize 
     * @param {String} opts.keyword 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    getPagingWithHttpInfo(tokenCybersoft, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'tokenCybersoft' is set
      if (tokenCybersoft === undefined || tokenCybersoft === null) {
        throw new Error("Missing the required parameter 'tokenCybersoft' when calling getPaging");
      }


      let pathParams = {
      };
      let queryParams = {
        'pageIndex': opts['pageIndex'],
        'pageSize': opts['pageSize'],
        'keyword': opts['keyword']
      };
      let headerParams = {
        'tokenCybersoft': tokenCybersoft
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/users/phan-trang-tim-kiem', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageIndex 
     * @param {Number} opts.pageSize 
     * @param {String} opts.keyword 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getPaging(tokenCybersoft, opts) {
      return this.getPagingWithHttpInfo(tokenCybersoft, opts)
        .then(function(response_and_data) {
          return response_and_data.response.body;
        });
    }


    /**
     * @param {Number} id 
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    get_0WithHttpInfo(id, tokenCybersoft, token) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling get_0");
      }

      // verify the required parameter 'tokenCybersoft' is set
      if (tokenCybersoft === undefined || tokenCybersoft === null) {
        throw new Error("Missing the required parameter 'tokenCybersoft' when calling get_0");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'tokenCybersoft': tokenCybersoft,
        'token': token,
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {Number} id 
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    get_0(id, tokenCybersoft, token) {
      return this.get_0WithHttpInfo(id, tokenCybersoft, token)
        .then(function(response_and_data) {
          return response_and_data.response.body;
        });
    }


    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {module:model/ThongTinNguoiDung} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    postWithHttpInfo(tokenCybersoft, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'tokenCybersoft' is set
      if (tokenCybersoft === undefined || tokenCybersoft === null) {
        throw new Error("Missing the required parameter 'tokenCybersoft' when calling post");
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
        '/api/users', 'POST',
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
    post(tokenCybersoft, opts) {
      return this.postWithHttpInfo(tokenCybersoft, opts)
        .then(function(response_and_data) {
          return response_and_data.response.body;
        });
    }


    /**
     * @param {Number} id 
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {module:model/CapNhatNguoiDung} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    putWithHttpInfo(id, tokenCybersoft, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling put");
      }

      // verify the required parameter 'tokenCybersoft' is set
      if (tokenCybersoft === undefined || tokenCybersoft === null) {
        throw new Error("Missing the required parameter 'tokenCybersoft' when calling put");
      }


      let pathParams = {
        'id': id
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
        '/api/users/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {Number} id 
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {module:model/CapNhatNguoiDung} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    put(id, tokenCybersoft, opts) {
      return this.putWithHttpInfo(id, tokenCybersoft, opts)
        .then(function(response_and_data) {
          return response_and_data.response.body;
        });
    }


    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {File} opts.formFile 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    uploadAvatarWithHttpInfo(tokenCybersoft, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'tokenCybersoft' is set
      if (tokenCybersoft === undefined || tokenCybersoft === null) {
        throw new Error("Missing the required parameter 'tokenCybersoft' when calling uploadAvatar");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'token': opts['token'],
        'tokenCybersoft': tokenCybersoft
      };
      let formParams = {
        'formFile': opts['formFile']
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/users/upload-avatar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} tokenCybersoft Nhập token cybersoft
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {File} opts.formFile 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    uploadAvatar(tokenCybersoft, opts) {
      return this.uploadAvatarWithHttpInfo(tokenCybersoft, opts)
        .then(function(response_and_data) {
          return response_and_data.response.body;
        });
    }


}
