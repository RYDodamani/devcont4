const express = require('express');
const port = 3005;
const app = express();


app.get('/', (req, res)=>{
    res.send("Hello From dev cont. 4")
})

app.listen(port,()=>{
    console.log("Server listening on port", port)
})