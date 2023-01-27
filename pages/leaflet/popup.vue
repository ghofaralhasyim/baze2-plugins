<template>
	<main class="site-main">
		<div class="container pt-32 pb-64">
			<h3>LeafletJs Custom Popup</h3>
			<div class="flex flex-row col-gap-12 mb-32 f-14">
				<span>View other: &nbsp;</span>
				<nuxt-link to="/leaflet">Custom Maps Style</nuxt-link>
			</div>
			<h5>Popup Styling</h5>
			For scoped style component use ::v-deep, or you can add as global style on
			module scss (without ::v-deep)
			<pre v-highlightjs class="f-12 code">
				<code v-pre class="scss">
                    
::v-deep .leaflet-popup {
    //Add your styling here
	.leaflet-popup-content {
         //Add your styling here
	}
	.leaflet-popup-content-wrapper {
         //Add your styling here
	}

	.leaflet-popup-tip-container {
		 //Add your styling here
	}
}
                </code>
            </pre>
			<div class="map-wrapper relative mt-16 geo-json">
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
         img_url: 'https://source.unsplash.com/yVwiHXoTrnU'
       },
       {
         name: 'Pemalang',
         lat: -7.0105213,
         long: 109.2523051,
         img_url: 'https://source.unsplash.com/kleCw7s_t0s'
       }
       ]
    }
},
mounted() {
    for (const item of this.dataLocation) {
      item.popUpContent = 
      `&lt;div class="info">&lt;span>${item.name}&lt;/span>&lt;img class="img" src="${item.img_url}" alt="" />&lt;/div>`
    }
},
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
.map-wrapper {
	height: 500px;
	width: 100%;
	padding: 16px;
	border-radius: 8px;
	background-color: #222222;
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
						<LMarker
							v-for="(location, index) in dataLocation"
							:key="index"
							:lat-lng="[location.lat, location.long]"
							@click="changePopUpData(index)"
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
					</LMap>
				</client-only>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			geojson: null,
			iconSize: [24, 32],
			iconAnchor: [16, 35],
			dataLocation: [
				{
					name: 'Surabaya',
					lat: -7.2754438,
					long: 112.6426431,
					img_url: 'https://source.unsplash.com/yVwiHXoTrnU'
				},
				{
					name: 'Pemalang',
					lat: -7.0105213,
					long: 109.2523051,
					img_url: 'https://source.unsplash.com/kleCw7s_t0s'
				}
			]
		}
	},
	mounted() {
		for (const item of this.dataLocation) {
			item.popUpContent = `<div class="info"><span>${item.name}</span><img class="img" src="${item.img_url}" alt="" /></div>`
		}
	},
	methods: {
		changePopUpData(index) {
			this.indexDataActive = index
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

::v-deep .geo-json {
	.leaflet-pane {
		svg {
			filter: drop-shadow(1px 2px 3px #b4b2ba);
			path {
				fill: #eae8f0;
				stroke: none !important;
				fill-opacity: 1;
			}
		}
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
