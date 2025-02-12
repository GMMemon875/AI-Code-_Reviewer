const aiService = require("../Service/service");

module.exports.getResponse = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("please provide a Promp");
  }

  const response = await aiService(code);
  res.send(response);
};
