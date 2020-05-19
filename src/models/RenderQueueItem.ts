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
 * @interface RenderQueueItem
 */
export interface RenderQueueItem {
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    rqNum?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RenderQueueItem
     */
    threadsInProgress?: number;
    /**
     * 
     * @type {number}
     * @memberof RenderQueueItem
     */
    threadsFinished?: number;
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    isDone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    hasError?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    project?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    path?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    resultPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    compName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    compDuration?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    startFrame?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    frameRate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    startTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderQueueItem
     */
    endTime?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RenderQueueItem
     */
    maxThreads?: number;
    /**
     * 
     * @type {Array<PostRender>}
     * @memberof RenderQueueItem
     */
    postRenders?: Array<PostRender> | null;
    /**
     * 
     * @type {Array<PreRender>}
     * @memberof RenderQueueItem
     */
    preRenders?: Array<PreRender> | null;
}

export function RenderQueueItemFromJSON(json: any): RenderQueueItem {
    return RenderQueueItemFromJSONTyped(json, false);
}

export function RenderQueueItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): RenderQueueItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rqNum': !exists(json, 'rqNum') ? undefined : json['rqNum'],
        'threadsInProgress': !exists(json, 'threadsInProgress') ? undefined : json['threadsInProgress'],
        'threadsFinished': !exists(json, 'threadsFinished') ? undefined : json['threadsFinished'],
        'isDone': !exists(json, 'isDone') ? undefined : json['isDone'],
        'hasError': !exists(json, 'hasError') ? undefined : json['hasError'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'resultPath': !exists(json, 'resultPath') ? undefined : json['resultPath'],
        'compName': !exists(json, 'compName') ? undefined : json['compName'],
        'compDuration': !exists(json, 'compDuration') ? undefined : json['compDuration'],
        'startFrame': !exists(json, 'startFrame') ? undefined : json['startFrame'],
        'frameRate': !exists(json, 'frameRate') ? undefined : json['frameRate'],
        'startTime': !exists(json, 'startTime') ? undefined : json['startTime'],
        'endTime': !exists(json, 'endTime') ? undefined : json['endTime'],
        'maxThreads': !exists(json, 'maxThreads') ? undefined : json['maxThreads'],
        'postRenders': !exists(json, 'postRenders') ? undefined : (json['postRenders'] === null ? null : (json['postRenders'] as Array<any>).map(PostRenderFromJSON)),
        'preRenders': !exists(json, 'preRenders') ? undefined : (json['preRenders'] === null ? null : (json['preRenders'] as Array<any>).map(PreRenderFromJSON)),
    };
}

export function RenderQueueItemToJSON(value?: RenderQueueItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rqNum': value.rqNum,
        'threadsInProgress': value.threadsInProgress,
        'threadsFinished': value.threadsFinished,
        'isDone': value.isDone,
        'hasError': value.hasError,
        'project': value.project,
        'path': value.path,
        'resultPath': value.resultPath,
        'compName': value.compName,
        'compDuration': value.compDuration,
        'startFrame': value.startFrame,
        'frameRate': value.frameRate,
        'startTime': value.startTime,
        'endTime': value.endTime,
        'maxThreads': value.maxThreads,
        'postRenders': value.postRenders === undefined ? undefined : (value.postRenders === null ? null : (value.postRenders as Array<any>).map(PostRenderToJSON)),
        'preRenders': value.preRenders === undefined ? undefined : (value.preRenders === null ? null : (value.preRenders as Array<any>).map(PreRenderToJSON)),
    };
}


