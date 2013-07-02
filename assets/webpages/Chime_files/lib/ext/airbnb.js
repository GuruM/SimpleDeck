// Generated by CoffeeScript 1.6.3
var AirbnbNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

AirbnbNotification = (function(_super) {
  __extends(AirbnbNotification, _super);

  function AirbnbNotification(description, url, time, unread) {
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    this.body = "<span class='important'>" + description['user'] + "</span> of <span class='important'>" + description['location'] + "</span>: <span class='unimportant'>" + description['message'] + "</span>";
    this.time = time;
    this.url = url;
    this.unread = unread;
    this.site = AirbnbSite.instance;
  }

  return AirbnbNotification;

})(Notification);

this.AirbnbSite = (function(_super) {
  __extends(AirbnbSite, _super);

  AirbnbSite.instance = null;

  AirbnbSite.prototype.last_unread_count = -1;

  function AirbnbSite() {
    this.name = "airbnb";
    this.domain = "www.airbnb.com";
    this.callbackurl = ["http://www.airbnb.com/home/inbox"];
    this.testurl = null;
    this.jsonurl = null;
    AirbnbSite.__super__.constructor.apply(this, arguments);
    AirbnbSite.instance = this;
  }

  AirbnbSite.prototype.parse = function() {
    var notifications, size;
    size = $('.thread').size();
    notifications = new Array(size);
    $('.thread').each(function(i, htmlelement) {
      var date, description, element, last_date, location, message, unread, url, user, user_date;
      element = $(htmlelement);
      user_date = element.find('.user p').html().split('<br>');
      user = $.trim(user_date[0]);
      date = new Date($.trim(user_date[1]));
      message = element.find('.message_details p a').text();
      url = 'http://airbnb.com' + element.find('.message_details p a').attr('href');
      location = element.find('.locality').text() + ', ' + element.find('.region').text();
      last_date = i === 0 ? new Date : notifications[i - 1].time;
      date.setFullYear(last_date.getFullYear());
      if (date > last_date) {
        date.setFullYear(last_date.getFullYear() - 1);
      }
      description = {
        user: user,
        message: message,
        location: location
      };
      unread = false;
      return notifications[i] = new AirbnbNotification(description, url, date, unread);
    });
    return notifications;
  };

  AirbnbSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs, size;
    size = new_notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new AirbnbNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return AirbnbSite.__super__.merge_notifications.call(this, notifs);
  };

  return AirbnbSite;

})(Site);