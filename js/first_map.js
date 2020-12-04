let mymap = L.map('mapid').setView([27.747772, -82.714108], 10.60);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamFyZWR0Y3JhaWciLCJhIjoiY2tpYWlhMWZ0MHB1MTJwb3kwdDZsNmtheiJ9.K3bi0N3LTpCd_BO95QtcYA'
}).addTo(mymap);

let marker1 = L.marker([27.648602, -82.744001]).addTo(mymap);
let marker2 = L.marker([27.683155, -82.738979]).addTo(mymap);
let marker3 = L.marker([27.737533, -82.754050]).addTo(mymap);
let marker4 = L.marker([27.744579, -82.760367]).addTo(mymap);

marker1.bindPopup("A fun little point break spot for a west-southwest swell with little to no wind.");
marker2.bindPopup("A jetty that provides north-northwest wind protection. Good for west-northwest swells.");
marker3.bindPopup("Best on a high tide with offshore winds.");
marker4.bindPopup("The local spot if you don't know where else to go.");
