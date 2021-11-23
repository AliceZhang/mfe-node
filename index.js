//--------------------- imports ---------------------
const express = require("express");
require("dotenv").config();
const cors = require("cors");

//--------------------- Init App ---------------------
const app = express();
const PORT = process.env.PORT || 5000;

//--------------------- Serve Assets ---------------------
if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
}

app.use(express.json());
//app.use(cors());
app.use(cors({
  origin: '*'
}));

app.get("/home", function (req, res) {
     res.status(200).json({
     status: true,
     data: "Backend Responded "
     })
})

app.listen(PORT, () => console.log(`Example app running on ${PORT}`));