import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  rpc: {
    enable: true,
    package: "@hemyn/egg-rpc",
  },
  kafka: {
    enable: true,
    package: "@hemyn/moon-kafka",
  },
};

export default plugin;
