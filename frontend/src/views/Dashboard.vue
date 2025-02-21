<template>
    <div class="container mx-auto p-10">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Dashboard Pengiriman</h2>
        <table class="w-full border shadow-md rounded-lg">
            <thead class="bg-gray-800 text-white">
                <tr>
                    <th class="p-4">No. Resi</th>
                    <th class="p-4">Status</th>
                    <th class="p-4">Detail</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border text-center" v-for="(item, index) in shipments" :key="index">
                    <td class="p-4 text-center">{{ item.resi }}</td>
                    <td class="p-4 text-center">{{ item.status }}</td>
                    <td class="p-4 text-center">
                        <router-link class="text-blue-500 underline" :to="'/tracking/'+item.resi">Lihat</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const shipments = ref ([
    {resi: '123456', status: 'Sedang dikirim'},
    {resi: '123123', status: 'Diterima'},
    {resi: '111222', status: 'Dalam proses'},
])
</script>