import clientes from "../models/clientes.js";

class clientesControllers {
  static listarClientes = async (req, res) => {
    try {
      const clientesResultado = await clientes.find();
      res.status(200).json(clientesResultado);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static cadastrarClientes = async (req, res) => {
    try {
      let cliente = new clientes(req.body);

      const clienteResultado = await cliente.save();

      res.status(201).send(clienteResultado.toJSON());
    } catch (erro) {
      res.status(500).send({ message: `${erro.message} - falha ao cadastrar cliente.` });
    }
  };
  
}

export default clientesControllers;
