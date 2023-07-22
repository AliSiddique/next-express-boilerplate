import express, { Express } from "express"
import cors from "cors"
import UserRouter from "../routes/User/UserRoutes"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 4000

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/api/user", UserRouter)

app.listen(PORT, () => {
    console.log("Server is running on port 4000")
})
