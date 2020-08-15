function initMap() {
    let mymap = new google.maps.Map(document.getElementById("mymap"), {
        zoom: 15,
        center: {
            lat: 49.054001,
            lng: 20.295059},
    });

//Marker icons categories,     
//Marker resizing from IFD leflet by Tim from CI and Stackoverflow
//code src Google documentation    
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

// Added first marker - to test     
    let locations = [
        {
        position:{lat:49.055575, lng:20.301116}, //Palacinkáreň u Priateľov 
        type: 'patisserie'
        },
        {
        position:{lat:49.054578, lng:20.299540}, // Cukráreň Lucia
        type: 'patisserie'
        }
    ];

    for (let i = 0; i < locations.length; i++) {
        addMarker(locations[i]);
    }

    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.position,
            icon: icons[props.type].icon,
            map: mymap
        });
    };
}    