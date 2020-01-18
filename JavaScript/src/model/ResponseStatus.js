/**
 * splitit-web-api-public-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ResponseError from './ResponseError';

/**
 * The ResponseStatus model module.
 * @module model/ResponseStatus
 * @version 1.3.5
 */
class ResponseStatus {
    /**
     * Constructs a new <code>ResponseStatus</code>.
     * @alias module:model/ResponseStatus
     */
    constructor() { 
        
        ResponseStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseStatus} obj Optional instance to populate.
     * @return {module:model/ResponseStatus} The populated <code>ResponseStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseStatus();

            if (data.hasOwnProperty('ErrorCode')) {
                obj['ErrorCode'] = ApiClient.convertToType(data['ErrorCode'], 'String');
            }
            if (data.hasOwnProperty('Message')) {
                obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
            }
            if (data.hasOwnProperty('StackTrace')) {
                obj['StackTrace'] = ApiClient.convertToType(data['StackTrace'], 'String');
            }
            if (data.hasOwnProperty('Errors')) {
                obj['Errors'] = ApiClient.convertToType(data['Errors'], [ResponseError]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} ErrorCode
 */
ResponseStatus.prototype['ErrorCode'] = undefined;

/**
 * @member {String} Message
 */
ResponseStatus.prototype['Message'] = undefined;

/**
 * @member {String} StackTrace
 */
ResponseStatus.prototype['StackTrace'] = undefined;

/**
 * @member {Array.<module:model/ResponseError>} Errors
 */
ResponseStatus.prototype['Errors'] = undefined;






export default ResponseStatus;

