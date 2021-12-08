<template>
	<div class="content">
		<div class="profil">
			<div>
				<img src="https://i.pravatar.cc/300" alt="">
				<h2>{{ firstName }} {{ lastName }}</h2>
				<h3>{{ email }}</h3>
				<p>Vous avez partagé {{ nbrLikeGif }} publication</p>
				<button class="button updateProfile"> <NuxtLink class="link" to="/profil/updateProfil">Je modifie mon profile !</NuxtLink></button>
			</div>
		</div>
		<div class="realContent">
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
	</div>
</template>

<script>
	export default {

		auth: false,

		data() {
			return {
				firstName: 'Alexandre',
				lastName: 'VEYLET',
				email: 'a.veylet2@gmail.com',
				nbrLikeGif: '78',
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

	.content {
		position: absolute;
		top: 8%;
		width: 100%;
	}

	.realContent{
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding-top: 2rem;
	}

	.profil{
		text-align: center;
		background-image: url('https:///random.imagecdn.app/3500/500');
		padding: 1rem 0 0 1rem;
		margin-bottom: 5rem;
		div {
			background: var(--bg);
			width: 25rem;
			height: 25rem;
			border-radius: 50% 50% 0 0;
			img{
				margin-top: 1rem;
			}
			
		}
		
	}

	.link{
		font-size: 1rem;
	}


	.updateProfile{
		left: 0;
		transform: translateX(0);
	}



	img{
		border-radius: 50%;
	}




</style>