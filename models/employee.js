// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var employeeSchema = new Schema({
    employeeId : {type: Number},
    name:        {type: String},
    emailId:     {type: String},
    technology:  {type: String},
    phoneNumber: {type: Number},
    skypeId:     {type: String},
    salary:      {type: Number},
    created_at:  {type: Date, default: Date.now()},
    updated_at:  {type: Date}
});

// we need to create a model for using schema
var Employee = mongoose.model('employe',employeeSchema);

// make this available to our employee in our Node applications
module.exports = Employee;
