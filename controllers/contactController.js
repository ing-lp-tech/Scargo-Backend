const { createMail } = require("../services/mailContactService/serviceMail");

const postMailController = async (req, res) => {
  console.log(req.body);
  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(404).json({ message: "Bad request" });
  }
  const mail = await createMail({ nombre, correo, mensaje });
  if (!mail) {
    return res.status(500).json({ message: "Internal server error" });
  } else {
    return res
      .status(200)
      .json({ message: "Mail created successfully", mail: mail });
  }
};

module.exports = { postMailController };
