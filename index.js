const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello from node API");
});

app.post("/api/product",(req,res)=>{
  res.send(req.body);
  console.log(req.body);
})

mongoose
  .connect(
    "mongodb+srv://shema_db_user:rbZZgBbnitsdEAtt@cluster0.np7l1xs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
