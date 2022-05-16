import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  // zk
  config.rpc = {
    registry: {
      address: "zoo2:2181",
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
    host: "logstash",
    port: 15044,
  };

  // kafka
  // config.kafka = {
  //   kafkaHost: "kafka:9092",
  // };

  // statsd
  config.statsd = {
    host: "telegraf",
    port: 8125,
  };

  return config;
};
