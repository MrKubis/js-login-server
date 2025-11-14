const express = require("express");
const app = express();

const users = [

    {
        name:"test",
        password:"test"
    }
];

app.use(express.json());

app.get('/users', async (req,res) =>{
    res.json(users)
})

app.post('/users',async (req,res) =>{
    try{
        console.log(req.body);
        const user = {
            name: req.body.name,
            password: req.body.password
            
        }
        users.push(user);
        res.status(201).send();
    }
    catch{
        res.status(500).send();
    }
    
})

app.post('/login', async (req,res)=>{

    var found = false;
    users.forEach(user => {
        if(user.name == req.body.name && user.password == req.body.password){
            found = true;
        }
    });

    if(found){
        console.log("logged in");
    res.status(200).send();

    }
    else
    res.status(401).send();
})

app.listen(3000);