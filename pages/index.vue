<template>
	<main class="site-main">
		<div class="container flex flex-col v-center h-center full-height">
			<div class="content-wrapper p-16">
				<p>
					You absolutely can read the plugins official docs. But, here maybe can
					make it fast to search and develop
					<span class="f-12"> (Based on my experience)</span>.
				</p>
			</div>
			<p class="mb-0 mt-18">Here you go:</p>
			<div class="flex flex-row mt-18 col-gap-12">
				<nuxt-link to="/leaflet" class="content-wrapper pl-16 pr-16"
					>LeafletJs Openstreetmap</nuxt-link
				>
				<span class="text-grey content-wrapper pl-16 pr-16"
					>GSAP (On Progress)</span
				>
			</div>
		</div>
	</main>
</template>

<script></script>

<style lang="scss" scoped>
.site-main {
	height: calc(100vh - 70px);
	color: $white;
}

.content-wrapper {
	background: #222;
	border-radius: 8px;
	p {
		margin: 0;
	}
}
</style>
