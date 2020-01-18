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
import AmountDetails from './AmountDetails';
import ItemData from './ItemData';

/**
 * The CartData model module.
 * @module model/CartData
 * @version 1.3.5
 */
class CartData {
    /**
     * Constructs a new <code>CartData</code>.
     * @alias module:model/CartData
     */
    constructor() { 
        
        CartData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartData} obj Optional instance to populate.
     * @return {module:model/CartData} The populated <code>CartData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartData();

            if (data.hasOwnProperty('Items')) {
                obj['Items'] = ApiClient.convertToType(data['Items'], [ItemData]);
            }
            if (data.hasOwnProperty('AmountDetails')) {
                obj['AmountDetails'] = AmountDetails.constructFromObject(data['AmountDetails']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ItemData>} Items
 */
CartData.prototype['Items'] = undefined;

/**
 * @member {module:model/AmountDetails} AmountDetails
 */
CartData.prototype['AmountDetails'] = undefined;






export default CartData;

