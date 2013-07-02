var CONTEXT, root;

CONTEXT = "background";

root = typeof exports !== "undefined" && exports !== null ? exports : this;

initSites(this);

$(document).ready(function() {
  var countAllUnread, fetchAllNotifications, loadSite, loadedAllNotifications;
  loadSite = function(site, callbackfunc) {
    return loadURL(site.callbackurl, site.domain, callbackfunc);
  };
  countAllUnread = function() {
    var result, site, _i, _len;
    result = 0;
    for (_i = 0, _len = sites.length; _i < _len; _i++) {
      site = sites[_i];
      result += site.count_unread();
    }
    return result;
  };
  loadedAllNotifications = function(brandnewcount) {
    console.log(brandnewcount);
    blockImages(false);
    return chrome.extension.sendRequest({
      msgtype: "refresh",
      brandnew: brandnewcount,
      unread: countAllUnread()
    });
  };
  fetchAllNotifications = function() {
    var brandnewcount, remaining, site, _fn, _i, _len, _ref;
    remaining = root.sites.length;
    brandnewcount = 0;
    blockImages(true);
    _ref = root.sites;
    _fn = function(site) {
      site.status = SITE_STATUS_FETCHING;
      loadSite(site, function(request) {
        if (request.status !== SITE_STATUS_HAD_ERROR) {
          if (request.notifs !== null) {
            brandnewcount += site.merge_notifications(request.notifs);
          }
          site.status = request.status;
        } else {
          throw_assert("" + site.name + ": " + request.msg);
          site.status = SITE_STATUS_HAD_ERROR;
        }
        return;
        remaining--;
        if (remaining === 0) return loadedAllNotifications(brandnewcount);
      });
    };
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      site = _ref[_i];
      _fn(site);
    }
  };
  headersIntercept();
  fetchAllNotifications();
  return setInterval(fetchAllNotifications, 60000);
});
