import express from "express";

import clientesControllers from "../controllers/clientesControllers.js";

const router = express.Router();

router.get("/clientes", clientesControllers.listarClientes);
router.post("/clientes", clientesControllers.cadastrarClientes);
export default router;
