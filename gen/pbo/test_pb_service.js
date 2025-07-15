// package: mb
// file: test.proto

var test_pb = require("./test_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TestService = (function () {
  function TestService() {}
  TestService.serviceName = "mb.TestService";
  return TestService;
}());

TestService.Ping = {
  methodName: "Ping",
  service: TestService,
  requestStream: false,
  responseStream: false,
  requestType: test_pb.PingMsg,
  responseType: test_pb.PingMsg
};

TestService.BiStream = {
  methodName: "BiStream",
  service: TestService,
  requestStream: false,
  responseStream: true,
  requestType: test_pb.StreamRequest,
  responseType: test_pb.StreamResponse
};

exports.TestService = TestService;

function TestServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TestServiceClient.prototype.pingAsync = function ping(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									TestServiceClient.prototype.ping.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
TestServiceClient.prototype.ping = function ping(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestService.Ping, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TestServiceClient.prototype.biStream = function biStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TestService.BiStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.TestServiceClient = TestServiceClient;

