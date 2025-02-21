<template>
    <nav class="bg-gray-900 text-white p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <router-link
                class="text-2xl font-bold text-blue-400 hover:text-blue-500 transition"
            >
                TransSwift
            </router-link>
            <div class="space-x-6">
                <router-link class="nav-link" to="/">Home</router-link>
                <router-link class="nav-link" to="/tacking"
                    >Tracking</router-link
                >
                <router-link class="nav-link" to="/dashboard"
                    >Dashboard</router-link
                >
                <router-link
                    class="nav-link bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    to="/login"
                    >Login</router-link
                >
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-link {
    color: white;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #60a5fa;
}
</style>
