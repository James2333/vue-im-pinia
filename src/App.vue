<script setup lang='ts'>
import { useUserStore } from './stores/user'

const userStore = useUserStore()
const add = () => {
    userStore.age += 1
    userStore.saveName(userStore.name + 1)
}

</script>
<template>
    <div>im pinia {{ userStore.age }}</div>
    <div>im pinia {{ userStore.doubleAge }}</div>
    <div>im pinia {{ userStore.getDoubleAge() }}</div>
    <div>im pinia {{ userStore.name }}</div>
    <button @click='add'>+1</button>
</template>