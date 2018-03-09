cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-screensize.screensize",
    "file": "plugins/cordova-plugin-screensize/www/screensize.js",
    "pluginId": "cordova-plugin-screensize",
    "clobbers": [
      "window.plugins.screensize"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-vibration": "3.0.1",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-screensize": "1.3.1",
  "cordova-plugin-dialogs": "2.0.1"
};
// BOTTOM OF METADATA
});