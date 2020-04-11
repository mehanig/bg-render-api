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
 * @interface CPUStats
 */
export interface CPUStats {
    /**
     * 
     * @type {number}
     * @memberof CPUStats
     */
    percents?: number;
    /**
     * 
     * @type {number}
     * @memberof CPUStats
     */
    limit?: number;
}

export function CPUStatsFromJSON(json: any): CPUStats {
    return CPUStatsFromJSONTyped(json, false);
}

export function CPUStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CPUStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'percents': !exists(json, 'Percents') ? undefined : json['Percents'],
        'limit': !exists(json, 'Limit') ? undefined : json['Limit'],
    };
}

export function CPUStatsToJSON(value?: CPUStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Percents': value.percents,
        'Limit': value.limit,
    };
}

