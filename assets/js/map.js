function initMap() {
    let mymap = new google.maps.Map(document.getElementById("mymap"), {
        zoom: 15,
        center: {
            lat: 49.054001,
            lng: 20.295059},
    });

//Marker Icons,     
//Marker resizing from IFD leflet by Tim from CI and Stackoverflow    
    let patisserie = {
    url: 'assets/images/marker_icons/patisserie.png', // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };

    let restaurant = {
    url: 'assets/images/marker_icons/restaurant.png', // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor    
    }

    let bar = {
    url: 'assets/images/marker_icons/bar.png', // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor    
    }

    let attraction = {
    url: 'assets/images/marker_icons/attraction.png', // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor    
    }

// Added first marker - to test     
    let marker = new google.maps.Marker({
        position:{lat:49.055575, lng:20.301116}, //Palacinkáreň u Priateľov 
        map: mymap,
        icon: patisserie
    });
}
  

