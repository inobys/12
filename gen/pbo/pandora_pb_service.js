// package: pandora
// file: pandora.proto

var pandora_pb = require("./pandora_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GameService = (function () {
  function GameService() {}
  GameService.serviceName = "pandora.GameService";
  return GameService;
}());

GameService.RecvGlobalCommand = {
  methodName: "RecvGlobalCommand",
  service: GameService,
  requestStream: false,
  responseStream: true,
  requestType: pandora_pb.Empty,
  responseType: pandora_pb.GlobalEvent
};

GameService.GetUserData = {
  methodName: "GetUserData",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.Request,
  responseType: pandora_pb.UserData
};

GameService.CheckLocation = {
  methodName: "CheckLocation",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraReady = {
  methodName: "PandoraReady",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraShowEntrance = {
  methodName: "PandoraShowEntrance",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraShowRedpoint = {
  methodName: "PandoraShowRedpoint",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraOpened = {
  methodName: "PandoraOpened",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraClosed = {
  methodName: "PandoraClosed",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraShowTextTip = {
  methodName: "PandoraShowTextTip",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraShowLoading = {
  methodName: "PandoraShowLoading",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraOpenUrl = {
  methodName: "PandoraOpenUrl",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraGoSystem = {
  methodName: "PandoraGoSystem",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraGoPandora = {
  methodName: "PandoraGoPandora",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraRefreshDiamond = {
  methodName: "PandoraRefreshDiamond",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraRefreshPlayerLevel = {
  methodName: "PandoraRefreshPlayerLevel",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraGetUserInfo = {
  methodName: "PandoraGetUserInfo",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraShowReceivedItem = {
  methodName: "PandoraShowReceivedItem",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ProtoRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraShareStructMessageToWX = {
  methodName: "PandoraShareStructMessageToWX",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ShareStructMsgToWXRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraShareStructMessageToQQ = {
  methodName: "PandoraShareStructMessageToQQ",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ShareStructMsgToQQRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraSharePhotoToWX = {
  methodName: "PandoraSharePhotoToWX",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.SharePhotoToWXRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraSharePhotoToQQ = {
  methodName: "PandoraSharePhotoToQQ",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.SharePhotoToQQRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraShareStructMessageToQQGameFriend = {
  methodName: "PandoraShareStructMessageToQQGameFriend",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ShareStructMsgToQQGameFriendRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraShareUrlToWX = {
  methodName: "PandoraShareUrlToWX",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ShareUrlToWXRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraShareMiniAppToWX = {
  methodName: "PandoraShareMiniAppToWX",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ShareMiniAppToWXRequest,
  responseType: pandora_pb.Empty
};

GameService.PandoraShareMiniAppToQQ = {
  methodName: "PandoraShareMiniAppToQQ",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ShareMiniAppToQQRequest,
  responseType: pandora_pb.Empty
};

GameService.CallGame = {
  methodName: "CallGame",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.JsonRequest,
  responseType: pandora_pb.Response
};

GameService.GameSendClose = {
  methodName: "GameSendClose",
  service: GameService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.Empty,
  responseType: pandora_pb.Empty
};

exports.GameService = GameService;

function GameServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GameServiceClient.prototype.recvGlobalCommand = function recvGlobalCommand(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(GameService.RecvGlobalCommand, {
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

GameServiceClient.prototype.getUserDataAsync = function getUserData(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.getUserData.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.getUserData = function getUserData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.GetUserData, {
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

GameServiceClient.prototype.checkLocationAsync = function checkLocation(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.checkLocation.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.checkLocation = function checkLocation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.CheckLocation, {
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

GameServiceClient.prototype.pandoraReadyAsync = function pandoraReady(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraReady.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraReady = function pandoraReady(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraReady, {
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

GameServiceClient.prototype.pandoraShowEntranceAsync = function pandoraShowEntrance(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraShowEntrance.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraShowEntrance = function pandoraShowEntrance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraShowEntrance, {
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

GameServiceClient.prototype.pandoraShowRedpointAsync = function pandoraShowRedpoint(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraShowRedpoint.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraShowRedpoint = function pandoraShowRedpoint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraShowRedpoint, {
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

GameServiceClient.prototype.pandoraOpenedAsync = function pandoraOpened(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraOpened.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraOpened = function pandoraOpened(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraOpened, {
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

GameServiceClient.prototype.pandoraClosedAsync = function pandoraClosed(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraClosed.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraClosed = function pandoraClosed(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraClosed, {
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

GameServiceClient.prototype.pandoraShowTextTipAsync = function pandoraShowTextTip(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraShowTextTip.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraShowTextTip = function pandoraShowTextTip(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraShowTextTip, {
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

GameServiceClient.prototype.pandoraShowLoadingAsync = function pandoraShowLoading(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraShowLoading.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraShowLoading = function pandoraShowLoading(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraShowLoading, {
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

GameServiceClient.prototype.pandoraOpenUrlAsync = function pandoraOpenUrl(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraOpenUrl.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraOpenUrl = function pandoraOpenUrl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraOpenUrl, {
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

GameServiceClient.prototype.pandoraGoSystemAsync = function pandoraGoSystem(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraGoSystem.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraGoSystem = function pandoraGoSystem(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraGoSystem, {
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

GameServiceClient.prototype.pandoraGoPandoraAsync = function pandoraGoPandora(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraGoPandora.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraGoPandora = function pandoraGoPandora(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraGoPandora, {
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

GameServiceClient.prototype.pandoraRefreshDiamondAsync = function pandoraRefreshDiamond(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraRefreshDiamond.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraRefreshDiamond = function pandoraRefreshDiamond(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraRefreshDiamond, {
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

GameServiceClient.prototype.pandoraRefreshPlayerLevelAsync = function pandoraRefreshPlayerLevel(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraRefreshPlayerLevel.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraRefreshPlayerLevel = function pandoraRefreshPlayerLevel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraRefreshPlayerLevel, {
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

GameServiceClient.prototype.pandoraGetUserInfoAsync = function pandoraGetUserInfo(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraGetUserInfo.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraGetUserInfo = function pandoraGetUserInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraGetUserInfo, {
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

GameServiceClient.prototype.pandoraShowReceivedItemAsync = function pandoraShowReceivedItem(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraShowReceivedItem.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraShowReceivedItem = function pandoraShowReceivedItem(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraShowReceivedItem, {
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

GameServiceClient.prototype.pandoraShareStructMessageToWXAsync = function pandoraShareStructMessageToWX(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraShareStructMessageToWX.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraShareStructMessageToWX = function pandoraShareStructMessageToWX(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraShareStructMessageToWX, {
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

GameServiceClient.prototype.pandoraShareStructMessageToQQAsync = function pandoraShareStructMessageToQQ(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraShareStructMessageToQQ.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraShareStructMessageToQQ = function pandoraShareStructMessageToQQ(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraShareStructMessageToQQ, {
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

GameServiceClient.prototype.pandoraSharePhotoToWXAsync = function pandoraSharePhotoToWX(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraSharePhotoToWX.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraSharePhotoToWX = function pandoraSharePhotoToWX(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraSharePhotoToWX, {
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

GameServiceClient.prototype.pandoraSharePhotoToQQAsync = function pandoraSharePhotoToQQ(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraSharePhotoToQQ.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraSharePhotoToQQ = function pandoraSharePhotoToQQ(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraSharePhotoToQQ, {
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

GameServiceClient.prototype.pandoraShareStructMessageToQQGameFriendAsync = function pandoraShareStructMessageToQQGameFriend(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraShareStructMessageToQQGameFriend.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraShareStructMessageToQQGameFriend = function pandoraShareStructMessageToQQGameFriend(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraShareStructMessageToQQGameFriend, {
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

GameServiceClient.prototype.pandoraShareUrlToWXAsync = function pandoraShareUrlToWX(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraShareUrlToWX.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraShareUrlToWX = function pandoraShareUrlToWX(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraShareUrlToWX, {
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

GameServiceClient.prototype.pandoraShareMiniAppToWXAsync = function pandoraShareMiniAppToWX(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraShareMiniAppToWX.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraShareMiniAppToWX = function pandoraShareMiniAppToWX(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraShareMiniAppToWX, {
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

GameServiceClient.prototype.pandoraShareMiniAppToQQAsync = function pandoraShareMiniAppToQQ(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.pandoraShareMiniAppToQQ.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.pandoraShareMiniAppToQQ = function pandoraShareMiniAppToQQ(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.PandoraShareMiniAppToQQ, {
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

GameServiceClient.prototype.callGameAsync = function callGame(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.callGame.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.callGame = function callGame(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.CallGame, {
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

GameServiceClient.prototype.gameSendCloseAsync = function gameSendClose(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GameServiceClient.prototype.gameSendClose.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GameServiceClient.prototype.gameSendClose = function gameSendClose(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GameService.GameSendClose, {
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

exports.GameServiceClient = GameServiceClient;

var BackendService = (function () {
  function BackendService() {}
  BackendService.serviceName = "pandora.BackendService";
  return BackendService;
}());

BackendService.CallAtm = {
  methodName: "CallAtm",
  service: BackendService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.JsonRequest,
  responseType: pandora_pb.Response
};

BackendService.CallBroker = {
  methodName: "CallBroker",
  service: BackendService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.BrokerRequest,
  responseType: pandora_pb.BrokerResponse
};

BackendService.CallBrokerJson = {
  methodName: "CallBrokerJson",
  service: BackendService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.JsonRequest,
  responseType: pandora_pb.Response
};

BackendService.CallApplicationBroker = {
  methodName: "CallApplicationBroker",
  service: BackendService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ApplicationBrokerRequest,
  responseType: pandora_pb.Response
};

BackendService.ReportActivityError = {
  methodName: "ReportActivityError",
  service: BackendService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.ReportActivityErrorInfo,
  responseType: pandora_pb.Empty
};

exports.BackendService = BackendService;

function BackendServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BackendServiceClient.prototype.callAtmAsync = function callAtm(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									BackendServiceClient.prototype.callAtm.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
BackendServiceClient.prototype.callAtm = function callAtm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BackendService.CallAtm, {
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

BackendServiceClient.prototype.callBrokerAsync = function callBroker(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									BackendServiceClient.prototype.callBroker.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
BackendServiceClient.prototype.callBroker = function callBroker(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BackendService.CallBroker, {
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

BackendServiceClient.prototype.callBrokerJsonAsync = function callBrokerJson(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									BackendServiceClient.prototype.callBrokerJson.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
BackendServiceClient.prototype.callBrokerJson = function callBrokerJson(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BackendService.CallBrokerJson, {
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

BackendServiceClient.prototype.callApplicationBrokerAsync = function callApplicationBroker(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									BackendServiceClient.prototype.callApplicationBroker.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
BackendServiceClient.prototype.callApplicationBroker = function callApplicationBroker(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BackendService.CallApplicationBroker, {
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

BackendServiceClient.prototype.reportActivityErrorAsync = function reportActivityError(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									BackendServiceClient.prototype.reportActivityError.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
BackendServiceClient.prototype.reportActivityError = function reportActivityError(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BackendService.ReportActivityError, {
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

exports.BackendServiceClient = BackendServiceClient;

var GVoiceService = (function () {
  function GVoiceService() {}
  GVoiceService.serviceName = "pandora.GVoiceService";
  return GVoiceService;
}());

GVoiceService.SetAppInfo = {
  methodName: "SetAppInfo",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.GVoiceAppInfo,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.SetServerInfo = {
  methodName: "SetServerInfo",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.GVoiceServerInfo,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.Init = {
  methodName: "Init",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.Empty,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.SetMode = {
  methodName: "SetMode",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.GVoiceMode,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.Poll = {
  methodName: "Poll",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.Empty,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.Pause = {
  methodName: "Pause",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.Empty,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.Resume = {
  methodName: "Resume",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.Empty,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.JoinTeamRoom = {
  methodName: "JoinTeamRoom",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.GVoiceTeamRoomInfo,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.QuitRoom = {
  methodName: "QuitRoom",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.GVoiceTeamRoomInfo,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.OpenMic = {
  methodName: "OpenMic",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.Empty,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.CloseMic = {
  methodName: "CloseMic",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.Empty,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.OpenSpeaker = {
  methodName: "OpenSpeaker",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.Empty,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.CloseSpeaker = {
  methodName: "CloseSpeaker",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.Empty,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.EnableRoomMicrophone = {
  methodName: "EnableRoomMicrophone",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.GVoiceRoomSetting,
  responseType: pandora_pb.GVoiceResponse
};

GVoiceService.EnableRoomSpeaker = {
  methodName: "EnableRoomSpeaker",
  service: GVoiceService,
  requestStream: false,
  responseStream: false,
  requestType: pandora_pb.GVoiceRoomSetting,
  responseType: pandora_pb.GVoiceResponse
};

exports.GVoiceService = GVoiceService;

function GVoiceServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GVoiceServiceClient.prototype.setAppInfoAsync = function setAppInfo(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.setAppInfo.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.setAppInfo = function setAppInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.SetAppInfo, {
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

GVoiceServiceClient.prototype.setServerInfoAsync = function setServerInfo(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.setServerInfo.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.setServerInfo = function setServerInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.SetServerInfo, {
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

GVoiceServiceClient.prototype.initAsync = function init(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.init.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.init = function init(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.Init, {
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

GVoiceServiceClient.prototype.setModeAsync = function setMode(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.setMode.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.setMode = function setMode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.SetMode, {
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

GVoiceServiceClient.prototype.pollAsync = function poll(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.poll.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.poll = function poll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.Poll, {
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

GVoiceServiceClient.prototype.pauseAsync = function pause(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.pause.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.pause = function pause(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.Pause, {
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

GVoiceServiceClient.prototype.resumeAsync = function resume(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.resume.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.resume = function resume(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.Resume, {
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

GVoiceServiceClient.prototype.joinTeamRoomAsync = function joinTeamRoom(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.joinTeamRoom.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.joinTeamRoom = function joinTeamRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.JoinTeamRoom, {
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

GVoiceServiceClient.prototype.quitRoomAsync = function quitRoom(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.quitRoom.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.quitRoom = function quitRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.QuitRoom, {
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

GVoiceServiceClient.prototype.openMicAsync = function openMic(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.openMic.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.openMic = function openMic(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.OpenMic, {
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

GVoiceServiceClient.prototype.closeMicAsync = function closeMic(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.closeMic.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.closeMic = function closeMic(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.CloseMic, {
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

GVoiceServiceClient.prototype.openSpeakerAsync = function openSpeaker(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.openSpeaker.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.openSpeaker = function openSpeaker(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.OpenSpeaker, {
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

GVoiceServiceClient.prototype.closeSpeakerAsync = function closeSpeaker(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.closeSpeaker.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.closeSpeaker = function closeSpeaker(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.CloseSpeaker, {
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

GVoiceServiceClient.prototype.enableRoomMicrophoneAsync = function enableRoomMicrophone(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.enableRoomMicrophone.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.enableRoomMicrophone = function enableRoomMicrophone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.EnableRoomMicrophone, {
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

GVoiceServiceClient.prototype.enableRoomSpeakerAsync = function enableRoomSpeaker(requestMessage, metadata){
								let self=this;
								return new Promise(fill => {
									GVoiceServiceClient.prototype.enableRoomSpeaker.bind(self)(requestMessage, metadata, (err, res) => {
										fill({ err, value: res });
									});
								});
							}
GVoiceServiceClient.prototype.enableRoomSpeaker = function enableRoomSpeaker(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GVoiceService.EnableRoomSpeaker, {
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

exports.GVoiceServiceClient = GVoiceServiceClient;

