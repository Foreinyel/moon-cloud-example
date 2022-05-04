import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi("egg");
  }

  public async rpc() {
    const { ctx } = this;
    ctx.body = await ctx.proxy.protoService.echoObj({
      name: "name",
      group: "group",
    });
  }
}
