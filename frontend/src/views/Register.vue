<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 class="text-2xl font-bold mb-4 text-center">Register</h2>
            <input v-model="name" placeholder="Your Name" type="text" class="w-full border p-2 rounded mb-2">
            <input v-model="email" placeholder="Your Email" type="email" class="w-full border p-2 rounded mb-2 focus:ring-2 focus:ring-blue-500">
            <input v-model="password" placeholder="Your Password" type="password" class="w-full border p-2 rounded mb-2">
            <input v-model="confirmPassword" placeholder="Confirm Your Password" type="password" class="w-full border p-2 rounded mb-4">
            <button class="bg-green-500 text-white w-full p-2 rounded" @click="register">Register</button>
            <p class="mt-2 text-center">
                Sudah punya akun? <router-link class="text-blue-500" to="/login">Login</router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const register = () => {
    if (password.value !== confirmPassword.value) {
        alert('Password tidak cocok!')
        return
    }
    alert(`Registrasi berhasil! Nama: ${name.value}, Email: ${email.value}`)
}
</script>