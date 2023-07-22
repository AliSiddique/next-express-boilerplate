import { NextFunction, Request, Response } from "express";
import * as admin from "firebase-admin";
const serviceAccount = require("./serviceAccountKey.json");

export const initiliazeFirebaseAdmin = () => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export const verifyToken = async (req:Request, res:Response, next:NextFunction) => {
    const { token } = req.body;
    console.log("token is: " + token);
  
    try {
      // Verify the token
      const decodedToken = await admin.auth().verifyIdToken(token);
      console.log("decodedToken is: " + decodedToken);
      const userId = decodedToken.uid;
      const { email } = decodedToken;
      console.log("email is: " + email);
  
      // You can now use the `userId` to perform further operations in your backend
      console.log("userId is: " + userId);
  
      // Set the user ID in the request object for future use in other middleware or routes
      req.body.userId = userId;
      next();
    } catch (error:any) {
      res.status(401).json({ error: error.message });
    }
  };
  