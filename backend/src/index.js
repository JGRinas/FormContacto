const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
// app.use(express.urlencoded({extended:false}))
app.use(express.json())
// app.use(express.static(path.join(__dirname)));

app.use(require('./routes/index'))

app.listen(3010, () => console.log("Server on port 3010"));
