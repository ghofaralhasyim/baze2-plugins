import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/github-dark.css'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import vue from 'vue-highlight.js/lib/languages/vue'

Vue.use(VueHighlightJS, {
	// Register only languages that you want
	languages: {
		css,
		javascript,
		vue
	}
})
