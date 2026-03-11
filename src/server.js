const express = require("express");

const app = express();

app.use(express.json()); // ← precisa vir primeiro

const clientesRoutes = require("./routes/clientesRoutes");
const carrosRoutes = require("./routes/carrosRoutes");
const servicosRoutes = require("./routes/servicosRoutes");

app.use("/servicos", servicosRoutes);
app.use("/clientes", clientesRoutes);
app.use(carrosRoutes);

app.get("/", (req, res) => {
  res.send("API da Oficina funcionando 🚗");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});