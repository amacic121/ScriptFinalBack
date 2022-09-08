'use strict';
var mongoose = require('mongoose'),
Task = mongoose.model('Tasks');



exports.createTask = function(req,res){

    let newTask = new Task(req.body)
    newTask.save(function(err,task) {

        if(err){
              res.send(err);
        }else{     
        res.json(task);
        }
    });
};

exports.updateTask = function(req,res){
    const updatedTask = req.body;
    Task.findByIdAndUpdate(req.params.id, updatedTask,function(err,task){
        if(err)
           res.send(err);
        res.json(task);

    });
};
  

exports.deleteTask = function(req,res){
    Task.findByIdAndDelete(req.params.id, function(err,task){
        if(err)
           res.send(err);
        res.json(task);

    });
};


  exports.listAllTasks = function (req,res) {
    Task.find({}, function(err,task){
        if(err)
            res.send(err);
        res.json(task);

    });
}

    exports.readTask = function (req,res){
        Task.findById(req.params.id, function(err,task){
            if(err)
                res.send(err);
            res.json(task);
        });
  }




























// const db = require("../models/task");
// const Task = db.tasks;
// // Create and Save a new Tutorial
// exports.create = (req, res) => {
  
// };


// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
  
// };
// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// //Createeeee

// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.description) {
//       res.status(400).send({ message: "Content can not be empty!" });
//       return;
//     }
//     // Create a Task
//     const tasks = new Task({
//         description: req.body.description,
//         typeOfTask: req.body.typeOfTask,
//         startingDate: req.body.startingDate,
//         dueDate: req.body.dueDate
//     });
//     // Save Tutorial in the database
//     tasks
//       .save(tasks)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the Task."
//         });
//       });
//   };

//   exports.update = (req, res) => {
//     if (!req.body.description) {
//       return res.status(400).send({
//         message: "Data to update can not be empty!"
//       });
//     }
//     const id = req.params.id;
//     Task.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//       .then(data => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot update Task with id=${id}. Maybe Task was not found!`
//           });
//         } else res.send({ message: "Task was updated successfully." });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating Task with id=" + id
//         });
//       });
//   };
  
//   exports.delete = (req, res) => {
//     const id = req.params.id;
//     Task.findByIdAndRemove(id)
//       .then(data => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
//           });
//         } else {
//           res.send({
//             message: "Task was deleted successfully!"
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Could not delete Task with id=" + id
//         });
//       });
//   };