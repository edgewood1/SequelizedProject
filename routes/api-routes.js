// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.user.findAll({}).then(function(data) {
      // We have access to the todos as an argument inside of the callback function
      // res.json(dbProject);
      var hbsObject={
        projects:data
      };

      res.render("index", hbsObject);
    });
  });

  // POST route for saving a new todo
  app.post("/", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.user.create({
      project_name: req.body.project_name,
      completed: req.body.completed
    }).then(function(dbProject) {
      // We have access to the new todo as an argument inside of the callback function
      // res.json(dbProject);
      res.redirect("/");
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.user.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
        res.redirect("/");
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/:id", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.user.update({
      // project_name: req.body.project_name,
      completed: req.body.completed
    }, {
      where: {
        id: req.params.id
      }
    }).then(function() {
       res.redirect("/");
    });
  });

};


