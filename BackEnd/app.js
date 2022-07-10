const express = require('express');
const app = express()

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true,limit: '50mb'}));

// Requiring cookieParser and using
const cookieParser = require('cookie-parser');
app.use(cookieParser())

const path  = require('path');  

// Route Imports
const product = require("./Routes/propertyrouter");
const user = require("./Routes/userrouter");
const otp = require("./Routes/otprouter");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", otp);

// if(process.env.NODE_ENV === 'production'){
    app.get('*.js', function(req, res, next) {
        req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'text/javascript');
        next();
       })
             
       app.get('*.css', function(req, res, next) {
        req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'text/css');
        next();
    });
    app.use(express.static(path.join(__dirname,'../frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
    })
// }

// Requiring FileUpload and using
const fileupload = require('express-fileupload'); 
app.use(fileupload())

// Requiring and adding error middleware
const errormiddleware = require('./Middlewares/error');
app.use(errormiddleware)

module.exports= app