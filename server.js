const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 8080;
app.listen(PORT ,()=>console.log("Server started on 8080"));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/getdata',function(req,res){
    fs.readFile('src/mock/data.json',function(err,data){
        res.json(JSON.parse(data))
    })
})
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})





