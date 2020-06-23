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


import * as runtime from '../runtime';
import {
    AeRendererState,
    AeRendererStateFromJSON,
    AeRendererStateToJSON,
    ApiOperationResult,
    ApiOperationResultFromJSON,
    ApiOperationResultToJSON,
    BGRendererInput,
    BGRendererInputFromJSON,
    BGRendererInputToJSON,
    CPUStats,
    CPUStatsFromJSON,
    CPUStatsToJSON,
    FfmpegSettings,
    FfmpegSettingsFromJSON,
    FfmpegSettingsToJSON,
    MirrorService,
    MirrorServiceFromJSON,
    MirrorServiceToJSON,
    NetworkRender,
    NetworkRenderFromJSON,
    NetworkRenderToJSON,
    PauseOperationPayload,
    PauseOperationPayloadFromJSON,
    PauseOperationPayloadToJSON,
    RenderQueueItemRemovePayload,
    RenderQueueItemRemovePayloadFromJSON,
    RenderQueueItemRemovePayloadToJSON,
    ServiceKey,
    ServiceKeyFromJSON,
    ServiceKeyToJSON,
    WsBroadcasterMessage,
    WsBroadcasterMessageFromJSON,
    WsBroadcasterMessageToJSON,
} from '../models';

export interface AddThreadRequest {
    xBGRMAXVersion?: string;
}

export interface CreateRenderGroupRequest {
    xBGRMAXVersion?: string;
}

export interface GetFfmpegSettingsRequest {
    xBGRMAXVersion?: string;
}

export interface GetMirrorServiceConfigRequest {
    xBGRMAXVersion?: string;
}

export interface GetModelRequest {
    xBGRMAXVersion?: string;
}

export interface GetNetworkRenderConfigRequest {
    xBGRMAXVersion?: string;
}

export interface GetServiceKeyRequest {
    xBGRMAXVersion?: string;
}

export interface GetWsBroadcasterMessageRequest {
    xBGRMAXVersion?: string;
}

export interface GreetRequest {
    xBGRMAXVersion?: string;
}

export interface KillAppRequest {
    xBGRMAXVersion?: string;
}

export interface KillAppPostRequest {
    xBGRMAXVersion?: string;
}

export interface PauseRequest {
    xBGRMAXVersion?: string;
    pauseOperationPayload?: PauseOperationPayload;
}

export interface PlaySoundRequest {
    xBGRMAXVersion?: string;
}

export interface RemoveQueueItemsRequest {
    xBGRMAXVersion?: string;
    renderQueueItemRemovePayload?: RenderQueueItemRemovePayload;
}

export interface RunAeRequest {
    xBGRMAXVersion?: string;
    bGRendererInput?: BGRendererInput;
}

export interface ScheduleQueueItemsRequest {
    xBGRMAXVersion?: string;
    bGRendererInput?: BGRendererInput;
}

export interface SetCPULimitRequest {
    xBGRMAXVersion?: string;
    cPUStats?: CPUStats;
}

export interface SetMirrorServiceConfigRequest {
    xBGRMAXVersion?: string;
    mirrorService?: MirrorService;
}

export interface SetNetworkRenderConfigRequest {
    xBGRMAXVersion?: string;
    networkRender?: NetworkRender;
}

/**
 * no description
 */
export class ApiApi extends runtime.BaseAPI {

