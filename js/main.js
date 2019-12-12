//function to start the Leaflet map
function createMap(){

    //Varibles needed for running the funcation
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>';
    
    var apitoken = 'pk.eyJ1IjoiZnptZXllcnMiLCJhIjoiY2s0MWp3bWszMDFqaDNsczBqMHdkeDN1byJ9.cZkQ4gq4tY0rfBvjSrRFOA' //API Token
    
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'; //Standard styles
    
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; //Custom styles
    
    
    //Variables for different basemaps
    var navigation = L.tileLayer(mbStyleUrl, {id: 'fzmeyers/ck41k222na62f1cmnybek489n', token: apitoken,  attribution: mbAttr});
    
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    var dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken,  attribution: mbAttr});
    
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});
    
   
    
    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//center the map
        zoom: 6, //zoom
        layers:navigation //base layer default
    });
    
    //create the basemap control layer*/
    var baseLayers = {
		"Outdoors": outdoors,
        "Grayscale": grayscale,
		"Darkscale": dark,
        "Navigation": navigation
    };
    
    L.control.layers(baseLayers).addTo(map);
};

//calling the funcation
$(document).ready(createMap);