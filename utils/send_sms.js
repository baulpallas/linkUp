require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// console.log(accountSid, authToken);
const client = require("twilio")(accountSid, authToken);
const serviceId = process.env.TWILIO_SERVICE_ID;
const appLink = "https://bit.ly/37yzowH"; /*google.com placeholder shortlink*/

var clientInfo = {
  name: "",
  number: ""
};

function inivteMsg() {
  const notificationOpts = {
    toBinding: JSON.stringify({
      binding_type: "sms",
      address: clientInfo.number
    }),
    body: `Hi ${clientInfo.name}, someone has invited you to join their event on LinkUp. Click here to view event: ${appLink}`
  };

  client.notify
    .services(serviceId)
    .notifications.create(notificationOpts)
    .then(notification => console.log(notification.sid))
    .catch(error => console.log(error));
}
