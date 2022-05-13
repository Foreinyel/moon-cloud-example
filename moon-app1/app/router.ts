import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  router.get("/", controller.home.index);
  router.get("/user/:id", controller.home.user);

  router.get("/rpc", controller.home.rpc);
};
