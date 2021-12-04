<template>
	<div>
		<Header />
		<h1>Binevenue sur les partie GIF</h1>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>

div{
	width: 100vw;
	height: 100vh;
	background: var(--bg);
	h1{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: var(--color);
		width: 70%;
		text-align: center;
	}
}

</style>