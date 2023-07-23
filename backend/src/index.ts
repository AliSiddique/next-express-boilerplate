import express, { Express } from "express"
import cors from "cors"
import DBConnection from "../Database/DBConnection"
import UserRouter from "../routes/User/UserRoutes"
import  {initiliazeFirebaseAdmin, verifyToken}  from "../firebase"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 4000

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Firebase Admin SDK
initiliazeFirebaseAdmin()
// Database connection
DBConnection()
// Routes
app.use("/api/user", UserRouter)

app.get("/", (req, res) => {
    res.send("Hello World")
})
app.use(verifyToken)
app.get('/protected', (req, res) => {
    res.json({msg:'Hello from protected route.'});
    });
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})
