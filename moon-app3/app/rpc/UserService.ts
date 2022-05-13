export const getUser = async function (param) {
  return {
    code: 200,
    data: {
      userId: param.userId,
      username: param.username,
    },
  };
};
