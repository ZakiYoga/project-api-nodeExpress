import express from "express";
import config from "./config.js";

export const startServer = () => {
  const httpServer = express();
  const port = config.port;

  try {

    console.log("Testing docker images");
    
    httpServer.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    throw new Error(err);
  }
};
