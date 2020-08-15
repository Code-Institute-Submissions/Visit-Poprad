function initMap() {
    let mymap = new google.maps.Map(document.getElementById("mymap"), {
        zoom: 15,
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
        content:"<p>Test</p>"
        },
        {
        position:{lat:49.054578, lng:20.299540}, // Cukráreň Lucia
        type: 'patisserie'
        },
        {
        position:{lat:49.046588, lng:20.283674}, // Cukráreň Sonata
        type: 'patisserie'    
        },
        {
        position:{lat:49.054448, lng:20.301053}, // Sladký sen
        type: 'patisserie'    
        }
    ];

    //Loops through the above array of locations
    for (let i = 0; i < locations.length; i++) {
        addMarker(locations[i]);
    }

    //Adds the markers on the map
    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.position,
            icon: icons[props.type].icon,
            map: mymap
        });

    //Add info window - scr Google documentations & Traversy Media Google Maps API tutorial
        let infoWindow = new google.maps.InfoWindow({
            content: props.content,
        });
        marker.addListener("click", function () {
        infoWindow.open(mymap, marker);
        });
    };
}    
