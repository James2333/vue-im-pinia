<template>
    <div class='login-box'>
        <a-card style='width: 300px'>
            <a-form
                :model='formState'
                name='basic'
                :label-col='{ span: 8 }'
                :wrapper-col='{ span: 16 }'
                autocomplete='off'
                @finish='login'
            >
                <a-form-item
                    label='用户名'
                    name='username'
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value='formState.username' />
                </a-form-item>

                <a-form-item
                    label='Password'
                    name='password'
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                    <a-input-password v-model:value='formState.password' />
                </a-form-item>

                <a-form-item name='remember' :wrapper-col='{ offset: 8, span: 16 }'>
                    <a-checkbox v-model:checked='formState.remember'>Remember me</a-checkbox>
                </a-form-item>

                <a-form-item :wrapper-col='{ offset: 8, span: 16 }'>
                    <a-button type='primary' html-type='submit'>Submit</a-button>
                </a-form-item>
            </a-form>

        </a-card>
    </div>
</template>

<script setup lang='ts'>

import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { genTestUserSig } from '../../debug'
import { useTIMStore } from '@/stores/chat'

const formState = reactive<{
    username: string,
    password: string,
    remember: boolean
}>({
    username: '',
    password: '',
    remember: false
})
const router = useRouter()

const TIMStore = useTIMStore()
const login = () => {
    const { userSig } = genTestUserSig({
        SDKAppID: 0,
        secretKey: '',
        userID: formState.username
    })
    // console.log(formState)
    TIMStore.timCore.timLogin({
        userSig,
        userID: formState.username
    })
    //
    router.push('/home')
}
</script>

<style scoped>
.login-box {
    background-color: #2f3447;
    width: 100vh;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>