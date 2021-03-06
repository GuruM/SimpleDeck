// Generated by CoffeeScript 1.6.3
var FacebookNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

FacebookNotification = (function(_super) {
  __extends(FacebookNotification, _super);

  FacebookNotification.prototype._id = 0;

  function FacebookNotification(description, url, time, unread) {
    var from, snippet, type;
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    type = this.description.type;
    if (type === 'message') {
      from = this.description.from;
      snippet = this.description.snippet;
      this.body = "<span class='important'>Inbox - " + from + ": </span><span class='unimportant'>" + snippet + "</span>";
      this.title = from;
      this.message_body = snippet;
    } else if (type === 'notification') {
      this.body = this.description.content;
      this._id = this.description.id;
      this.title = this.description.title_text;
      this.message_body = this.body.replace(/(<([^>]+)>)/ig, "");
    }
    this.icon_name = "icon.facebook.png";
    this.site = FacebookSite.instance;
    FacebookNotification.__super__.constructor.call(this);
  }

  FacebookNotification.prototype.markAsRead = function(read) {
    var url;
    FacebookNotification.__super__.markAsRead.call(this, read);
    url = "https://www.facebook.com/ajax/notifications/mark_read.php?seen=0&alert_ids%5B0%5D=" + this._id;
    $.get(url, null);
  };

  return FacebookNotification;

})(Notification);

this.FacebookSite = (function(_super) {
  __extends(FacebookSite, _super);

  FacebookSite.instance = null;

  FacebookSite.prototype._last_unread_count = -1;

  FacebookSite.prototype._last_timestamp = 0;

  FacebookSite.prototype._getUserId = function(callback) {
    var cookie_details, error;
    cookie_details = {
      url: 'https://facebook.com',
      name: 'c_user'
    };
    try {
      chrome.cookies.get(cookie_details, function(cookie) {
        if (cookie === null) {
          callback(0);
        }
        console.log(cookie.value);
        return callback(parseInt(cookie.value));
      });
    } catch (_error) {
      error = _error;
      callbackfunc(0);
    }
  };

  function FacebookSite() {
    this.name = "facebook";
    this.notif_description = ["notifications"];
    this.domain = "facebook.com";
    this.cookiedomain = ".facebook.com";
    this.loginurl = "https://www.facebook.com/login.php";
    this.callbackurl = ["https://www.facebook.com/desktop_notifications/popup.php?mark_as_read=0"];
    this.testurl = null;
    this.jsonurl = "https://www.facebook.com/desktop_notifications/counts.php";
    this.option_feed_type = FeedType.XHTTP;
    this.option_mark_read = true;
    this.option_quick_check = true;
    FacebookSite.__super__.constructor.apply(this, arguments);
    FacebookSite.instance = this;
  }

  FacebookSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'xs',
      cause: ['explicit', 'expired_overwrite']
    };
    FacebookSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  FacebookSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'https://facebook.com',
      name: 'xs'
    };
    return FacebookSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  FacebookSite.prototype.checkForNew = function(callbackfunc) {
    var site, url;
    site = this;
    url = this.jsonurl;
    loadJSON(url, function(jsonobj, loadstatus, loadmessage) {
      var err, responsestatus, timestamp, unread_count;
      if (loadmessage == null) {
        loadmessage = null;
      }
      try {
        switch (loadstatus) {
          case LoadStatusCodes.OK:
            unread_count = jsonobj.notifications.num_unread + jsonobj.inbox.unread;
            timestamp = jsonobj.inbox.latest;
            if (unread_count !== site._last_unread_count || timestamp > site._last_timestamp) {
              site._last_unread_count = unread_count;
              site._last_timestamp = timestamp;
              responsestatus = LoadStatusCodes.OK;
            } else {
              responsestatus = LoadStatusCodes.NO_NEW;
            }
            break;
          case LoadStatusCodes.ERROR:
            responsestatus = LoadStatusCodes.UNAUTHORIZED;
            this._last_unread_count = -1;
            break;
          default:
            this._last_unread_count = -1;
            responsestatus = loadstatus;
        }
      } catch (_error) {
        err = _error;
        console.log("Facebook had error " + err);
        responsestatus = LoadStatusCodes.ERROR;
      }
      return callbackfunc(site, responsestatus);
    });
  };

  FacebookSite.prototype.parse = function(body_element) {
    var err, notif_elements, notifications, responsestatus,
      _this = this;
    notifications = new Array();
    try {
      notif_elements = body_element.find('#jewelBoxNotif .notification');
      notif_elements.each(function(i, htmlelement) {
        var date, description, element, element_content, id, unread, url, _dataelement, _id_str;
        element = $(htmlelement);
        element_content = element.find('.info');
        url = element.find('.notifMainLink').attr('href');
        _dataelement = jQuery.parseJSON(element.attr('data-gt'));
        unread = _dataelement["unread"] === '1';
        _id_str = String(element.attr("id")).match(/notification_(\d+)/);
        id = _id_str !== null ? parseInt(_id_str[1]) : 0;
        description = {
          type: 'notification',
          content: element_content.justtext('div').html(),
          title_text: element_content.children().html(),
          id: id
        };
        date = new Date(parseInt(element.attr("data-notiftime")) * 1000);
        notifications.push(new FacebookNotification(description, url, date, unread));
      });
      /*
      			msg_elements = body_element.find('.del_area')
      			msg_elements.each (i, htmlelement) =>
      				element = $(htmlelement)
      
      				from = element.find('.title strong').text()
      				body = element.find('span.snippet').text()
      				url = 'https://facebook.com' + element.find('a.primary').attr('href')
      				if element.hasClass('aclb') then unread = true else unread = false
      
      				#Date parsing
      				date = element.find('.time abbr').text().toLowerCase()
      				days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
      				if date in days then date = 'last ' + date
      				if date is 'just now' then date = 'now'
      				if date.search(/min/) isnt -1 then date = '-' + date
      				date = Date.parse(date)
      
      				description =
      					type: 'message'
      					from: from
      					snippet: body
      
      				notifications.push new FacebookNotification description, url, date, unread
      				return
      */

      responsestatus = LoadStatusCodes.OK;
    } catch (_error) {
      err = _error;
      console.log(err);
      responsestatus = LoadStatusCodes.ERROR;
    }
    return [responsestatus, notifications];
  };

  return FacebookSite;

})(Site);
