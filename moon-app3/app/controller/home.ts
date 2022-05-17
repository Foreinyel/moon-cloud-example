import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.rabbitmq.send("log2", {
      userId: 123,
    });
    ctx.body = await ctx.service.test.sayHi("egg");
  }
}
