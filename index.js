const teapotData = {
  code: 418,
  message: "I'm a teapot",
  description:
    "The server refuses to brew coffee because it is, permanently, a teapot.",
};

const teapotMiddleware = (req, res) => {
  res.status(teapotData.code).json(teapotData.message);
};

module.exports = {
  ...teapotData,
  middleware: teapotMiddleware,
};
