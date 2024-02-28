const {
  createMail,
  ReceiveMail,
} = require("../services/mailContactService/serviceMail");

const postMailController = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(404).json({ message: "Bad request" });
  }
  const mail = await createMail({ nombre, correo, mensaje });

  const mailReceive = await ReceiveMail({ nombre, correo, mensaje });

  console.log("mail:", mail);

  if (!mail) {
    return res.status(500).json({ message: "Internal server error" });
  } else {
    return res
      .status(200)
      .json({ message: "Mail created successfully", mail: mail, status: 200 });
  }
};

module.exports = { postMailController };
