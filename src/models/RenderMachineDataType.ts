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
 * @interface RenderMachineDataType
 */
export interface RenderMachineDataType {
    /**
     * 
     * @type {string}
     * @memberof RenderMachineDataType
     */
    machineName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderMachineDataType
     */
    machineStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RenderMachineDataType
     */
    lastReplyTime?: string | null;
}

export function RenderMachineDataTypeFromJSON(json: any): RenderMachineDataType {
    return RenderMachineDataTypeFromJSONTyped(json, false);
}

export function RenderMachineDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RenderMachineDataType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'machineName': !exists(json, 'machineName') ? undefined : json['machineName'],
        'machineStatus': !exists(json, 'machineStatus') ? undefined : json['machineStatus'],
        'lastReplyTime': !exists(json, 'lastReplyTime') ? undefined : json['lastReplyTime'],
    };
}

export function RenderMachineDataTypeToJSON(value?: RenderMachineDataType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'machineName': value.machineName,
        'machineStatus': value.machineStatus,
        'lastReplyTime': value.lastReplyTime,
    };
}

