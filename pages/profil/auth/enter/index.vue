<template>
	<div class="content">
		<div class="blank"><img class="blank-img" src="~assets/logo/icon-left-font-monochrome-black.png" alt=""></div>
		<img src="~assets/img/bg-home-2.jpg" class="bg-home" alt="">
		<div class="container-log">
			<auth-login />
		</div>
		<div class="container-sign">
			<auth-signin />
		</div>
	</div>
</template>


<script>
import gsap from 'gsap'

export default {


	data() {
		return {
			logText: 'connectez-vous',
			signText: 'inscrivez-vous',
			mode: 'left'
		}
	},

	mounted: function(){
	this.startAnimation();
	},

	methods: {
	
	changeModeRight(){
		gsap.to('.container-log', {duration: .2, opacity: 0, x: '-100%'});
		gsap.to('.container-sign', {display: 'initial'});
		gsap.to('.container-sign', {duration: .2, opacity: 1, x: '-100%', display: 'initial'});

	},

	changeModeLeft(){
		gsap.to('.container-log', {duration: .2, opacity: 1, x: '0'});
		gsap.to('.container-sign', {duration: .2, opacity: 0, x: '0'});
		gsap.to('.container-sign', { display: 'none'});
	},

	startAnimation: function(){
		// const tl = gsap.timeline({
		// 	scrollTrigger: {
		// 	trigger: '.content',
		// 	pin: true,
		// 	scrub: true
		// 	}
		// })
		
		const tl = gsap.timeline({})
		tl.to('.blank-img', { opacity: 0, duration: .25, delay: 1, ease: 'power1.inOut' })
		tl.to('.blank', { opacity: 0, duration: .25, delay: 0, ease: 'power1.inOut' })
		}
	}
}
</script>


<style lang="scss" scoped>

::-webkit-scrollbar {
	width:5rem;
}

body{
	overflow-y: none;
	overflow-x: none;
}

.content{
	height: 100vh;
	width: 100%;
}

.blank{
	height: 100vh;
	width: 100%;
	background-color: var(--bg);
	position: absolute;
	z-index: 1;
	pointer-events: none;
	.blank-img{
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}

.bg-home{
	position: relative;
	height: 100vh;
	transform: scale(1.8);
	z-index: -1;
}

.container-log, .container-sign {
	background: var(--bgt7);
	border-radius: 2rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	svg{
		width: 35vh;
		position: relative;
		top: 0%;
		left: 50%;
		transform: translate(-50%, 20%);
		padding: 2rem;
	}
}

.container-sign{
	position: absolute;
	left: 100%;
	opacity: 0;
	transform: translate(-50%, -50%);
	display: none;
}

.hello{
	color: var(--color);
	text-align: center;
	margin-top: 2rem;
	padding: 0 2rem;
}

p{
	color: var(--color);
	text-align: center;
	margin-top: 2rem;
}

form{
	padding: 2rem 0;
	z-index: 2;
	input{
		color: var(--color);
		display: block;
		appearance: none;
		outline: 0;
		width: 25rem;
		border: unset;
		border-bottom: 2px solid var(--color);
		background: transparent;
		padding: 1rem;
		margin: 0 auto 2rem auto;
		text-align: center;
		font-size: 1rem;
		transition-duration: 0.25s;
		&::placeholder {
			color: var(--color);
		}
		&:focus{
			width: 30rem;
			background: rgba(255, 255, 255, 0.287);
		}
	}
	
	.button{
		appearance: none;
		outline: 0;
		background: transparent;
		border: 2px solid var(--color);
		padding: 1rem;
		width: 15rem;
		cursor: pointer;
		transition-duration: 0.25s;
		color: var(--color);
		margin: 0 auto;
	}
}

.changeMode-right, .changeMode-left{
	position: relative;
	top: 90%;
	left: 75%;
	appearance: none;
	outline: 0;
	border: unset;
	background: transparent;
	border-bottom: 2px solid var(--color);
	padding: 1rem;
	cursor: pointer;
	font-size: 1rem;
	color: var(--color);
}

.changeMode-left{
	left: 7%;
}

.CMPlog{
	position: absolute;
	top: 0;
	right: 5%;
}

.CMPsign{
	position: absolute;
	top: 0;
	left: 5%;
}

</style>