<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>
            <input type="email" v-model="email" placeholder="Your Email" class="w-full border p-2 rounded mb-2 focus:ring-2 focus:ring-blue-500">
            <input type="password" v-model="password" placeholder="Your Password" class="w-full border p-2 rounded mb-4">
            <button class="bg-blue-500 text-white w-full p-2 rounded" @click="login">Masuk</button>
            <p class="mt-2 text-center">
                Belum punya akun? <router-link class="text-blue-500" to="/register">Daftar</router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = () => {
    alert(`Login dengan email: ${email.value}`)
}
</script>