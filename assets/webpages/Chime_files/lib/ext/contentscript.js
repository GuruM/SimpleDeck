// Generated by CoffeeScript 1.6.3
var CONTEXT, inject_code;

inject_code = function() {
  var code, script;
  code = "\	document.write = function(evil) {\  	};\  	alert = function(evil) {\  	};\  	bust = function(evil) {\  	};	";
  script = document.createElement('script');
  script.appendChild(document.createTextNode(code));
  (document.head || document.documentElement).appendChild(script);
  return script.parentNode.removeChild(script);
};

if (in_iframe) {
  inject_code();
  initSites(this);
  CONTEXT = "content";
  milestone("Loaded iframe: " + document.domain);
  $(document).ready(function() {
    var domain, error, foundsite, notifications, site, status, url;
    domain = document.domain;
    url = document.url ? document.url : window.location.href;
    try {
      foundsite = ((function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = sites.length; _i < _len; _i++) {
          site = sites[_i];
          if (site.checkDomain(domain, url)) {
            _results.push(site);
          }
        }
        return _results;
      })())[0];
      assert(foundsite !== null, "Could not find site");
      notifications = foundsite.parse();
      status = SiteStatus.FINISHED;
      /*
      			if foundsite.checkLoggedIn()
      				notifications = foundsite.parse()
      				status = SiteStatus.FINISHED
      			else
      				notifications = null
      				status = SiteStatus.LOGGED_OUT
      
      			console.log "CHECKSTATUS: #{foundsite.name} --> #{status}"
      */

      chrome.extension.sendRequest({
        msgtype: "notifications",
        domain: domain,
        url: url,
        notifs: notifications,
        status: status
      });
      milestone("Fetched Notifications: " + foundsite.name);
    } catch (_error) {
      error = _error;
      console.log(error.message);
      chrome.extension.sendRequest({
        msgtype: "notifications",
        domain: domain,
        url: url,
        notifs: null,
        status: SiteStatus.HAD_ERROR,
        msg: error.message
      });
    }
  });
}
