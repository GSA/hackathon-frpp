var map;
var home;
var basemapGallery;

require(["esri/map", 
    "esri/dijit/HomeButton",
    "dojo/domReady!"], function(Map, HomeButton) {
  map = new Map("map", {
    basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
    center: [-97, 42], // longitude, latitude
    zoom: 13
  });

  home = new HomeButton({
    map: map
  }, "HomeButton");
  home.startup();
});
