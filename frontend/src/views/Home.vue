<template>
    <div>
        <!-- Hero Section -->
        <section class="relative bg-gray-900 text-white py-24 text-center overflow-hidden">
            <img
                :src="heroImage"
                alt="Background Hero"
                class="absolute inset-0 w-full h-full object-cover opacity-20"
                loading="lazy"
            />
            <div class="container mx-auto px-6 relative z-10">
                <h1 class="text-5xl font-extrabold mb-4 animate-fadeInUp">
                    Solusi Pengiriman Cepat, Aman, dan Transparan
                </h1>
                <p class="text-lg mb-6 opacity-80">
                    TransSwift menghadirkan layanan logistik modern dengan real-time tracking.
                </p>
                <div class="flex justify-center gap-4">
                    <router-link
                        to="/register"
                        class="bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300"
                    >
                        Mulai Sekarang
                    </router-link>
                    <router-link
                        to="/tracking"
                        class="bg-gray-700 px-6 py-3 rounded-lg text-white font-semibold hover:bg-gray-600 transition duration-300"
                    >
                        Lacak Pengiriman
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Keunggulan Layanan -->
        <section class="py-20 bg-gray-100 text-center">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold mb-10">Mengapa Memilih TransSwift?</h2>
                <div class="grid md:grid-cols-4 gap-8">
                    <div v-for="(item, index) in features" :key="index"
                        class="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                    >
                        <component :is="item.icon" class="h-10 w-10 mx-auto mb-3" :class="item.color" />
                        <h3 class="font-semibold text-xl">{{ item.title }}</h3>
                        <p class="text-gray-600 mt-2">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimoni Pelanggan -->
        <section class="py-20 bg-white text-center">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold mb-10">Apa Kata Pelanggan Kami?</h2>
                <div class="relative w-full max-w-4xl mx-auto">
                    <swiper
                        :modules="[SwiperAutoplay]"
                        :slides-per-view="1"
                        :autoplay="{ delay: 3000 }"
                        loop
                        class="swiper-container"
                    >
                        <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
                            <div class="w-full p-6">
                                <p class="text-lg text-gray-700 italic">
                                    "{{ testimonial.message }}"
                                </p>
                                <h4 class="font-semibold mt-2">- {{ testimonial.name }}</h4>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section class="py-20 bg-gray-100 text-center">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold mb-10">Pilih Paket Pengiriman</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div v-for="(plan, index) in pricingPlans" :key="index" class="p-6 bg-white rounded-lg shadow-md">
                        <h3 class="text-xl font-semibold">{{ plan.name }}</h3>
                        <p class="text-gray-600">{{ plan.desc }}</p>
                        <p class="text-2xl font-bold text-blue-500 mt-4">{{ plan.price }}</p>
                        <button class="btn-primary mt-4">Pilih Paket</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-20 bg-white text-center">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold mb-10">Pertanyaan Umum</h2>
                <div class="max-w-3xl mx-auto">
                    <div v-for="(faq, index) in faqs" :key="index" class="mb-4 text-left">
                        <details class="p-4 border rounded-lg">
                            <summary class="font-semibold cursor-pointer">{{ faq.question }}</summary>
                            <p class="mt-2 text-gray-600">{{ faq.answer }}</p>
                        </details>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call To Action -->
        <section class="bg-blue-500 text-white py-16 text-center">
            <h2 class="text-3xl font-bold mb-4">Siap Kirim dengan TransSwift?</h2>
            <div class="flex justify-center gap-4">
                <router-link to="/register" class="btn-secondary">Coba Gratis</router-link>
                <router-link to="/pricing" class="btn-secondary">Hitung Ongkir Sekarang</router-link>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay as SwiperAutoplay } from 'swiper/modules';
import 'swiper/css';
import {
    TruckIcon,
    MapIcon,
    CreditCardIcon,
    ShieldCheckIcon,
} from '@heroicons/vue/24/solid';

const heroImage = ref(new URL('../assets/bg-hero.jpg', import.meta.url).href);

const features = ref([
    { icon: TruckIcon, title: 'Pengiriman Cepat', desc: 'Layanan ekspres dengan SLA yang jelas.', color: 'text-blue-500' },
    { icon: MapIcon, title: 'Real-time Tracking', desc: 'Pantau perjalanan barang kapan saja.', color: 'text-green-500' },
    { icon: CreditCardIcon, title: 'Pembayaran Digital', desc: 'Mendukung e-wallet dan crypto.', color: 'text-yellow-500' },
    { icon: ShieldCheckIcon, title: 'Jaminan Keamanan', desc: 'Setiap pengiriman diasuransikan.', color: 'text-red-500' },
]);

const testimonials = ref([
    { name: 'Anisa, Pengusaha Online', message: 'TransSwift sangat membantu bisnis saya! Pengiriman selalu tepat waktu dan customer support sangat responsif.' },
    { name: 'Budi, Pengguna Reguler', message: 'Saya bisa melacak barang saya dengan mudah tanpa khawatir. Layanan terbaik yang pernah saya gunakan!' },
]);

const pricingPlans = ref([
    { name: 'Reguler', desc: 'Pengiriman 3-5 hari', price: 'Rp 10.000' },
    { name: 'Ekspres', desc: 'Pengiriman 1-2 hari', price: 'Rp 25.000' },
    { name: 'Cargo', desc: 'Untuk barang besar', price: 'Rp 50.000' },
]);

const faqs = ref([
    { question: 'Bagaimana cara melacak paket saya?', answer: 'Gunakan fitur tracking di website kami dengan nomor resi.' },
    { question: 'Apakah ada jaminan barang hilang?', answer: 'Kami menyediakan asuransi untuk setiap pengiriman.' },
]);
</script>

<style scoped>
.btn-primary {
    background-color: #2563eb;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: bold;
    transition: background 0.3s;
}
.btn-primary:hover {
    background-color: #1e40af;
}
.btn-secondary {
    background-color: white;
    color: #2563eb;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: bold;
    transition: background 0.3s;
}
.btn-secondary:hover {
    background-color: #f3f4f6;
}
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 1s ease-out;
}

.cta-button {
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}
.cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
