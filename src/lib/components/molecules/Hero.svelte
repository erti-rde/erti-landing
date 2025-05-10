<!-- Hero.svelte -->
<script lang="ts">
    import { fly } from 'svelte/transition';
</script>

<section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
    <div class="absolute inset-0 opacity-30">
        <div class="animate-blob absolute top-10 left-1/4 h-96 w-96 rounded-full bg-emerald-300 mix-blend-multiply blur-3xl filter"></div>
        <div class="animate-blob animation-delay-2000 absolute top-0 -right-4 h-96 w-96 rounded-full bg-cyan-300 mix-blend-multiply blur-3xl filter"></div>
        <div class="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-96 w-96 rounded-full bg-purple-300 mix-blend-multiply blur-3xl filter"></div>
    </div>

    <div class="relative z-10 flex min-h-screen items-center justify-center">
        <div class="container mx-auto px-6">
            <div class="mx-auto max-w-4xl text-center">
                <div class="space-y-8" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
                    <h1 class="text-5xl font-bold leading-tight text-gray-800 md:text-7xl">
                        Research Made 
                        <span class="relative">
                            <span class="relative z-10 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Effortless</span>
                            <span class="absolute bottom-0 left-0 h-3 w-full -skew-x-3 bg-emerald-100"></span>
                        </span>
                    </h1>
                    <p class="text-xl text-gray-600 md:text-2xl">
                        A powerful text editor with PDF analysis and intelligent citations, designed specifically for researchers.
                    </p>
                    <div class="flex flex-col justify-center gap-6 sm:flex-row">
                        <a href="#features"
                            class="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 font-medium text-white shadow-lg transition-all hover:shadow-xl">
                            <span class="relative z-10">Explore Features</span>
                            <div class="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-cyan-500 to-emerald-500 transition-transform group-hover:translate-x-0"></div>
                        </a>
                        <a href="#roadmap"
                            class="group relative overflow-hidden rounded-lg border border-gray-200 bg-white px-8 py-4 font-medium text-gray-700 shadow-lg transition-all hover:border-emerald-200 hover:text-emerald-600 hover:shadow-xl">
                            View Roadmap
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
        33% { transform: translate(30px, -50px) scale(1.1) rotate(120deg); }
        66% { transform: translate(-20px, 20px) scale(0.9) rotate(240deg); }
        100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
    }

    .animate-blob {
        animation: blob 20s infinite cubic-bezier(0.4, 0, 0.2, 1);
    }

    .animation-delay-2000 {
        animation-delay: 2s;
    }

    .animation-delay-4000 {
        animation-delay: 4s;
    }
</style>