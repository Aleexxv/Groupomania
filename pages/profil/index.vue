<template>
	<div class="content">
		<div class="profil">
			<img src="https://i.pravatar.cc/300" alt="">
			<h2>{{ firstName }} {{ lastName }}</h2>
			<h3>{{ email }}</h3>
			<p>Vous avez partagé {{ nbrLikeGif }} publication</p>
			<button class="button"> <NuxtLink class="link" to="/profil/updateProfil">Je modifie mon profile !</NuxtLink></button>
		</div>
		<div class="realContent">
			<figcaption>
				<h2>{{ article }}</h2>
				<p>{{ desc }}</p>
			</figcaption>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				firstName: 'Alexandre',
				lastName: 'VEYLET',
				email: 'a.veylet@gmail.com',
				nbrLikeGif: "1",
			}
		},
		methods: {
			
		},

		computed: {
			articles() {
				return this.$store.getters.getArticles;
			},
	
		}
	}
</script>

<style lang="scss" scoped>

	.content {
		position: absolute;
		top: 8%;
		width: 100%;
	}

	.realContent{
		display: flex;
		width: 100%;
	}

	.profil{
		text-align: center;
	}

	.link{
		font-size: 1rem;
	}

	.button{
		left: 0;
		transform: translateX(0);
	}

	img{
		border-radius: 50%;
	}

	figcaption{
		text-align: center;
		margin-top: 2rem;
	}


</style>