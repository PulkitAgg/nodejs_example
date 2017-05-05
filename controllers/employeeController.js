//Import required module
var Employee = require('../models/employee');


// export the postEmployee method
exports.postEmployee = function(req, res){
  // creating the new employee
  var emp = new Employee({
    employeeId : req.body.employeeId,
    name:        req.body.name,
    emailId:     req.body.emailId,
    technology:  req.body.technology,
    phoneNumber: req.body.phoneNumber,
    skypeId:     req.body.skypeId,
    salary:      req.body.salary,
    created_at:  new Date(),
    updated_at:  ""
  });

  //save the creating employee
  emp.save(function(error,response){
    // handle the error
      if(error){
        return error;
      }
      else{
        //send the response to the browser
        res.json({
          success: true,
          body: response
        });
      }
  }); // end of save method
} // end of postEmployee method


//export getAllEmployee method
exports.getAllEmployee = function(req,res){
    Employee.find({},function(error,response){
        if(error){
            return res.json(req,res,error);
        }
        //sending the reponse to the browser
        res.json(response);

    });
}


//export the getEmployee method
exports.getEmployee = function(req,res){
  // taking the id from the params of the url
  var id = req.params.id;
  //find the first employee form the collection
  Employee.findOne({employeeId:id},function(error,response){
    if(error){
        return res.json(error)
    }
    res.json(response);
  });
}


//export the searchEmployee method
exports.searchEmployee = function(req,res){
  var name = req.params.name;
  Employee.find({"name": new RegExp(name,"i")},function(error,response){
      if(error){
        res.json(error);
      }
      res.json(response);
  })
}

// export the updateEmployee method
exports.updateEmployee = function(req,res){
    console.log("In upadate");
  var id = req.params.employeeId;
  Employee.findOne({employeeId: id}, function(error,resEmployee){
      if(error){
          console.log("In error");
          res.json(error);
      }

      var newName = req.body.employeeName;
      //update the name
      resEmployee.name = newName;
      //update the date
      resEmployee.updated_at = new Date();
      //save the employee
      resEmployee.save(function(err, response){
          if(err){
              res.json(err);
          }

          res.json(response);
      });

  });
}


//export deleteEmployee method
exports.deleteEmployee = function(req,res){
  var empId = req.body.empId;
  Employee.findOne({employeeId: empId}, function(error,emp) {
      if(error){
        res.json(error);
      }
      Employee.remove({employeeId: empId},function(err,qres){
          if(err){
            res.json(err);
          }
          res.json("Successfully Deleted");
      });
  });
}
