import express from 'express';

const UserRouter = express.Router();

UserRouter.get('/signup', (req, res) => {
    res.send("Signup");
})


UserRouter.get('/login', (req, res) => {
    res.send("Login");
})







export default UserRouter;

