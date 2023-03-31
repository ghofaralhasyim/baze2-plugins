<template>
	<main class="site-main">
		<div class="container">
			<div ref="playerContainer"></div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			player: null,
			id: 'AWVy2pMOB8c'
		}
	},
	mounted() {
		// Load the YouTube IFrame API asynchronously
		const tag = document.createElement('script')
		tag.src = 'https://www.youtube.com/iframe_api'
		const firstScriptTag = document.getElementsByTagName('script')[0]
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

		// Create a YouTube player object when the API is ready
		window.onYouTubeIframeAPIReady = () => {
			this.player = new window.YT.Player(this.$refs.playerContainer, {
				height: '600',
				width: '100%',
				videoId: 'AWVy2pMOB8c',
				events: {
					onStateChange: this.onPlayerStateChange.bind(this)
				}
			})
		}
	},
	methods: {
		onPlayerStateChange(event) {
			// Check if the video has ended
			if (event.data === window.YT.PlayerState.ENDED) {
				// Refresh the player by reloading the video
				this.player.cueVideoById({
					videoId: 'AWVy2pMOB8c',
					playerVars: {
						autoplay: 0,
						modestbranding: 1
					}
				})
			}
		}
	}
}
</script>
