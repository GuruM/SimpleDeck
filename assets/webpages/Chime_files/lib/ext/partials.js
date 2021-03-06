// Generated by CoffeeScript 1.6.3
var renderClearDropdown, renderDropdown, renderNotification, renderServiceText, renderSetupBlock, renderSetupModal, renderSiteBlock;

jQuery.fn["do"] = function(parent, callbackfunc) {
  var node;
  node = $(this);
  if (parent) {
    node.appendTo(parent);
  }
  callbackfunc.call(node);
  return node;
};

renderSiteBlock = function(site) {
  var error, name, status;
  try {
    name = site.name.toLowerCase();
    status = "service-status-" + site.status;
    return $('<div>', {
      "class": "service " + name + " " + status
    })["do"](null, function() {
      $('<div>', {
        "class": "card"
      })["do"](this, function() {
        $('<div>', {
          "class": "face image"
        }).appendTo(this);
        return $('<div>', {
          "class": "face service-icon-overlay"
        })["do"](this, function() {
          return $("<span>login</span>").appendTo(this);
        });
      });
      return $('<div>', {
        "class": "service-authorize-overlay"
      })["do"](this, function() {
        return $("<span>authorize</span>").appendTo(this);
      });
    });
  } catch (_error) {
    error = _error;
  }
};

renderNotification = function(notif, grouped, popup) {
  var description, groupedcls, name, service_name, site, timetxt, unread, unreadcls, url;
  if (grouped == null) {
    grouped = false;
  }
  if (popup == null) {
    popup = false;
  }
  name = notif.site.name.toLowerCase();
  service_name = name;
  if (name === 'gplus') {
    name = 'Google+';
  }
  unreadcls = notif.unread ? "unread" : "";
  url = notif.url;
  description = "<span>" + notif.body + "</span>";
  unread = notif.site.unread;
  site = notif.site;
  groupedcls = grouped ? "grouped" : "";
  if (notif.time !== null) {
    timetxt = jQuery.timeago(new Date(notif.time));
  } else {
    timetxt = "";
  }
  return $('<div>', {
    "class": "notification " + service_name + " " + unreadcls + " " + groupedcls,
    dataurl: url,
    datasite: site.name
  })["do"](null, function() {
    $('<a>', {
      "class": "notification-link",
      href: url,
      target: "_blank"
    })["do"](this, function() {
      $('<div>', {
        "class": "block"
      }).appendTo(this);
      return $('<div>', {
        "class": "notification-box"
      })["do"](this, function() {
        $('<div>', {
          "class": "description"
        })["do"](this, function() {
          return $(description).appendTo(this);
        });
        return $('<div>', {
          "class": "info"
        })["do"](this, function() {
          $('<span>', {
            "class": "date",
            text: timetxt
          }).appendTo(this);
          this.append(" via ");
          $('<span>', {
            "class": "service",
            text: name
          }).appendTo(this);
          if (name === "gmail" && notif.email !== null) {
            return this.append(" [" + notif.email + "]");
          }
        });
        /*
        				if notif.site.option_mark_read
        					$('<div>',{class: "bar half close-o", rel: "tooltip", title:"Hide"}).appendTo @
        					$('<div>',{class: "bar half close-x", rel: "tooltip", title:"Mark as Read"}).appendTo @
        				else
        					$('<div>',{class: "bar close-o", rel: "tooltip", title:"Hide"}).appendTo @
        */

      });
    });
    if (notif.site.option_mark_read) {
      $('<div>', {
        "class": "bar close-x",
        rel: "tooltip",
        title: "Mark as Read"
      }).appendTo(this);
    } else {
      $('<div>', {
        "class": "bar close-o",
        rel: "tooltip",
        title: "Hide"
      }).appendTo(this);
    }
    if (grouped) {
      return $('<div>', {
        "class": "grouped-notification-mini",
        datasite: name
      })["do"](this, function() {
        return $('<div>', {
          "class": "text"
        })["do"](this, function() {
          $('<span>', {
            "class": "unread-count",
            text: unread
          }).appendTo(this);
          $('<span>', {
            text: " unread "
          }).appendTo(this);
          $('<span>', {
            "class": "service",
            text: name
          }).appendTo(this);
          return $('<span>', {
            text: " notifications "
          }).appendTo(this);
        });
      });
    }
  });
};

