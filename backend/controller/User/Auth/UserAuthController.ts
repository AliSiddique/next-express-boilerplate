import { Request, Response } from "express"

export const UserSignup = async (req: Request, res: Response) => {
    console.log(req.body)
    res.send("User Signup")
}
