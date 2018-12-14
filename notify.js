const notifier = require("node-notifier");

module.exports = function notify(title = "Title", message = "Message") {
  notifier.notify({
    title,
    message
  });
};
