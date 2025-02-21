<script setup>
import { ref } from 'vue';

const resi = ref('');
const status = ref('');

const track = () => {
    status.value =
        resi.value === '123456'
            ? 'Barang sedang dikirim'
            : 'Resi tidak ditemukan';
};
</script>

<template>
    <div
        class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6"
    >
        <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h2 class="text-2xl font-bold mb-4 text-center text-gray-800">
                Lacak Pengiriman
            </h2>
            <input
                type="text"
                v-model="resi"
                placeholder="Masukkan No. Resi"
                class="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button
                class="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
                Cek Status
            </button>
            <p class="mt-4 text-center text-lg font-semibold" v-if="status">
                {{ status }}
            </p>
        </div>
    </div>
</template>
