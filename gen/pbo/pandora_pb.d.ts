// package: pandora
// file: pandora.proto

import * as jspb from "google-protobuf";

export class UserData extends jspb.Message {
  getRoleId(): string;
  setRoleId(value: string): this;

  getOpenId(): string;
  setOpenId(value: string): this;

  getServiceType(): string;
  setServiceType(value: string): this;

  getAcountType(): string;
  setAcountType(value: string): this;

  getArea(): string;
  setArea(value: string): this;

  getPartition(): string;
  setPartition(value: string): this;

  getAppId(): string;
  setAppId(value: string): this;

  getAccessToken(): string;
  setAccessToken(value: string): this;

  getPayToken(): string;
  setPayToken(value: string): this;

  getGameVer(): string;
  setGameVer(value: string): this;

  getPlatId(): string;
  setPlatId(value: string): this;

  getGameName(): string;
  setGameName(value: string): this;

  getMsdkGameId(): string;
  setMsdkGameId(value: string): this;

  getSdkVersion(): string;
  setSdkVersion(value: string): this;

  getLevel(): string;
  setLevel(value: string): this;

  getVender(): string;
  setVender(value: string): this;

  getOs(): string;
  setOs(value: string): this;

  getChannelId(): string;
  setChannelId(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDataAsObject;
  static toObject(includeInstance: boolean, msg: UserData): UserDataAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserData;
  static deserializeBinaryFromReader(message: UserData, reader: jspb.BinaryReader): UserData;
}

  export type UserDataAsObject = {
    roleId: string,
    openId: string,
    serviceType: string,
    acountType: string,
    area: string,
    partition: string,
    appId: string,
    accessToken: string,
    payToken: string,
    gameVer: string,
    platId: string,
    gameName: string,
    msdkGameId: string,
    sdkVersion: string,
    level: string,
    vender: string,
    os: string,
    channelId: string,

}

export class Request extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestAsObject;
  static toObject(includeInstance: boolean, msg: Request): RequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

  export type RequestAsObject = {

}

export class Response extends jspb.Message {
  getRet(): number;
  setRet(value: number): this;

