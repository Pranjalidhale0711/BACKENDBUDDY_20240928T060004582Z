// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const StudentDetails = require('../models/studentdetailsSchema');

// CRUD operations for StudentDetails
// Create Controller 
const createStudentDetails = async (req, res) => { 
    const { username, rollno, address } = req.body;
    try {
        const studentdetails = await StudentDetails.create({ username, rollno, address }) 
        await studentdetails.save();
        res.status(201).json(studentdetails);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateStudentDetails = async (req, res) => { 
    const _id=req.params.id;
    const { username, rollno, address } = req.body;
    try {
        const studentdetails = await StudentDetails.findByIdAndUpdate( _id, { username, rollno, address },{new:true}) 
        if (!studentdetails) {
            return res.status(404).send('studentdetails not found');
        }
        await studentdetails.save();
        res.status(201).json(studentdetails);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteStudentDetails = async (req, res) => { 
    const _id=req.params.id;
    try {
        const studentdetails = await StudentDetails.findById(_id)
        if (!studentdetails) {
            return res.status(404).send('studentdetails not found');
        }
        await StudentDetails.deleteOne({_id: _id})
        await studentdetails.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getStudentDetails = async (req, res) => { 
    const _id=req.params.id;
    try {
        const studentdetails = await StudentDetails.findById(_id)
        if (!studentdetails) {
            return res.status(404).send('studentdetails not found');
        }
        res.status(201).json(studentdetails);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllStudentDetails = async (req, res) => { 
    try {
        const studentdetails = await StudentDetails.find({})
        if (!studentdetails) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(studentdetails);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createStudentDetails,
    updateStudentDetails,
    deleteStudentDetails,
    getStudentDetails,
    getAllStudentDetails
}