import express from "express";
import bookRouter from "./routes/bookRoutes.js";
import userRouter from "./routes/userRoutes.js";


const API_VERSION = "v1"
const port = 8000;
const app = express();

/**
 * var router = express.Router()
 * @param {int} value 
 * @param {int} length 
 * @returns string value of argument, padded to the left with "0", to length "length"
 */
const padLeft = (value, length) => {
    let result = "" + value
    while (result.length < length) {
        result = "0" + result
    }
    return result
}

/**
 * 
 * @returns La date courante, formatée
 */
const getFormatedDate = () => {
    let date_ob = new Date();
    let year = date_ob.getFullYear();
    let month = padLeft(date_ob.getMonth(), 2);
    let date = padLeft(date_ob.getDate(), 2);
    let hours = padLeft(date_ob.getHours(), 2);
    let minutes = padLeft(date_ob.getMinutes(), 2);
    let seconds = padLeft(date_ob.getSeconds(), 2);
    let result = date + "/" + month + "/" + year + " " + hours + "h" + minutes + ":" + seconds

    return result
};

// Routes
app.use(`/api/${API_VERSION}/book`, bookRouter);
app.use(`/api/${API_VERSION}/user`, userRouter);

// Lancement
console.clear();
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
