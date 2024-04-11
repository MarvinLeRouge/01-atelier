import express from "express";

const controller = {
    findAll: (req, res) => {
        res.status(200).json({message: "all books"})
    },

    findById: (req, res) => {
        res.status(200).json({message: "book ID : " + req.params.id})
    },
    create: (req, res) => {
        console.log("request", req.body)
        res.status(201).json(req.body);
    }
}

export default controller