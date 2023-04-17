<template>
	<main class="site-main">
		<section class="banner relative">
			<div class="media-banner-content">
				<div class="container">
					<div class="banner-controls">
						<p class="banner-controls__indicator">
							<span class="banner-controls__index">01</span>
						</p>
						<div class="line"></div>
						<ul class="slick-dots">
							<li v-for="i in dataBanner.length" :key="i">
								<button @click="goToIndexBanner(i)"></button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<VueSlickCarousel ref="mediaBanner" v-bind="bannerConfig">
				<div v-for="i in 3" :key="i" class="banner-wrapper">
					<div class="bzg bzg--no-gutter">
						<div class="bzg_c" data-col="s6">
							<div class="image">
								<img :src="`../../assets/img/klr-image.jpeg`" alt="banner" />
							</div>
						</div>
						<div class="bzg_c" data-col="s6">
							<div class="image">
								<img
									:src="`../../assets/img/maudy-bannertes-gif.gif`"
									alt="banner"
								/>
							</div>
						</div>
					</div>
				</div>
			</VueSlickCarousel>
		</section>
		<section class="container pv-64 section-2 flex flex-col v-center">
			<h2 class="text-center">Kinerja Aligner KLAR Ciptakan Gigi Indahmu</h2>
			<p class="text-center">
				Yuk, simak bersama bagaimana KLAR telah teruji klinis merapikan gigi
				dengan efektif, cepat, dan nyaman
			</p>
			<div class="video pv-32">
				<img :src="`../../assets/img/video.jpg`" alt="" />
			</div>
		</section>
	</main>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
	data() {
		return {
			dataBanner: [
				{
					id: 1,
					img_url: '../../assets/img/klr-image.jpeg',
					gif_url: '../../assets/img/maudy-bannertes-gif.gif'
				},
				{
					id: 1,
					img_url: '../../assets/img/klr-image.jpeg',
					gif_url: '../../assets/img/maudy-bannertes-gif.gif'
				}
			],
			bannerConfig: {
				arrows: false,
				dots: false,
				infinite: false,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				swipeToSlide: true
			}
		}
	},
	methods: {
		goToIndexBanner(index) {
			this.$refs.mediaBanner.goTo(index)
		}
	}
}
</script>

<style lang="scss" scoped>
.media-banner-content {
	position: absolute;
	z-index: 10;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 80%;
	color: #506b77;

	@media #{$extra-large} {
		height: 85%;
	}

	& > .container {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding-bottom: 32px;
	}
}
.banner-controls {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-bottom: 40px;
	font-size: 16px;

	p {
		margin-left: 6px;
	}

	.line {
		height: 100px;
		width: 3px;
		background: #506b77;
		margin-left: 12px;
	}

	.btn--transparent {
		color: #506b77;
	}
}

.media-banner {
	position: relative;
	height: 100vh;

	&::before {
		content: '';
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			78.81deg,
			rgba(0, 0, 0, 0.1) 58.25%,
			rgba(108, 108, 108, 0.64) 98.9%
		);
		pointer-events: none;
	}

	&::after {
		content: '';
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 350px;
		background: linear-gradient(
			179.34deg,
			rgba(255, 255, 255, 0.75) 15%,
			rgba(108, 108, 108, 0) 98%
		);
		pointer-events: none;
	}
}
.site-main {
	background: $white !important;
	color: $dark;
}
.banner {
	position: relative;

	.image {
		img {
			width: 100%;
			object-fit: cover;
		}
	}
}
.section-2 {
	p {
		max-width: 520px;
	}
}

.video {
	max-width: 880px;
}

.slick-dots {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 20px 0;
}

.slick-dots li {
	list-style: none;
}

.slick-dots li button {
	background: transparent;
	border: 2px solid #506b77;
	border-radius: 50%;
	cursor: pointer;
	width: 18px;
	height: 18px;
}

.slick-dots li.slick-active button {
	background: #ffffff;
}
</style>
