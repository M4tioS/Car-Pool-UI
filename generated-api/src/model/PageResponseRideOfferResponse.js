/**
 * CarPool API
 * API documentation for CarPool application
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RideOfferResponse from './RideOfferResponse';

/**
 * The PageResponseRideOfferResponse model module.
 * @module model/PageResponseRideOfferResponse
 * @version 1.0
 */
class PageResponseRideOfferResponse {
    /**
     * Constructs a new <code>PageResponseRideOfferResponse</code>.
     * @alias module:model/PageResponseRideOfferResponse
     */
    constructor() { 
        
        PageResponseRideOfferResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageResponseRideOfferResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageResponseRideOfferResponse} obj Optional instance to populate.
     * @return {module:model/PageResponseRideOfferResponse} The populated <code>PageResponseRideOfferResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageResponseRideOfferResponse();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], [RideOfferResponse]);
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('totalElements')) {
                obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageResponseRideOfferResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageResponseRideOfferResponse</code>.
     */
    static validateJSON(data) {
        if (data['content']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['content'])) {
                throw new Error("Expected the field `content` to be an array in the JSON data but got " + data['content']);
            }
            // validate the optional field `content` (array)
            for (const item of data['content']) {
                RideOfferResponse.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/RideOfferResponse>} content
 */
PageResponseRideOfferResponse.prototype['content'] = undefined;

/**
 * @member {Number} number
 */
PageResponseRideOfferResponse.prototype['number'] = undefined;

/**
 * @member {Number} size
 */
PageResponseRideOfferResponse.prototype['size'] = undefined;

/**
 * @member {Number} totalElements
 */
PageResponseRideOfferResponse.prototype['totalElements'] = undefined;

/**
 * @member {Number} totalPages
 */
PageResponseRideOfferResponse.prototype['totalPages'] = undefined;

/**
 * @member {Boolean} first
 */
PageResponseRideOfferResponse.prototype['first'] = undefined;

/**
 * @member {Boolean} last
 */
PageResponseRideOfferResponse.prototype['last'] = undefined;






export default PageResponseRideOfferResponse;

