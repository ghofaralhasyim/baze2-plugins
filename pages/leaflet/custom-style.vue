<template>
	<main class="site-main">
		<div class="container">
			<div class="flex flex-row col-gap-12 mb-32 f-14">
				<span>View other: &nbsp;</span>
				<nuxt-link to="/leaflet/popup">Custom Popup</nuxt-link>
				<nuxt-link to="/leaflet/cluster-map">Cluster Maps</nuxt-link>
			</div>
			<div class="map-wrapper mt-16">
				<client-only>
					<LMap :zoom="5" :center="[-3, 119]">
						<LTileLayer
							url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"
							:zIndex="100"
						></LTileLayer>
						<LMarker :lat-lng="[-7.2754438, 112.6426431]"> </LMarker>
						<LGeoJson :geojson="geojson" :optionsStyle="style"></LGeoJson>
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
			style: {
				weight: 0.1,
				color: '#fff',
				opacity: 1,
				fillColor: '#fff'
			}
		}
	},
	async created() {
		await this.$axios
			.get(`/json/IDN_adm_2_kabkota.json`)
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
	}
}
</script>
<style lang="scss" scoped>
.map-wrapper {
	height: 500px;
	width: 100%;
	padding: 16px;
	border-radius: 8px;
	background-color: #052c3c;
}
.leaflet-container {
	background: #052c3c;
	outline: 0;
}
</style>
