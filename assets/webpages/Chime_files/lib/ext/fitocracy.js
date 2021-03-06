// Generated by CoffeeScript 1.6.3
var FitocracyNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

FitocracyNotification = (function(_super) {
  __extends(FitocracyNotification, _super);

  function FitocracyNotification(description, url, time, unread) {
    var text;
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    text = description['text'];
    this.body = "<span class='important'>" + text;
    this.time = time;
    this.url = url;
    this.unread = unread;
    this.site = FitocracySite.instance;
  }

  return FitocracyNotification;

})(Notification);

this.FitocracySite = (function(_super) {
  __extends(FitocracySite, _super);

  FitocracySite.instance = null;

  FitocracySite.prototype.last_unread_count = -1;

  function FitocracySite() {
    this.name = "fitocracy";
    this.domain = "www.fitocracy.com";
    this.cookiedomain = this.domain;
    this.loginurl = "http://www.fitocracy.com/accounts/login/";
    this.callbackurl = ["http://www.fitocracy.com/notifications"];
    this.testurl = null;
    this.jsonurl = null;
    FitocracySite.__super__.constructor.apply(this, arguments);
    FitocracySite.instance = this;
  }

  FitocracySite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'sessionid',
      cause: ['overwrite']
    };
    FitocracySite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  FitocracySite.prototype.checkLoggedIn = function(callbackfunc) {
    return $.get('http://www.fitocracy.com', function(htmlelement) {
      var attr, element, err, logged_out, status;
      try {
        element = $(htmlelement)[51];
        if (element.hasAttributes()) {
          attr = element.attributes[1];
          logged_out = attr.name === 'class' && attr.value === 'logged-out';
          status = logged_out ? LoadStatusCodes.UNAUTHORIZED : LoadStatusCodes.OK;
        } else {
          status = LoadStatusCodes.UNAUTHORIZED;
        }
        return callbackfunc(status);
      } catch (_error) {
        err = _error;
        return callbackfunc(LoadStatusCodes.OK);
      }
    });
  };

  FitocracySite.prototype.parse = function() {
    var notifications, size,
      _this = this;
    size = $('li').size();
    notifications = new Array(size);
    $('li').each(function(i, htmlelement) {
      var body, bodyelement, date, description, element, unread, url;
      element = $(htmlelement);
      bodyelement = element.find('.notification-content a');
      body = bodyelement.text();
      url = 'http://www.fitocracy.com/' + bodyelement.attr('href');
      date = new Date(element.find('.notification-timestamp').text());
      description = {
        text: body
      };
      unread = element.hasClass('unread-notification');
      notifications[i] = new FitocracyNotification(description, url, date, unread);
    });
    return notifications;
  };

  FitocracySite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new FitocracyNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return FitocracySite.__super__.merge_notifications.call(this, notifs);
  };

  return FitocracySite;

})(Site);
