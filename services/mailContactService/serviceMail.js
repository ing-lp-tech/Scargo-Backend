const dbQueryAsync = require("../../config/dbConfig");
const mailerService = require("../mailerService/mailerService");
const {
  mailMessageTemplate,
} = require("../mailerService/templates/mailContactTemplate");

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
    return result;
  } catch (error) {
    console.error("error");
    return false;
  }
};

/* getAllProducts(2) */

/* 
TAREA:

NOOOO SE OLVIDEN DE EL WHERE

Hacer la funcion obtener producto por ID

HACER LA FUNCION ELIMINAR POR ID 
*/

module.exports = {
  createMail,
};
