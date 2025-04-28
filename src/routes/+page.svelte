<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	// Navigation links
	const navLinks = [
		{ name: 'Features', href: '#features' },
		{ name: 'Roadmap', href: '#roadmap' },
		{ name: 'About', href: '#about' }
	];

	// Feature list
	const features = [
		{
			title: 'File Explorer',
			description:
				'Seamlessly access your folder structure with our integrated file explorer that automatically processes PDFs for citation use.',
			status: 'completed',
			videoUrl: '/images/file-explorer.gif'
		},
		{
			title: 'PDF Analysis and Reader',
			description:
				'Erti analyzes your PDFs in your folder and offers to read them in the same app. If you are connected to the internet Erti will try to fetch source metadata (necessary for citation) for you.',
			status: 'completed',
			videoUrl: '/images/pdf-processing.gif'
		},
		{
			title: 'Intuitive Text Editor',
			description:
				'Built with researchers in mind, Erti provides a clean, distraction-free writing environment that feels familiar yet powerful.',
			status: 'completed',
			videoUrl: '/images/core-editor.gif'
		},
		{
			title: 'Source Metadata Editor',
			description:
				'Precisely control your citation metadata to ensure perfect formatting in your research documents.',
			status: 'in-progress',
			videoUrl: '/images/metadata-editor.gif'
		}
	];

	// Roadmap milestones
	const roadmap = [
		{
			quarter: 'Q4 2024',
			title: 'Core Editor',
			description: 'Text editor foundation with essential writing capabilities',
			completed: true
		},
		{
			quarter: 'Q1 2025',
			title: 'PDF Analysis & Citation',
			description: 'PDF processing and automated citation features',
			completed: true
		},
		{
			quarter: 'Q2 2025',
			title: 'Source Metadata Editor',
			description: 'Enhanced control over citation metadata',
			completed: false
		},
		{
			quarter: 'Q3 2025',
			title: 'Bibliography Generation  & Footnotes',
			description:
				'Automatic creation of bibliography based on used citations and footnotes support',
			completed: false
		},
		{
			quarter: 'Q4 2025',
			title: 'Export to PDF',
			description: 'PDF export with custom styling',
			completed: false
		},
		{
			quarter: 'Q4 2025',
			title: 'Enhanced PDF Integration',
			description: 'Improved citation location finding within source PDFs',
			completed: false
		},
		{
			quarter: '2026',
			title: 'Integrated Research Experience',
			description: 'Seamless reading, note-taking, and writing workflow',
			completed: false
		}
	];

	// Team members for About section
	const team = [
		{
			name: 'Akaki Mikaia',
			role: 'Founder & Lead Developer',
			bio: 'Passionate about creating tools that enhance productivity, creativity and contributes to community with positive impact.'
		}
	];

	let isMenuOpen = false;
	let isScrolled = false;
	let currentFeature = 0;
	let featureInterval: ReturnType<typeof setInterval>;
	const citationData = [
		{
			text: 'Smart matching using machine learning finds the most similar sentences',
			title: 'Smart Matching',
			gif: '/images/smart-matching.gif',
			gifDescription: 'Smart matching animation - showing text selection and matching process'
		},
		{
			text: 'Add sources while typing',
			title: 'Manual trigger for citation comeponent',
			gif: '/images/citation-trigger.gif',
			gifDescription: 'Manual citation trigger - showing list of available sources'
		},
		{
			text: 'Add or remove citations when interacting to citation component',
			title: 'Easy Citation Management',
			gif: '/images/citation-management.gif',
			gifDescription: 'Add/Remove citation animation - demonstrating the interface'
		},
		{
			text: 'Switch citation styles instantly, updating your entire document',
			title: 'Citation Style Switching',
			gif: '/images/style-switching.gif',
			gifDescription: 'Citation style switching animation - showing instant document updates'
		}
	];
	// Function to handle manual feature selection
	function selectFeature(index: number) {
		// Clear the existing interval to prevent conflicts
		if (featureInterval) clearInterval(featureInterval);

		// Set the selected feature
		currentFeature = index;
	}
	function startInterval() {
		featureInterval = setInterval(() => {
			currentFeature = (currentFeature + 1) % citationData.length;
		}, 8000);
	}

	// Modal for enlarged GIFs
	type ModalContent = { title?: string; videoUrl?: string; gif?: string; gifDescription?: string };
	let showModal = false;
	let modalContent: ModalContent = {};
	let isPlaying = false;

	function openModal(content: ModalContent) {
		modalContent = content;
		showModal = true;
		isPlaying = true;
	}

	function closeModal() {
		showModal = false;
		isPlaying = false;
	}

	// For accessibility - close modal on escape key
	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape' && showModal) closeModal();
	};

	onMount(() => {
		startInterval();
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			if (featureInterval) clearInterval(featureInterval);
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
	<title>Erti - Research Made Effortless</title>
	<meta
		name="description"
		content="Erti is a powerful text editor designed for researchers, featuring PDF analysis, intelligent citations, and a seamless writing experience."
	/>
</svelte:head>

<header
	class="fixed top-0 z-50 w-full transition-all duration-300"
	class:bg-white={isScrolled}
	class:shadow-md={isScrolled}
	class:bg-transparent={!isScrolled}
>
	<div class="container mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<svg
					class="h-10 w-10 text-emerald-500"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
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

			<!-- Desktop Navigation -->
			<nav class="hidden space-x-10 md:flex">
				{#each navLinks as link (link)}
					<a href={link.href} class="text-gray-700 transition-colors hover:text-emerald-600">
						{link.name}
					</a>
				{/each}
			</nav>

			<!-- GitHub Link -->
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
						></path>
					</svg>
				</a>
			</div>

			<!-- Mobile Menu Button -->
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
						></path>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					{/if}
				</svg>
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div class="mt-4 md:hidden" transition:fly={{ y: -20, duration: 300 }}>
				<div class="flex flex-col space-y-4 rounded-lg bg-white p-4 shadow-lg">
					{#each navLinks as link (link)}
						<a
							href={link.href}
							class="text-gray-700 transition-colors hover:text-emerald-600"
							on:click={() => (isMenuOpen = false)}
						>
							{link.name}
						</a>
					{/each}
					<a
						href="https://github.com/erti/erti"
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
							></path>
						</svg>
						GitHub
					</a>
				</div>
			</div>
		{/if}
	</div>
</header>

<main>
	{#if showModal}
		<div
			class="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
			on:click|self={closeModal}
			transition:fade={{ duration: 200 }}
		>
			<div
				class="relative w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-2xl"
				transition:fly={{ y: 20, duration: 300 }}
			>
				<div class="flex items-center justify-between bg-gray-800 p-4 text-white">
					<h3 class="text-xl font-semibold">{modalContent.title || 'Feature Preview'}</h3>
					<button
						class="text-white hover:text-gray-300 focus:outline-none"
						on:click={closeModal}
						aria-label="Close modal"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							></path>
						</svg>
					</button>
				</div>

				<div class="flex justify-center bg-gray-100 p-6">
					{#if isPlaying}
						<img
							src={modalContent.videoUrl || modalContent.gif}
							alt={modalContent.gifDescription || modalContent.title}
							class="max-h-[70vh] object-contain"
						/>
					{:else}
						<div class="relative">
							<img
								src={(modalContent.videoUrl || modalContent.gif)?.replace('.gif', '-thumb.jpg')}
								alt={modalContent.gifDescription || modalContent.title}
								class="max-h-[70vh] object-contain"
							/>
							<button
								class="bg-opacity-30 hover:bg-opacity-40 absolute inset-0 flex items-center justify-center bg-black"
								on:click={() => (isPlaying = true)}
							>
								<span class="rounded-full bg-emerald-500 p-4 text-white">
									<svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
										/>
									</svg>
								</span>
							</button>
						</div>
					{/if}
				</div>

				<div class="bg-white p-4">
					<p class="text-gray-700">{modalContent.gifDescription || ''}</p>
				</div>
			</div>
		</div>
	{/if}
	<!-- Hero Section -->
	<section
		class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24"
	>
		<div class="absolute inset-0 opacity-20">
			<div
				class="animate-blob absolute top-10 left-1/4 h-72 w-72 rounded-full bg-emerald-400 mix-blend-multiply blur-3xl filter"
			></div>
			<div
				class="animate-blob animation-delay-2000 absolute top-0 -right-4 h-72 w-72 rounded-full bg-cyan-400 mix-blend-multiply blur-3xl filter"
			></div>
			<div
				class="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-purple-400 mix-blend-multiply blur-3xl filter"
			></div>
		</div>

		<div class="relative z-10 container mx-auto px-6">
			<div class="mx-auto max-w-4xl text-center">
				<h1 class="mb-8 text-5xl font-bold text-gray-800 md:text-7xl">
					Research Made <span
						class="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent"
						>Effortless</span
					>
				</h1>
				<p class="mb-12 text-xl text-gray-600 md:text-2xl">
					A powerful text editor with PDF analysis and intelligent citations, designed specifically
					for researchers.
				</p>
				<div class="flex flex-col justify-center gap-6 sm:flex-row">
					<a
						href="#features"
						class="transform rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 font-medium text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
					>
						Explore Features
					</a>
					<a
						href="#roadmap"
						class="transform rounded-lg border border-gray-200 bg-white px-8 py-4 font-medium text-gray-700 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
					>
						View Roadmap
					</a>
				</div>
			</div>
		</div>

		<div class="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
			<a href="#features" aria-label="Scroll to features">
				<svg class="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					></path>
				</svg>
			</a>
		</div>
	</section>

	<!-- Features Section -->
	<section id="features" class="bg-white py-24">
		<div class="container mx-auto px-6">
			<div class="mb-20 text-center">
				<h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
					Familiar and Powerful Features
				</h2>
				<p class="mx-auto max-w-2xl text-gray-600">
					Erti combines the familiar with the revolutionary to create a writing tool that adapts to
					your research workflow.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
				{#each features as feature (feature.title)}
					<div
						class="overflow-hidden rounded-xl bg-gray-50 shadow-lg transition-transform hover:scale-105 hover:transform"
					>
						<div class="relative aspect-video overflow-hidden bg-gray-200">
							{#if feature.videoUrl}
								<div
									class="group relative h-full w-full cursor-pointer"
									on:click={() => openModal(feature)}
								>
									<!-- Static thumbnail initially shown -->
									<img
										src={feature.videoUrl}
										alt={feature.title}
										class="h-full w-full object-cover transition-opacity group-hover:opacity-90"
									/>
								</div>
							{:else}
								<div class="absolute inset-0 flex items-center justify-center">
									<span class="text-gray-500">Coming soon</span>
								</div>
							{/if}
						</div>

						<div class="p-6">
							<div class="mb-4 flex items-center justify-between">
								<h3 class="text-xl font-semibold text-gray-800">{feature.title}</h3>
								<span
									class={`rounded-full px-3 py-1 text-center text-xs font-medium ${
										feature.status === 'completed'
											? 'bg-green-100 text-green-600'
											: feature.status === 'in-progress'
												? 'bg-yellow-100 text-yellow-600'
												: 'bg-gray-100 text-gray-600'
									}`}
								>
									{feature.status}
								</span>
							</div>
							<p class="text-gray-600">{feature.description}</p>
						</div>
					</div>
				{/each}
			</div>

			<!-- Citation Feature Highlight -->
			<div
				class="mx-auto mt-24 max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-50 to-cyan-50 shadow-xl"
			>
				<div class="grid md:grid-cols-2">
					<div class="flex flex-col justify-center p-8 md:p-12">
						<h3 class="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">Intelligent Citations</h3>
						<p class="mb-6 text-gray-700">
							Simply select text and using cite icon automatically find the most relevant source
							material from your PDFs or press <span
								class="inline-block rounded bg-gray-200 px-2 py-1 font-mono text-sm">@</span
							> if already know which source you want to cite to activate Erti's citation tool and add
							citations while typing.
						</p>
						<ul class="space-y-3 text-gray-700">
							{#each citationData as feature, i (i)}
								<li
									class="group flex cursor-pointer items-start"
									on:click={() => selectFeature(i)}
									on:keydown={(e) => e.key === 'Enter' && selectFeature(i)}
									tabindex="0"
									role="button"
									aria-pressed={currentFeature === i}
								>
									<svg
										class="mt-0.5 mr-2 h-5 w-5 text-emerald-500 transition-colors group-hover:text-emerald-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										></path>
									</svg>
									<span
										class="relative transition-colors group-hover:text-emerald-600"
										class:text-emerald-600={currentFeature === i}
										class:font-medium={currentFeature === i}
									>
										{feature.text}
										{#if currentFeature === i}
											<span
												class="animate-underline absolute bottom-0 left-0 h-[2px] bg-emerald-500"
											></span>
										{/if}
									</span>
								</li>
							{/each}
						</ul>
					</div>
					<div class="flex h-64 items-center justify-center bg-gray-800 p-4 md:h-auto">
						{#each citationData as feature, i (i)}
							{#if currentFeature === i}
								<div
									class="h-full w-full transition-all duration-500 ease-in-out"
									in:fade={{ duration: 400 }}
								>
									<div class="mb-2 text-center text-lg font-medium text-white">{feature.title}</div>
									<div
										class="relative flex h-[250px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white md:h-[300px]"
										on:click={() => openModal(feature)}
									>
										<!-- Static thumbnail with play button overlay -->
										<div class="group relative">
											<img
												src={feature.gif}
												alt={feature.gifDescription}
												class="max-h-full max-w-full object-contain transition-opacity group-hover:opacity-90"
											/>
										</div>
									</div>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Offline-First Callout -->
	<section class="bg-gray-900 py-16 text-white">
		<div class="container mx-auto px-6 text-center">
			<h2 class="mb-6 text-3xl font-bold md:text-4xl">Free, Open Source & Privacy-Focused</h2>
			<p class="mx-auto mb-10 max-w-3xl text-lg text-gray-300">
				Erti runs completely on your machine and works offline. Your research and data never leave
				your computer without your explicit consent.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<div class="flex items-center rounded-lg bg-gray-800 px-6 py-4">
					<svg
						class="mr-4 h-8 w-8 text-emerald-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
						></path>
					</svg>
					<span>Your data stays on your device</span>
				</div>
				<div class="flex items-center rounded-lg bg-gray-800 px-6 py-4">
					<svg
						class="mr-4 h-8 w-8 text-emerald-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
						></path>
					</svg>
					<span>No internet connection required</span>
				</div>
				<div class="flex items-center rounded-lg bg-gray-800 px-6 py-4">
					<svg
						class="mr-4 h-8 w-8 text-emerald-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
						></path>
					</svg>
					<span>Free and open source (coming soon)</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Roadmap Section -->
	<section id="roadmap" class="bg-gray-50 py-24">
		<div class="container mx-auto px-6">
			<div class="mb-20 text-center">
				<h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Development Roadmap</h2>
				<p class="mx-auto max-w-2xl text-gray-600">
					Our journey to build the perfect research companion is well underway. Here's what we've
					accomplished and what's coming next.
				</p>
			</div>

			<div class="relative mx-auto max-w-4xl">
				<!-- Timeline Line -->
				<div
					class="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-gray-200 md:block"
				></div>

				<div class="space-y-16">
					{#each roadmap as item, i (i)}
						<div class="flex flex-col md:flex-row md:items-center">
							<div
								class={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-1 md:pl-12 md:text-left'}`}
							>
								<div class="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
									<span class="text-sm font-semibold text-emerald-500">{item.quarter}</span>
									<h3 class="mt-2 text-xl font-bold text-gray-800">{item.title}</h3>
									<p class="mt-2 text-gray-600">{item.description}</p>
								</div>
							</div>

							<div
								class="z-10 my-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-gray-200 bg-white md:absolute md:left-1/2 md:my-0 md:-translate-x-1/2 md:transform"
							>
								{#if item.completed}
									<svg
										class="h-6 w-6 text-emerald-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										></path>
									</svg>
								{:else}
									<span class="h-4 w-4 rounded-full bg-gray-300"></span>
								{/if}
							</div>

							<!-- This div is just a spacer for the alternating layout -->
							<div class={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:order-1' : ''}`}></div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="bg-white py-24">
		<div class="container mx-auto px-6">
			<div class="mb-20 text-center">
				<h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">About Erti</h2>
				<p class="mx-auto max-w-2xl text-gray-600">
					Building the next generation research tool for writers and researchers.
				</p>
			</div>

			<div class="mx-auto mb-20 max-w-4xl">
				<p class="mb-6 text-lg text-gray-700">
					Erti was born from a simple idea over dinner table: What if I could find a citation from
					my sources for my research?
				</p>
				<p class="mb-6 text-lg text-gray-700">
					Erti has become more than the answer to simple questions and now it is a text editor
					specifically designed for academic writing and research. It intelligently analyzes your
					PDF sources and provides powerful citation tools that work seamlessly as you write. It
					uses machine learning for finding your citations and does not imagine or create texts for
					you. This is important for us since we belive research and academic work should be done by
					humans and tools that are powered with ML should not do more than helping.
				</p>
				<p class="text-lg text-gray-700">
					Our mission is to empower researchers by eliminating the friction between their ideas and
					their tools. We believe that technology should enhance human capability, not impede it. We
					aslo belive this tools should be free and be beneficaial to society and users without
					hidden costs and PRO subscriptions.
				</p>
			</div>

			<div class="mb-12 text-center">
				<h3 class="mb-6 text-2xl font-bold text-gray-800">Meet the Team</h3>
			</div>

			<div class="grid grid-cols-1 gap-10 md:grid-cols-3">
				{#each team as member (member.name)}
					<div class="flex h-full flex-col rounded-xl bg-gray-50 p-8 text-center shadow-md">
						<div class="mx-auto mb-6">
							<div class="h-24 w-24 overflow-hidden rounded-full border-4 border-emerald-500">
								<img
									src="./profile-pic.jpeg"
									alt="{member.name}'s Profile Picture"
									class="h-full w-full object-cover"
								/>
							</div>
						</div>
						<h4 class="mb-2 text-xl font-semibold text-gray-800">{member.name}</h4>
						<p class="mb-4 text-sm text-emerald-600">{member.role}</p>
						<p class="flex-grow text-gray-600">{member.bio}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>

<footer class="border-t border-gray-200 bg-white">
	<div class="container mx-auto px-6 py-12">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<div class="mb-6 flex items-center md:mb-0">
				<svg
					class="h-8 w-8 text-emerald-500"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
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
				<span class="ml-3 text-xl font-semibold text-gray-800">Erti</span>
			</div>

			<div class="flex items-center space-x-6">
				<p class="text-sm text-gray-500">
					© {new Date().getFullYear()} Erti. All rights reserved.
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
	/* Animations for the blob effect in hero section */
	@keyframes blob {
		0% {
			transform: translate(0px, 0px) scale(1);
		}
		33% {
			transform: translate(30px, -50px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
		100% {
			transform: translate(0px, 0px) scale(1);
		}
	}

	.animate-blob {
		animation: blob 7s infinite;
	}

	.animation-delay-2000 {
		animation-delay: 2s;
	}

	.animation-delay-4000 {
		animation-delay: 4s;
	}

	/* Focus styles for accessibility */
	a:focus,
	button:focus {
		outline: 2px solid rgba(16, 185, 129, 0.5);
		outline-offset: 2px;
	}

	/* Ensure the timeline nodes are properly centered on mobile */
	@media (max-width: 768px) {
		.md\:absolute {
			position: relative;
			margin: 1rem auto;
		}
	}

	@keyframes underline {
		0% {
			width: 0;
		}
		100% {
			width: 100%;
		}
	}

	.animate-underline {
		animation: underline 8s ease-in-out forwards;
	}
</style>
