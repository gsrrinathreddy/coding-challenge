const express = require('express');
const app = express(); 



//import routes middlware
const authRoutes = require("./routes/auth");

// using the middleware
app.use('/api',authRoutes);



const port = process.env.PORT||8000;


app.listen(port,()=>{
    console.log(`The server is running on port,${port}`);
})