    /**
     */
    async addThreadRaw(requestParameters: AddThreadRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/addThread`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async addThread(requestParameters: AddThreadRequest): Promise<void> {
        await this.addThreadRaw(requestParameters);
    }

    /**
     */
    async createRenderGroupRaw(requestParameters: CreateRenderGroupRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/createRenderGroup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async createRenderGroup(requestParameters: CreateRenderGroupRequest): Promise<void> {
        await this.createRenderGroupRaw(requestParameters);
    }

    /**
     */
    async getFfmpegSettingsRaw(requestParameters: GetFfmpegSettingsRequest): Promise<runtime.ApiResponse<FfmpegSettings>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/getFfmpegSettings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FfmpegSettingsFromJSON(jsonValue));
    }

    /**
     */
    async getFfmpegSettings(requestParameters: GetFfmpegSettingsRequest): Promise<FfmpegSettings> {
        const response = await this.getFfmpegSettingsRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getMirrorServiceConfigRaw(requestParameters: GetMirrorServiceConfigRequest): Promise<runtime.ApiResponse<MirrorService>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/mirrorConfig`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MirrorServiceFromJSON(jsonValue));
    }

    /**
     */
    async getMirrorServiceConfig(requestParameters: GetMirrorServiceConfigRequest): Promise<MirrorService> {
        const response = await this.getMirrorServiceConfigRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getModelRaw(requestParameters: GetModelRequest): Promise<runtime.ApiResponse<AeRendererState>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/model`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AeRendererStateFromJSON(jsonValue));
    }

    /**
     */
    async getModel(requestParameters: GetModelRequest): Promise<AeRendererState> {
        const response = await this.getModelRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getNetworkRenderConfigRaw(requestParameters: GetNetworkRenderConfigRequest): Promise<runtime.ApiResponse<NetworkRender>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/networkRenderConfig`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkRenderFromJSON(jsonValue));
    }

    /**
     */
    async getNetworkRenderConfig(requestParameters: GetNetworkRenderConfigRequest): Promise<NetworkRender> {
        const response = await this.getNetworkRenderConfigRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getServiceKeyRaw(requestParameters: GetServiceKeyRequest): Promise<runtime.ApiResponse<ServiceKey>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/serviceKey`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceKeyFromJSON(jsonValue));
    }

    /**
     */
    async getServiceKey(requestParameters: GetServiceKeyRequest): Promise<ServiceKey> {
        const response = await this.getServiceKeyRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getWsBroadcasterMessageRaw(requestParameters: GetWsBroadcasterMessageRequest): Promise<runtime.ApiResponse<WsBroadcasterMessage>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/wsBroadcasterMessage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WsBroadcasterMessageFromJSON(jsonValue));
    }

    /**
     */
    async getWsBroadcasterMessage(requestParameters: GetWsBroadcasterMessageRequest): Promise<WsBroadcasterMessage> {
        const response = await this.getWsBroadcasterMessageRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async greetRaw(requestParameters: GreetRequest): Promise<runtime.ApiResponse<string>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async greet(requestParameters: GreetRequest): Promise<string> {
        const response = await this.greetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async killAppRaw(requestParameters: KillAppRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/killApp`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async killApp(requestParameters: KillAppRequest): Promise<void> {
        await this.killAppRaw(requestParameters);
    }

    /**
     */
    async killAppPostRaw(requestParameters: KillAppPostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/killApp`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async killAppPost(requestParameters: KillAppPostRequest): Promise<void> {
        await this.killAppPostRaw(requestParameters);
    }

    /**
     */
    async pauseRaw(requestParameters: PauseRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/pause`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PauseOperationPayloadToJSON(requestParameters.pauseOperationPayload),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async pause(requestParameters: PauseRequest): Promise<void> {
        await this.pauseRaw(requestParameters);
    }

    /**
     */
    async playSoundRaw(requestParameters: PlaySoundRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/playSound`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async playSound(requestParameters: PlaySoundRequest): Promise<void> {
        await this.playSoundRaw(requestParameters);
    }

    /**
     */
    async removeQueueItemsRaw(requestParameters: RemoveQueueItemsRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/remove`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RenderQueueItemRemovePayloadToJSON(requestParameters.renderQueueItemRemovePayload),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async removeQueueItems(requestParameters: RemoveQueueItemsRequest): Promise<void> {
        await this.removeQueueItemsRaw(requestParameters);
    }

    /**
     */
    async runAeRaw(requestParameters: RunAeRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/run`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BGRendererInputToJSON(requestParameters.bGRendererInput),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async runAe(requestParameters: RunAeRequest): Promise<void> {
        await this.runAeRaw(requestParameters);
    }

    /**
     */
    async scheduleQueueItemsRaw(requestParameters: ScheduleQueueItemsRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/schedule`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BGRendererInputToJSON(requestParameters.bGRendererInput),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async scheduleQueueItems(requestParameters: ScheduleQueueItemsRequest): Promise<void> {
        await this.scheduleQueueItemsRaw(requestParameters);
    }

    /**
     */
    async setCPULimitRaw(requestParameters: SetCPULimitRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/cpulimit`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CPUStatsToJSON(requestParameters.cPUStats),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async setCPULimit(requestParameters: SetCPULimitRequest): Promise<void> {
        await this.setCPULimitRaw(requestParameters);
    }

    /**
     */
    async setMirrorServiceConfigRaw(requestParameters: SetMirrorServiceConfigRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/mirrorConfig`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MirrorServiceToJSON(requestParameters.mirrorService),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async setMirrorServiceConfig(requestParameters: SetMirrorServiceConfigRequest): Promise<void> {
        await this.setMirrorServiceConfigRaw(requestParameters);
    }

    /**
     */
    async setNetworkRenderConfigRaw(requestParameters: SetNetworkRenderConfigRequest): Promise<runtime.ApiResponse<ApiOperationResult>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xBGRMAXVersion !== undefined && requestParameters.xBGRMAXVersion !== null) {
            headerParameters['X-BGRMAX-Version'] = String(requestParameters.xBGRMAXVersion);
        }

        const response = await this.request({
            path: `/api/networkRenderConfig`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NetworkRenderToJSON(requestParameters.networkRender),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiOperationResultFromJSON(jsonValue));
    }

    /**
     */
    async setNetworkRenderConfig(requestParameters: SetNetworkRenderConfigRequest): Promise<ApiOperationResult> {
        const response = await this.setNetworkRenderConfigRaw(requestParameters);
        return await response.value();
    }

}
