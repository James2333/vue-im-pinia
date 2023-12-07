<template>
    <div class='about'>
        <h1>This is an about page</h1>
    </div>
</template>
<script lang='ts' setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore

console.log(userStore.age)
</script>
<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
