<template>
	<main class="site-main">
		<section class="container pt-32 pb-64">
			<h3>LeafletJs Custom Popup</h3>

			<div class="flex flex-row col-gap-12 mb-32 f-14">
				<span>View other: &nbsp;</span>
				<nuxt-link to="/leaflet">Custom Maps Style</nuxt-link>
				<nuxt-link to="/leaflet/popup">Custom Popup</nuxt-link>
			</div>
			<p>Here you need additional plugins</p>
			<code class="code">npm i vue2-leaflet-markercluster</code>
			<p class="mt-18">Register plugin on leaflet.js</p>
			<pre v-highlightjs class="code">
            <code class=" javascript f-12 ">
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

Vue.component('LMarkerCluster', Vue2LeafletMarkerCluster)
            </code>
            </pre>
			<h5 class="mt-18">Example</h5>
			<div class="map-wrapper relative">
				<div class="abc">
					<pre v-highlightjs class="f-12 code">
                <code v-pre class="javascript vue m-0 p-0">
&lt;template&gt;
&lt;main class=&quot;site-main&quot;&gt;
&lt;div class=&quot;map-wrapper&quot;&gt;
&lt;client-only&gt;
&lt;LMap :zoom=&quot;5&quot; :center=&quot;[-3, 119]&quot;&gt;
    &lt;LTileLayer
    url=&quot;https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png&quot;
    &gt;&lt;/LTileLayer&gt;
    &lt;LMarker
        v-for=&quot;(location, index) in dataLocation&quot;
        :key=&quot;index&quot;
        :lat-lng=&quot;[location.lat, location.long]&quot;
    &gt;
        &lt;LIcon
            :icon-size=&quot;iconSize&quot;
            :icon-anchor=&quot;iconAnchor&quot;
            icon-url=&quot;/assets/img/map-marker.png&quot;
        /&gt;
        &lt;LPopup
            :content=&quot;location.popUpContent&quot;
            :options=&quot;{ closeButton: false }&quot;
        &gt;&lt;/LPopup&gt;
    &lt;/LMarker&gt;
&lt;/LMap&gt;
&lt;/client-only&gt;
&lt;/div&gt;
&lt;/main&gt;
&lt;/template&gt;

&lt;script&gt;
export default{
data(){
    return {
       iconSize: [24, 32],
       iconAnchor: [16, 35],
       dataLocation: [
       {
         name: 'Surabaya',
         lat: -7.2754438,
         long: 112.6426431,
       },
       {
         name: 'Pemalang',
         lat: -7.0105213,
         long: 109.2523051,
       },
       {
          name: 'Malang',
          lat: -7.9786395,
          long: 112.5617425
        }
       ]
    }
},
mounted() {
   for (const item of this.dataLocation) {
     item.popUpContent = `&lt;span>${item.name}&lt;/span>`
    }
}
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;
.map-wrapper {
	height: 500px;
	width: 100%;
}
::v-deep .marker-cluster,
.marker-cluster-small {
	background-color: rgba($color: #ff3333, $alpha: 0.7);

	div {
		background-image: url('assets/img/mixue.jpg');
		background-size: cover;
	}
}
&lt;/style&gt;
                </code>
            </pre>
				</div>
				<client-only>
					<LMap :zoom="5" :center="[-3, 119]">
						<LTileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						></LTileLayer>
						<LMarkerCluster :options="{ maxClusterRadius: 60 }">
							<LMarker
								v-for="(location, index) in dataLocation"
								:key="index"
								:lat-lng="[location.lat, location.long]"
							>
								<LIcon
									:icon-size="iconSize"
									:icon-anchor="iconAnchor"
									icon-url="/assets/img/map-marker.png"
								/>
								<LPopup
									:content="location.popUpContent"
									:options="{ closeButton: false }"
								></LPopup>
							</LMarker>
						</LMarkerCluster>
					</LMap>
				</client-only>

				<h5 class="mt-32">Customize Icon</h5>
				<p>
					You can use ::v-deep for scoped style or add style as global style on
					module scss without ::v-deep
				</p>
				<pre v-highlightjs class="f-12 mt-64">
            <code v-pre class="scss m-0 p-0">
    ::v-deep .marker-cluster,
    .marker-cluster-small {
        background-color: rgba($color: #ff3333, $alpha: 0.7);

        div {
            background-image: url('assets/img/mixue.jpg');
            background-size: cover;
        }
    }
                </code>
                </pre>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	data() {
		return {
			iconSize: [24, 32],
			iconAnchor: [16, 35],
			dataLocation: [
				{
					name: 'Surabaya',
					lat: -7.2754438,
					long: 112.6426431
				},
				{
					name: 'Pemalang',
					lat: -7.0105213,
					long: 109.2523051
				},
				{
					name: 'Malang',
					lat: -7.9786395,
					long: 112.5617425
				}
			]
		}
	},
	mounted() {
		for (const item of this.dataLocation) {
			item.popUpContent = `<span>${item.name}</span>`
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	color: $white;
}

.abc {
	position: absolute;
	right: 0;
	top: 1em;
	background-color: #222;
	height: calc(100% - 2em);
	max-height: 100%;
	overflow-y: scroll;
	width: 50%;
	z-index: 9999;
	padding: 1em;
}

.highlight {
	background-color: #333;
	border-radius: 4px;
	padding: 0 8px;
}
.map-wrapper {
	height: 500px;
	width: 100%;
	border: 1px solid #000;
	padding: 16px;
	border-radius: 8px;
	background-color: #222222;
}

.code {
	padding: 8px 16px;
	border-radius: 4px;
	background-color: #222222;
	width: 100%;
	position: relative;
	tab-size: 12px !important;

	.comment {
		color: $black30;
	}
}

::v-deep .language-javascript,
.vue {
	background-color: #222;
}

.code-file {
	position: absolute;
	top: 0;
	left: 0;
	padding: 8px 16px;
	background-color: #333;
}

.leaflet-container {
	background: #fff !important;
	border-radius: 4px;
}

::v-deep .marker-cluster,
.marker-cluster-small {
	background-color: rgba($color: #ff3333, $alpha: 0.7);

	div {
		background-image: url('assets/img/mixue.jpg');
		background-size: cover;
	}
}

::v-deep .leaflet-popup {
	bottom: auto !important;
	margin-top: 6px;
	.leaflet-popup-content {
		min-width: 120px !important;
		margin: 0;
		cursor: pointer;
		font-size: 1em;
		background: rgba($color: white, $alpha: 0.7);
		padding: 2px 8px;
		border-radius: 4px;
		display: flex;
		flex-direction: column;

		.img {
			width: 100%;
			max-height: 70px;
			min-height: 70px;
			background-color: #b4b2ba;
			overflow: hidden;
			object-fit: cover;
			border-radius: 4px;
		}
	}
	.leaflet-popup-content-wrapper {
		border-radius: 4px;
	}

	.leaflet-popup-tip-container {
		display: none;
	}
}
</style>
