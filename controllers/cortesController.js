const {
  getCortesById,
  createCortes,
  getAllCortes,
  deleteCortesById,
} = require("../services/cortes/serviceCortes");

const getCortesByIdController = async (req, res) => {
  const { pid } = req.params;
  const result = await getCortesById(pid);
  if (!result) {
    res.status(500).json({ message: "error" });
  } else if (result.length == 0) {
    res.status(404).json({ message: "ERROR: Not found" });
  } else {
    res.status(200).json({ message: "correcto", product: result[0] });
  }
};

const postCortesController = async (req, res) => {
  console.log(req.body);
  const { nombre, precio, stock, descripcion } = req.body;

  if (!nombre || !precio || !stock || !descripcion) {
    return res.status(404).json({ message: "Bad request" });
  }
  const result = await createCortes({ nombre, precio, descripcion, stock });
  if (!result) {
    return res.status(500).json({ message: "Internal server error" });
  } else {
    return res
      .status(200)
      .json({ message: "Product created successfully", product: result[0] });
  }
};

const getAllCortesController = async (req, res) => {
  const result = await getAllCortes();

  console.log("result cortes:", result);

  if (!result) {
    res.status(500).json({ message: "internal server error" });
  } else {
    res.status(200).json({ cortes: result });
  }
};

const deleteCortesController = async (req, res) => {
  const { pid } = req.params;

  const result = await deleteCortesById(pid);
  if (result == 404) {
    res.status(404).json({ message: "product id not found" });
  } else if (!result) {
    res.status(500).json({ message: "internal server error" });
  } else {
    res.status(200).json({ message: "product removed successfully" });
  }
};

module.exports = {
  getCortesByIdController,
  getAllCortesController,
  postCortesController,
  deleteCortesController,
};
