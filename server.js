var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var db= require("./models");

var port = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// Routes =============================================================

// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// app.use("/", routes);

db.sequelize.sync().then (function() {
	app.listen(port, function() {
		console.log("Listening on PORT " + port);
	});
})

// notes for above
// The sequelize property on the db object is actually our connection to our database. ‘sync’ is a built in sequelize method that creates tables using the models we describe. After our database is sync’ed (this may take a certain amount of time) we start our express server. Using this method, we guarantee that our server won’t start before our database is ready. We also guarantee that our server won’t start if there’s an error connecting to our database. To check if this worked, open
//  6
// your database in MYSQL Workbench or the SQL GUI of your choice to see if the tables were added