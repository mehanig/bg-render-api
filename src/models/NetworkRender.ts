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
 * @interface NetworkRender
 */
export interface NetworkRender {
    /**
     * 
     * @type {boolean}
     * @memberof NetworkRender
     */
    isActive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NetworkRender
     */
    apiUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NetworkRender
     */
    wsUrl?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof NetworkRender
     */
    renderGroups?: Array<string> | null;
}

export function NetworkRenderFromJSON(json: any): NetworkRender {
    return NetworkRenderFromJSONTyped(json, false);
}

export function NetworkRenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkRender {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'apiUrl': !exists(json, 'apiUrl') ? undefined : json['apiUrl'],
        'wsUrl': !exists(json, 'wsUrl') ? undefined : json['wsUrl'],
        'renderGroups': !exists(json, 'renderGroups') ? undefined : json['renderGroups'],
    };
}

export function NetworkRenderToJSON(value?: NetworkRender | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isActive': value.isActive,
        'apiUrl': value.apiUrl,
        'wsUrl': value.wsUrl,
        'renderGroups': value.renderGroups,
    };
}


