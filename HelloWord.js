console.log('HELLO WORLD');
//creer un serveur 
const http=require("http")
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
     res.end('<h1>Bonjour Node </h1>')
}).listen(5000);

console.log(`Serveur en écoute sur http://localhost:5000`);
//creer un fichier welcome.txt
const fs=require('fs');
const content='hello2 node'
fs.writeFile('welcome.txt',content,(err)=>{
    err?console.error("votre erreur est ",err): console.log("le fichier est cree avec succes ")


})
// read welcome.txt
fs.readFile('welcome.txt','utf8',(err,data)=>{
    err ? console.error(err):console.log(data);

})
//generer password 
var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

// 'uEyMTw32v9'
console.log(password);