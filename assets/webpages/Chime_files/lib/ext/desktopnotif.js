// Generated by CoffeeScript 1.6.3
var CONTEXT, animate_notif, clickedNotification, hideDesktopNotifications, hideNotification, markNotification, root;

CONTEXT = "display";

root = this;

if (chrome.extension.getBackgroundPage() !== null) {
  root.sites = chrome.extension.getBackgroundPage().sites;
  root.notes = chrome.extension.getBackgroundPage().notes;
} else {
  root.sites = null;
  root.notes = null;
}

clickedNotification = function(e) {
  var url;
  url = $(this).attr('href');
  e.preventDefault();
  chrome.extension.sendRequest({
    msgtype: "clickednotif",
    url: url
  });
};

markNotification = function(e) {
  var url;
  url = $(this).siblings('a').attr('href');
  chrome.extension.sendRequest({
    msgtype: "marknotif",
    url: url
  });
  e.preventDefault();
  e.stopPropagation();
};

hideNotification = function(e) {
  var url;
  url = $(this).siblings('a').attr('href');
  chrome.extension.sendRequest({
    msgtype: "hidenotif",
    url: url
  });
  e.preventDefault();
  e.stopPropagation();
};

hideDesktopNotifications = function(e) {
  chrome.extension.getBackgroundPage().settingsSetNotifs(false);
  console.log(chrome.extension.getBackgroundPage().Settings.SHOW_NOTIFS);
};

animate_notif = function(notif_element) {
  move('.block').set('width', 16).duration('0.5s').then().set('width', 8).duration('0.5s').end();
};

$(function() {
  var err, h, msg, new_notifs, notif, notif_element, _i, _len, _notif;
  try {
    h = parseInt(getURLParameter('h'));
    new_notifs = root.notes.filter(function(notif) {
      return notif.hash === h;
    });
    notif = new_notifs[0];
    for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
      _notif = new_notifs[_i];
      _notif.attr.brandnew = false;
    }
    root.brandnew = 0;
    notif_element = renderNotification(notif, false, false);
    $('#notifications').append(notif_element);
    $('.notification-link').click(clickedNotification);
    $('.bar.close-x').click(markNotification);
    $('.bar.close-o').click(hideNotification);
    $('.close-x').tooltip({
      delay: {
        show: 100,
        hide: 0
      },
      placement: "left"
    });
    $('.close-o').tooltip({
      delay: {
        show: 100,
        hide: 0
      },
      placement: "left"
    });
  } catch (_error) {
    err = _error;
    msg = err.message;
    chrome.extension.sendRequest({
      msgtype: "errormsg",
      msg: "" + h + msg
    });
  }
});
