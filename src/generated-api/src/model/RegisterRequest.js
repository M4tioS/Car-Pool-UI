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

/**
 * The RegisterRequest model module.
 * @module model/RegisterRequest
 * @version 1.0
 */
class RegisterRequest {
    /**
     * Constructs a new <code>RegisterRequest</code>.
     * @alias module:model/RegisterRequest
     * @param email {String} 
     * @param password {String} 
     * @param firstname {String} 
     * @param lastname {String} 
     * @param phoneNumber {String} 
     */
    constructor(email, password, firstname, lastname, phoneNumber) { 
        
        RegisterRequest.initialize(this, email, password, firstname, lastname, phoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password, firstname, lastname, phoneNumber) { 
        obj['email'] = email;
        obj['password'] = password;
        obj['firstname'] = firstname;
        obj['lastname'] = lastname;
        obj['phoneNumber'] = phoneNumber;
    }

    /**
     * Constructs a <code>RegisterRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterRequest} obj Optional instance to populate.
     * @return {module:model/RegisterRequest} The populated <code>RegisterRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('profilePicture')) {
                obj['profilePicture'] = ApiClient.convertToType(data['profilePicture'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RegisterRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RegisterRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RegisterRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['firstname'] && !(typeof data['firstname'] === 'string' || data['firstname'] instanceof String)) {
            throw new Error("Expected the field `firstname` to be a primitive type in the JSON string but got " + data['firstname']);
        }
        // ensure the json data is a string
        if (data['lastname'] && !(typeof data['lastname'] === 'string' || data['lastname'] instanceof String)) {
            throw new Error("Expected the field `lastname` to be a primitive type in the JSON string but got " + data['lastname']);
        }
        // ensure the json data is a string
        if (data['phoneNumber'] && !(typeof data['phoneNumber'] === 'string' || data['phoneNumber'] instanceof String)) {
            throw new Error("Expected the field `phoneNumber` to be a primitive type in the JSON string but got " + data['phoneNumber']);
        }
        // ensure the json data is a string
        if (data['profilePicture'] && !(typeof data['profilePicture'] === 'string' || data['profilePicture'] instanceof String)) {
            throw new Error("Expected the field `profilePicture` to be a primitive type in the JSON string but got " + data['profilePicture']);
        }

        return true;
    }


}

RegisterRequest.RequiredProperties = ["email", "password", "firstname", "lastname", "phoneNumber"];

/**
 * @member {String} email
 */
RegisterRequest.prototype['email'] = undefined;

/**
 * @member {String} password
 */
RegisterRequest.prototype['password'] = undefined;

/**
 * @member {String} firstname
 */
RegisterRequest.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
RegisterRequest.prototype['lastname'] = undefined;

/**
 * @member {String} phoneNumber
 */
RegisterRequest.prototype['phoneNumber'] = undefined;

/**
 * @member {String} profilePicture
 */
RegisterRequest.prototype['profilePicture'] = undefined;






export default RegisterRequest;

