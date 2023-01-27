<template>
	<main class="site-main">
		<section class="section-1 pt-32">
			<div class="container">
				<h1>Baze LeafletJs Openstreetmap</h1>
				<p class="full-width pb-16 header">
					<a href="https://github.com/vue-leaflet/Vue2Leaflet"
						>https://github.com/vue-leaflet/Vue2Leaflet</a
					>
				</p>
				<div class="flex flex-row col-gap-12 mb-32 f-14">
					<span>View other: &nbsp;</span>
					<nuxt-link to="/leaflet/popup">Custom Popup</nuxt-link>
				</div>
				<h5>Installation</h5>
				<code class="code">npm i vue2-leaflet</code>
				<h5 class="mt-16">Config</h5>
				<p>~plugins/leaflet.js</p>
				<pre v-highlightjs class="code f-12">
						<code class="javascript">
import Vue from 'vue'
import 'leaflet/dist/leaflet.css'
import * as Vue2Leaflet from 'vue2-leaflet'

// Here add what you need from leaflet
Vue.component('LControl', Vue2Leaflet.LControl)
Vue.component('LGeoJson', Vue2Leaflet.LGeoJson)
Vue.component('LIcon', Vue2Leaflet.LIcon)

// In case you use default marker icon and it didnt appear, add this code
import { Icon } from 'leaflet'
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
						</code>
					</pre>
				<p>nuxt.config.js</p>
				<pre v-highlightjs class="language-javascript f-12">
					<code class="javascript">
  export default {
  ...
  plugins: [
    { src: '~/plugins/leaflet.js', ssr: false }
  ],
  ...
  }
					</code>
				</pre>
				<p class="mt-12">
					<b>Notes</b>: Jika maps hanya digunakan untuk satu page, tidak
					disarankan menambahkan plugin pada
					<span class="highlight">nuxt.config.js</span>. Lakukan import langsung
					pada page yang menggunakan maps untuk mengurangi load size.
				</p>
				<p></p>
			</div>
		</section>
		<section class="section mt-32">
			<div class="container">
				<h5>Usage</h5>
				<span>Simple map</span>

				<pre v-highlightjs class="f-12">
					<code v-pre class="vue">
&lt;div class=&quot;map-wrapper&quot;&gt; 
&lt;client-only&gt;
	&lt;LMap :zoom=&quot;5&quot; :center=&quot;[-3, 119]&quot;&gt;
	&lt;LTileLayer url=&quot;https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png&quot;&gt;&lt;/LTileLayer&gt; 
	&lt;!-- Latitude & Longitude Center Map --&gt;
	&lt;LMarker :lat-lng=&quot;[-7.2754438, 112.6426431]&quot; &gt;&lt;/LMarker&gt; 
	&lt;/LMap&gt;
&lt;/client-only&gt; 
&lt;/div&gt;
					</code>
				</pre>

				<div class="map-wrapper mt-16">
					<client-only>
						<LMap :zoom="5" :center="[-3, 119]">
							<LTileLayer
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							></LTileLayer>
							<LMarker :lat-lng="[-7.2754438, 112.6426431]"> </LMarker>
						</LMap>
					</client-only>
				</div>
				<p class="mt-32">Custom Maps Style</p>
				<p>Untuk mengubah style map tedapat 2 cara: <br /></p>
				<ol>
					<li>
						Menggunakan map style dari
						<a href="https://openmaptiles.org/styles/"
							>https://openmaptiles.org/styles/</a
						>
					</li>
					<li>
						Menggunakan GEOJSON untuk menambah layer pada maps. Nantinya style
						layer GEOJSON dapat dicustomize. GEOJSON ini menggunakan path svg.
						Sebagai contoh, berikut maps menggunakan GEOJSON Indonesia yang
						didapat dari
						<a href="https://github.com/superpikar/indonesia-geojson"
							>https://github.com/superpikar/indonesia-geojson.</a
						>
					</li>
				</ol>
				<div class="map-wrapper mt-16">
					<client-only>
						<LMap :zoom="5" :center="[-3, 119]">
							<LTileLayer
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							></LTileLayer>
							<LMarker :lat-lng="[-7.2754438, 112.6426431]"
								><LIcon
									:icon-size="iconSize"
									:icon-anchor="iconAnchor"
									icon-url="/assets/img/map-marker.png"
							/></LMarker>
							<LGeoJson :geojson="geojson"></LGeoJson>
						</LMap>
					</client-only>
				</div>
				<pre v-highlightjs class="f-12 code">
					<code v-pre class="vue javascript">
