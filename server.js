const app = require("./src/app/app.js")
const PORT = 8080;


app.get("/", (req, res) => {
  res.send("Funcionando");
});

app.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});
