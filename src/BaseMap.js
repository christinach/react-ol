import React, { useState, useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { ZoomToExtent, defaults as defaultControls } from "ol/control";

const BaseMap = () => {
  const [map, setMap] = useState("map");
  const mapElement = useRef();
  mapElement.current = map;

  // initialize a new map on the first render. Return [].
  // see https://github.com/openlayers/openlayers#getting-started
  useEffect(() => {
    const mapNew = new Map({
      
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
          }),
        }),
        // Google Maps Terrain
        new TileLayer({
          source: new XYZ({
            url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
          })
        }),
      ],
      view: new View({
        projection: "EPSG:3857",
        center: [0, 0],
        zoom: 2,
      }),
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [-8077253.6530,5022218.5064,-7738790.4917,5291276.8460,],
        })
      ]),
    });
    setMap(mapNew);
  }, []);

  return (
    <div>
      <div ref={mapElement} className="map-container"></div>
    </div>
  );
};

export default BaseMap;
