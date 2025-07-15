// package: pandora
// file: pandora.proto

import * as pandora_pb from "./pandora_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GameServiceRecvGlobalCommand = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof pandora_pb.Empty;
  readonly responseType: typeof pandora_pb.GlobalEvent;
};

type GameServiceGetUserData = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.Request;
  readonly responseType: typeof pandora_pb.UserData;
};

type GameServiceCheckLocation = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraReady = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraShowEntrance = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraShowRedpoint = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraOpened = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraClosed = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraShowTextTip = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraShowLoading = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraOpenUrl = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraGoSystem = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraGoPandora = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraRefreshDiamond = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraRefreshPlayerLevel = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraGetUserInfo = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraShowReceivedItem = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ProtoRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraShareStructMessageToWX = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ShareStructMsgToWXRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraShareStructMessageToQQ = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ShareStructMsgToQQRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraSharePhotoToWX = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.SharePhotoToWXRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraSharePhotoToQQ = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.SharePhotoToQQRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraShareStructMessageToQQGameFriend = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ShareStructMsgToQQGameFriendRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraShareUrlToWX = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ShareUrlToWXRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraShareMiniAppToWX = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ShareMiniAppToWXRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServicePandoraShareMiniAppToQQ = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ShareMiniAppToQQRequest;
  readonly responseType: typeof pandora_pb.Empty;
};

type GameServiceCallGame = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.JsonRequest;
  readonly responseType: typeof pandora_pb.Response;
};

type GameServiceGameSendClose = {
  readonly methodName: string;
  readonly service: typeof GameService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.Empty;
  readonly responseType: typeof pandora_pb.Empty;
};

export class GameService {
  static readonly serviceName: string;
  static readonly RecvGlobalCommand: GameServiceRecvGlobalCommand;
  static readonly GetUserData: GameServiceGetUserData;
  static readonly CheckLocation: GameServiceCheckLocation;
  static readonly PandoraReady: GameServicePandoraReady;
  static readonly PandoraShowEntrance: GameServicePandoraShowEntrance;
  static readonly PandoraShowRedpoint: GameServicePandoraShowRedpoint;
  static readonly PandoraOpened: GameServicePandoraOpened;
  static readonly PandoraClosed: GameServicePandoraClosed;
  static readonly PandoraShowTextTip: GameServicePandoraShowTextTip;
  static readonly PandoraShowLoading: GameServicePandoraShowLoading;
  static readonly PandoraOpenUrl: GameServicePandoraOpenUrl;
  static readonly PandoraGoSystem: GameServicePandoraGoSystem;
  static readonly PandoraGoPandora: GameServicePandoraGoPandora;
  static readonly PandoraRefreshDiamond: GameServicePandoraRefreshDiamond;
  static readonly PandoraRefreshPlayerLevel: GameServicePandoraRefreshPlayerLevel;
  static readonly PandoraGetUserInfo: GameServicePandoraGetUserInfo;
  static readonly PandoraShowReceivedItem: GameServicePandoraShowReceivedItem;
  static readonly PandoraShareStructMessageToWX: GameServicePandoraShareStructMessageToWX;
  static readonly PandoraShareStructMessageToQQ: GameServicePandoraShareStructMessageToQQ;
  static readonly PandoraSharePhotoToWX: GameServicePandoraSharePhotoToWX;
  static readonly PandoraSharePhotoToQQ: GameServicePandoraSharePhotoToQQ;
  static readonly PandoraShareStructMessageToQQGameFriend: GameServicePandoraShareStructMessageToQQGameFriend;
  static readonly PandoraShareUrlToWX: GameServicePandoraShareUrlToWX;
  static readonly PandoraShareMiniAppToWX: GameServicePandoraShareMiniAppToWX;
  static readonly PandoraShareMiniAppToQQ: GameServicePandoraShareMiniAppToQQ;
  static readonly CallGame: GameServiceCallGame;
  static readonly GameSendClose: GameServiceGameSendClose;
}

type BackendServiceCallAtm = {
  readonly methodName: string;
  readonly service: typeof BackendService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.JsonRequest;
  readonly responseType: typeof pandora_pb.Response;
};

type BackendServiceCallBroker = {
  readonly methodName: string;
  readonly service: typeof BackendService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.BrokerRequest;
  readonly responseType: typeof pandora_pb.BrokerResponse;
};

