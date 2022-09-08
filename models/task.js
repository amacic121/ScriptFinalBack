'use strict';
const { object } = require('joi');
const Joi = require('joi');
const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: 'please enter'
    },
    typeOfTask: {
        type: String,
        required: 'please enter'
    },
    startingDate: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        default: Date.now
    },
    
});

taskSchema.method("toJSON", function () {
    const {__v,_id, ...object} = this.toObject();
    object.id = _id;
    return object;
})

function validateTask(task) {
    const schema = Joi.object({
        description: Joi.string().min(1).max(500).required(),
        typeOfTask: Joi.string().required(),
        startingDate: Joi.date().required(),
        // dueDate: Joi.string().min(5).max(255).required(),
        dueDate: Joi.date().greater(Joi.ref('startingDate')).required()
    });
    return schema.validate(task);
}

module.exports = mongoose.model('Tasks',taskSchema);
exports.validate = validateTask;
