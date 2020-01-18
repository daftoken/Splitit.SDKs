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

/**
 * The PaymentToken model module.
 * @module model/PaymentToken
 * @version 1.3.5
 */
class PaymentToken {
    /**
     * Constructs a new <code>PaymentToken</code>.
     * @alias module:model/PaymentToken
     */
    constructor() { 
        
        PaymentToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentToken} obj Optional instance to populate.
     * @return {module:model/PaymentToken} The populated <code>PaymentToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentToken();

            if (data.hasOwnProperty('Token')) {
                obj['Token'] = ApiClient.convertToType(data['Token'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Token
 */
PaymentToken.prototype['Token'] = undefined;

/**
 * @member {String} Type
 */
PaymentToken.prototype['Type'] = undefined;






export default PaymentToken;

