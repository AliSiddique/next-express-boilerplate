import express, { Request, Response } from "express"

const UserRouter = express.Router()

UserRouter.post("/signup", (req: Request, res: Response) => {
    res.send("Signup")
})

UserRouter.post("/login", (req: Request, res: Response) => {
    res.send("Login")
})

export default UserRouter