renderServiceText = function(service) {
  var service_text;
  service_text = service === 'gplus' ? 'Google+' : service;
  return $('<span>', {
    "class": "service " + service,
    text: service_text + " "
  });
};

renderDropdown = function(site, parent) {
  return $('<div>', {
    "class": "dropdown pull-right"
  })["do"](parent, function() {
    return $('<ul>', {
      "class": "dropdown-menu",
      role: "menu"
    })["do"](this, function() {
      $('<li>')["do"](this, function() {
        return $('<a>', {
          "class": "dropdown-mark-all " + site.name,
          tabindex: -1,
          href: "#"
        })["do"](this, function() {
          return this.append("Mark all " + site.name + " notifications as Read");
        });
      });
      return $('<li>')["do"](this, function() {
        return $('<a>', {
          "class": "dropdown-remove " + site.name,
          tabindex: -1,
          href: "#"
        })["do"](this, function() {
          return this.append("Remove " + site.name + " from Chime");
        });
      });
    });
  });
};

renderClearDropdown = function(parent) {
  var site, site_name, _i, _len, _ref, _results;
  parent.empty();
  _ref = root.sites;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    site = _ref[_i];
    site_name = site.name === 'gplus' ? 'Google+' : site.name;
    if (site.count_new > 0) {
      _results.push($('<li>')["do"](parent, function() {
        return $('<a>', {
          "class": "dropdown-mark-all " + site.name,
          datasite: "" + site.name,
          tabindex: -1,
          href: "#"
        })["do"](this, function() {
          this.append("Clear ");
          return $('<span>', {
            "class": "service " + site.name,
            text: "" + site.name
          }).appendTo(this);
        });
      }));
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

renderSetupModal = function(parent, setup) {
  var site, _i, _len, _ref;
  if (setup == null) {
    setup = true;
  }
  _ref = root.master_sites;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    site = _ref[_i];
    renderSetupBlock(site, parent, setup);
  }
};

renderSetupBlock = function(site, parent, setup) {
  var block_elem, enablecls, name, selectcls;
  if (!setup) {
    if (site.status === SiteStatus.FINISHED) {
      enablecls = "";
    } else {
      enablecls = "disabled";
    }
    if (isSiteEnabled(site)) {
      selectcls = "selected";
    } else {
      selectcls = "";
    }
  } else {
    selectcls = "";
    enablecls = "";
  }
  name = site.name;
  block_elem = $('<div>', {
    "class": "service select " + selectcls + " " + enablecls + " " + name,
    datasite: "" + name
  })["do"](parent, function() {
    $('<div>', {
      "class": "overlay"
    }).appendTo(this);
    $('<div>', {
      "class": "bar"
    }).appendTo(this);
    $('<div>', {
      "class": "image"
    }).appendTo(this);
    return $('<div>', {
      "class": "service-text"
    })["do"](this, function() {
      $('<h4>', {
        "class": "service-name",
        text: "" + name
      }).appendTo(this);
      return $('<ul>', {
        "class": "notif-details"
      })["do"](this, function() {
        var notif_type, _i, _len, _ref, _results;
        _ref = site.notif_description;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          notif_type = _ref[_i];
          _results.push($('<li>', {
            text: "" + notif_type
          }).appendTo(this));
        }
        return _results;
      });
    });
  });
  if (setup) {
    return site.checkLoggedIn(function(result) {
      if (result === LoadStatusCodes.UNAUTHORIZED) {
        enablecls = "disabled";
        selectcls = "";
      } else {
        enablecls = "";
        selectcls = "selected";
      }
      block_elem.addClass(enablecls);
      block_elem.addClass(selectcls);
    });
  }
};
