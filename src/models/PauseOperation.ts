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

/**
 * 
 * @export
 * @enum {string}
 */
export enum PauseOperation {
    Pause = 'Pause',
    Continue = 'Continue'
}

export function PauseOperationFromJSON(json: any): PauseOperation {
    return PauseOperationFromJSONTyped(json, false);
}

export function PauseOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PauseOperation {
    return json as PauseOperation;
}

export function PauseOperationToJSON(value?: PauseOperation | null): any {
    return value as any;
}
