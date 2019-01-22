const mapboxgl = require("mapbox-gl");

function createMarker (markerType, coordinatesArr, markerName) {
    let markerDomEl = document.createElement(markerName);
    
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    
    if (markerType === 'activity') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
    }
    else if (markerType === 'hotel') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
    }
    else if (markerType === 'restaurant') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
    }
    
    let newMarker = new mapboxgl.Marker(markerDomEl).setLngLat(coordinatesArr);

    console.log(map, 'this is the map')
    return newMarker;
}   



module.exports = createMarker;