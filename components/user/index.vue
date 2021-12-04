<template>
    <div class="content">
        <Header />
        <h1>Je suis le profil</h1>
        <div class="profil">
            <img src="https://i.pravatar.cc/300" alt="">
            <p>{{firstName}} {{lastName}}</p>
            <p>{{email}}</p>
            <p>Vous avez partagez {{x}} publication</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'Alexandre',
            lastName: 'Veylet',
            email: 'a.veylet2@gamil.com',
            x: "x",
        }
    },

}
</script>

<style lang="scss" scoped>

.content{
    background: var(--bg);
}

.profil{
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--bg);
    width: 100%;
    height: 93vh;


}

p{
    color: var(--color);
    text-align: center;
}

img{
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
}

</style>