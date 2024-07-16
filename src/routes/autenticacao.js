import express from "express";

import autenticacaoControllers from "../controllers/autenticacaoControllers.js";

const router = express.Router();

router.post("/login", autenticacaoControllers.loginCliente);
export default router;
