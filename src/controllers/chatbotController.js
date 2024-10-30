require("dotenv").config();

const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;
console.log(MY_VERIFY_TOKEN);
let test = (req, res) => {
  return res.send("Hello again");
};

let getWebhook = (req, res) => {
  let VERIFY_TOKEN = MY_VERIFY_TOKEN;

  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode == "subscribe" && token == VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
};

let postWebhook = (req, res) => {
  let body = req.body;
  if (body.object == "page") {
    body.entry.forEach(function (entry) {
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });
    res.status(200).send("EVENT_RECIEVED");
  } else {
    res.sendStatus(404);
  }
};

// Handles messages events
function handleMessage(sender_psid, received_message) {}g

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {}
module.exports = {
  test: test,
  getWebhook: getWebhook,
  postWebhook: postWebhook,
};
