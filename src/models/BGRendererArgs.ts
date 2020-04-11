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
    PostRender,
    PostRenderFromJSON,
    PostRenderFromJSONTyped,
    PostRenderToJSON,
    PreRender,
    PreRenderFromJSON,
    PreRenderFromJSONTyped,
    PreRenderToJSON,
} from './';

/**
 * 
 * @export
 * @interface BGRendererArgs
 */
export interface BGRendererArgs {
    /**
     * 
     * @type {string}
     * @memberof BGRendererArgs
     */
    framerate: string;
    /**
     * 
     * @type {string}
     * @memberof BGRendererArgs
     */
    queuepath: string;
    /**
     * 
     * @type {string}
     * @memberof BGRendererArgs
     */
    compname: string;
    /**
     * 
     * @type {string}
     * @memberof BGRendererArgs
     */
    compduration: string;
    /**
     * 
     * @type {string}
     * @memberof BGRendererArgs
     */
    startframe: string;
    /**
     * 
     * @type {string}
     * @memberof BGRendererArgs
     */
    rqitem: string;
    /**
     * 
     * @type {number}
     * @memberof BGRendererArgs
     */
    threads: number;
    /**
     * 
     * @type {string}
     * @memberof BGRendererArgs
     */
    aepath: string;
    /**
     * 
     * @type {number}
     * @memberof BGRendererArgs
     */
    maxthreads: number;
    /**
     * 
     * @type {Array<PostRender>}
     * @memberof BGRendererArgs
     */
    postrenders: Array<PostRender>;
    /**
     * 
     * @type {Array<PreRender>}
     * @memberof BGRendererArgs
     */
    prerenders?: Array<PreRender> | null;
    /**
     * 
     * @type {string}
     * @memberof BGRendererArgs
     */
    project: string;
}

export function BGRendererArgsFromJSON(json: any): BGRendererArgs {
    return BGRendererArgsFromJSONTyped(json, false);
}

export function BGRendererArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BGRendererArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'framerate': json['framerate'],
        'queuepath': json['queuepath'],
        'compname': json['compname'],
        'compduration': json['compduration'],
        'startframe': json['startframe'],
        'rqitem': json['rqitem'],
        'threads': json['threads'],
        'aepath': json['aepath'],
        'maxthreads': json['maxthreads'],
        'postrenders': ((json['postrenders'] as Array<any>).map(PostRenderFromJSON)),
        'prerenders': !exists(json, 'prerenders') ? undefined : (json['prerenders'] === null ? null : (json['prerenders'] as Array<any>).map(PreRenderFromJSON)),
        'project': json['project'],
    };
}

export function BGRendererArgsToJSON(value?: BGRendererArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'framerate': value.framerate,
        'queuepath': value.queuepath,
        'compname': value.compname,
        'compduration': value.compduration,
        'startframe': value.startframe,
        'rqitem': value.rqitem,
        'threads': value.threads,
        'aepath': value.aepath,
        'maxthreads': value.maxthreads,
        'postrenders': ((value.postrenders as Array<any>).map(PostRenderToJSON)),
        'prerenders': value.prerenders === undefined ? undefined : (value.prerenders === null ? null : (value.prerenders as Array<any>).map(PreRenderToJSON)),
        'project': value.project,
    };
}

