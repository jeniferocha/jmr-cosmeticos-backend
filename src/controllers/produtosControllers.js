import produtos from "../models/produtos.js";

class produtosControllers {
  static listarProdutos = async (req, res) => {
    try {
      const produtosResultado = await produtos.find();
      res.status(200).json(produtosResultado);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static exibirImagem = async (req, res) => {
    try {
      const produto = await produtos.findById(req.params.id);
      if (!produto || !produto.img) {
        return res.status(404).json({ message: 'Produto ou imagem não encontrada' });
      }

      const imgBuffer = Buffer.from(produto.img, 'base64');
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': imgBuffer.length
      });
      res.end(imgBuffer);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };
}

export default produtosControllers;
