import express, { Request, Response } from "express"
import User from "../../models/User/UserModel"
import * as admin from "firebase-admin";

const UserRouter = express.Router()

UserRouter.post("/signup", async (req: Request, res: Response) => {
    try {
      const { uid, email } = req.body;
  
      // Check if the user already exists in the database
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(409).json({ error: 'User with this email already exists.' });
      }
  
      // Create a new user document in MongoDB
      const newUser = new User({ uid,email });
      await newUser.save();
  
      // Respond with success status
      return res.status(201).json({ message: 'User created successfully.' });
    } catch (error) {
      console.error('Error during user sign-up:', error);
      return res.status(500).json({ error: 'Failed to create user.' });
    }
  });
UserRouter.get('/verify',async (req: Request, res: Response) => {
    let { token } = req.body;
  
    // If token is not in the request body, check if it's in the headers (e.g., Authorization header)
    if (!token) {
      const authorizationHeader = req.headers['authorization'];
  
      if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        // Extract the token from the Authorization header
        token = authorizationHeader.split(' ')[1];
      }
    }
  
    if (!token) {
      return res.status(401).json({ error: 'No token found in the request.' });
    }
  
    try {
      // Verify the token
      const decodedToken = await admin.auth().verifyIdToken(token);
      const userId = decodedToken.uid;
      const { email } = decodedToken;
  
      // You can now use the `userId` to perform further operations in your backend
      console.log("userId is: " + userId);
      console.log("email is: " + email);
  
      // Set the user ID in the request object for future use in other middleware or routes
      req.body.userId = userId;
      return res.json({userId: userId, email: email}).status(200)
    } catch (error:any) {
      // If the token is invalid, check for a refresh token
      if (error.code === 'auth/id-token-expired') {
        let refreshToken = req.body.refreshToken;
        if (!refreshToken) {
          const auth = req.headers['refreshtoken'] as string;
      
          if (auth && auth.startsWith('Refresh ')) {
            // Extract the token from the Authorization header
            refreshToken = auth.split(' ')[1];
          }
        }
        if (!refreshToken) {
          return res.status(401).json({ error: 'No refresh token found in the request.' });
        }
  
        try {
          // Exchange the refresh token for a new ID token
          const newIdToken = await admin.auth().createCustomToken(req.body.userId);
          req.body.token = newIdToken;
          return res.status(200).json({token: newIdToken})
        } catch (refreshError) {
          return res.status(401).json({ error: 'Failed to refresh token.' });
        }
      }
  
      return res.status(401).json({ error: error.message });
    }
  });

UserRouter.post("/login", (req: Request, res: Response) => {
    res.send("Login")
})

export default UserRouter