&lt;div class=&quot;map-wrapper geo-json&quot;&gt;
&lt;client-only&gt;
&lt;LMap :zoom=&quot;5&quot; :center=&quot;[-3, 119]&quot;&gt;
  &lt;LTileLayer url=&quot;&quot;&gt;&lt;/LTileLayer&gt;
	&lt;LMarker :lat-lng=&quot;[-7.2754438, 112.6426431]&quot;&gt;
	   &lt;!-- CUSTOM MARKER --&gt;
	   &lt;LIcon
		:icon-size=&quot;iconSize&quot;
		:icon-anchor=&quot;iconAnchor&quot;
		icon-url=&quot;assets/img/map-marker.png&quot;
	   /&gt;
	&lt;/LMarker&gt;
   &lt;!-- ADD LAYER GEOJSON--&gt;
   &lt;LGeoJson :geojson=&quot;geojson&quot;&gt;&lt;/LGeoJson&gt;
&lt;/LMap&gt;
&lt;/client-only&gt;
&lt;/div&gt;
					</code>
					<code class="javascript">
&lt;script&gt;
data() {
  return {
   geojson: null,
   client: false,
   iconSize: [24, 32],
   iconAnchor: [16, 35]
  }
},
async created() {
await this.$axios
  .get(`/json/indonesia-en.geojson`)
  .then(res => {
    this.geojson = res.data
  }).catch(error => {
    const errData = error.response?.data
    const errMessage =
    error.response.data?.message || error.response.statusText
    if (errData.status === 404 || error.response.status === 404)
      this.$nuxt.error(this.$catch404)
    else {
      this.$nuxt.error(this.$catch500)
      const consoleError = new Error(errMessage)
      consoleError.code = errData?.status || error.response.status
      throw consoleError
    }
  })
},
&lt;/script&gt;
					</code>
				</pre>
				<p>Tambahkan style</p>
				<p>
					Apabila hanya ingin menampilkan area maps sesuai area GEOJSON hapus
					tag
					<span class="highlight">&lt;LTileLayer&gt;</span>
				</p>
				<pre v-highlightjs class="f-12 code">
					<code v-pre class="css">
						
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
					</code>
				</pre>
				<div class="map-wrapper mt-16 geo-json">
					<client-only>
						<LMap :zoom="5" :center="[-3, 119]">
							<LMarker :lat-lng="[-7.2754438, 112.6426431]"
								><LIcon
									:icon-size="iconSize"
									:icon-anchor="iconAnchor"
									icon-url="/assets/img/map-marker.png"
							/></LMarker>
							<LGeoJson :geojson="geojson"></LGeoJson>
						</LMap>
					</client-only>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	data() {
		return {
			geojson: null,
			iconSize: [24, 32],
			iconAnchor: [16, 35]
		}
	},
	head() {
		return {
			...this.$SEOMeta({
				metaTitle: 'Suit Baze'
			})
		}
	},
	async created() {
		await this.$axios
			.get(`/json/indonesia-en.geojson`)
			.then(res => {
				this.geojson = res.data
			})
			.catch(error => {
				const errData = error.response?.data
				const errMessage =
					error.response.data?.message || error.response.statusText
				if (errData.status === 404 || error.response.status === 404)
					this.$nuxt.error(this.$catch404)
				else {
					this.$nuxt.error(this.$catch500)
					const consoleError = new Error(errMessage)
					consoleError.code = errData?.status || error.response.status
					throw consoleError
				}
			})
	},
	methods: {}
}
</script>

<style lang="scss" scoped>
.site-main {
	color: $white;
}

.header {
	border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
}
.highlight {
	background-color: #333;
	border-radius: 4px;
	padding: 0 8px;
}
.map-wrapper {
	height: 500px;
	width: 100%;
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
</style>
