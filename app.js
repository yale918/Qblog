const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

//const path = __dirname+'/../client/public'
//app.use(express.static('client/public'))
//console.log(path)

app.use(express.json())
/*
app.get('/', (req, res) => {
  console.log("hello from client")
  res.send("hello from server")

  //res.sendFile(path.resolve(__dirname,'client','public','index.html'))
  //res.send("hello page");
})
*/
app.get('/test', (req, res) => {
  console.log(req)
  const data = "hello from server"
  res.json(data)
})

if(process.env.NODE_ENV == "production"){
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}


app.listen(PORT, () => {
  console.log("server: listening on port:", PORT)
})

//console.log(__dirname)