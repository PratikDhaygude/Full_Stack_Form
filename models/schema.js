const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    objectives: {
        type: String,
        required:true
    },
    scope: {
        type: String,
        required:true
    },
    plan: {
        type: String,
        required:true
    },
    deliverables: {
        type: String,
        required:true
    },
    incentives: {
        type: String,
        required:true
    },
    conditions: {
        type: String,
        required:true
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports =  Project;