type BackendServiceCallBrokerJson = {
  readonly methodName: string;
  readonly service: typeof BackendService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.JsonRequest;
  readonly responseType: typeof pandora_pb.Response;
};

type BackendServiceCallApplicationBroker = {
  readonly methodName: string;
  readonly service: typeof BackendService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ApplicationBrokerRequest;
  readonly responseType: typeof pandora_pb.Response;
};

type BackendServiceReportActivityError = {
  readonly methodName: string;
  readonly service: typeof BackendService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.ReportActivityErrorInfo;
  readonly responseType: typeof pandora_pb.Empty;
};

export class BackendService {
  static readonly serviceName: string;
  static readonly CallAtm: BackendServiceCallAtm;
  static readonly CallBroker: BackendServiceCallBroker;
  static readonly CallBrokerJson: BackendServiceCallBrokerJson;
  static readonly CallApplicationBroker: BackendServiceCallApplicationBroker;
  static readonly ReportActivityError: BackendServiceReportActivityError;
}

type GVoiceServiceSetAppInfo = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.GVoiceAppInfo;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceSetServerInfo = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.GVoiceServerInfo;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceInit = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.Empty;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceSetMode = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.GVoiceMode;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServicePoll = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.Empty;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServicePause = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.Empty;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceResume = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.Empty;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceJoinTeamRoom = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.GVoiceTeamRoomInfo;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceQuitRoom = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.GVoiceTeamRoomInfo;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceOpenMic = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.Empty;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceCloseMic = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.Empty;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceOpenSpeaker = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.Empty;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceCloseSpeaker = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.Empty;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceEnableRoomMicrophone = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.GVoiceRoomSetting;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

type GVoiceServiceEnableRoomSpeaker = {
  readonly methodName: string;
  readonly service: typeof GVoiceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pandora_pb.GVoiceRoomSetting;
  readonly responseType: typeof pandora_pb.GVoiceResponse;
};

