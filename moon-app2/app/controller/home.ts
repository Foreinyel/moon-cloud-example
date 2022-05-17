import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // ctx.body = await ctx.service.test.sayHi("egg");
    ctx.rabbitmq.send("log3", {
      username: 432,
    });
    ctx.body = await ctx.proxy.userService.getUser({
      userId: 2,
      username: "hid",
    });
  }
}
