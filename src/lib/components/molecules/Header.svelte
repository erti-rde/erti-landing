<!-- Header.svelte -->
<script lang="ts">
	import { fly } from 'svelte/transition';
	import { navLinks } from '$lib/data/content';
	let isMenuOpen = false;
</script>

<header class="fixed top-0 z-50 w-full bg-white transition-all duration-300">
	<div class="container mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<svg class="h-10 w-10 text-emerald-500" viewBox="0 0 24 24" fill="none">
					<path
						d="M12 2L2 7L12 12L22 7L12 2Z"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2 17L12 22L22 17"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2 12L12 17L22 12"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span class="ml-3 text-2xl font-bold text-emerald-600">Erti</span>
			</div>

			<nav class="hidden space-x-10 md:flex">
				{#each navLinks as link}
					<a href={link.href} class="text-gray-700 transition-colors hover:text-emerald-600">
						{link.name}
					</a>
				{/each}
			</nav>

			<div class="hidden items-center md:flex">
				<a
					href="https://github.com/erti-rde"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-700 hover:text-emerald-600"
					aria-label="GitHub Repository"
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>

			<button
				class="text-gray-700 focus:outline-none md:hidden"
				on:click={() => (isMenuOpen = !isMenuOpen)}
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
			>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					{#if isMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					{/if}
				</svg>
			</button>
		</div>

		{#if isMenuOpen}
			<div class="mt-4 md:hidden" transition:fly={{ y: -20, duration: 300 }}>
				<div class="flex flex-col space-y-4 rounded-lg bg-white p-4 shadow-lg">
					{#each navLinks as link}
						<a
							href={link.href}
							class="text-gray-700 transition-colors hover:text-emerald-600"
							on:click={() => (isMenuOpen = false)}
						>
							{link.name}
						</a>
					{/each}
					<a
						href="https://github.com/erti-rde"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center text-gray-700 hover:text-emerald-600"
						on:click={() => (isMenuOpen = false)}
					>
						<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								fill-rule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clip-rule="evenodd"
							/>
						</svg>
						GitHub
					</a>
				</div>
			</div>
		{/if}
	</div>
</header>
