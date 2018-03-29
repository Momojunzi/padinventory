const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use(express.static("./client/public/"));


if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build/"));
}

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/padinventory"
);

app.use("/api", apiRoutes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(PORT, function() {
  console.log(`server linstening on port: ${PORT}`);
});
