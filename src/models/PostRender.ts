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
    PostRenderState,
    PostRenderStateFromJSON,
    PostRenderStateFromJSONTyped,
    PostRenderStateToJSON,
} from './';

/**
 * 
 * @export
 * @interface PostRender
 */
export interface PostRender {
    /**
     * 
     * @type {string}
     * @memberof PostRender
     */
    type?: string | null;
    /**
     * 
     * @type {PostRenderState}
     * @memberof PostRender
     */
    state?: PostRenderState;
    /**
     * 
     * @type {string}
     * @memberof PostRender
     */
    progress?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PostRender
     */
    args?: Array<string> | null;
    /**
     * 
     * @type {JsonElement}
     * @memberof PostRender
     */
    settings?: JsonElement;
}

export function PostRenderFromJSON(json: any): PostRender {
    return PostRenderFromJSONTyped(json, false);
}

export function PostRenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostRender {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'state': !exists(json, 'state') ? undefined : PostRenderStateFromJSON(json['state']),
        'progress': !exists(json, 'progress') ? undefined : json['progress'],
        'args': !exists(json, 'args') ? undefined : json['args'],
        'settings': !exists(json, 'settings') ? undefined : JsonElementFromJSON(json['settings']),
    };
}

export function PostRenderToJSON(value?: PostRender | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'state': PostRenderStateToJSON(value.state),
        'progress': value.progress,
        'args': value.args,
        'settings': JsonElementToJSON(value.settings),
    };
}


