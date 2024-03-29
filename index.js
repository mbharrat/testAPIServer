const data = require("./data/polist.js");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 8080;
app.use(cors());

app.get("/", (req, res) =>
  res.send("Your temporary test server is up and running")
);

app.get("/prodmh/getpolist", (req, res) => {
  //   console.log(data);
  //headers to prevent CORS
  const test = "hi";
  res.header("Access-Control-Allow_Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.json(data.polist);
});

app.get("/all", (req, res) => {
  const routes = ["/prodmh/getpolist"];
  res.json(routes);
});

app.listen(port, () =>
  console.log(`Test server is running on at \nhttp://localhost:${port}/`)
);
