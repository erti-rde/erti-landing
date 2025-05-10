<!-- Footer.svelte -->
<script lang="ts">
    import Logo from '$lib/components/atoms/Logo.svelte';
    import { navLinks } from '$lib/data/content';
</script>

<footer class="border-t border-gray-200 bg-white">
    <div class="container mx-auto px-6 py-12">
        <div class="flex flex-col items-center justify-between md:flex-row">
            <div class="mb-6 flex items-center md:mb-0">
                <Logo size="medium" color="emerald-500" />
                <span class="ml-3 text-xl font-semibold text-gray-800">Erti</span>
            </div>

            <!-- Added navigation links for better user experience -->
            <nav class="mb-6 flex flex-wrap justify-center gap-x-8 gap-y-4 md:mb-0">
                {#each navLinks as link}
                    <a 
                        href={link.href} 
                        class="text-sm text-gray-600 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md"
                    >
                        {link.name}
                    </a>
                {/each}
                <a 
                    href="https://github.com/erti-rde" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="text-sm text-gray-600 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md"
                >
                    GitHub
                </a>
            </nav>

            <div class="flex items-center space-x-6">
                <p class="text-sm text-gray-500">
                    © {new Date().getFullYear()} Erti. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</footer>
