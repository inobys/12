// package: mb
// file: test.proto

import * as test_pb from "./test_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TestServicePing = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof test_pb.PingMsg;
  readonly responseType: typeof test_pb.PingMsg;
};

type TestServiceBiStream = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof test_pb.StreamRequest;
  readonly responseType: typeof test_pb.StreamResponse;
};

export class TestService {
  static readonly serviceName: string;
  static readonly Ping: TestServicePing;
  static readonly BiStream: TestServiceBiStream;
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

export class TestServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  ping(
    requestMessage: test_pb.PingMsg,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: test_pb.PingMsg|null) => void
  ): UnaryResponse;
							async   pingAsync(
								    requestMessage: test_pb.PingMsg,
								    metadata?: grpc.Metadata,
								): Promise<{
									err:ServiceError|null;
									value:test_pb.PingMsg;
								}>;
							
  ping(
    requestMessage: test_pb.PingMsg,
    callback: (error: ServiceError|null, responseMessage: test_pb.PingMsg|null) => void
  ): UnaryResponse;
  biStream(requestMessage: test_pb.StreamRequest, metadata?: grpc.Metadata): ResponseStream<test_pb.StreamResponse>;
}

