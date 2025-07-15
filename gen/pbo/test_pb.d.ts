// package: mb
// file: test.proto

import * as jspb from "google-protobuf";

export class PingMsg extends jspb.Message {
  getNo(): number;
  setNo(value: number): this;

  getNameFirst(): string;
  setNameFirst(value: string): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingMsgAsObject;
  static toObject(includeInstance: boolean, msg: PingMsg): PingMsgAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingMsg;
  static deserializeBinaryFromReader(message: PingMsg, reader: jspb.BinaryReader): PingMsg;
}

  export type PingMsgAsObject = {
    no: number,
    nameFirst: string,

}

export class StreamPoint extends jspb.Message {
  getName(): string;
  setName(value: string): this;

  getValue(): number;
  setValue(value: number): this;

  hasPing(): boolean;
  clearPing(): void;
  getPing(): PingMsg | undefined;
  setPing(value?: PingMsg): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPointAsObject;
  static toObject(includeInstance: boolean, msg: StreamPoint): StreamPointAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPoint;
  static deserializeBinaryFromReader(message: StreamPoint, reader: jspb.BinaryReader): StreamPoint;
}

  export type StreamPointAsObject = {
    name: string,
    value: number,
    ping?: PingMsgAsObject,

}

export class StreamRequest extends jspb.Message {
  hasPt(): boolean;
  clearPt(): void;
  getPt(): StreamPoint | undefined;
  setPt(value?: StreamPoint): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRequestAsObject;
  static toObject(includeInstance: boolean, msg: StreamRequest): StreamRequestAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamRequest;
  static deserializeBinaryFromReader(message: StreamRequest, reader: jspb.BinaryReader): StreamRequest;
}

  export type StreamRequestAsObject = {
    pt?: StreamPointAsObject,

}

export class StreamResponse extends jspb.Message {
  hasPt(): boolean;
  clearPt(): void;
  getPt(): StreamPoint | undefined;
  setPt(value?: StreamPoint): this;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamResponseAsObject;
  static toObject(includeInstance: boolean, msg: StreamResponse): StreamResponseAsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamResponse;
  static deserializeBinaryFromReader(message: StreamResponse, reader: jspb.BinaryReader): StreamResponse;
}

  export type StreamResponseAsObject = {
    pt?: StreamPointAsObject,

}

