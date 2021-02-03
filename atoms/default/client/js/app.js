// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"
import { Loader, LoaderOptions } from 'google-maps';
import L from 'leaflet'
import 'shared/js/Leaflet.GoogleMutant.js'
import * as topojson from "topojson"
import mapstyles from 'shared/js/mapstyles.json'
import poly1 from 'shared/js/poly1.json'

/*---------------------- */

async function googleizer() {

    const loader = new Loader('AIzaSyD8Op4vGvy_plVVJGjuC5r0ZbqmmoTOmKk');

    const google = await loader.load();

}

function initMap() {

    var map = new L.Map('map', { 
        renderer: L.canvas(),
        scrollWheelZoom: false,
        dragging: false,
        zoomControl: false,
        doubleClickZoom: false,
        zoomAnimation: false,
        tap: false,
        keyboard: false,
        touchZoom: false
    })

    map.setView(new L.LatLng(-31.736393370037966,116.11486439490012), 10);

    var styled = L.gridLayer.googleMutant({

        styles: mapstyles

    }).addTo(map);

    var poly1Style = {
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
    };

    L.geoJSON(poly1, {
        style: poly1Style
    }).addTo(map);

}

googleizer().then( () => initMap())