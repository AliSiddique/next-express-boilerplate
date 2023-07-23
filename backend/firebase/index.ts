import { NextFunction, Request, Response } from "express";
import * as admin from "firebase-admin";
const serviceAccount = require("./serviceAccountKey.json");

export const initiliazeFirebaseAdmin = () => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    console.log("Firebase Admin SDK initialized successfully.");
}






export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  let token;

  // Check if the token is in the Authorization header
  const authorizationHeader = req.headers['authorization'];

  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    // Extract the token from the Authorization header
    token = authorizationHeader.split(' ')[1];
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
    next();
  } catch (error: any) {
    // If the token is invalid, check for a refresh token
    if (error.code === 'auth/id-token-expired') {
      const refreshToken = req.body.refreshToken;

      if (!refreshToken) {
        return res.status(401).json({ error: 'No refresh token found in the request.' });
      }

      try {
        // Exchange the refresh token for a new ID token
        const newIdToken = await admin.auth().createCustomToken(req.body.userId);
        req.body.token = newIdToken;
        return next();
      } catch (refreshError) {
        return res.status(401).json({ error: 'Failed to refresh token.' });
      }
    }

    return res.status(401).json({ error: error.message });
  }
};
