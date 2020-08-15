function initMap() {
    let mymap = new google.maps.Map(document.getElementById("mymap"), {
        zoom: 15,
        center: {
            lat: 49.054001,
            lng: 20.295059},
    });
// Added first marker - to test     
    let marker = new google.maps.Marker({
        position:{lat:49.055575, lng:20.301116},
        map: mymap 
    })
}

