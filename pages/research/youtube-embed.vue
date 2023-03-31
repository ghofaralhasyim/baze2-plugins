<template>
	<main class="site-main">
		<div class="container">
			<div>
				<div ref="player"></div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			player: null
		}
	},
	mounted() {
		this.initPlayer()
	},
	methods: {
		async initPlayer() {
			// Load the YouTube Iframe API
			const tag = document.createElement('script')
			tag.src = 'https://www.youtube.com/iframe_api'
			const firstScriptTag = await document.getElementsByTagName('script')[0]
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

			// Create the YouTube player
			this.player = new window.YT.Player(this.$refs.player, {
				height: '720',
				width: '100%',
				videoId: 'AWVy2pMOB8c',
				playerVars: {
					autoplay: 0,
					modestbranding: 1,
					rel: 0
				},
				events: {
					onStateChange: this.handlePlayerStateChange
				}
			})
		},
		handlePlayerStateChange(event) {
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
