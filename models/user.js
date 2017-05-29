// This is just about the minimum amount of code we need to write to create a Sequelize model. We export a function that takes in 2 variables. sequelize, and DataTypes. These are provided to us automatically by index.js.
// “sequelize” in this case is actually our connection to our database.
// DataTypes will be used to defining what type of data each property on our model should be. http://docs.sequelizejs.com/en/latest/api/datatypes/#string
// Inside of our function we run the “sequelize.define” method. We pass it two arguments. The name of our model as a string, and an object describing our model’s schema. Each property will represent a column in the database.
//   5
// sequelize.define returns an object, which we store inside the variable “User”. We return this variable at the end of the function on line 6.

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
        project_name: DataTypes.STRING,
        completed:DataTypes.BOOLEAN, 
        date:DataTypes.DATE
    });
    return user;
}

 