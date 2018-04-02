var express = require('express');
var app = express();

app.set('view engine','jade');
app.set('views','./views')

app.use(express.static('public'));

app.get('/',function(req,res){
    res.send('Welcome My Home');
});

app.get('/template',function(req,res){
    res.render('temp');
});

app.get('/dynamic',function(req,res){
    var list = '';
    for(var i=0; i<5; i++){
        list += '<li>Coding</li>';
    }
    var output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
        ${list}
        </ul>
    </body>
    </html>
`;
    res.send(output);
});
app.get('/route',function(req,res){
    res.send('Hello Router, <img src="/99.jpg">');
});
app.get('/login',function(req,res){
    res.send('Login Please...');
});
app.listen(8081,function(){
    console.log('Connected 8081 Port!');
});
