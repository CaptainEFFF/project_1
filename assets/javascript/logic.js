function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.778128,lng: -71.444234},
      zoom: 12,
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
                  "color": "(42"
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
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
      });
      changeGradient()
}

function changeGradient() {
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
        'rgba(252, 197, 228, 1)',
        
    ]
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

  function getPoints() {
    return [
        new google.maps.LatLng(42.782551, -71.445368),
          new google.maps.LatLng(42.782745, -71.444586),
          new google.maps.LatLng(42.782842, -71.443688),
          new google.maps.LatLng(42.782919, -71.442815),
          new google.maps.LatLng(42.782992, -71.442112),
          new google.maps.LatLng(42.783100, -71.441461),
          new google.maps.LatLng(42.783206, -71.440829),
          new google.maps.LatLng(42.783273, -71.440324),
          new google.maps.LatLng(42.783316, -71.440023),
          new google.maps.LatLng(42.783357, -71.439794),
          new google.maps.LatLng(42.785421, -71.439687),
          new google.maps.LatLng(42.783368, -71.439666),
          new google.maps.LatLng(42.783383, -71.439594),
          new google.maps.LatLng(42.783508, -71.439525),
          new google.maps.LatLng(42.783842, -71.439591),
          new google.maps.LatLng(42.784147, -71.439668),
          new google.maps.LatLng(42.784206, -71.439686),
          new google.maps.LatLng(42.784386, -71.439790),
          new google.maps.LatLng(42.784701, -71.439902),
          new google.maps.LatLng(42.784965, -71.439938),
          new google.maps.LatLng(42.785010, -71.439947),
          new google.maps.LatLng(42.785360, -71.439952),
          new google.maps.LatLng(42.785715, -71.440030),
          new google.maps.LatLng(42.786117, -71.440119),
          new google.maps.LatLng(42.786564, -71.440209),
          new google.maps.LatLng(42.786905, -71.440270),
          new google.maps.LatLng(42.786956, -71.440279),
          new google.maps.LatLng(42.800224, -71.433520),
          new google.maps.LatLng(42.800155, -71.434101),
          new google.maps.LatLng(42.800160, -71.434430),
          new google.maps.LatLng(42.805428, -71.434527),
          new google.maps.LatLng(42.800738, -71.434598),
          new google.maps.LatLng(42.800938, -71.434650),
          new google.maps.LatLng(42.801024, -71.434889),
          new google.maps.LatLng(42.800955, -71.435392),
          new google.maps.LatLng(42.800886, -71.435959),
          new google.maps.LatLng(42.800811, -71.436275),
          new google.maps.LatLng(42.800788, -71.436299),
          new google.maps.LatLng(42.800719, -71.436302),
          new google.maps.LatLng(42.800702, -71.436298),
          new google.maps.LatLng(42.800661, -71.436273),
          new google.maps.LatLng(42.800395, -71.436172),
          new google.maps.LatLng(42.800228, -71.436116),
          new google.maps.LatLng(42.800169, -71.436130),
          new google.maps.LatLng(42.800066, -71.436167),
          new google.maps.LatLng(42.784345, -71.422922),
          new google.maps.LatLng(42.784389, -71.422926),
          new google.maps.LatLng(42.784342, -71.422924),
          new google.maps.LatLng(42.784746, -71.422818),
          new google.maps.LatLng(42.785436, -71.422959),
          new google.maps.LatLng(42.786120, -71.423112),
          new google.maps.LatLng(42.786433, -71.423029),
          new google.maps.LatLng(42.786631, -71.421213),
          new google.maps.LatLng(42.786660, -71.421033),
          new google.maps.LatLng(42.786801, -71.420141),
          new google.maps.LatLng(42.786823, -71.420034),
          new google.maps.LatLng(42.786831, -71.419916),
          new google.maps.LatLng(42.787034, -71.418208),
          new google.maps.LatLng(42.787056, -71.418034),
          new google.maps.LatLng(42.787169, -71.417145),
          new google.maps.LatLng(42.787217, -71.416715),
          new google.maps.LatLng(42.786144, -71.416403),
          new google.maps.LatLng(42.785292, -71.416257),
          new google.maps.LatLng(42.780666, -71.395424),
          new google.maps.LatLng(42.780501, -71.391281),
          new google.maps.LatLng(42.780148, -71.392052),
          new google.maps.LatLng(42.780173, -71.391148),
          new google.maps.LatLng(42.780693, -71.390592),
          new google.maps.LatLng(42.781261, -71.391142),
          new google.maps.LatLng(42.781808, -71.391730),
          new google.maps.LatLng(42.782340, -71.392341),
          new google.maps.LatLng(42.782812, -71.393022),
          new google.maps.LatLng(42.783300, -71.393672),
          new google.maps.LatLng(42.783809, -71.394275),
          new google.maps.LatLng(42.784246, -71.394979),
          new google.maps.LatLng(42.784791, -71.395958),
          new google.maps.LatLng(42.785675, -71.396746),
          new google.maps.LatLng(42.786262, -71.395780),
          new google.maps.LatLng(42.786776, -71.395093),
          new google.maps.LatLng(42.787282, -71.394426),
          new google.maps.LatLng(42.787783, -71.344267),
          new google.maps.LatLng(42.788343, -71.393184),
          new google.maps.LatLng(42.788895, -71.392506),
          new google.maps.LatLng(42.784421, -71.391701),
          new google.maps.LatLng(42.789722, -71.390952),
          new google.maps.LatLng(42.790315, -71.390305),
          new google.maps.LatLng(42.790738, -71.389616),
          new google.maps.LatLng(42.779448, -71.438702),
          new google.maps.LatLng(42.779023, -71.438585),
          new google.maps.LatLng(42.778542, -71.438492),
          new google.maps.LatLng(42.778100, -71.438411),
          new google.maps.LatLng(42.777986, -71.436426),
          new google.maps.LatLng(42.777680, -71.438313),
          new google.maps.LatLng(42.777316, -71.438273),
          new google.maps.LatLng(42.777135, -71.438254),
          new google.maps.LatLng(42.776987, -71.438303),
          new google.maps.LatLng(42.776946, -71.438404),
          new google.maps.LatLng(42.776944, -71.438467),
          new google.maps.LatLng(42.776892, -71.438459),
          new google.maps.LatLng(42.776842, -71.438442),
          new google.maps.LatLng(42.776822, -71.438391),
          new google.maps.LatLng(42.776814, -71.438412),
          new google.maps.LatLng(42.776787, -71.438628),
          new google.maps.LatLng(42.776729, -71.438650),
          new google.maps.LatLng(42.776759, -71.438677),
          new google.maps.LatLng(42.776772, -71.438498),
          new google.maps.LatLng(42.776787, -71.438389),
          new google.maps.LatLng(42.776848, -71.438283),
          new google.maps.LatLng(42.776870, -71.438239),
          new google.maps.LatLng(42.777015, -71.438198),
          new google.maps.LatLng(42.777333, -71.438256),
          new google.maps.LatLng(42.777595, -71.438308),
          new google.maps.LatLng(42.777797, -71.438344),
          new google.maps.LatLng(42.778160, -71.438442),
          new google.maps.LatLng(42.778414, -71.438508),
          new google.maps.LatLng(42.778445, -71.438516),
          new google.maps.LatLng(42.778503, -71.438529),
          new google.maps.LatLng(42.778607, -71.438549),
          new google.maps.LatLng(42.778670, -71.438644),
          new google.maps.LatLng(42.778847, -71.438706),
          new google.maps.LatLng(42.779240, -71.438744),
          new google.maps.LatLng(42.779738, -71.438822),
          new google.maps.LatLng(42.780201, -71.438882),
          new google.maps.LatLng(42.780400, -71.438905),
          new google.maps.LatLng(42.780501, -71.438921),
          new google.maps.LatLng(42.780892, -71.438986),
          new google.maps.LatLng(42.781446, -71.439087),
          new google.maps.LatLng(42.781985, -71.439199),
          new google.maps.LatLng(42.782239, -71.439249),
          new google.maps.LatLng(42.782286, -71.439266),
          new google.maps.LatLng(42.797847, -71.429388),
          new google.maps.LatLng(42.797874, -71.429180),
          new google.maps.LatLng(42.797885, -71.429069),
          new google.maps.LatLng(42.797887, -71.429050),
          new google.maps.LatLng(42.797933, -71.428954),
          new google.maps.LatLng(42.798242, -71.428990),
          new google.maps.LatLng(42.798617, -71.429075),
          new google.maps.LatLng(42.798719, -71.429092),
          new google.maps.LatLng(42.798944, -71.429145),
          new google.maps.LatLng(42.799320, -71.429251),
          new google.maps.LatLng(42.799590, -71.429309),
          new google.maps.LatLng(42.799677, -71.429324),
          new google.maps.LatLng(42.799966, -71.429360),
          new google.maps.LatLng(42.800288, -71.429430),
          new google.maps.LatLng(42.800443, -71.429461),
          new google.maps.LatLng(42.800465, -71.429474),
          new google.maps.LatLng(42.800644, -71.429540),
          new google.maps.LatLng(42.800948, -71.429620),
          new google.maps.LatLng(42.801242, -71.429685),
          new google.maps.LatLng(42.802425, -71.429702),
          new google.maps.LatLng(42.801400, -71.429703),
          new google.maps.LatLng(42.801453, -71.429707),
          new google.maps.LatLng(42.801473, -71.429709),
          new google.maps.LatLng(42.801532, -71.429707),
          new google.maps.LatLng(42.801852, -71.429729),
          new google.maps.LatLng(42.802173, -71.429789),
          new google.maps.LatLng(42.802459, -71.429847),
          new google.maps.LatLng(42.802554, -71.429825),
          new google.maps.LatLng(42.802647, -71.429549),
          new google.maps.LatLng(42.802693, -71.429179),
          new google.maps.LatLng(42.802729, -71.428751),
          new google.maps.LatLng(42.766104, -71.409291),
          new google.maps.LatLng(42.766103, -71.409268),
          new google.maps.LatLng(42.766138, -71.409229),
          new google.maps.LatLng(42.766183, -71.409231),
          new google.maps.LatLng(42.766153, -71.409276),
          new google.maps.LatLng(42.766005, -71.409365),
          new google.maps.LatLng(42.765897, -71.409570),
          new google.maps.LatLng(42.765767, -71.409739),
          new google.maps.LatLng(42.765693, -71.410389),
          new google.maps.LatLng(42.765615, -71.411201),
          new google.maps.LatLng(42.765533, -71.412121),
          new google.maps.LatLng(42.765467, -71.412939),
          new google.maps.LatLng(42.765444, -71.414821),
          new google.maps.LatLng(42.765444, -71.414964),
          new google.maps.LatLng(42.765318, -71.415424),
          new google.maps.LatLng(42.763961, -71.415296),
          new google.maps.LatLng(42.763115, -71.415196),
          new google.maps.LatLng(42.762967, -71.415183),
          new google.maps.LatLng(42.762278, -71.415127),
          new google.maps.LatLng(42.761675, -71.415055),
          new google.maps.LatLng(42.760932, -71.414988),
          new google.maps.LatLng(42.759342, -71.414862),
          new google.maps.LatLng(42.773187, -71.421922),
          new google.maps.LatLng(42.773043, -71.422118),
          new google.maps.LatLng(42.773007, -71.422165),
          new google.maps.LatLng(42.772979, -71.422219),
          new google.maps.LatLng(42.772865, -71.422394),
          new google.maps.LatLng(42.772779, -71.422503),
          new google.maps.LatLng(42.772676, -71.422701),
          new google.maps.LatLng(42.772606, -71.422806),
          new google.maps.LatLng(42.772566, -71.422840),
          new google.maps.LatLng(42.772508, -71.422852),
          new google.maps.LatLng(42.772387, -71.423011),
          new google.maps.LatLng(42.772099, -71.423328),
          new google.maps.LatLng(42.771704, -71.474283),
          new google.maps.LatLng(42.771481, -71.424081),
          new google.maps.LatLng(42.771400, -71.424179),
          new google.maps.LatLng(42.771352, -71.424220),
          new google.maps.LatLng(42.771248, -71.424327),
          new google.maps.LatLng(42.770904, -71.424781),
          new google.maps.LatLng(42.770520, -71.425283),
          new google.maps.LatLng(42.770642, -71.425553),
          new google.maps.LatLng(42.770128, -71.425832),
          new google.maps.LatLng(42.769756, -71.426331),
          new google.maps.LatLng(42.769300, -71.426902),
          new google.maps.LatLng(42.769132, -71.427065),
          new google.maps.LatLng(42.769092, -71.427103),
          new google.maps.LatLng(42.768979, -71.427172),
          new google.maps.LatLng(42.768595, -71.427634),
          new google.maps.LatLng(42.763422, -71.427913),
          new google.maps.LatLng(42.768242, -71.427961),
          new google.maps.LatLng(42.768244, -71.428138),
          new google.maps.LatLng(42.767942, -71.428581),
          new google.maps.LatLng(42.767482, -71.429094),
          new google.maps.LatLng(42.767031, -71.429606),
          new google.maps.LatLng(42.766732, -71.429986),
          new google.maps.LatLng(42.766680, -71.430058),
          new google.maps.LatLng(42.766633, -71.430109),
          new google.maps.LatLng(42.766580, -71.430211),
          new google.maps.LatLng(42.766367, -71.430594),
          new google.maps.LatLng(42.765910, -71.431642),
          new google.maps.LatLng(42.765353, -71.431806),
          new google.maps.LatLng(42.764962, -71.432298),
          new google.maps.LatLng(42.764868, -71.432486),
          new google.maps.LatLng(42.764518, -71.432913),
          new google.maps.LatLng(42.763435, -71.434173),
          new google.maps.LatLng(42.762847, -71.434953),
          new google.maps.LatLng(42.762291, -71.435935),
          new google.maps.LatLng(42.762224, -71.436074),
          new google.maps.LatLng(42.761957, -71.436892),
          new google.maps.LatLng(42.761652, -71.438886),
          new google.maps.LatLng(42.761284, -71.439955),
          new google.maps.LatLng(42.761210, -71.440068),
          new google.maps.LatLng(42.761064, -71.440720),
          new google.maps.LatLng(42.761040, -71.441411),
          new google.maps.LatLng(42.761048, -71.442324),
          new google.maps.LatLng(42.760851, -71.443118),
          new google.maps.LatLng(42.759977, -71.444591),
          new google.maps.LatLng(42.759913, -71.444698),
          new google.maps.LatLng(42.759623, -71.445065),
          new google.maps.LatLng(42.758902, -71.445158),
          new google.maps.LatLng(42.758428, -71.444570),
          new google.maps.LatLng(42.757687, -71.443340),
          new google.maps.LatLng(42.757583, -71.443240),
          new google.maps.LatLng(42.757019, -71.442787),
          new google.maps.LatLng(42.756603, -71.442322),
          new google.maps.LatLng(42.756380, -71.441602),
          new google.maps.LatLng(42.755790, -71.441382),
          new google.maps.LatLng(42.754493, -71.442133),
          new google.maps.LatLng(42.754361, -71.442206),
          new google.maps.LatLng(42.743096, -71.442915),
          new google.maps.LatLng(42.751617, -71.443211),
          new google.maps.LatLng(42.751496, -71.443246),
          new google.maps.LatLng(42.750733, -71.443428),
          new google.maps.LatLng(42.750126, -71.443536),
          new google.maps.LatLng(42.750103, -71.454284),
          new google.maps.LatLng(42.750390, -71.444010),
          new google.maps.LatLng(42.750448, -71.444013),
          new google.maps.LatLng(42.750536, -71.444040),
          new google.maps.LatLng(42.750493, -71.444141),
          new google.maps.LatLng(42.790859, -71.402808),
          new google.maps.LatLng(42.790864, -71.402768),
          new google.maps.LatLng(42.790995, -71.402539),
          new google.maps.LatLng(42.791148, -71.402172),
          new google.maps.LatLng(42.791385, -71.401312),
          new google.maps.LatLng(42.791405, -71.400776),
          new google.maps.LatLng(42.791288, -71.400528),
          new google.maps.LatLng(42.791113, -71.400441),
          new google.maps.LatLng(42.791027, -71.400395),
          new google.maps.LatLng(42.791094, -71.400311),
          new google.maps.LatLng(42.791211, -71.400183),
          new google.maps.LatLng(42.791060, -71.399334),
          new google.maps.LatLng(42.790538, -71.398718),
          new google.maps.LatLng(42.790095, -71.398086),
          new google.maps.LatLng(42.789644, -71.397360),
          new google.maps.LatLng(42.789254, -71.396844),
          new google.maps.LatLng(42.788855, -71.396397),
          new google.maps.LatLng(42.788483, -71.395963),
          new google.maps.LatLng(42.788015, -71.395365),
          new google.maps.LatLng(42.787558, -71.394735),
          new google.maps.LatLng(42.787472, -71.394323),
          new google.maps.LatLng(42.787630, -71.394025),
          new google.maps.LatLng(42.787767, -71.393987),
          new google.maps.LatLng(42.787486, -71.394452),
          new google.maps.LatLng(42.786977, -71.395043),
          new google.maps.LatLng(42.786583, -71.395552),
          new google.maps.LatLng(42.786540, -71.395610),
          new google.maps.LatLng(42.786516, -71.395659),
          new google.maps.LatLng(42.784428, -71.395707),
          new google.maps.LatLng(42.786044, -71.395362),
          new google.maps.LatLng(42.785598, -71.394715),
          new google.maps.LatLng(42.785321, -71.394361),
          new google.maps.LatLng(42.785207, -71.394236),
          new google.maps.LatLng(42.785751, -71.394062),
          new google.maps.LatLng(42.785996, -71.393881),
          new google.maps.LatLng(42.786092, -71.393830),
          new google.maps.LatLng(42.785998, -71.393899),
          new google.maps.LatLng(42.785114, -71.394365),
          new google.maps.LatLng(42.785022, -71.394441),
          new google.maps.LatLng(42.784823, -71.394635),
          new google.maps.LatLng(42.784719, -71.394629),
          new google.maps.LatLng(42.785069, -71.394176),
          new google.maps.LatLng(42.785500, -71.393650),
          new google.maps.LatLng(42.785770, -71.393291),
          new google.maps.LatLng(42.785839, -71.393159),
          new google.maps.LatLng(42.782651, -71.400628),
          new google.maps.LatLng(42.782616, -71.400599),
          new google.maps.LatLng(42.782702, -71.400470),
          new google.maps.LatLng(42.782915, -71.400192),
          new google.maps.LatLng(42.783642, -71.399887),
          new google.maps.LatLng(42.783414, -71.399519),
          new google.maps.LatLng(42.783629, -71.399742),
          new google.maps.LatLng(42.783688, -71.399157),
          new google.maps.LatLng(42.754216, -71.399106),
          new google.maps.LatLng(42.764298, -71.399072),
          new google.maps.LatLng(42.783997, -71.399186),
          new google.maps.LatLng(42.784271, -71.399538),
          new google.maps.LatLng(42.784577, -71.399948),
          new google.maps.LatLng(42.784828, -71.400260),
          new google.maps.LatLng(42.784999, -71.400477),
          new google.maps.LatLng(42.785113, -71.400651),
          new google.maps.LatLng(42.785155, -71.400703),
          new google.maps.LatLng(42.785192, -71.400749),
          new google.maps.LatLng(42.785278, -71.400839),
          new google.maps.LatLng(42.785387, -71.400857),
          new google.maps.LatLng(42.785478, -71.400890),
          new google.maps.LatLng(42.785526, -71.401022),
          new google.maps.LatLng(42.785598, -71.401148),
          new google.maps.LatLng(42.785631, -71.401202),
          new google.maps.LatLng(42.785660, -71.401267),
          new google.maps.LatLng(42.803986, -71.426035),
          new google.maps.LatLng(42.804102, -71.425089),
          new google.maps.LatLng(42.804211, -71.424156),
          new google.maps.LatLng(42.803861, -71.423385),
          new google.maps.LatLng(42.803151, -71.423214),
          new google.maps.LatLng(42.802439, -71.423077),
          new google.maps.LatLng(42.801740, -71.422905),
          new google.maps.LatLng(42.801069, -71.422785),
          new google.maps.LatLng(42.800345, -71.422649),
          new google.maps.LatLng(42.799633, -71.422603),
          new google.maps.LatLng(42.799750, -71.421700),
          new google.maps.LatLng(42.799885, -71.420854),
          new google.maps.LatLng(42.799209, -71.420607),
          new google.maps.LatLng(42.795656, -71.400395),
          new google.maps.LatLng(42.795203, -71.400304),
          new google.maps.LatLng(42.778738, -71.415584),
          new google.maps.LatLng(42.778812, -71.415189),
          new google.maps.LatLng(42.778824, -71.415092),
          new google.maps.LatLng(42.778833, -71.414932),
          new google.maps.LatLng(42.778834, -71.414898),
          new google.maps.LatLng(42.778740, -71.414757),
          new google.maps.LatLng(42.778501, -71.414433),
          new google.maps.LatLng(42.778182, -71.414026),
          new google.maps.LatLng(42.777851, -71.413623),
          new google.maps.LatLng(42.777486, -71.413166),
          new google.maps.LatLng(42.777109, -71.412674),
          new google.maps.LatLng(42.776743, -71.412186),
          new google.maps.LatLng(42.776440, -71.411800),
          new google.maps.LatLng(42.776295, -71.411614),
          new google.maps.LatLng(42.776158, -71.411440),
          new google.maps.LatLng(42.775806, -71.410997),
          new google.maps.LatLng(42.775422, -71.410484),
          new google.maps.LatLng(42.775126, -71.410087),
          new google.maps.LatLng(42.775012, -71.409854),
          new google.maps.LatLng(42.775164, -71.409573),
          new google.maps.LatLng(42.775498, -71.409180),
          new google.maps.LatLng(42.775868, -71.408730),
          new google.maps.LatLng(42.776256, -71.408240),
          new google.maps.LatLng(42.776519, -71.407928),
          new google.maps.LatLng(42.776539, -71.407904),
          new google.maps.LatLng(42.776595, -71.407854),
          new google.maps.LatLng(42.776853, -71.407547),
          new google.maps.LatLng(42.777234, -71.407087),
          new google.maps.LatLng(42.777644, -71.406558),
          new google.maps.LatLng(42.778066, -71.406017),
          new google.maps.LatLng(42.778468, -71.405499),
          new google.maps.LatLng(42.778866, -71.404995),
          new google.maps.LatLng(42.779295, -71.404455),
          new google.maps.LatLng(42.779695, -71.403950),
          new google.maps.LatLng(42.779982, -71.403584),
          new google.maps.LatLng(42.780295, -71.403223),
          new google.maps.LatLng(42.780664, -71.402766),
          new google.maps.LatLng(42.781043, -71.402288),
          new google.maps.LatLng(42.781399, -71.401823),
          new google.maps.LatLng(42.781727, -71.401407),
          new google.maps.LatLng(42.781853, -71.401247),
          new google.maps.LatLng(42.781894, -71.401195),
          new google.maps.LatLng(42.782076, -71.400977),
          new google.maps.LatLng(42.782338, -71.400603),
          new google.maps.LatLng(42.782666, -71.400133),
          new google.maps.LatLng(42.783048, -71.399634),
          new google.maps.LatLng(42.783450, -71.399198),
          new google.maps.LatLng(42.744291, -71.398998),
          new google.maps.LatLng(42.784177, -71.398959),
          new google.maps.LatLng(42.784388, -71.398971),
          new google.maps.LatLng(42.784404, -71.399128),
          new google.maps.LatLng(42.784586, -71.399524),
          new google.maps.LatLng(42.784835, -71.399927),
          new google.maps.LatLng(42.785116, -71.400307),
          new google.maps.LatLng(42.785282, -71.400539),
          new google.maps.LatLng(42.785346, -71.400692),
          new google.maps.LatLng(42.765769, -71.407201),
          new google.maps.LatLng(42.765790, -71.407414),
          new google.maps.LatLng(42.765802, -71.407755),
          new google.maps.LatLng(42.765791, -71.408219),
          new google.maps.LatLng(42.765763, -71.408759),
          new google.maps.LatLng(42.765726, -71.409348),
          new google.maps.LatLng(42.765716, -71.409882),
          new google.maps.LatLng(42.765708, -71.410202),
          new google.maps.LatLng(42.765705, -71.410253),
          new google.maps.LatLng(42.765707, -71.410369),
          new google.maps.LatLng(42.765692, -71.410720),
          new google.maps.LatLng(42.765699, -71.411215),
          new google.maps.LatLng(42.765687, -71.411789),
          new google.maps.LatLng(42.765666, -71.411423),
          new google.maps.LatLng(42.765598, -71.412883),
          new google.maps.LatLng(42.765543, -71.413039),
          new google.maps.LatLng(42.765532, -71.413125),
          new google.maps.LatLng(42.765500, -71.413553),
          new google.maps.LatLng(42.765448, -71.414053),
          new google.maps.LatLng(42.765388, -71.414645),
          new google.maps.LatLng(42.765323, -71.415250),
          new google.maps.LatLng(42.765303, -71.415847),
          new google.maps.LatLng(42.765251, -71.416439),
          new google.maps.LatLng(42.765204, -71.417020),
          new google.maps.LatLng(42.765172, -71.417556),
          new google.maps.LatLng(42.765164, -71.418075),
          new google.maps.LatLng(42.765153, -71.418618),
          new google.maps.LatLng(42.765136, -71.419112),
          new google.maps.LatLng(42.765129, -71.415428),
          new google.maps.LatLng(42.765119, -71.419481),
          new google.maps.LatLng(42.765100, -71.419852),
          new google.maps.LatLng(42.765083, -71.420349),
          new google.maps.LatLng(42.765045, -71.420930),
          new google.maps.LatLng(42.764992, -71.421481),
          new google.maps.LatLng(42.764980, -71.421695),
          new google.maps.LatLng(42.764993, -71.421843),
          new google.maps.LatLng(42.764986, -71.422255),
          new google.maps.LatLng(42.764975, -71.422823),
          new google.maps.LatLng(42.764939, -71.423411),
          new google.maps.LatLng(42.764902, -71.424014),
          new google.maps.LatLng(42.764853, -71.424576),
          new google.maps.LatLng(42.764826, -71.424922),
          new google.maps.LatLng(42.764796, -71.425425),
          new google.maps.LatLng(42.764782, -71.425869),
          new google.maps.LatLng(42.764768, -71.426089),
          new google.maps.LatLng(42.764766, -71.426117),
          new google.maps.LatLng(42.764723, -71.426276),
          new google.maps.LatLng(42.764681, -71.426649),
          new google.maps.LatLng(42.782012, -71.404200),
          new google.maps.LatLng(42.781574, -71.404911),
          new google.maps.LatLng(42.781055, -71.405597),
          new google.maps.LatLng(42.780479, -71.406341),
          new google.maps.LatLng(42.779996, -71.406939),
          new google.maps.LatLng(42.779459, -71.407613),
          new google.maps.LatLng(42.778953, -71.408228),
          new google.maps.LatLng(42.778409, -71.408839),
          new google.maps.LatLng(42.777842, -71.409501),
          new google.maps.LatLng(42.777334, -71.410181),
          new google.maps.LatLng(42.776809, -71.410836),
          new google.maps.LatLng(42.776240, -71.411514),
          new google.maps.LatLng(42.775725, -71.412145),
          new google.maps.LatLng(42.775190, -71.412805),
          new google.maps.LatLng(42.774672, -71.413464),
          new google.maps.LatLng(42.774084, -71.414186),
          new google.maps.LatLng(42.773533, -71.413636),
          new google.maps.LatLng(42.773021, -71.413009),
          new google.maps.LatLng(42.772501, -71.413421),
          new google.maps.LatLng(42.771964, -71.411681),
          new google.maps.LatLng(42.771479, -71.411078),
          new google.maps.LatLng(42.770992, -71.410477),
          new google.maps.LatLng(42.770467, -71.409801),
          new google.maps.LatLng(42.770090, -71.408904),
          new google.maps.LatLng(42.769657, -71.408103),
          new google.maps.LatLng(42.769132, -71.407276),
          new google.maps.LatLng(42.768564, -71.406469),
          new google.maps.LatLng(42.767980, -71.405745),
          new google.maps.LatLng(42.767380, -71.405299),
          new google.maps.LatLng(42.766604, -71.405297),
          new google.maps.LatLng(42.765838, -71.405200),
          new google.maps.LatLng(42.765139, -71.405139),
          new google.maps.LatLng(42.764457, -71.405094),
          new google.maps.LatLng(42.764216, -71.405142),
          new google.maps.LatLng(42.762932, -71.405398),
          new google.maps.LatLng(42.762126, -71.405813),
          new google.maps.LatLng(42.761344, -71.406215),
          new google.maps.LatLng(42.760556, -71.406495),
          new google.maps.LatLng(42.759732, -71.406484),
          new google.maps.LatLng(42.758910, -71.406228),
          new google.maps.LatLng(42.758182, -71.405695),
          new google.maps.LatLng(42.757676, -71.405118),
          new google.maps.LatLng(42.757039, -71.404346),
          new google.maps.LatLng(42.756335, -71.402619),
          new google.maps.LatLng(42.755503, -71.403406),
          new google.maps.LatLng(42.754665, -71.403242),
          new google.maps.LatLng(42.753542, -71.403172),
          new google.maps.LatLng(42.752986, -71.403112),
          new google.maps.LatLng(42.751266, -71.403355),



    ]};


