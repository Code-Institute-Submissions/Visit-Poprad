var infoWindow;
function initMap() {
    let mymap = new google.maps.Map(document.getElementById("mymap"), {
        zoom: 14,
        center: {
            lat: 49.054001,
            lng: 20.295059},
    });

    //Marker icons categories - code src Google documentation 
    let icons = {
        patisserie: {
            name: 'Patisseries',
            icon: 'assets/images/marker_icons/patisserie_40x40.png',
        },
        restaurant: {
            name: 'Restaurants',
            icon: 'assets/images/marker_icons/restaurant_40x40.png', 
         },
        bar: {
            name: 'Bars',
            icon: 'assets/images/marker_icons/bar_40x40.png', 
         },
        attraction: {
            name: 'Attractions',
            icon: 'assets/images/marker_icons/attraction_40x40.png', 
        }
    };   

    // Stores all markers in an array     
    let locations = [
        {
        position:{lat:49.065848, lng:20.283341}, // Cukráreň Domenico
        type: 'patisserie',
        content:"<img src='assets/images/info_windows/domenico_120x100.jpg'><p>Cukráreň Domenico</p>",
        },
        {
        position:{lat:49.054578, lng:20.299540}, // Cukráreň Lucia
        content:"<img src='assets/images/info_windows/lucia_120x100.jpg'><p>Cukráreň Lucia</p>",
        type: 'patisserie'
        },
        {
        position:{lat:49.046588, lng:20.283674}, // Cukráreň Sonata
        content:"<img src='assets/images/info_windows/sonata_120x100.jpg'><p>Cukráreň Sonata</p>",
        type: 'patisserie'    
        },
        {
        position:{lat:49.054448, lng:20.301053}, // Sladký sen
        content:"<img src='assets/images/info_windows/sen_120x100.jpg'><p>Sladký sen</p>",
        type: 'patisserie'    
        },
        {
        position:{lat:49.053814, lng:20.298154}, // Betka's bakery 
        content:"<img src='assets/images/info_windows/betka_120x100.jpg'><p>Betka's bakery</p>",
        type: 'patisserie'    
        },
        {
        position:{lat:49.055444, lng:20.304947}, // Cukráreň-kaviareň Perla
        content:"<img src='assets/images/info_windows/perla_120x100.jpg'><p>Cukráreň-kaviareň Perla</p>",
        type: 'patisserie'    
        },
        {
        position:{lat:49.067814, lng:20.279599}, // U septima
        content:"<img src='assets/images/info_windows/u_septima_120x100.jpg'><p>U septima</p>",
        type: 'restaurant'    
        },
        {
        position:{lat:49.056806, lng:20.296760}, // Marco
        content:"<img src='assets/images/info_windows/marco_120x100.png'><p>Marco</p>",
        type: 'restaurant'    
        },
        {
        position:{lat:49.054981, lng:20.303166}, // Lahodnosti
        content:"<img src='assets/images/info_windows/lahodnosti_120x100.jpg'><p>Lahodnosti</p>",
        type: 'restaurant'    
        },
        {
        position:{lat:49.055797, lng:20.301358}, // Hodovňa
        content:"<img src='assets/images/info_windows/hodovna_120x100.jpg'><p>Hodovňa</p>",
        type: 'restaurant'    
        },
        {
        position:{lat:49.055257, lng:20.304141}, // Café Razy Restaurant
        content:"<img src='assets/images/info_windows/crazy_120x100.jpg'><p>Café Razy Restaurant</p>",
        type: 'restaurant'    
        },
        {
        position:{lat:49.057447, lng:20.300821}, // Haliganda
        content:"<img src='assets/images/info_windows/haliganda_120x100.jpg'><p>Haliganda</p>",
        type: 'restaurant'    
        },
        {
        position:{lat:49.066406, lng:20.315812}, // Vino & Tapas
        content:"<img src='assets/images/info_windows/vinotapas_120x100.jpg'><p>Haliganda</p>",
        type: 'restaurant'    
        },
        {
        position:{lat:49.054621, lng:20.3032372}, // Beer Spa Tatras
        content:"<img src='assets/images/info_windows/beer_spa_120x100.jpg'><p>Beer Spa Tatras</p>",
        type: 'attraction'    
        },
        {
        position:{lat:49.060179, lng:20.307020}, // AquaCity Poprad
        content:"<img src='assets/images/info_windows/aquacity_120x100.jpg'><p>AquaCity Poprad</p>",
        type: 'attraction'    
        },
        {
        position:{lat:49.053631, lng:20.297266}, // Podtatranské múzeum
        content:"<img src='assets/images/info_windows/tatramuseum_120x100.jpg'><p>Tatra Museum in Poprad</p>",
        type: 'attraction'    
        },
        {
        position:{lat:49.057091, lng:20.275942}, // Woodrock lezecka stena
        content:"<img src='assets/images/info_windows/woodrock_120x100.jpg'><p>WoodRock climbing</p>",
        type: 'attraction'    
        },
        {
        position:{lat:49.056417, lng:20.306968}, // Indoor minigolf
        content:"<img src='assets/images/info_windows/minigolf_120x100.jpg'><p>Indoor minigolg</p>",
        type: 'attraction'    
        },
        {
        position:{lat:49.055225, lng:20.307265}, // CORK WINE BAR
        content:"<img src='assets/images/info_windows/corkwine_120x100.jpg'><p>CORK WINE BAR</p>",
        type: 'bar'    
        },
        {
        position:{lat:49.054660, lng:20.300495}, // JM Cocktail Bar
        content:"<img src='assets/images/info_windows/jmcoctail_120x100.jpg'><p>JM Cocktail Bar</p>",
        type: 'bar'    
        },
    ];

        //Loops through the above array of locations
        for (let i = 0; i < locations.length; i++) {
            addMarker(locations[i]);
    }

    //Display legend - src Google documentation - display issue fixed with CI tutor support    
        let legend = document.getElementById('legend');
        console.log(legend)
        for (let key in icons) {
            let type = icons[key];
            let name = type.name;
            let icon = type.icon;
            let div = document.createElement('div');
            div.innerHTML = '<img src="' + icon + '"> ' + name;
            legend.appendChild(div);
            console.log(legend)
        }
        console.log('hi')
        mymap.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
        console.log(mymap.controls[google.maps.ControlPosition.LEFT_BOTTOM])

    //Adds the markers on the map
    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.position,
            icon: icons[props.type].icon,
            map: mymap
        });

    //Add info window - scr Google documentations & Traversy Media Google Maps API tutorial
        infoWindow = new google.maps.InfoWindow({
            content: props.content,
        });

    /* 
    Solution for one infowindow closing after another clicked 
    https://stackoverflow.com/questions/49613610/how-to-google-maps-api-close-infowindow-when-clicking-something-else-marker
    needed to declare global variable otherwise the mymap listener wouldn't work. 
    */    
        if (props.content) {
        marker.addListener("click", function () {
            infoWindow.setContent(props.content);
            infoWindow.open(mymap, marker);
            });
        mymap.addListener('click', function() {
            if (infoWindow) infoWindow.close();
            });
        }    
    }

    //Search places box - src Google documentations     
        let input = document.getElementById('pac-input');
        let searchBox = new google.maps.places.SearchBox(input);

        mymap.addListener('bounds_changed', function() {
            searchBox.setBounds(mymap.getBounds());
        });

        let markers = [];
  
        searchBox.addListener('places_changed', function () {
        let places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }    
        markers.forEach(function (marker) { 
            marker.setMap(null); 
        });

        markers = [];

        let bounds = new google.maps.LatLngBounds();

        places.forEach(function(place) {
            if (!place.geometry) {
            return;
            }    
            markers.push(new google.maps.Marker({
                map: mymap,
                title: place.name,
                position: place.geometry.location
                })
            );
            if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
            } else{
            bounds.extend(place.geometry.location);
            }
        });
    
        mymap.fitBounds(bounds);

    }); 
    
} 

