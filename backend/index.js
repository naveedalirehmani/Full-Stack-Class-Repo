const express = require("express");
const connectDb = require("./mongoose");
const routes = require("./routes/route");

const app = express();

connectDb();
console.log('test')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/v1", routes);

app.listen(9000, () => {
  console.log("running on port 9000");
});
