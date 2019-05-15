
let map, heatmap, service;
let lat, lng;
let newQueryURL;
let timer, timer2, timer3;
let dataPointArray = [];
let marker;

// waitForClick is the function called when the google libraries are loaded
// on click the user input is passed to a geocoder function - getQueryURL.
// the timers are to allow the newQueryURL (the second ajax call, to get the 
// nearby places) to be built before init map can run and to allow the place 
// data to load before display heat.
function waitForClick() {
    document.getElementById('submit').addEventListener('click', function () {
        let address = document.getElementById('address').value;
        getQueryURL(address);

        timer = setTimeout(function () {
            initMap();
        }, 1000 * .5);
        timer2 = setTimeout(function () {
            getPlaceData();
        }, 1000 * 1);
        timer3 = setTimeout(function () {
            displayHeat();
        }, 1000 * 2)

        $(".yelp").empty();
    });
}

// getQueryURL makes an ajax call to the google geocoder api.  it takes a typical
// location search (street, city, or place) and returns lat/long.  
// this is necessary b/c the places nearbySearch() fn only accepts lat/long.
// after they are returned, the callback concatenates a new query url to pass to the places
// ajax call.
function getQueryURL(address) {
    let queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyD9y2VmteYeNrLjnmKgP8l1j0DIp2qex9Y"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // lat and long are global variables that are set here on the 
        // original geocode query
        lat = response.results[0].geometry.location.lat;
        lng = response.results[0].geometry.location.lng;

        // newQueryURL is the url that will be used in the places ajax call
        newQueryURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=` + lat + `,` + lng + `&radius=1500&type=restaurant&key=AIzaSyD9y2VmteYeNrLjnmKgP8l1j0DIp2qex9Y`
    });
}

// initMap is called with the lat/lng set by getQueryURL, it creates a new map object.
// it is called on a timeout to let lat/long load
function initMap() {
    console.log("search location: ", lat, lng);
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: lat, lng: lng },
        disableDefaultUI: true,
        styles: [

            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }

        ]
    });
};

function hasEnoughReviews(restaurant) {
    return restaurant.user_ratings_total > 40;
}

// getPlaceData takes the newQueryURL created by the getQueryURL fn. 
// the callback fn pulls the data needed to create the heatmap from the 
// response object and pushes dataPoint objects to an array that is used to 
// generate the heatmap points.  The reviews numbers are pushed to a seperate 
// array that will be used to set the radius of each point as  it is created

function getPlaceData() {
    $.ajax({
        url: newQueryURL,
        method: "GET",
    }).then(function (response) {
        let places = response.results;

        // once places is returned, it is sorted by the product of each restaurants
        // ratings and number of reviews.  This seems to be the best way to capture
        // the top hot spots and display their data in heatmap form.  
        let sortedRestaurantArray = places.sort(function (a, b) {
            let aCombinedScore = a.rating * a.user_ratings_total;
            let bCombinedScore = b.rating * b.user_ratings_total;
            if (a.rating * a.user_ratings_total > b.rating * b.user_ratings_total) {
                return -1;
            } else if (aCombinedScore < bCombinedScore) {
                return 1;
            } else {
                return 0;
            }
        })

        let filteredResturantArray = sortedRestaurantArray.filter(hasEnoughReviews);

        for (var i = 0; i < filteredResturantArray.length; i++) {
            let photo = filteredResturantArray[i].photos[0].photo_reference;
            let tempLat = filteredResturantArray[i].geometry.location.lat;
            let tempLong = filteredResturantArray[i].geometry.location.lng;
            let rating = filteredResturantArray[i].rating;
            let name = filteredResturantArray[i].name;
            let price = filteredResturantArray[i].price_level;
            let location = filteredResturantArray[i].vicinity;
            let reviews = filteredResturantArray[i].user_ratings_total;
            let dollar = "";
            let dataPoint = { location: new google.maps.LatLng(tempLat, tempLong), weight: rating * reviews / 20 };
            let restaurantCard = `<div id = "name">` + name + `</div> <img id = "photo" src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=` + photo + `&key=AIzaSyD9y2VmteYeNrLjnmKgP8l1j0DIp2qex9Y"><div id = "rating">` + rating + ` (` + reviews + `) | ` + dollar + `</div><div id = "location">` + location + `</div>`;

            dataPointArray.push(dataPoint);

            if (price === 1) {
                dollar = "$";
            }
            else if (price === 2) {
                dollar = "$$";
            }

            else if (price === 3) {
                dollar = "$$$";
            }

            $(".yelp" + i).append(restaurantCard);

            // remove all event handlers from the div so that on subsequent searches each
            // div starts without any event handlers.  Otherwise they persist and end up multiplying events
            $(".yelp" + i).off();
            $(".yelp" + i).data("data-lat", tempLat);
            $(".yelp" + i).data("data-long", tempLong);
            $(".yelp" + i).data("data-name", name);
            $(".yelp" + i).on("mouseenter", function () {
                let hoverLat = $(this).data("data-lat");
                let hoverLong = $(this).data("data-long");
                let hoverName = $(this).data("data-name");
                placeMarker(hoverLat, hoverLong, hoverName)
            });
            $(".yelp" + i).on("mouseleave", function () {
                marker.setMap(null);
            });
        }
    });
}

function placeMarker(lat, long, name) {

    var myLatlng = new google.maps.LatLng(lat, long);
    marker = new google.maps.Marker({
        position: myLatlng,
        title: name
    });

    marker.setMap(map);
}

function displayHeat() {

    var gradient = [
        'rgba(2, 15, 117, 0)',
        'rgba(12, 29, 184, 1)',
        'rgba(112, 70, 170, 1)',
        'rgba(200, 105, 158, 1)',
        'rgba(223, 81, 61, 1)',
        'rgba(242, 109, 82, 1)',
        'rgba(244, 129, 83, 1)',
        'rgba(255, 120, 130, 1)',
        'rgba(253, 163, 75, 1)',
        'rgba(252, 197, 228, 1)'
    ]

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: dataPointArray,
        map: map,
        dissipating: true,
        gradient: gradient,
        radius: 20,
        opacity: 1
    })

    // after its been used the dataPointArray is emptied to allow for the next search
    dataPointArray = [];
}
