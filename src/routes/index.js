import produtos from "./produtos.js";
import clientes from "./clientes.js";
import autenticacao from "./autenticacao.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "JMR Cosmeticos" });
  });

  app.use(produtos, clientes);
  app.use(autenticacao);
};

export default routes;
