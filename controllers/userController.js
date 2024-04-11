import express from "express";

const controller = {
    findAll: (req, res) => {
        res.status(200).json({message: "all users"})
    },

    findById: (req, res) => {
        res.status(200).json({message: "user ID : " + req.params.id})
    }
}

export default controller