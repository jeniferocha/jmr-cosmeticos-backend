import express from "express";
import produtosControllers from "../controllers/produtosControllers.js";

const router = express.Router();

router.get("/produtos", produtosControllers.listarProdutos);
router.get("/produtos/:id/imagem", produtosControllers.exibirImagem);

export default router;
