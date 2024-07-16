import clientes from "../models/clientes.js";

class autenticacaoControllers {
  static loginCliente = async (req, res) => {
    try {
      const { email, password } = req.body;
      const cliente = await clientes.findOne({ email });

      if (cliente && cliente.password === password) {
        res.status(200).json(cliente);
        console.log(cliente);
      } else {
        res.status(401).json({ message: "E-mail ou senha incorreto." });
      }
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
      console.log(erro);
    }
  };
}

export default autenticacaoControllers;
