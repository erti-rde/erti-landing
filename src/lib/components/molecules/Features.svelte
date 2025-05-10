<!-- Features.svelte -->
<script lang="ts">
	import { features } from '$lib/data/content';

	const finished = features.filter((f) => f.videoUrl && f.title !== 'Source Metadata Editor');

	let selectedTab = 0;
	let tabRefs: (HTMLButtonElement | null)[] = [];
	let isPlaying = false;

	function selectTab(idx: number) {
		selectedTab = idx;
		tabRefs[idx]?.focus();
	}

	function handleKeydown(e: KeyboardEvent, idx: number) {
		const total = finished.length;
		if (e.key === 'ArrowRight') {
			selectTab((idx + 1) % total);
		} else if (e.key === 'ArrowLeft') {
			selectTab((idx - 1 + total) % total);
		}
	}

	function handlePlay() {
		isPlaying = true;
	}

	function handlePause() {
		isPlaying = false;
	}

	function handleEnded() {
		isPlaying = false;
	}
</script>

<section id="features" class="bg-white py-12 sm:py-16 lg:py-24">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mb-8 text-center sm:mb-12">
			<h2 class="mb-4 text-3xl font-bold text-emerald-800 md:text-4xl">
				Familiar and Powerful Features
			</h2>
			<p class="mx-auto max-w-2xl text-gray-600">
				Erti combines the familiar with the revolutionary to create a writing tool that adapts to
				your research workflow.
			</p>
		</div>

		<div class="mx-auto max-w-[calc(100vw-2rem)] sm:max-w-3xl lg:max-w-5xl">
			<div class="rounded-xl bg-white p-4 shadow-md sm:rounded-2xl sm:p-6">
				<div
					role="tablist"
					aria-label="Feature tabs"
					class="mb-4 grid grid-cols-1 gap-2 rounded-lg bg-gray-100 p-px sm:mb-6 sm:gap-px md:grid-cols-3"
				>
					{#each finished as feature, i}
						<button
							role="tab"
							aria-selected={selectedTab === i}
							tabindex={selectedTab === i ? 0 : -1}
							class="flex min-h-[4.5rem] flex-col items-start bg-white p-3 text-left transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none focus:ring-inset sm:p-4 md:first:rounded-l-lg md:first:rounded-tr-none md:last:rounded-r-lg md:last:rounded-bl-none
								{selectedTab === i
								? 'border-l-4 border-emerald-600 bg-white text-emerald-800 md:border-b-2 md:border-l-0'
								: 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'}"
							on:click={() => selectTab(i)}
							on:keydown={(e) => handleKeydown(e, i)}
							bind:this={tabRefs[i]}
						>
							<span class="mb-1 line-clamp-1 font-semibold">{feature.title}</span>
							<span class="line-clamp-2 text-xs leading-tight text-gray-600"
								>{feature.description}</span
							>
						</button>
					{/each}
				</div>

				<!-- Tab Panels -->
				<div class="rounded-lg bg-gray-50 sm:rounded-xl">
					{#if selectedTab < finished.length}
						<div class="w-full">
							<div class="group relative">
								<video
									src={finished[selectedTab].videoUrl}
									poster={finished[selectedTab].posterUrl}
									controls
									class="aspect-video w-full rounded-lg bg-black shadow-md transition-transform group-hover:scale-[1.01]"
									aria-label={finished[selectedTab].title}
									on:play={handlePlay}
									on:pause={handlePause}
									on:ended={handleEnded}
								>
									<track kind="captions" />
								</video>
								{#if !isPlaying}
									<button
										class="absolute inset-0 flex items-center justify-center rounded-lg bg-black/20 transition-all hover:bg-black/30"
										on:click={(e) => {
											const target = e.target as HTMLElement;
											const container = target.closest('.relative');
											const video = container?.querySelector('video');
											if (video instanceof HTMLVideoElement) {
												video.play();
											}
										}}
										aria-label="Play video"
									>
										<div
											class="flex h-20 w-20 transform items-center justify-center rounded-full bg-white/95 shadow-md transition-all duration-200 hover:scale-105 hover:bg-white"
										>
											<svg
												class="h-10 w-10 translate-x-[2px] text-emerald-600"
												viewBox="0 0 32 32"
												fill="currentColor"
											>
												<path d="M11.5 8.5v15l12-7.5z" />
											</svg>
										</div>
									</button>
								{/if}
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	video::-webkit-media-controls-overlay-play-button {
		display: none;
	}
</style>
