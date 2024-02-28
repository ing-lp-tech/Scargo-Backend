const dbQueryAsync = require("../../config/dbConfig");
const mailerService = require("../mailerService/mailerService");
const {
  mailMessageTemplate,
} = require("../mailerService/templates/mailContactTemplate");
const {
  mailReceiveTemplate,
} = require("../mailerService/templates/mailReceiveTemplate");

const createMail = async ({ nombre, correo, mensaje }) => {
  try {
    mailerService.transport.sendMail(
      mailMessageTemplate(nombre, correo, mensaje),
      (error) => {
        if (error) {
          console.error("no se pudo enviar el mail");
        } else {
          console.log("Se envio el mail correctamente");
        }
      }
    );
    return true;
  } catch (error) {
    console.error("error enviando el mail");
    return false;
  }
};

const ReceiveMail = async ({ nombre, correo, mensaje }) => {
  try {
    mailerService.transport.sendMail(
      mailReceiveTemplate(nombre, correo, mensaje),
      (error) => {
        if (error) {
          console.error("no se pudo enviar el mail");
        } else {
          console.log("Se recivio el mail correctamente");
        }
      }
    );
    return true;
  } catch (error) {
    console.error("error reciviendo el mail");
    return false;
  }
};
/* 
mailerService.transport.sendMail(
  productCreatedTemplate("", "admin", {
    nombre,
    precio,
    stock,
    descripcion,
  }),
  (error) => {
    if (error) {
      console.error("no se pudo enviar el mail");
    } else {
      console.log("Se envio el mail correctamente");
    }
  }
); */

/* getAllProducts(2) */

/* 
TAREA:

NOOOO SE OLVIDEN DE EL WHERE

Hacer la funcion obtener producto por ID

HACER LA FUNCION ELIMINAR POR ID 
*/

module.exports = {
  createMail,
  ReceiveMail,
};