export class GVoiceService {
  static readonly serviceName: string;
  static readonly SetAppInfo: GVoiceServiceSetAppInfo;
  static readonly SetServerInfo: GVoiceServiceSetServerInfo;
  static readonly Init: GVoiceServiceInit;
  static readonly SetMode: GVoiceServiceSetMode;
  static readonly Poll: GVoiceServicePoll;
  static readonly Pause: GVoiceServicePause;
  static readonly Resume: GVoiceServiceResume;
  static readonly JoinTeamRoom: GVoiceServiceJoinTeamRoom;
  static readonly QuitRoom: GVoiceServiceQuitRoom;
  static readonly OpenMic: GVoiceServiceOpenMic;
  static readonly CloseMic: GVoiceServiceCloseMic;
  static readonly OpenSpeaker: GVoiceServiceOpenSpeaker;
  static readonly CloseSpeaker: GVoiceServiceCloseSpeaker;
  static readonly EnableRoomMicrophone: GVoiceServiceEnableRoomMicrophone;
  static readonly EnableRoomSpeaker: GVoiceServiceEnableRoomSpeaker;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class GameServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  recvGlobalCommand(requestMessage: pandora_pb.Empty, metadata?: grpc.Metadata): ResponseStream<pandora_pb.GlobalEvent>;
  getUserData(
    requestMessage: pandora_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.UserData|null) => void
  ): UnaryResponse;
							async   getUserDataAsync(
								    requestMessage: pandora_pb.Request,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.UserData;
								}>;
							
  getUserData(
    requestMessage: pandora_pb.Request,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.UserData|null) => void
  ): UnaryResponse;
  checkLocation(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   checkLocationAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  checkLocation(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraReady(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraReadyAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraReady(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraShowEntrance(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraShowEntranceAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraShowEntrance(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraShowRedpoint(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraShowRedpointAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraShowRedpoint(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraOpened(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraOpenedAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraOpened(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraClosed(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraClosedAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraClosed(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraShowTextTip(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraShowTextTipAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraShowTextTip(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraShowLoading(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraShowLoadingAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraShowLoading(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraOpenUrl(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraOpenUrlAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraOpenUrl(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraGoSystem(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraGoSystemAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraGoSystem(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraGoPandora(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraGoPandoraAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraGoPandora(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraRefreshDiamond(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraRefreshDiamondAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraRefreshDiamond(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraRefreshPlayerLevel(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraRefreshPlayerLevelAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraRefreshPlayerLevel(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraGetUserInfo(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraGetUserInfoAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraGetUserInfo(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraShowReceivedItem(
    requestMessage: pandora_pb.ProtoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraShowReceivedItemAsync(
								    requestMessage: pandora_pb.ProtoRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraShowReceivedItem(
    requestMessage: pandora_pb.ProtoRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraShareStructMessageToWX(
    requestMessage: pandora_pb.ShareStructMsgToWXRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraShareStructMessageToWXAsync(
								    requestMessage: pandora_pb.ShareStructMsgToWXRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraShareStructMessageToWX(
    requestMessage: pandora_pb.ShareStructMsgToWXRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraShareStructMessageToQQ(
    requestMessage: pandora_pb.ShareStructMsgToQQRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraShareStructMessageToQQAsync(
								    requestMessage: pandora_pb.ShareStructMsgToQQRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraShareStructMessageToQQ(
    requestMessage: pandora_pb.ShareStructMsgToQQRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraSharePhotoToWX(
    requestMessage: pandora_pb.SharePhotoToWXRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraSharePhotoToWXAsync(
								    requestMessage: pandora_pb.SharePhotoToWXRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraSharePhotoToWX(
    requestMessage: pandora_pb.SharePhotoToWXRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraSharePhotoToQQ(
    requestMessage: pandora_pb.SharePhotoToQQRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraSharePhotoToQQAsync(
								    requestMessage: pandora_pb.SharePhotoToQQRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraSharePhotoToQQ(
    requestMessage: pandora_pb.SharePhotoToQQRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraShareStructMessageToQQGameFriend(
    requestMessage: pandora_pb.ShareStructMsgToQQGameFriendRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraShareStructMessageToQQGameFriendAsync(
								    requestMessage: pandora_pb.ShareStructMsgToQQGameFriendRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraShareStructMessageToQQGameFriend(
    requestMessage: pandora_pb.ShareStructMsgToQQGameFriendRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraShareUrlToWX(
    requestMessage: pandora_pb.ShareUrlToWXRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraShareUrlToWXAsync(
								    requestMessage: pandora_pb.ShareUrlToWXRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraShareUrlToWX(
    requestMessage: pandora_pb.ShareUrlToWXRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraShareMiniAppToWX(
    requestMessage: pandora_pb.ShareMiniAppToWXRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraShareMiniAppToWXAsync(
								    requestMessage: pandora_pb.ShareMiniAppToWXRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraShareMiniAppToWX(
    requestMessage: pandora_pb.ShareMiniAppToWXRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  pandoraShareMiniAppToQQ(
    requestMessage: pandora_pb.ShareMiniAppToQQRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   pandoraShareMiniAppToQQAsync(
								    requestMessage: pandora_pb.ShareMiniAppToQQRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  pandoraShareMiniAppToQQ(
    requestMessage: pandora_pb.ShareMiniAppToQQRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
  callGame(
    requestMessage: pandora_pb.JsonRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Response|null) => void
  ): UnaryResponse;
							async   callGameAsync(
								    requestMessage: pandora_pb.JsonRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Response;
								}>;
							
  callGame(
    requestMessage: pandora_pb.JsonRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Response|null) => void
  ): UnaryResponse;
  gameSendClose(
    requestMessage: pandora_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   gameSendCloseAsync(
								    requestMessage: pandora_pb.Empty,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  gameSendClose(
    requestMessage: pandora_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
}

export class BackendServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  callAtm(
    requestMessage: pandora_pb.JsonRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Response|null) => void
  ): UnaryResponse;
							async   callAtmAsync(
								    requestMessage: pandora_pb.JsonRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Response;
								}>;
							
  callAtm(
    requestMessage: pandora_pb.JsonRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Response|null) => void
  ): UnaryResponse;
  callBroker(
    requestMessage: pandora_pb.BrokerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.BrokerResponse|null) => void
  ): UnaryResponse;
							async   callBrokerAsync(
								    requestMessage: pandora_pb.BrokerRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.BrokerResponse;
								}>;
							
  callBroker(
    requestMessage: pandora_pb.BrokerRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.BrokerResponse|null) => void
  ): UnaryResponse;
  callBrokerJson(
    requestMessage: pandora_pb.JsonRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Response|null) => void
  ): UnaryResponse;
							async   callBrokerJsonAsync(
								    requestMessage: pandora_pb.JsonRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Response;
								}>;
							
  callBrokerJson(
    requestMessage: pandora_pb.JsonRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Response|null) => void
  ): UnaryResponse;
  callApplicationBroker(
    requestMessage: pandora_pb.ApplicationBrokerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Response|null) => void
  ): UnaryResponse;
							async   callApplicationBrokerAsync(
								    requestMessage: pandora_pb.ApplicationBrokerRequest,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Response;
								}>;
							
  callApplicationBroker(
    requestMessage: pandora_pb.ApplicationBrokerRequest,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Response|null) => void
  ): UnaryResponse;
  reportActivityError(
    requestMessage: pandora_pb.ReportActivityErrorInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
							async   reportActivityErrorAsync(
								    requestMessage: pandora_pb.ReportActivityErrorInfo,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.Empty;
								}>;
							
  reportActivityError(
    requestMessage: pandora_pb.ReportActivityErrorInfo,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.Empty|null) => void
  ): UnaryResponse;
}

export class GVoiceServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  setAppInfo(
    requestMessage: pandora_pb.GVoiceAppInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   setAppInfoAsync(
								    requestMessage: pandora_pb.GVoiceAppInfo,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  setAppInfo(
    requestMessage: pandora_pb.GVoiceAppInfo,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  setServerInfo(
    requestMessage: pandora_pb.GVoiceServerInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   setServerInfoAsync(
								    requestMessage: pandora_pb.GVoiceServerInfo,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  setServerInfo(
    requestMessage: pandora_pb.GVoiceServerInfo,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  init(
    requestMessage: pandora_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   initAsync(
								    requestMessage: pandora_pb.Empty,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  init(
    requestMessage: pandora_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  setMode(
    requestMessage: pandora_pb.GVoiceMode,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   setModeAsync(
								    requestMessage: pandora_pb.GVoiceMode,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  setMode(
    requestMessage: pandora_pb.GVoiceMode,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  poll(
    requestMessage: pandora_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   pollAsync(
								    requestMessage: pandora_pb.Empty,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  poll(
    requestMessage: pandora_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  pause(
    requestMessage: pandora_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   pauseAsync(
								    requestMessage: pandora_pb.Empty,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  pause(
    requestMessage: pandora_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  resume(
    requestMessage: pandora_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   resumeAsync(
								    requestMessage: pandora_pb.Empty,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  resume(
    requestMessage: pandora_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  joinTeamRoom(
    requestMessage: pandora_pb.GVoiceTeamRoomInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   joinTeamRoomAsync(
								    requestMessage: pandora_pb.GVoiceTeamRoomInfo,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  joinTeamRoom(
    requestMessage: pandora_pb.GVoiceTeamRoomInfo,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  quitRoom(
    requestMessage: pandora_pb.GVoiceTeamRoomInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   quitRoomAsync(
								    requestMessage: pandora_pb.GVoiceTeamRoomInfo,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  quitRoom(
    requestMessage: pandora_pb.GVoiceTeamRoomInfo,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  openMic(
    requestMessage: pandora_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   openMicAsync(
								    requestMessage: pandora_pb.Empty,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  openMic(
    requestMessage: pandora_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  closeMic(
    requestMessage: pandora_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   closeMicAsync(
								    requestMessage: pandora_pb.Empty,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  closeMic(
    requestMessage: pandora_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  openSpeaker(
    requestMessage: pandora_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   openSpeakerAsync(
								    requestMessage: pandora_pb.Empty,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  openSpeaker(
    requestMessage: pandora_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  closeSpeaker(
    requestMessage: pandora_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   closeSpeakerAsync(
								    requestMessage: pandora_pb.Empty,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  closeSpeaker(
    requestMessage: pandora_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  enableRoomMicrophone(
    requestMessage: pandora_pb.GVoiceRoomSetting,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   enableRoomMicrophoneAsync(
								    requestMessage: pandora_pb.GVoiceRoomSetting,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  enableRoomMicrophone(
    requestMessage: pandora_pb.GVoiceRoomSetting,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
  enableRoomSpeaker(
    requestMessage: pandora_pb.GVoiceRoomSetting,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
							async   enableRoomSpeakerAsync(
								    requestMessage: pandora_pb.GVoiceRoomSetting,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:pandora_pb.GVoiceResponse;
								}>;
							
  enableRoomSpeaker(
    requestMessage: pandora_pb.GVoiceRoomSetting,
    callback: (error: ServiceError|null, responseMessage: pandora_pb.GVoiceResponse|null) => void
  ): UnaryResponse;
}

