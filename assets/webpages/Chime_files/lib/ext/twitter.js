// Generated by CoffeeScript 1.6.3
var TwitterNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TwitterNotification = (function(_super) {
  __extends(TwitterNotification, _super);

  function TwitterNotification(description, url, time, _unread) {
    this.description = description;
    this.url = url;
    this.time = time;
    this._unread = _unread;
    if (description['type'] === 'message') {
      this.title = "DM from " + description['user_from'];
      this.message_body = description['text'];
    } else if (description['type'] === 'mention') {
      this.title = "" + description['user_from'];
      this.message_body = description['text'];
    } else if (description['type'] === 'auth') {
      this.title = "Connect to Twitter";
      this.message_body = "Add Chime as a Twitter app to get Twitter notifications.";
    }
    this.body = "<span class='important'>" + this.title + "</span><span class='unimportant'>: " + this.message_body + "</span>";
    this.icon_name = "icon.twitter.png";
    this.site = TwitterSite.instance;
    TwitterNotification.__super__.constructor.call(this);
    if (this.site._notif_hash === null || $.isEmptyObject(this.site._notif_hash)) {
      this.unread = false;
    } else {
      if (this.site._notif_hash[this.hash]) {
        this.unread = this.site._notif_hash[this.hash].unread;
      } else {
        this.unread = true;
      }
    }
    return;
  }

  TwitterNotification.prototype.updateAttr = function(newattr) {
    TwitterNotification.__super__.updateAttr.call(this, newattr);
    this.attr = newattr;
    if (this.time !== null) {
      if (time_diff(this.time, new Date()).days > 7) {
        this.unread = false;
      }
    }
  };

  return TwitterNotification;

})(Notification);

this.TwitterSite = (function(_super) {
  __extends(TwitterSite, _super);

  TwitterSite.instance = null;

  TwitterSite.prototype.last_unread_count = -1;

  TwitterSite._dm_max_id = 0;

  function TwitterSite() {
    this.name = "twitter";
    this.notif_description = ["mentions"];
    this.domain = "twitter.com";
    this.loginurl = "http://twitter.com/login/";
    this.callbackurl = ["https://twitter.com/mentions"];
    this.testurl = null;
    this.jsonurl = null;
    this.option_feed_type = FeedType.XHTTP;
    this.option_quick_check = true;
    this.option_mark_read = true;
    TwitterSite.__super__.constructor.apply(this, arguments);
    TwitterSite.instance = this;
    return;
  }

  TwitterSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'https://twitter.com',
      name: 'auth_token'
    };
    return TwitterSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  TwitterSite.prototype.parse = function(body_element) {
    var elements, notifications, responsestatus,
      _this = this;
    notifications = new Array();
    elements = body_element.find('.stream-item');
    elements.each(function(i, htmlelement) {
      var date, date_num, description, element, msg, name, notif, url, url_suffix;
      element = $(htmlelement);
      name = element.find('.fullname').text();
      msg = element.find('.js-tweet-text').text();
      url_suffix = element.find('.js-permalink').attr('href');
      url = "http://twitter.com/" + url_suffix;
      msg = msg.replace(/</g, "&lt;");
      msg = msg.replace(/>/g, "&gt;");
      date_num = parseInt(element.find('._timestamp').attr('data-time'));
      date = new Date(date_num * 1000);
      description = {
        user_from: name,
        text: msg,
        type: 'mention'
      };
      notif = new TwitterNotification(description, url, date, false);
      return notifications.push(notif);
    });
    responsestatus = LoadStatusCodes.OK;
    return [responsestatus, notifications];
  };

  TwitterSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new TwitterNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return TwitterSite.__super__.merge_notifications.call(this, notifs);
  };

  return TwitterSite;

})(Site);
