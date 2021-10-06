const express = require('express');
const app = express();
const color = require('chalk');

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/'));
app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/indexF.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname+'/indexF.html');
});

app.post('/indexFB.html', (req,res)=>{
    res.sendFile(__dirname+"/indexFB.html");
});

app.post('/indexG.html', (req,res)=>{
    res.sendFile(__dirname+"/indexG.html");
})

let port = process.env.PORT;
if (port==null || port=== " "){
    port = 3000;
}
app.listen(port, ()=>{
    console.log(color.green('Server is started!'));
});