const express = require('express');

const router = express.Router();

const Project = require('../models/schema');

// Routes
router.get('/project', (req, res) => {

    Project.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post('/administrator', (req, res) => {
    const data = req.body;
    // console.log('Body: ', data);
    const newProject = new Project(data);

    newProject.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // Project
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

router.get('/project/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});



module.exports = router;