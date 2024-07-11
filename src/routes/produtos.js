import express from "express";
import produtosControllers from "../controllers/produtosControllers.js";

const router = express.Router();

router.get("/produtos", produtosControllers.listarProdutos);

export default router;
