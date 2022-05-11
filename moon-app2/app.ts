export default class AppBootHook {
  app;
  constructor(app) {
    this.app = app;
  }

  async didReady() {
    this.app.logger.info("didReady");
    const consumer = this.app.kafka.createConsumer([
      {
        topic: "topic001",
      },
    ]);

    consumer.on("message", (msg) => {
      console.log(
        `🚀 ~ file: app.ts ~ line 16 ~ AppBootHook ~ consumer.on ~ msg`,
        msg
      );
    });
  }
}