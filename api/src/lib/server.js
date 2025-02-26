import express from "express";
import config from "./config.js";
import { setupRoutes } from "./setupRoutes.js";

export const startServer = () => {
  const httpServer = express();
  const port = config.port;

  // TODO - abstract this to the router
  // Test route for port config

  setupRoutes(httpServer);

  try {
    httpServer.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    throw new Error(err);
  }
};
