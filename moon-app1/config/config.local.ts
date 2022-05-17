import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  // zk
  config.rpc = {
    registry: {
      address: "127.0.0.1:2181",
    },
    client: {
      responseTimeout: 3000,
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

  config.rabbitmq = {
    address: "amqp://localhost:5672",
    queues: [
      {
        queue: "log1",
        queueOption: {
          durable: true,
        },
        exchange: "logs",
        exchangeOption: {
          type: "fanout",
          durable: true,
        },
        consumer: "",
        consumerOption: {
          noAck: true,
        },
        consume: true,
      },
    ],
  };

  return config;
};
