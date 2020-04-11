/* tslint:disable */
/* eslint-disable */
/**
 * BgRenderer Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ServiceKey
 */
export interface ServiceKey {
    /**
     * 
     * @type {string}
     * @memberof ServiceKey
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceKey
     */
    key?: string | null;
}

export function ServiceKeyFromJSON(json: any): ServiceKey {
    return ServiceKeyFromJSONTyped(json, false);
}

export function ServiceKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'key': !exists(json, 'Key') ? undefined : json['Key'],
    };
}

export function ServiceKeyToJSON(value?: ServiceKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'Key': value.key,
    };
}


