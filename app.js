const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });

  app.listen(3001, () => {
    console.log("Server is listening to the port 3000");
  console.log(__dirname)
  });