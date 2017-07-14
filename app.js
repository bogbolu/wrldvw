var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    User        = require("./models/user"),
    methodOverride = require("method-override"),
    path = require('path'),
    cors = require('cors');

//requiring routes
var personRoutes = require("./routes/people"),
    indexRoutes  =  require("./routes/index"),
    companyRoutes = require("./routes/companies");

var url = "mongodb://peter:123456@ds157342.mlab.com:57342/thissit";
//var url = process.env.DATABASEURL;
mongoose.connect(url);

// Cors Middleware
app.use(cors());

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Oida",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

require('./passport')(passport);

app.use(methodOverride('_method'));
app.use("/", indexRoutes);
app.use("/people", personRoutes);
app.use("/companies", companyRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// app.listen(3000, process.env.IP, function(){
//     console.log("THISISIT server has started");
// });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("THISISIT server has started");
});
