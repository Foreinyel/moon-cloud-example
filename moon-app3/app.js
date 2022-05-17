"use strict";
module.exports = class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async didReady() {
    // console.log(
    //   `🚀 ~ file: app.js ~ line 4 ~ AppBootHook ~ constructor ~ app`,
    //   "didReady232"
    // );
    this.app.logger.info("didReady232");
    // try {
    //   const consumer = this.app.kafka.createConsumer(
    //     [
    //       {
    //         topic: "topic001",
    //         partition: 0,
    //       },
    //     ],
    //     {
    //       groupId: "moon-app3",
    //       // Auto commit config
    //       autoCommit: true,
    //       autoCommitIntervalMs: 5000,
    //       // Fetch message config
    //       fetchMaxWaitMs: 100,
    //       fetchMinBytes: 1,
    //       fetchMaxBytes: 1024 * 1024,
    //       fromOffset: false,
    //       encoding: "utf8",
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
};
