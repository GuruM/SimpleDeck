// Generated by CoffeeScript 1.6.3
var FoursquareNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

FoursquareNotification = (function(_super) {
  __extends(FoursquareNotification, _super);

  function FoursquareNotification(description, url, time, unread) {
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    this.body = description;
    this.time = time;
    this.url = url;
    this.unread = unread;
    this.site = FoursquareSite.instance;
    this.title = this.body;
    this.message_body = "";
    this.icon_name = "icon.foursquare.png";
    FoursquareNotification.__super__.constructor.call(this);
  }

  return FoursquareNotification;

})(Notification);

this.FoursquareSite = (function(_super) {
  __extends(FoursquareSite, _super);

  FoursquareSite.instance = null;

  function FoursquareSite() {
    this.name = "foursquare";
    this.notif_description = ["notifications"];
    this.domain = "foursquare.com";
    this.cookiedomain = this.domain;
    this.loginurl = "https://foursquare.com/login";
    this.callbackurl = ["https://foursquare.com/user/notifications"];
    this.testurl = null;
    this.jsonurl = null;
    this.option_feed_type = FeedType.XHTTP;
    this.option_mark_read = false;
    FoursquareSite.__super__.constructor.apply(this, arguments);
    FoursquareSite.instance = this;
  }

  FoursquareSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'oauth_token',
      cause: ['explicit']
    };
    return FoursquareSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  FoursquareSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'https://foursquare.com',
      name: 'oauth_token'
    };
    return FoursquareSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  FoursquareSite.prototype.parse = function(body) {
    var JSONdata, JSONobj, baseurl, beginIndex, date, description, endIndex, err, notif, notifications, responsestatus, scriptAsHTML, scriptAsText, targetid, timeZoneOffset, type, unread, url, userid, utcSeconds, _i, _len;
    notifications = new Array();
    try {
      scriptAsHTML = body.find('script').prevObject.get(96);
      scriptAsHTML = $(scriptAsHTML).html();
      beginIndex = scriptAsHTML.search(/notificationsJson:/);
      endIndex = scriptAsHTML.search(/\}\)\)\.render\(\);/);
      scriptAsText = scriptAsHTML.slice(beginIndex, +(endIndex - 1) + 1 || 9e9);
      scriptAsText = '{' + '"' + scriptAsText.slice(0, 17) + '"' + scriptAsText.slice(17) + '}';
      JSONdata = jQuery.parseJSON(scriptAsText)['notificationsJson']['notifications']['items'];
      for (_i = 0, _len = JSONdata.length; _i < _len; _i++) {
        JSONobj = JSONdata[_i];
        description = JSONobj['text'];
        unread = JSONobj['unread'];
        utcSeconds = parseInt(JSONobj['createdAt'], 10);
        timeZoneOffset = JSONobj['target']['object']['timeZoneOffset'];
        if (timeZoneOffset === void 0) {
          timeZoneOffset = 0;
        } else {
          timeZoneOffset = parseInt(timeZoneOffset, 10);
        }
        date = new Date(0);
        date.setUTCSeconds(utcSeconds + timeZoneOffset);
        type = JSONobj['target']['type'];
        targetid = JSONobj['target']['object']['id'];
        baseurl = 'https://foursquare.com';
        if (type === 'checkin') {
          userid = JSONobj['target']['object']['user']['id'];
          url = baseurl + '/user/' + userid + '/checkin/' + targetid;
        } else if (type === 'user') {
          url = baseurl + '/user/' + targetid;
        } else if (type === 'tip') {
          url = baseurl + '/item/' + targetid;
        } else {
          url = baseurl + '/user/notifications';
        }
        notif = new FoursquareNotification(description, url, date, unread);
        notifications.push(notif);
      }
      responsestatus = LoadStatusCodes.OK;
    } catch (_error) {
      err = _error;
      console.log(err);
      responsestatus = LoadStatusCodes.UNAUTHORIZED;
    }
    return [responsestatus, notifications];
  };

  FoursquareSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new FoursquareNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return FoursquareSite.__super__.merge_notifications.call(this, notifs);
  };

  return FoursquareSite;

})(Site);
