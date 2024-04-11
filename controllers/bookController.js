import express from "express";

const bookController = {
    findAll: (req, res) => {
        res.status(200).json({message: "all books"})
    },

    findById: (req, res) => {
        res.status(200).json({message: "book ID : " + req.params.id})
    }
}

export default bookController