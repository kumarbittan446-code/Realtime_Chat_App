import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const toekn = req.cookies.jwt;

    if (!toekn) {
      return res
        .status(401)
        .json({ message: "Unauthorize - No Token Provided" });
    }

    const decoded = jwt.verify(toekn, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorize - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectedRoute Middleware", error.message);
    res.status(500).json({ message: "Internal server Error" });
  }
};
