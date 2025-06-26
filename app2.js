const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/login", (req, res) => {
  return res.render("login.html");
});

app.post("/login", (req, res) => {
  const {email,password} = req.body;
  console.log(req.body);
  if (email=='911sus@gmail.com'&&password=='Muzammil@1234'){
    return res.send("Login Successful")
  }
  else{
    return res.send('Login Failed')
  }
  
});
module.exports = app;
