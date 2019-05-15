
let map, heatmap, service;      // these are used to hold the google objects
let lat, lng;
let newQueryURL;
let timer, timer2, timer3;
let dataPointArray = [];        // holds the heatmap datapoints

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
              // console.log(places)
              // console.log(restaurantArray);
              let sortedRestaurantArray = places.sort(function (a, b) {
                  if (a.rating > b.rating) {
                      return -1;
                  } else if (a.rating < b.rating) {
                      return 1;
                  } else {
                      return 0;
                  }
              })
      
              console.log(sortedRestaurantArray)

        for (var i = 0; i < sortedRestaurantArray.length; i++) {

            // temporary variable declarations
            // they only need to be temp b/c the are reset 
            // for each iteration

            let photo = sortedRestaurantArray[i].photos[0].photo_reference;
            let tempLat = sortedRestaurantArray[i].geometry.location.lat;
            let tempLong = sortedRestaurantArray[i].geometry.location.lng;
            let rating = sortedRestaurantArray[i].rating;
            let name = sortedRestaurantArray[i].name;
            let price = sortedRestaurantArray[i].price_level;
            let location = sortedRestaurantArray[i].vicinity;
            let reviews = sortedRestaurantArray[i].user_ratings_total;
          
            // datapoints are in the only form that the heatmap layer api accepts
            let dataPoint = { location: new google.maps.LatLng(tempLat, tempLong), weight: rating };
            dataPointArray.push(dataPoint);

            let dollar = "";

            if (price === 1){
              dollar = "$";
            }
            else if(price === 2){
              dollar = "$$";
            }

            else if(price === 3){
              dollar = "$$$";
            }
            // this is just a sample restaurant card. For now each card is just crammed onto .yelp1
            // for demonstration purposes.  The photo is accessed through a src=" URL " where the url is a Places
            // query using the photo_reference of each response object. 

            let restaurantCard = `<div id = "name">`+ name + `</div> <img id = "photo" src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=` + photo + `&key=AIzaSyD9y2VmteYeNrLjnmKgP8l1j0DIp2qex9Y"><div id = "rating">` + rating + ` (` +reviews + `) | ` + dollar + `</div><div id = "location">` + location + `</div>`;
            $(".yelp"+i).append(restaurantCard);

            $(".yelp"+i).attr("data-LatnLong",tempLat +" "+tempLong);

        }


    });
}

// displayHeat iterates over the first 10 datapoints in the dataPointArray
// It is limited to ten for performance, going to dataPointArray.length 
// created a "invalid array length" error.  Also above 10-14 it is no longer
// performant.
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

    // (Kyle) - new single-layer heatmap with uniform radii.
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: dataPointArray,
        map: map,
        dissipating: true,
        gradient: gradient,
        radius: 10
    })

    // (Kyle) - I have disabled the for-loop heatmap layer renderer - 
    // the site was having trouble keeping up and the number of reviews 
    // had too great a range.

    // for (i = 0; i < 10; i++) {
    //   // this loop creates a heatmap layer for each datapoint so that
    //   // each point can have its radius set individually
    //   new google.maps.visualization.HeatmapLayer({
    //     data: [dataPointArray[i]],
    //     map: map,
    //     dissipating: true
    //   }).set("radius", reviewArray[i] / 20);
    // }

    // after its been used the dataPointArray is emptied to allow for the next search
    dataPointArray = [];
}
