// Don't modified this file, it's auto created by egg-rpc-generator

'use strict';

const path = require('path');

/* eslint-disable */
/* istanbul ignore next */
module.exports = app => {
  const consumer = app.rpcClient.createConsumer({
    interfaceName: 'org.moon.rpc.moonapp3.UserService',
    targetAppName: 'moon-app3',
    version: '1.0',
    group: 'SOFA',
    proxyName: 'UserService',
  });

  if (!consumer) {
    // `app.config['moon-app3.rpc.service.enable'] = false` will disable this consumer
    return;
  }

  app.beforeStart(async() => {
    await consumer.ready();
  });

  class UserService extends app.Proxy {
    constructor(ctx) {
      super(ctx, consumer);
    }

    async getUser(req) {
      return await consumer.invoke('getUser', [ req, {...this.ctx.request.headers} ], { 
        ctx: this.ctx,
      });
    }
  }

  return UserService;
};
/* eslint-enable */
