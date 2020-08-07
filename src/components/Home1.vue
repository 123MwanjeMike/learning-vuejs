<template>
    <div>
        <h1 id="app-headers">
            Welcome to Mike's first Vue app<br />
            <button class="btn btn-small">
                <router-link to='/greet' > Greet </router-link>
            </button>
            <button class="btn btn-small">
                <router-link to='/demo' > Demo </router-link>
            </button>
            <button class="btn btn-small">
                <router-link to='/students' > Students </router-link>
            </button>
        </h1>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>

</style>