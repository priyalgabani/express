const express = require('express');

const app = express();
app.use(express.json());

app.get("/", (req, res) =>{
res.status(200).send("welcome to the server");
});

app.get("/signup", (req, res) =>{
    res.status(200).send("<h1>server is a starting point signup</h1>");
})

app.get("/login", (req, res) =>{
    res.status(200).send("<h1>server is a starting point is a login</h1>");
})

app.post("/", (req, res) =>{
console.log(req.body);
res.status(200).send(req.body);
});

app.post("/signup", (req, res) =>{
    console.log(req.body);
    res.status(200).send(req.body);
    });

app.post("/login", (req, res) =>{
    console.log(req.body);
    res.status(200).send(req.body);
    });

app.post("/index", (req, res) =>{
    console.log(req.body);
    res.status(200).send(req.body);
    });
    
app.listen(8080,()=>{
console.log("start server");
});