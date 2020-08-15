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
            icon: 'assets/images/marker_icons/patisserie.png', // url
            scaledSize: new google.maps.Size(40, 40), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        },
        restaurant: {
            name: 'Restaurants',
            icon: 'assets/images/marker_icons/restaurant.png', // url
            scaledSize: new google.maps.Size(40, 40), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor    
        },
        bar: {
            name: 'Bars',
            icon: 'assets/images/marker_icons/bar.png', // url
            scaledSize: new google.maps.Size(40, 40), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor    
        },
        attraction: {
            name: 'Attractions',
            icon: 'assets/images/marker_icons/attraction.png', // url
            scaledSize: new google.maps.Size(40, 40), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor    
        }
    };   

// Added first marker - to test     
    let locations = [
        {
        position:{lat:49.055575, lng:20.301116}, //Palacinkáreň u Priateľov 
        type: 'patisserie'
        },
        {
        position:{lat:49.054578, lng:20.299540}, // Cukraren Lucia
        type: 'bar'
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