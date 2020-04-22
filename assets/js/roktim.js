(function($) {
    'use strict'

    /*
    ========================================
    Seotimer
    ========================================
    */
    $('#simple-timer').syotimer({
        year: 2020,
        month: 5,
        day: 4,
        hour: 20,
        minute: 30
    });
    /*
    ========================================
    Scroll to top
    ========================================
    */
    if ($('#scroll-top').length) {
        function scrollToTop() {
            var $scrollUp = $('#scroll-top'),
                $lastScrollTop = 0,
                $window = $(window);

            $window.on('scroll', function() {
                var st = $(this).scrollTop();
                if (st > $lastScrollTop) {
                    $scrollUp.removeClass('show');
                } else {
                    if ($window.scrollTop() > 200) {
                        $scrollUp.addClass('show');
                    } else {
                        $scrollUp.removeClass('show');
                    }
                }
                $lastScrollTop = st;
            });

            $scrollUp.on('click', function(evt) {
                $('html, body').animate({ scrollTop: 0 }, 600);
                evt.preventDefault();
            });
        }
        scrollToTop();
    }

    /*
    ========================================
    Preloader
    ========================================
    */
    if ($('#preloader').length) {
        $(window).on('load', function() {
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        });
    }

    /*
    ========================================
    Skill Bar
    ========================================
    */
    if ($('#skill-bar-wrapper').length) {
        $(window).scroll(function() {
            var hT = $('#skill-bar-wrapper').offset().top,
                hH = $('#skill-bar-wrapper').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT + hH - 1.4 * wH)) {
                jQuery(document).ready(function() {
                    jQuery('.skillbar-container').each(function() {
                        jQuery(this).find('.skills').animate({
                            width: jQuery(this).attr('data-percent')
                        }, 3000); // 3 seconds
                    });
                });
            }
        });
    }

    /*
    ========================================
    Counter
    ========================================
    */
    if ($('counter')) {
        $('.counter').countUp({
            'time': 3000,
            'delay': 10
        });
    }

    /*
    ========================================
    Popup Gallery
    ========================================
    */
    if ($('#popup-gallery')) {
        $('#popup-gallery').lightGallery({
            thumbnail: true
        });
    }
    if ($('.popup-gallery2')) {
        $('.popup-gallery2').lightGallery({
            thumbnail: true,
            showThumbByDefault: false,
            selector: '.popup-item'
        });
    }

    /*
    ========================================
        init Jarallax
    ========================================
    */
    if ($('.jarallax').length) {
        jarallax(document.querySelectorAll('.jarallax'));
    }


    /*
    ========================================
    Clint Review
    ========================================
    */
    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').owlCarousel({
            loop: true,
            dots: true,
            dotsEach: true,
            autoplay: false,
            autoplayTimeout: 9000,
            smartSpeed: 1000,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        });
    }


    /*
    ========================================
    Clint Review
    ========================================
    */
    if ($('.testimonial-two-slider').length) {
        $('.testimonial-two-slider').owlCarousel({
            loop: true,
            dots: false,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 9000,
            center: true,
            smartSpeed: 1000,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2,
                },
                1024: {
                    items: 2,
                },
                1200: {
                    items: 2.6
                }
            }
        });
    }

    /*
    ========================================
    Tabs
    ========================================
    */
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tabs-list').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    /*
    ========================================
    Portfolio
    ========================================
    */
    if ($('#portfolio-area').length) {
        $('#container').imagesLoaded(function() {
            var $grid = $('.portfolio-grid').isotope({
                itemSelector: '.portfolio-grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.portfolio-grid-item',
                }
            });

            // filter items on li click
            $('.portfolio-filter').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            //for menu active class
            $('.portfolio-filter li').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        });
    }

    /*
    ========================================
    Testimonial
    ========================================
    */

    $('.testimonial-changes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.testimonial-clicked',
        draggable: false,
        speed: 700,
    });
    $('.testimonial-clicked').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.testimonial-changes',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        draggable: false,
    });
    /*
    ========================================
    Services
    ========================================
    */

    $('.sevices-six-slide-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.services-social-click',
        draggable: false,
        speed: 900,
    });
    $('.services-social-click').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.sevices-six-slide-text',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        draggable: false,
    });


    /*
    ========================================
    Color Map 
    ========================================
    */
    if ($('#google-map').length) {

        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 12,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('google-map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Welcome Roktim',
                icon: {
                    url: "https://codexexpert.com/TF-ITEM/demo-img/map.png"
                }
            });
        }
    }

    /*
    ========================================
    Worlds Client map
    ========================================
    */
    if ($('#container').length) {
        anychart.onDocumentReady(function() {
            // The data used in this sample can be obtained from the CDN
            // https://cdn.anychart.com/samples/maps-bubble/bubble-earthquakes-map/data.json
            anychart.data.loadJsonFile('https://cdn.anychart.com/samples/maps-bubble/bubble-earthquakes-map/data.json', function(data) {
                // Creates data set
                var dataSet = anychart.data.set(data);


                // Creates Map Chart
                var map = anychart.map();

                // Sets geodata using js/world.js
                map.geoData('anychart.maps.world');

                // Sets Chart Title
                map.title()
                    .enabled(false)
                    .text('Strongest Earthquakes by Country')
                    .padding([0, 0, 20, 0]);

                map.interactivity().selectionMode('none');

                // Sets bubble max size settings
                map.minBubbleSize('0.5%')
                    .maxBubbleSize('1.5%');

                // Creates bubble series
                map.bubble()
                    .data(dataSet)
                    // Sets series settings
                    .geoIdField('iso_a2')
                    .fill('#ff4500 0.6')
                    .stroke('1 #ff4500 0.9');
                map.hovered()
                    .fill('#ff4500')
                    .stroke('1 #ff4500 1');

                map.tooltip()
                    .useHtml(true)
                    .title({ fontColor: '#000' })
                    .padding([8, 13, 10, 13])
                    .format(function() {
                        var span_for_value = '<span style="color: #fff; font-size: 12px; font-weight: bold">';
                        var span_for_date = '<br/><span style="color: #fff; font-size: 11px">';
                        var span_for_description = '<br/><span style="color: #fff; font-size: 12px; font-style: italic">"';
                        if (this.getData('description') != '') {
                            return span_for_value + this.size + 'M </span></strong>' +
                                span_for_description + this.getData('description') + '"</span>' +
                                span_for_date + this.getData('date') + '</span>';
                        } else {
                            return span_for_value + this.size + 'M </span></strong>' +
                                span_for_date + this.getData('date') + '</span>';
                        }
                    });

                map.tooltip().background()
                    .enabled(true)
                    .fill('#fff')
                    .stroke('#ff4500')
                    .corners(3)
                    .cornerType('round');

                // create zoom controls
                var zoomController = anychart.ui.zoom();
                zoomController.render(map);

                // Sets container id for the chart
                map.container('container');
                // Initiates chart drawing
                map.draw();
            });
        });
    }




})(jQuery);