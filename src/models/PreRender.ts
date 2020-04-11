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
import {
    JsonElement,
    JsonElementFromJSON,
    JsonElementFromJSONTyped,
    JsonElementToJSON,
    PreRenderState,
    PreRenderStateFromJSON,
    PreRenderStateFromJSONTyped,
    PreRenderStateToJSON,
} from './';

/**
 * 
 * @export
 * @interface PreRender
 */
export interface PreRender {
    /**
     * 
     * @type {string}
     * @memberof PreRender
     */
    type?: string | null;
    /**
     * 
     * @type {PreRenderState}
     * @memberof PreRender
     */
    state?: PreRenderState;
    /**
     * 
     * @type {string}
     * @memberof PreRender
     */
    progress?: string | null;
    /**
     * 
     * @type {JsonElement}
     * @memberof PreRender
     */
    settings?: JsonElement;
}

export function PreRenderFromJSON(json: any): PreRender {
    return PreRenderFromJSONTyped(json, false);
}

export function PreRenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreRender {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'Type') ? undefined : json['Type'],
        'state': !exists(json, 'State') ? undefined : PreRenderStateFromJSON(json['State']),
        'progress': !exists(json, 'Progress') ? undefined : json['Progress'],
        'settings': !exists(json, 'Settings') ? undefined : JsonElementFromJSON(json['Settings']),
    };
}

export function PreRenderToJSON(value?: PreRender | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Type': value.type,
        'State': PreRenderStateToJSON(value.state),
        'Progress': value.progress,
        'Settings': JsonElementToJSON(value.settings),
    };
}


