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
    WsBroadcasterMessageMachineDataType,
    WsBroadcasterMessageMachineDataTypeFromJSON,
    WsBroadcasterMessageMachineDataTypeFromJSONTyped,
    WsBroadcasterMessageMachineDataTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface WsBroadcasterMessageGroupDataType
 */
export interface WsBroadcasterMessageGroupDataType {
    /**
     * 
     * @type {string}
     * @memberof WsBroadcasterMessageGroupDataType
     */
    groupId?: string | null;
    /**
     * 
     * @type {WsBroadcasterMessageMachineDataType}
     * @memberof WsBroadcasterMessageGroupDataType
     */
    owner?: WsBroadcasterMessageMachineDataType;
    /**
     * 
     * @type {Array<WsBroadcasterMessageMachineDataType>}
     * @memberof WsBroadcasterMessageGroupDataType
     */
    joined?: Array<WsBroadcasterMessageMachineDataType> | null;
}

export function WsBroadcasterMessageGroupDataTypeFromJSON(json: any): WsBroadcasterMessageGroupDataType {
    return WsBroadcasterMessageGroupDataTypeFromJSONTyped(json, false);
}

export function WsBroadcasterMessageGroupDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WsBroadcasterMessageGroupDataType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groupId': !exists(json, 'groupId') ? undefined : json['groupId'],
        'owner': !exists(json, 'owner') ? undefined : WsBroadcasterMessageMachineDataTypeFromJSON(json['owner']),
        'joined': !exists(json, 'joined') ? undefined : (json['joined'] === null ? null : (json['joined'] as Array<any>).map(WsBroadcasterMessageMachineDataTypeFromJSON)),
    };
}

export function WsBroadcasterMessageGroupDataTypeToJSON(value?: WsBroadcasterMessageGroupDataType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groupId': value.groupId,
        'owner': WsBroadcasterMessageMachineDataTypeToJSON(value.owner),
        'joined': value.joined === undefined ? undefined : (value.joined === null ? null : (value.joined as Array<any>).map(WsBroadcasterMessageMachineDataTypeToJSON)),
    };
}


