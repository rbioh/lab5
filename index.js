import express from "express";

const port = 9090;
const app = express();

app.use(express.static("public"))


app.get("/search", (req, res)=>{
    const query = JSON.parse(req.query.doc)
    res.send(`You said ${query}`)
})
app.get("/insert", (req, res)=>{
    try{
        const doc = JSON.parse(req.query.doc);
        db.insert(doc);
        res.send(`You said ${query}`)
    }catch(err){
         res.send("could not insert the document")
    }
   
})







app.listen(port, (req, res)=>{
    console.log(`App running at http://localhost:${port}`)
})