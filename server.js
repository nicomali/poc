const express = require("express");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(process.env.PORT || 4000, () => console.log("Server is running"));

app.get("/", (req, res) => {
  res.status(200).send("¡Hola, Martu! Sí, ya va");
});
