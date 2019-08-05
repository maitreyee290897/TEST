let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser')
let apiRoutes=require('./api-routes');

var cors = require('cors');

let app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json())

//db connection
app.use(cors());
mongoose.connect('mongodb://localhost/movies',{ useNewUrlParser: true});
var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else    
    console.log("Db connected successfully")

app.get('/',(req,res) => {
    res.send(JSON.stringify({message:'Hello World from Express'}))
});

app.use('/api',apiRoutes);
let port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log('Server started....');
})
