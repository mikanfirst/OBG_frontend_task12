let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 35.65879, lng: 139.74545 }, //緯度と軽度
    zoom: 15, //拡大：max20まで
  });
} 

initMap();