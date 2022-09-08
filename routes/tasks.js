'use strict';
const express = require('express');
const { Task, validate } = require('../models/task');
const Joi = require('joi');



module.exports = function(app){

    
    const tasks = require("../controller/taskController.js");

    app.route('/tasks')
    .post(tasks.createTask)
        .get(tasks.listAllTasks);

    app.route('/tasks/:id')
    .put(tasks.updateTask);

    app.route('/tasks/:id')
    .delete(tasks.deleteTask);

    app.route('/tasks/:id')
    .get(tasks.readTask);

};

