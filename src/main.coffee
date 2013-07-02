window.slide_count = 1
window.map_count = 0

updateSlide = () ->
	$(".current").removeClass('current')
	$("section.s#{slide_count}").addClass('current')
	window.location.hash = "#" + "#{slide_count}"

	# if slide_count is 13
	# 	setTimeout('window.uoftbooks(0)', 3000)

window.nextSlide = () ->
	if customEvent()
		if $("section.s#{slide_count+1}").length
			window.slide_count = window.slide_count + 1
			updateSlide()

customEvent = () ->
	if window.slide_count is 4
		$("#map-canvas").css('visibility', 'visible')
		return true
	if window.slide_count is 5 and window.map_count < 4
		switch window.map_count
			when 0
				window.gmap.setCenter(new google.maps.LatLng(43.620495,-79.513198))
			when 1
				window.gmap.setZoom 13
			when 2
				window.gmap.setZoom 11
			when 3
				$("#map-canvas").css('visibility', 'hidden')
				return true
		window.map_count = window.map_count + 1
		return false
	return true

prevSlide = () ->
	if window.slide_count > 1
		window.slide_count = window.slide_count - 1
		updateSlide()

map_initialize = () ->
  mapOptions =
    zoom: 15,
    center: new google.maps.LatLng(43.728134,-79.574612),
    mapTypeId: google.maps.MapTypeId.ROADMAP

  window.gmap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)




window.uoftbooks = (count) ->
	# switch count
	# 	when 0
	# 		1
	# 	when 1
	# 		e = $.Event("keypress")
	# 		e.which = 39
	# 		$('body').trigger(e)
	# 	when 2
	# 		jQuery.Event.trigger({ type : 'keypress', which : '67'})
	# 	when 3
	# 		jQuery.event.trigger({ type : 'keypress', which : 'l'.charCodeAt(0)})
	# 	when 4
	# 		jQuery.event.trigger({ type : 'keypress', which : 'c'.charCodeAt(0)})
	# 	else
	# 		return true
	# setTimeout("window.uoftbooks(#{count+1})", 2000)



$(document).keydown( (e) =>
	e = e or window.event
	switch e.keyCode
		when 39, 13
			nextSlide()
		when 37, 8
			e.preventDefault()
			prevSlide()
)

$(document).ready ->
	google.maps.visualRefresh = true
	google.maps.event.addDomListener(window, 'load', map_initialize)
	$('body').mousedown( (e) =>
		e.preventDefault()
		switch e.which
			when 1
				nextSlide()
	)

	$('body').blur( (e) =>
		window.focus()
	)

	if window.location.hash
		window.slide_count = parseInt(window.location.hash.substring(1))
		updateSlide()