  getMessage(): string;
  setMessage(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseAsObject;
  static toObject(includeInstance: boolean, msg: Response): ResponseAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

  export type ResponseAsObject = {
    ret: number,
    message: string,

}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyAsObject;
  static toObject(includeInstance: boolean, msg: Empty): EmptyAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

  export type EmptyAsObject = {

}

export class JsonRequest extends jspb.Message {
  getCommandId(): number;
  setCommandId(value: number): this;

  getMessage(): string;
  setMessage(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JsonRequestAsObject;
  static toObject(includeInstance: boolean, msg: JsonRequest): JsonRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JsonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JsonRequest;
  static deserializeBinaryFromReader(message: JsonRequest, reader: jspb.BinaryReader): JsonRequest;
}

  export type JsonRequestAsObject = {
    commandId: number,
    message: string,

}

export class GlobalEvent extends jspb.Message {
  getType(): string;
  setType(value: string): this;

  getContent(): string;
  setContent(value: string): this;

  getExtend(): string;
  setExtend(value: string): this;

  getCount(): number;
  setCount(value: number): this;

  getRoomName(): string;
  setRoomName(value: string): this;

  getMember(): number;
  setMember(value: number): this;

  getStatus(): number;
  setStatus(value: number): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalEventAsObject;
  static toObject(includeInstance: boolean, msg: GlobalEvent): GlobalEventAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GlobalEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalEvent;
  static deserializeBinaryFromReader(message: GlobalEvent, reader: jspb.BinaryReader): GlobalEvent;
}

  export type GlobalEventAsObject = {
    type: string,
    content: string,
    extend: string,
    count: number,
    roomName: string,
    member: number,
    status: number,

}

export class ProtoRequest extends jspb.Message {
  getContent(): string;
  setContent(value: string): this;

  getActivityName(): string;
  setActivityName(value: string): this;

  getInfo(): string;
  setInfo(value: string): this;

  getParam1(): string;
  setParam1(value: string): this;

  getParam2(): string;
  setParam2(value: string): this;

  getOpenIds(): string;
  setOpenIds(value: string): this;

  getSource(): string;
  setSource(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtoRequestAsObject;
  static toObject(includeInstance: boolean, msg: ProtoRequest): ProtoRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtoRequest;
  static deserializeBinaryFromReader(message: ProtoRequest, reader: jspb.BinaryReader): ProtoRequest;
}

  export type ProtoRequestAsObject = {
    content: string,
    activityName: string,
    info: string,
    param1: string,
    param2: string,
    openIds: string,
    source: string,

}

export class ShareStructMsgToWXRequest extends jspb.Message {
  getType(): string;
  setType(value: string): this;

  getTitle(): string;
  setTitle(value: string): this;

  getDesc(): string;
  setDesc(value: string): this;

  getMediaTagName(): string;
  setMediaTagName(value: string): this;

  getTargetUrl(): string;
  setTargetUrl(value: string): this;

  getImgUrl(): string;
  setImgUrl(value: string): this;

  getMessageExt(): string;
  setMessageExt(value: string): this;

  getUserOpenId(): string;
  setUserOpenId(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareStructMsgToWXRequestAsObject;
  static toObject(includeInstance: boolean, msg: ShareStructMsgToWXRequest): ShareStructMsgToWXRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareStructMsgToWXRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareStructMsgToWXRequest;
  static deserializeBinaryFromReader(message: ShareStructMsgToWXRequest, reader: jspb.BinaryReader): ShareStructMsgToWXRequest;
}

  export type ShareStructMsgToWXRequestAsObject = {
    type: string,
    title: string,
    desc: string,
    mediaTagName: string,
    targetUrl: string,
    imgUrl: string,
    messageExt: string,
    userOpenId: string,

}

export class ShareStructMsgToQQRequest extends jspb.Message {
  getType(): string;
  setType(value: string): this;

  getScene(): string;
  setScene(value: string): this;

  getTitle(): string;
  setTitle(value: string): this;

  getDesc(): string;
  setDesc(value: string): this;

  getTargetUrl(): string;
  setTargetUrl(value: string): this;

  getImgUrl(): string;
  setImgUrl(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareStructMsgToQQRequestAsObject;
  static toObject(includeInstance: boolean, msg: ShareStructMsgToQQRequest): ShareStructMsgToQQRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareStructMsgToQQRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareStructMsgToQQRequest;
  static deserializeBinaryFromReader(message: ShareStructMsgToQQRequest, reader: jspb.BinaryReader): ShareStructMsgToQQRequest;
}

  export type ShareStructMsgToQQRequestAsObject = {
    type: string,
    scene: string,
    title: string,
    desc: string,
    targetUrl: string,
    imgUrl: string,

}

export class SharePhotoToWXRequest extends jspb.Message {
  getType(): string;
  setType(value: string): this;

  getScene(): string;
  setScene(value: string): this;

  getMediaTagName(): string;
  setMediaTagName(value: string): this;

  getMessageExt(): string;
  setMessageExt(value: string): this;

  getMessageAction(): string;
  setMessageAction(value: string): this;

  getGameObjectPath(): string;
  setGameObjectPath(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharePhotoToWXRequestAsObject;
  static toObject(includeInstance: boolean, msg: SharePhotoToWXRequest): SharePhotoToWXRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharePhotoToWXRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharePhotoToWXRequest;
  static deserializeBinaryFromReader(message: SharePhotoToWXRequest, reader: jspb.BinaryReader): SharePhotoToWXRequest;
}

  export type SharePhotoToWXRequestAsObject = {
    type: string,
    scene: string,
    mediaTagName: string,
    messageExt: string,
    messageAction: string,
    gameObjectPath: string,

}

export class SharePhotoToQQRequest extends jspb.Message {
  getType(): string;
  setType(value: string): this;

  getScene(): string;
  setScene(value: string): this;

  getGameObjectPath(): string;
  setGameObjectPath(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharePhotoToQQRequestAsObject;
  static toObject(includeInstance: boolean, msg: SharePhotoToQQRequest): SharePhotoToQQRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharePhotoToQQRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharePhotoToQQRequest;
  static deserializeBinaryFromReader(message: SharePhotoToQQRequest, reader: jspb.BinaryReader): SharePhotoToQQRequest;
}

  export type SharePhotoToQQRequestAsObject = {
    type: string,
    scene: string,
    gameObjectPath: string,

}

export class ShareStructMsgToQQGameFriendRequest extends jspb.Message {
  getType(): string;
  setType(value: string): this;

  getAct(): string;
  setAct(value: string): this;

  getUserOpenId(): string;
  setUserOpenId(value: string): this;

  getTitle(): string;
  setTitle(value: string): this;

  getDesc(): string;
  setDesc(value: string): this;

  getTargetUrl(): string;
  setTargetUrl(value: string): this;

  getImgUrl(): string;
  setImgUrl(value: string): this;

  getPreviewText(): string;
  setPreviewText(value: string): this;

  getGameTag(): string;
  setGameTag(value: string): this;

  getMsdkExtInfo(): string;
  setMsdkExtInfo(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareStructMsgToQQGameFriendRequestAsObject;
  static toObject(includeInstance: boolean, msg: ShareStructMsgToQQGameFriendRequest): ShareStructMsgToQQGameFriendRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareStructMsgToQQGameFriendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareStructMsgToQQGameFriendRequest;
  static deserializeBinaryFromReader(message: ShareStructMsgToQQGameFriendRequest, reader: jspb.BinaryReader): ShareStructMsgToQQGameFriendRequest;
}

  export type ShareStructMsgToQQGameFriendRequestAsObject = {
    type: string,
    act: string,
    userOpenId: string,
    title: string,
    desc: string,
    targetUrl: string,
    imgUrl: string,
    previewText: string,
    gameTag: string,
    msdkExtInfo: string,

}

export class ShareUrlToWXRequest extends jspb.Message {
  getType(): string;
  setType(value: string): this;

  getScene(): string;
  setScene(value: string): this;

  getTitle(): string;
  setTitle(value: string): this;

  getDesc(): string;
  setDesc(value: string): this;

  getTargetUrl(): string;
  setTargetUrl(value: string): this;

  getMediaTagName(): string;
  setMediaTagName(value: string): this;

  getImgUrl(): string;
  setImgUrl(value: string): this;

  getMessageExt(): string;
  setMessageExt(value: string): this;

  getUserOpenId(): string;
  setUserOpenId(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareUrlToWXRequestAsObject;
  static toObject(includeInstance: boolean, msg: ShareUrlToWXRequest): ShareUrlToWXRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareUrlToWXRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareUrlToWXRequest;
  static deserializeBinaryFromReader(message: ShareUrlToWXRequest, reader: jspb.BinaryReader): ShareUrlToWXRequest;
}

  export type ShareUrlToWXRequestAsObject = {
    type: string,
    scene: string,
    title: string,
    desc: string,
    targetUrl: string,
    mediaTagName: string,
    imgUrl: string,
    messageExt: string,
    userOpenId: string,

}

export class ShareMiniAppToWXRequest extends jspb.Message {
  getType(): string;
  setType(value: string): this;

  getScene(): string;
  setScene(value: string): this;

  getTitle(): string;
  setTitle(value: string): this;

  getDesc(): string;
  setDesc(value: string): this;

  getImgUrl(): string;
  setImgUrl(value: string): this;

  getWebpageUrl(): string;
  setWebpageUrl(value: string): this;

  getUserName(): string;
  setUserName(value: string): this;

  getPath(): string;
  setPath(value: string): this;

  getWithShareTicket(): string;
  setWithShareTicket(value: string): this;

  getMessageExt(): string;
  setMessageExt(value: string): this;

  getMessageAction(): string;
  setMessageAction(value: string): this;

  getMediaTagName(): string;
  setMediaTagName(value: string): this;

  getProgramType(): string;
  setProgramType(value: string): this;

  getUserOpenId(): string;
  setUserOpenId(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareMiniAppToWXRequestAsObject;
  static toObject(includeInstance: boolean, msg: ShareMiniAppToWXRequest): ShareMiniAppToWXRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareMiniAppToWXRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareMiniAppToWXRequest;
  static deserializeBinaryFromReader(message: ShareMiniAppToWXRequest, reader: jspb.BinaryReader): ShareMiniAppToWXRequest;
}

  export type ShareMiniAppToWXRequestAsObject = {
    type: string,
    scene: string,
    title: string,
    desc: string,
    imgUrl: string,
    webpageUrl: string,
    userName: string,
    path: string,
    withShareTicket: string,
    messageExt: string,
    messageAction: string,
    mediaTagName: string,
    programType: string,
    userOpenId: string,

}

export class ShareMiniAppToQQRequest extends jspb.Message {
  getType(): string;
  setType(value: string): this;

  getScene(): string;
  setScene(value: string): this;

  getTitle(): string;
  setTitle(value: string): this;

  getDesc(): string;
  setDesc(value: string): this;

  getImgUrl(): string;
  setImgUrl(value: string): this;

  getUrl(): string;
  setUrl(value: string): this;

  getMiniProgramAppid(): string;
  setMiniProgramAppid(value: string): this;

  getMiniProgramPath(): string;
  setMiniProgramPath(value: string): this;

  getProgramType(): string;
  setProgramType(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareMiniAppToQQRequestAsObject;
  static toObject(includeInstance: boolean, msg: ShareMiniAppToQQRequest): ShareMiniAppToQQRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareMiniAppToQQRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareMiniAppToQQRequest;
  static deserializeBinaryFromReader(message: ShareMiniAppToQQRequest, reader: jspb.BinaryReader): ShareMiniAppToQQRequest;
}

  export type ShareMiniAppToQQRequestAsObject = {
    type: string,
    scene: string,
    title: string,
    desc: string,
    imgUrl: string,
    url: string,
    miniProgramAppid: string,
    miniProgramPath: string,
    programType: string,

}

export class BrokerHead extends jspb.Message {
  getSeqId(): string;
  setSeqId(value: string): this;

  getCmdId(): string;
  setCmdId(value: string): this;

  getMsgType(): string;
  setMsgType(value: string): this;

  getSdkVersion(): string;
  setSdkVersion(value: string): this;

  getGameAppId(): string;
  setGameAppId(value: string): this;

  getChannelId(): string;
  setChannelId(value: string): this;

  getInfoId(): string;
  setInfoId(value: string): this;

  getPlatId(): string;
  setPlatId(value: string): this;

  getAreaId(): string;
  setAreaId(value: string): this;

  getPatitionId(): string;
  setPatitionId(value: string): this;

  getOpenId(): string;
  setOpenId(value: string): this;

  getRoleId(): string;
  setRoleId(value: string): this;

  getTimestamp(): string;
  setTimestamp(value: string): this;

  getActStyle(): string;
  setActStyle(value: string): this;

  getFromIp(): string;
  setFromIp(value: string): this;

  getBody(): string;
  setBody(value: string): this;

  getAccessToken(): string;
  setAccessToken(value: string): this;

  getAccType(): string;
  setAccType(value: string): this;

  getGameEnv(): string;
  setGameEnv(value: string): this;

  getPandoraSeq(): string;
  setPandoraSeq(value: string): this;

  getPf(): string;
  setPf(value: string): this;

  getReqTimestamp(): string;
  setReqTimestamp(value: string): this;

  getRspTimestamp(): string;
  setRspTimestamp(value: string): this;

  getResult(): string;
  setResult(value: string): this;

  getIsInfoidlist(): string;
  setIsInfoidlist(value: string): this;

  getLanguage(): string;
  setLanguage(value: string): this;

  getSource(): string;
  setSource(value: string): this;

  getErrDesc(): string;
  setErrDesc(value: string): this;

  getCredid(): string;
  setCredid(value: string): this;

  getPandoraRoleKey(): string;
  setPandoraRoleKey(value: string): this;

  getProxyMainCmdId(): string;
  setProxyMainCmdId(value: string): this;

  getSig(): string;
  setSig(value: string): this;

  getBelongingId(): string;
  setBelongingId(value: string): this;

  getOpVersion(): string;
  setOpVersion(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrokerHeadAsObject;
  static toObject(includeInstance: boolean, msg: BrokerHead): BrokerHeadAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BrokerHead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrokerHead;
  static deserializeBinaryFromReader(message: BrokerHead, reader: jspb.BinaryReader): BrokerHead;
}

  export type BrokerHeadAsObject = {
    seqId: string,
    cmdId: string,
    msgType: string,
    sdkVersion: string,
    gameAppId: string,
    channelId: string,
    infoId: string,
    platId: string,
    areaId: string,
    patitionId: string,
    openId: string,
    roleId: string,
    timestamp: string,
    actStyle: string,
    fromIp: string,
    body: string,
    accessToken: string,
    accType: string,
    gameEnv: string,
    pandoraSeq: string,
    pf: string,
    reqTimestamp: string,
    rspTimestamp: string,
    result: string,
    isInfoidlist: string,
    language: string,
    source: string,
    errDesc: string,
    credid: string,
    pandoraRoleKey: string,
    proxyMainCmdId: string,
    sig: string,
    belongingId: string,
    opVersion: string,

}

export class Act_info extends jspb.Message {
  getTag(): string;
  setTag(value: string): this;

  getActPriority(): string;
  setActPriority(value: string): this;

  getInfoId(): string;
  setInfoId(value: string): this;

  getActContent(): string;
  setActContent(value: string): this;

  getDaojuchengId(): string;
  setDaojuchengId(value: string): this;

  getActStyle(): string;
  setActStyle(value: string): this;

  getActTitle(): string;
  setActTitle(value: string): this;

  getActBegTime(): string;
  setActBegTime(value: string): this;

  getActEndTime(): string;
  setActEndTime(value: string): this;

  getStatus(): string;
  setStatus(value: string): this;

  getGameVers(): string;
  setGameVers(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Act_infoAsObject;
  static toObject(includeInstance: boolean, msg: Act_info): Act_infoAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Act_info, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Act_info;
  static deserializeBinaryFromReader(message: Act_info, reader: jspb.BinaryReader): Act_info;
}

  export type Act_infoAsObject = {
    tag: string,
    actPriority: string,
    infoId: string,
    actContent: string,
    daojuchengId: string,
    actStyle: string,
    actTitle: string,
    actBegTime: string,
    actEndTime: string,
    status: string,
    gameVers: string,

}

export class Online_msg_info extends jspb.Message {
  clearActListList(): void;
  getActListList(): Array<Act_info>;
  setActListList(value: Array<Act_info>): this;
  addActList(value?: Act_info, index?: number): Act_info;

  getActNum(): string;
  setActNum(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Online_msg_infoAsObject;
  static toObject(includeInstance: boolean, msg: Online_msg_info): Online_msg_infoAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Online_msg_info, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Online_msg_info;
  static deserializeBinaryFromReader(message: Online_msg_info, reader: jspb.BinaryReader): Online_msg_info;
}

  export type Online_msg_infoAsObject = {
    actListList: Array<Act_infoAsObject>,
    actNum: string,

}

export class BrokerBody extends jspb.Message {
  hasOnlineMsgInfo(): boolean;
  clearOnlineMsgInfo(): void;
  getOnlineMsgInfo(): Online_msg_info | undefined;
  setOnlineMsgInfo(value?: Online_msg_info): this;

  getMd5Val(): string;
  setMd5Val(value: string): this;

  getRet(): string;
  setRet(value: string): this;

  getErrMsg(): string;
  setErrMsg(value: string): this;

  getTipMsg(): string;
  setTipMsg(value: string): this;

  getExtendInfo(): string;
  setExtendInfo(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrokerBodyAsObject;
  static toObject(includeInstance: boolean, msg: BrokerBody): BrokerBodyAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BrokerBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrokerBody;
  static deserializeBinaryFromReader(message: BrokerBody, reader: jspb.BinaryReader): BrokerBody;
}

  export type BrokerBodyAsObject = {
    onlineMsgInfo?: Online_msg_infoAsObject,
    md5Val: string,
    ret: string,
    errMsg: string,
    tipMsg: string,
    extendInfo: string,

}

export class BrokerMessage extends jspb.Message {
  hasHead(): boolean;
  clearHead(): void;
  getHead(): BrokerHead | undefined;
  setHead(value?: BrokerHead): this;

  hasBody(): boolean;
  clearBody(): void;
  getBody(): BrokerBody | undefined;
  setBody(value?: BrokerBody): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrokerMessageAsObject;
  static toObject(includeInstance: boolean, msg: BrokerMessage): BrokerMessageAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BrokerMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrokerMessage;
  static deserializeBinaryFromReader(message: BrokerMessage, reader: jspb.BinaryReader): BrokerMessage;
}

  export type BrokerMessageAsObject = {
    head?: BrokerHeadAsObject,
    body?: BrokerBodyAsObject,

}

export class BrokerRequest extends jspb.Message {
  getCommandId(): number;
  setCommandId(value: number): this;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): BrokerMessage | undefined;
  setMessage(value?: BrokerMessage): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrokerRequestAsObject;
  static toObject(includeInstance: boolean, msg: BrokerRequest): BrokerRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BrokerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrokerRequest;
  static deserializeBinaryFromReader(message: BrokerRequest, reader: jspb.BinaryReader): BrokerRequest;
}

  export type BrokerRequestAsObject = {
    commandId: number,
    message?: BrokerMessageAsObject,

}

export class ApplicationBrokerRequest extends jspb.Message {
  getCommandId(): number;
  setCommandId(value: number): this;

  getSubCommandId(): number;
  setSubCommandId(value: number): this;

  getApplicationId(): number;
  setApplicationId(value: number): this;

  getAppKey(): string;
  setAppKey(value: string): this;

  getRequestBodyStr(): string;
  setRequestBodyStr(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationBrokerRequestAsObject;
  static toObject(includeInstance: boolean, msg: ApplicationBrokerRequest): ApplicationBrokerRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationBrokerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationBrokerRequest;
  static deserializeBinaryFromReader(message: ApplicationBrokerRequest, reader: jspb.BinaryReader): ApplicationBrokerRequest;
}

  export type ApplicationBrokerRequestAsObject = {
    commandId: number,
    subCommandId: number,
    applicationId: number,
    appKey: string,
    requestBodyStr: string,

}

export class BrokerResponse extends jspb.Message {
  getCommandId(): number;
  setCommandId(value: number): this;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): BrokerMessage | undefined;
  setMessage(value?: BrokerMessage): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrokerResponseAsObject;
  static toObject(includeInstance: boolean, msg: BrokerResponse): BrokerResponseAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BrokerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrokerResponse;
  static deserializeBinaryFromReader(message: BrokerResponse, reader: jspb.BinaryReader): BrokerResponse;
}

  export type BrokerResponseAsObject = {
    commandId: number,
    message?: BrokerMessageAsObject,

}

export class ReportActivityErrorInfo extends jspb.Message {
  getErrMsg(): string;
  setErrMsg(value: string): this;

  getApplicationId(): number;
  setApplicationId(value: number): this;

  getTnmId(): number;
  setTnmId(value: number): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportActivityErrorInfoAsObject;
  static toObject(includeInstance: boolean, msg: ReportActivityErrorInfo): ReportActivityErrorInfoAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportActivityErrorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportActivityErrorInfo;
  static deserializeBinaryFromReader(message: ReportActivityErrorInfo, reader: jspb.BinaryReader): ReportActivityErrorInfo;
}

  export type ReportActivityErrorInfoAsObject = {
    errMsg: string,
    applicationId: number,
    tnmId: number,

}

export class GVoiceResponse extends jspb.Message {
  getRet(): number;
  setRet(value: number): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GVoiceResponseAsObject;
  static toObject(includeInstance: boolean, msg: GVoiceResponse): GVoiceResponseAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GVoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GVoiceResponse;
  static deserializeBinaryFromReader(message: GVoiceResponse, reader: jspb.BinaryReader): GVoiceResponse;
}

  export type GVoiceResponseAsObject = {
    ret: number,

}

export class GVoiceAppInfo extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): this;

  getAppKey(): string;
  setAppKey(value: string): this;

  getOpenId(): string;
  setOpenId(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GVoiceAppInfoAsObject;
  static toObject(includeInstance: boolean, msg: GVoiceAppInfo): GVoiceAppInfoAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GVoiceAppInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GVoiceAppInfo;
  static deserializeBinaryFromReader(message: GVoiceAppInfo, reader: jspb.BinaryReader): GVoiceAppInfo;
}

  export type GVoiceAppInfoAsObject = {
    appId: string,
    appKey: string,
    openId: string,

}

export class GVoiceServerInfo extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GVoiceServerInfoAsObject;
  static toObject(includeInstance: boolean, msg: GVoiceServerInfo): GVoiceServerInfoAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GVoiceServerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GVoiceServerInfo;
  static deserializeBinaryFromReader(message: GVoiceServerInfo, reader: jspb.BinaryReader): GVoiceServerInfo;
}

  export type GVoiceServerInfoAsObject = {
    url: string,

}

export class GVoiceMode extends jspb.Message {
  getMode(): number;
  setMode(value: number): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GVoiceModeAsObject;
  static toObject(includeInstance: boolean, msg: GVoiceMode): GVoiceModeAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GVoiceMode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GVoiceMode;
  static deserializeBinaryFromReader(message: GVoiceMode, reader: jspb.BinaryReader): GVoiceMode;
}

  export type GVoiceModeAsObject = {
    mode: number,

}

export class GVoiceTeamRoomInfo extends jspb.Message {
  getRoomName(): string;
  setRoomName(value: string): this;

  getMsTimeout(): number;
  setMsTimeout(value: number): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GVoiceTeamRoomInfoAsObject;
  static toObject(includeInstance: boolean, msg: GVoiceTeamRoomInfo): GVoiceTeamRoomInfoAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GVoiceTeamRoomInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GVoiceTeamRoomInfo;
  static deserializeBinaryFromReader(message: GVoiceTeamRoomInfo, reader: jspb.BinaryReader): GVoiceTeamRoomInfo;
}

  export type GVoiceTeamRoomInfoAsObject = {
    roomName: string,
    msTimeout: number,

}

export class GVoiceRoomSetting extends jspb.Message {
  getRoomName(): string;
  setRoomName(value: string): this;

  getEnable(): boolean;
  setEnable(value: boolean): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GVoiceRoomSettingAsObject;
  static toObject(includeInstance: boolean, msg: GVoiceRoomSetting): GVoiceRoomSettingAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GVoiceRoomSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GVoiceRoomSetting;
  static deserializeBinaryFromReader(message: GVoiceRoomSetting, reader: jspb.BinaryReader): GVoiceRoomSetting;
}

  export type GVoiceRoomSettingAsObject = {
    roomName: string,
    enable: boolean,

}

