<template>
	<div class="content">
	<Header />
		<h1 class="hello">Bonjour Alexandre</h1>

	</div>
</template>


<script>

</script>

<style lang="scss" scoped>

.content{
	background: var(--bg);
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}


.hello{
	position: absolute;
	font-weight: 900;
	font-size: 4em;
	top: 15%;
	color: var(--color);
	z-index: 1;
	left: 50%;
	transform: translate(-50%, -50%);
}

img{
	width: 50vw;
	height: 100vh;

}

.tr{
	position: absolute;
	bottom: 0;
	width: 50%;
	height: 92%;
	background: var(--bgt5);
}

.tr9gag{
	left: 0;
}

p{
	position: absolute;
	width: 50%;
	top: 70%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: inline-block;
	font-weight: 900;
	font-size: 5vw;
	color: var(--color);
	text-align: center;

}


</style>