import express from "express";
import chatbotController from "../controllers/chatbotController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", chatbotController.test);
  router.get("/webhook", chatbotController.getWebhook);
  router.post("/webhook", chatbotController.postWebhook);
  // Use the router with the app instance
  app.use("/", router);
};

export default initWebRoutes; // Use ES module export syntax
