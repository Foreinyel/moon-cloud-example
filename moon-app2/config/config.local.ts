import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    cluster: {
      listen: {
        port: 7002,
      },
    },
  };

  // zk
  config.rpc = {
    registry: {
      address: "127.0.0.1:2181",
    },
    client: {
      responseTimeout: 3000,
    },
    server: {
      namespace: "org.eggjs.rpc.test",
      codecType: "hessian2",
    },
  };

  // logstash
  config.logstash = {
    host: "127.0.0.1",
    port: 15044,
  };

  // kafka
  config.kafka = {
    kafkaHost: "127.0.0.1:9092",
  };

  // statsd
  config.statsd = {
    host: "localhost",
    port: 8125,
  };

  return config;
};
