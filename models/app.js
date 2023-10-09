const express=require('express');
const port=3000;
const app=express();

app.listen(port.function(){
    console.log("sovellus kuuntelee porttia "+port)
});

app.get('/',function(request,response){
    response.send("Express API esimerkki");
});
module.exports=app;