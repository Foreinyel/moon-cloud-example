export const echoObj = async function (param) {
  return {
    code: 200,
    message: "hello " + param.name + ", you is in " + param.group,
  };
};
