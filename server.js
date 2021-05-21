let express = require("express");
let bodyParser = require("body-parser");
const http = require('http')

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

replaceWords = [
];

app.get("/replaceWords", (req,res) => {
    res.json(replaceWords)
});



app.post("/replaceWords", (req,res) => {
    let word=req.body.word;
    let replace=req.body.replace;
  
    let groupTogether = {
        word: word,
        replace: replace
    }


    replaceWords.push(groupTogether)
  

    console.log(replaceWords)
    res.status(201)
    app.emit()
    res.send()
  
  });


server.listen(process.env.PORT, () => console.log(`Server is running on http://${host}:${port}`))