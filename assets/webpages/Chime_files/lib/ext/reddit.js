// Generated by CoffeeScript 1.6.3
var RedditNotification,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

RedditNotification = (function(_super) {
  __extends(RedditNotification, _super);

  RedditNotification.prototype._id = 0;

  function RedditNotification(description, url, time, unread) {
    this.description = description;
    this.url = url;
    this.time = time;
    this.unread = unread;
    if (description['type'] === 'comment') {
      this.body = "<span class='important'>" + description['subject'] + "</span> from <span class='unimportant'>" + description['user_from'] + "</span> via <span class='unimportant'>" + description['subreddit'] + "</span>: <span class='unimportant'>" + description['content'] + "</span>";
    } else if (description['type'] === 'message') {
      this.body = "<span class='important'>" + description['subject'] + "</span> from <span class='unimportant'>" + description['user_from'] + "</span>: <span class='unimportant'>" + description['content'] + "</span>";
    }
    this.title = description['subject'];
    this.message_body = description['content'];
    this.icon_name = "icon.reddit.png";
    this._id = this.description.id;
    this.unread = unread;
    this.url = url;
    this.site = RedditSite.instance;
    RedditNotification.__super__.constructor.call(this);
  }

  RedditNotification.prototype.markAsRead = function(read) {
    RedditNotification.__super__.markAsRead.call(this, read);
    if (this.site.unread === 0) {
      $.get('http://www.reddit.com/message/inbox/.json?mark=true', null);
    }
    $.post("http://www.reddit.com/api/read_message", {
      uh: this.site._modhash,
      id: this._id
    });
  };

  RedditNotification.prototype.click = function(mark) {
    if (mark == null) {
      mark = true;
    }
    RedditNotification.__super__.click.call(this, mark);
    return mark;
  };

  return RedditNotification;

})(Notification);

this.RedditSite = (function(_super) {
  __extends(RedditSite, _super);

  RedditSite.instance = null;

  RedditSite._modhash = "";

  RedditSite.prototype.last_unread_count = -1;

  function RedditSite() {
    this.name = "reddit";
    this.notif_description = ["comment replies", "personal messages"];
    this.domain = "www.reddit.com";
    this.cookiedomain = ".reddit.com";
    this.loginurl = "http://reddit.com/login";
    this.callbackurl = ["http://www.reddit.com/message/inbox/.json"];
    this.testurl = null;
    this.option_quick_check = true;
    this.quickcheckurl = "http://www.reddit.com/api/me.json";
    this.option_feed_type = FeedType.JSON;
    this.option_mark_read = true;
    this.had_mail = false;
    RedditSite.__super__.constructor.apply(this, arguments);
    RedditSite.instance = this;
  }

  RedditSite.prototype.checkCookie = function(changeInfo) {
    var cookiematch;
    cookiematch = {
      name: 'reddit_session',
      cause: ['explicit', 'expired_overwrite']
    };
    RedditSite.__super__.checkCookie.call(this, cookiematch, changeInfo);
  };

  RedditSite.prototype.checkLoggedIn = function(callbackfunc) {
    var cookie_details;
    cookie_details = {
      url: 'http://www.reddit.com',
      name: 'reddit_session'
    };
    return RedditSite.__super__.checkLoggedIn.call(this, cookie_details, callbackfunc);
  };

  RedditSite.prototype.checkForNew = function(callbackfunc) {
    var site, url;
    site = this;
    url = this.quickcheckurl;
    loadJSON(url, function(jsonobj, loadstatus, loadmessage) {
      var err, has_mail, responsestatus;
      if (loadmessage == null) {
        loadmessage = null;
      }
      try {
        switch (loadstatus) {
          case LoadStatusCodes.OK:
            if (jsonobj.json) {
              responsestatus = LoadStatusCodes.UNAUTHORIZED;
            } else {
              has_mail = jsonobj.data.has_mail;
              if (has_mail || site.status === SiteStatus.UNINITIALIZED) {
                this.had_mail = has_mail;
                responsestatus = LoadStatusCodes.OK;
              } else if (has_mail === false && this.had_mail === true) {
                this.had_mail = has_mail;
                responsestatus = LoadStatusCodes.OK;
              } else {
                responsestatus = LoadStatusCodes.NO_NEW;
              }
            }
            break;
          case LoadStatusCodes.ERROR:
            responsestatus = LoadStatusCodes.UNAUTHORIZED;
            break;
          default:
            responsestatus = loadstatus;
        }
      } catch (_error) {
        err = _error;
        console.log("Reddit had error " + err);
        responsestatus = LoadStatusCodes.ERROR;
      }
      return callbackfunc(site, responsestatus);
    });
  };

  RedditSite.prototype.parse = function(jsonobj) {
    var inbox, item, notifs, parseNotification, responsestatus, _i, _len;
    parseNotification = function(jsonobj) {
      var description, itemdata, notif_type, time, unread, url;
      itemdata = jsonobj.data;
      time = itemdata.created_utc ? new Date(itemdata.created_utc * 1000) : null;
      unread = itemdata["new"];
      if (itemdata.was_comment) {
        notif_type = 'comment';
        url = "http://www.reddit.com" + itemdata.context;
      } else {
        notif_type = 'message';
        url = "http://www.reddit.com/message/messages/" + itemdata.id;
      }
      description = {
        type: notif_type,
        subject: itemdata.subject,
        user_from: itemdata.author,
        subreddit: itemdata.subreddit,
        content: itemdata.body,
        id: itemdata.name
      };
      return new RedditNotification(description, url, time, unread);
    };
    notifs = new Array();
    if (jsonobj.data === null) {
      responsestatus = LoadStatusCodes.UNAUTHORIZED;
    } else {
      this._modhash = jsonobj.data.modhash;
      inbox = jsonobj.data.children;
      for (_i = 0, _len = inbox.length; _i < _len; _i++) {
        item = inbox[_i];
        notifs.push(parseNotification(item));
      }
      responsestatus = LoadStatusCodes.OK;
    }
    return [responsestatus, notifs];
  };

  RedditSite.prototype.merge_notifications = function(new_notifs) {
    var notif, notifs, size;
    size = new_notifs;
    notifs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = new_notifs.length; _i < _len; _i++) {
        notif = new_notifs[_i];
        _results.push(new RedditNotification(notif.description, notif.url, new Date(notif.time), notif.unread));
      }
      return _results;
    })();
    return RedditSite.__super__.merge_notifications.call(this, notifs);
  };

  return RedditSite;

})(Site);
