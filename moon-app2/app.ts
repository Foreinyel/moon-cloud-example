export default class AppBootHook {
  app;
  constructor(app) {
    this.app = app;
  }

  async didReady() {
    this.app.logger.info("didReady");
    // try {
    //   const consumer = this.app.kafka.createConsumer(
    //     [
    //       {
    //         topic: "topic001",
    //       },
    //     ],
    //     {
    //       groupId: "moon-app2",
    //     }
    //   );

    //   consumer.on("message", (msg) => {
    //     console.log(
    //       `🚀 ~ file: app.ts ~ line 16 ~ AppBootHook ~ consumer.on ~ msg`,
    //       msg
    //     );
    //   });
    //   consumer.on("error", function (err) {
    //     console.log(`🚀 ~ file: app.js ~ line 34 ~ AppBootHook ~ err`, err);
    //   });
    // } catch (err) {
    //   console.log(
    //     `🚀 ~ file: app.js ~ line 32 ~ AppBootHook ~ didReady ~ err`,
    //     err
    //   );
    // }
  }
}
