(function() {
  var customEvent, map_initialize, prevSlide, updateSlide,
    _this = this;

  window.slide_count = 1;

  window.map_count = 0;

  updateSlide = function() {
    $(".current").removeClass('current');
    $("section.s" + slide_count).addClass('current');
    return window.location.hash = "#" + ("" + slide_count);
  };

  window.nextSlide = function() {
    if (customEvent()) {
      if ($("section.s" + (slide_count + 1)).length) {
        window.slide_count = window.slide_count + 1;
        return updateSlide();
      }
    }
  };

  customEvent = function() {
    if (window.slide_count === 4) {
      $("#map-canvas").css('visibility', 'visible');
      return true;
    }
    if (window.slide_count === 5 && window.map_count < 4) {
      switch (window.map_count) {
        case 0:
          window.gmap.setCenter(new google.maps.LatLng(43.620495, -79.513198));
          break;
        case 1:
          window.gmap.setZoom(13);
          break;
        case 2:
          window.gmap.setZoom(11);
          break;
        case 3:
          $("#map-canvas").css('visibility', 'hidden');
          return true;
      }
      window.map_count = window.map_count + 1;
      return false;
    }
    return true;
  };

  prevSlide = function() {
    if (window.slide_count > 1) {
      window.slide_count = window.slide_count - 1;
      return updateSlide();
    }
  };

  map_initialize = function() {
    var mapOptions;
    mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(43.728134, -79.574612),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    return window.gmap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  };

  window.uoftbooks = function(count) {};

  $(document).keydown(function(e) {
    e = e || window.event;
    switch (e.keyCode) {
      case 39:
      case 13:
        return nextSlide();
      case 37:
      case 8:
        e.preventDefault();
        return prevSlide();
    }
  });

  $(document).ready(function() {
    var _this = this;
    google.maps.visualRefresh = true;
    google.maps.event.addDomListener(window, 'load', map_initialize);
    $('body').mousedown(function(e) {
      e.preventDefault();
      switch (e.which) {
        case 1:
          return nextSlide();
      }
    });
    $('body').blur(function(e) {
      return window.focus();
    });
    if (window.location.hash) {
      window.slide_count = parseInt(window.location.hash.substring(1));
      return updateSlide();
    }
  });

}).call(this);
