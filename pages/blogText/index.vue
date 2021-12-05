<template>
	<div>
		<div class="content">
			<div class="tendance">
				
			</div>
			<div class="reelContent">

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
			
		}
	},
	methods: {
		
	},
	created() {
		
	},
	mounted() {
		
	}
}


</script>

<style lang="scss" scoped>

.content{
	display: flex;
	justify-content: space-between;
	position: relative;
	background: var(--bg);
	color: var(--color);;
}

.tendance, .fullStars {
	width: 20%;
	border : 1px solid green;
}

</style>