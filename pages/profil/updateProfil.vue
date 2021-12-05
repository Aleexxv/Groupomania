<template>
		<div class="content">
			<form class="form">
				<input v-model="firstName" type="text" placeholder="Nom">
				<input v-model="lastName" type="text" placeholder="Prénom">
				<input v-model="email" type="email" placeholder="Email">
				<input v-model="password" type="password" placeholder="Mot de passe">
				<input v-model="repeatPassword" type="password" placeholder="Répetez votre mot de passe">
				<button class="button" @click="updateProfil()">Modifier mon profil</button>
			</form>
		</div>


</template>

<script>
export default {
	data() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			repeatPassword: ""
		}	
	},
	methods: {
		updateProfil() {
			axios.post('/api/users', {
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				password: this.password
			})
			.then(response => {
				console.log(response.data);
				this.$router.push('/profil');
			})
			.catch(error => {
				console.log(error);
			})
		}
	}
}

</script>

<style lang="scss" scoped>

	form{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}



</style>


