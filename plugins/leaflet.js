import Vue from 'vue'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import * as Vue2Leaflet from 'vue2-leaflet'
import { Icon } from 'leaflet'

import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

Vue.component('LMarkerCluster', Vue2LeafletMarkerCluster)

Vue.component('LControl', Vue2Leaflet.LControl)
Vue.component('LGeoJson', Vue2Leaflet.LGeoJson)
Vue.component('LIcon', Vue2Leaflet.LIcon)
Vue.component('LMap', Vue2Leaflet.LMap)
Vue.component('LMarker', Vue2Leaflet.LMarker)
Vue.component('LTileLayer', Vue2Leaflet.LTileLayer)
// Vue.component('l-grid-layer', Vue2Leaflet.LGridLayer)
// Vue.component('l-circle', Vue2Leaflet.LCircle)
// Vue.component('l-circle-marker', Vue2Leaflet.LCircleMarker)
// Vue.component('l-control-attribution', Vue2Leaflet.LControlAttribution)
// Vue.component('l-control-layers', Vue2Leaflet.LControlLayers)
// Vue.component('l-control-scale', Vue2Leaflet.LControlScale)
// Vue.component('l-control-zoom', Vue2Leaflet.LControlZoom)
// Vue.component('l-feature-group', Vue2Leaflet.LFeatureGroup)
// Vue.component('l-icon-default', Vue2Leaflet.LIconDefault)
// Vue.component('l-image-overlay', Vue2Leaflet.LImageOverlay)
// Vue.component('l-layer-group', Vue2Leaflet.LLayerGroup)
// Vue.component('l-polygon', Vue2Leaflet.LPolygon)
// Vue.component('l-polyline', Vue2Leaflet.LPolyline)
// Vue.component('l-popup', Vue2Leaflet.LPopup)
// Vue.component('l-rectangle', Vue2Leaflet.LRectangle)
// Vue.component('l-tooltip', Vue2Leaflet.LTooltip)
// Vue.component('l-lwms-tile-layer', Vue2Leaflet.LWMSTileLayer)

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
