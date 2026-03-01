// JavaScript Document
jQuery(document).ready(function() {
    'use strict';

	
//  image-carousel function by = owl.carousel.js ========================== //
	jQuery('[data-toggle="tooltip"]').tooltip();

	
//  Positioning Popovers ========================== //	
	jQuery('[data-toggle="popover"]').popover();

//  image-carousel function by = owl.carousel.js ========================== //
	jQuery('.img-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	
//  image-carousel no margin function by = owl.carousel.js ========================== //
	jQuery('.img-carousel-content').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	
	
//  image-carousel no margin function by = owl.carousel.js ========================== //
	jQuery('.img-carousel-full-screen').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})	
	
	
//  Portfolio Carousel function by = owl.carousel.js ========================== //
	jQuery('.portfolio-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})


//  Portfolio Carousel no margin function by = owl.carousel.js ========================== //
	jQuery('.portfolio-carousel-nogap').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})


//  Portfolio Carousel Full Screen with no margin function by = owl.carousel.js ========================== //
	jQuery('.portfolio-carousel-fullscreen-nogap').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})
	
	
//  Portfolio Carousel Full Screen with no margin function by = owl.carousel.js ========================== //
	jQuery('.preview-pages-slider').owlCarousel({
		 center: true,
		items:3,
		loop:true,
		margin:0,
		
		nav:true,
		dots:false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			600:{
				items:2
			}
			
		}
	})
	

	
//  Blog post Carousel function by = owl.carousel.js ========================== //
	jQuery('.blog-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})	
	
	
//  Blog post Carousel function by = owl.carousel.js ========================== //
	jQuery('.event-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})		
	
//  Blog post Carousel function by = owl.carousel.js ========================== //
	jQuery('.client-logo-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots: true,
		responsive:{
			0:{
				items:2
			},
			
			480:{
				items:3
			},			
			
			767:{
				items:4
			},
			1000:{
				items:5
			}
		}
	})	
	
// 4 Item Carousels  function by = owl.carousel.js ========================== //	
	jQuery('.client-logo-carousel-4').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:4
			},
			1000:{
				items:4
			}
		}
	})	
	
// 3 Item Carousels  function by = owl.carousel.js ========================== //		
	jQuery('.client-logo-carousel-3').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})	
	
// 2 Item Carousels  function by = owl.carousel.js ========================== //		
	jQuery('.client-logo-carousel-2').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:2
			},
			1000:{
				items:2
			}
		}
	})	
	
// 1 Item Carousels  function by = owl.carousel.js ========================== //		
	jQuery('.client-logo-carousel-1').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:1
			},			
			
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})	
	
// Fade slider for home function by = owl.carousel.js ========================== //
	jQuery('.owl-fade-slider-one').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		margin:30,
		nav:true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		items:1,
		dots: true,
		animateOut:'fadeOut',
	})
	
// Slide slider for home function by = owl.carousel.js ========================== //
	jQuery('.owl-slide-slider-one').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		margin:30,
		nav:true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		items:1,
		dots: true,
	})	
		
	
//  testimonial one function by = owl.carousel.js ========================== //
	jQuery('.testimonial-one').owlCarousel({
		loop:false,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:1
			},			
			
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
//  testimonial two function by = owl.carousel.js ========================== //
	jQuery('.testimonial-two').owlCarousel({
		loop:false,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
		
//  testimonial three function by = owl.carousel.js ========================== //
	jQuery('.testimonial-three').owlCarousel({
		loop:false,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})
	
//  testimonial four function by = owl.carousel.js ========================== //
	jQuery('.testimonial-four').owlCarousel({
		loop:false,
		margin:80,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			991:{
				items:2
			}
		}
	})
	
	
//  counterUp one function by = counterup-min.js ========================== //
	jQuery('.counter').counterUp({
		delay: 10,
		time: 1000
	});


});
// Document.ready END==set-marker-popup-close============================================================//


//  google map function custom ========================== //
	function init_map() {
		
		var myOptions = {
			zoom: 10,
			center: new google.maps.LatLng(51.5073509, -0.12775829999998223),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
		};
		// Let's also add a marker while we're at it
		map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
		marker = new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(51.5073509, -0.12775829999998223),
			optimized: false,
			icon: new google.maps.MarkerImage('images/marker.html')
		});

		marker.setDraggable(true);		
		// marker on click show infowindow
		infowindow = new google.maps.InfoWindow({
			content: '<strong>Title</strong><br>London, United Kingdom<br>'
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
	}
	google.maps.event.addDomListener(window, 'load', init_map);
	
	
//  google map function custom ========================== //
	function init_map2() {
		
		var myOptions = {
			zoom: 10,
			center: new google.maps.LatLng(40.6700, -73.9400),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
		};
		// Let's also add a marker while we're at it
		map2 = new google.maps.Map(document.getElementById('gmap_canvas2'), myOptions);
		marker2 = new google.maps.Marker({
			map: map2,
			position: new google.maps.LatLng(40.6700, -73.9400),
			optimized: false,
			icon: new google.maps.MarkerImage('images/marker.html')
		});

		marker2.setDraggable(true);		
		// marker on click show infowindow

		infowindow2 = new google.maps.InfoWindow({
			content: '<strong>Title</strong><br>London, United Kingdom<br>'
		});
		google.maps.event.addListener(marker2, 'click', function() {
			infowindow2.open(map2, marker2);
		});
	}
	google.maps.event.addDomListener(window, 'load', init_map2);	
	
	
	
	//  google map default function custom ========================== //
	function init_map3() {
		
		var myOptions = {
			zoom: 10,
			center: new google.maps.LatLng(40.6700, -73.9400),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		};
		// Let's also add a marker while we're at it
		map3 = new google.maps.Map(document.getElementById('gmap_canvas3'), myOptions);
		marker3 = new google.maps.Marker({
			map: map3,
			position: new google.maps.LatLng(40.6700, -73.9400),
			optimized: false,
			icon: new google.maps.MarkerImage('images/marker.html')
		});

		marker3.setDraggable(true);		
		// marker on click show infowindow

		infowindow3 = new google.maps.InfoWindow({
			content: '<strong>Title</strong><br>London, United Kingdom<br>'
		});
		google.maps.event.addListener(marker3, 'click', function() {
			infowindow3.open(map3, marker3);
		});
	}
	google.maps.event.addDomListener(window, 'load', init_map3);	
	