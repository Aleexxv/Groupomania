<template>
	<div>
		<div class="content">
			<div class="reelContent">
				<figcaption v-for="article in articles" :key="article">
					<button class="button supp">x</button>
					<h2>{{ article.title }}</h2>
					<p>{{ article.desc }}</p>
					<div class="flex action">
						<button class="button like">like</button>
						<p class="ctlike">1{{ cunterlike }}</p>
					</div>
				</figcaption>
			</div>
			<div class="fullStars">

			</div>
		</div>
	</div>
</template>

<script>

export default {

	data() {
		return {
			article: '',
			desc: ''
		}
	},
	methods: {
		
	},
	computed: {
		articles() {
			return this.$store.state.article;
		},

	}
}



</script>

<style lang="scss" scoped>

.content{
	display: flex;
	justify-content: center;
	position: relative;
	background: var(--bg);
	color: var(--color);;
	margin-top: 4%;
}

.fullStars {
	width: 20%;
	border : 1px solid var(--color-primary);
}
</style>