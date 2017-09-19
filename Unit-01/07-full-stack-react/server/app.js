var express = require("express");
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");
var userRoutes = require("./routes/users");
var authRoutes = require("./routes/auth");
var todoRoutes = require("./routes/todos");
var authMiddleware = require("./middleware/auth");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.send("start with /api/users");
});

app.use('/api/users/:id/todos', /*authMiddleware.loginRequired,
        authMiddleware.ensureCorrectUser,*/ todoRoutes);
app.use('/api/users', authMiddleware.loginRequired, userRoutes);

app.use('/api/auth', authRoutes);

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
