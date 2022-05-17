// Don't modified this file, it's auto created by egg-rpc-generator

'use strict';

const path = require('path');

/* eslint-disable */
/* istanbul ignore next */
module.exports = app => {
  const consumer = app.rpcClient.createConsumer({
    interfaceName: 'org.eggjs.rpc.test.ProtoService',
    targetAppName: 'rpc-demo',
    version: '1.0',
    group: 'SOFA',
    proxyName: 'ProtoService',
  });

  if (!consumer) {
    // `app.config['rpc-demo.rpc.service.enable'] = false` will disable this consumer
    return;
  }

  app.beforeStart(async() => {
    await consumer.ready();
  });

  class ProtoService extends app.Proxy {
    constructor(ctx) {
      super(ctx, consumer);
    }

    async echoObj(req) {
      return await consumer.invoke('echoObj', [ req, {...this.ctx.request.headers} ], { 
        ctx: this.ctx,
      });
    }
  }

  return ProtoService;
};
/* eslint-enable */
