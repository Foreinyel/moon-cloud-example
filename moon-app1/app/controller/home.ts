import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi("egg");

    ctx.kafka.producer.send(
      [
        {
          topic: "topic001",
          messages: ["message body"],
        },
      ],
      (err, data) => {
        if (err) {
          console.log(
            `🚀 ~ file: home.ts ~ line 20 ~ HomeController ~ index ~ err`,
            err
          );
        } else {
          console.log(
            `🚀 ~ file: home.ts ~ line 19 ~ HomeController ~ index ~ data`,
            data
          );
        }
      }
    );
  }

  public async rpc() {
    const { ctx } = this;
    ctx.body = await ctx.proxy.protoService.echoObj({
      name: "name",
      group: "group",
    });
  }
}
