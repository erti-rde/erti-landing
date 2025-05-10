<script lang="ts">
	import { features } from '$lib/data/content';

	const inProgress = features.filter(f => !f.videoUrl || f.title === 'Source Metadata Editor');
	
	// Track playing state for each video
	let playingStates: Record<number, boolean> = {};

	function handlePlay(index: number) {
		playingStates[index] = true;
	}

	function handlePause(index: number) {
		playingStates[index] = false;
	}

	function handleEnded(index: number) {
		playingStates[index] = false;
	}
</script>

<section class="bg-white py-12 sm:py-16 lg:py-24">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mb-8 text-center sm:mb-12">
			<h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
				Coming Soon
			</h2>
			<p class="mx-auto max-w-2xl text-gray-600">
				We're actively working on new capabilities to make your research workflow even better.
			</p>
		</div>

		<div class="mx-auto max-w-3xl">
			<div class="space-y-6 sm:space-y-8">
				{#each inProgress as feature, i}
					<div class="overflow-hidden rounded-lg bg-amber-50 p-4 sm:p-6 transition-all hover:shadow-md">
						<h3 class="mb-2 font-semibold text-gray-800">{feature.title}</h3>
						<p class="text-gray-600 mb-4">{feature.description}</p>
						
						{#if feature.videoUrl}
							<div class="group relative mt-4">
								<video
									src={feature.videoUrl}
									poster={feature.posterUrl}
									controls
									class="aspect-video w-full rounded-lg bg-black shadow-md transition-transform group-hover:scale-[1.01]"
									aria-label={feature.title}
									on:play={() => handlePlay(i)}
									on:pause={() => handlePause(i)}
									on:ended={() => handleEnded(i)}
								>
									<track kind="captions" />
								</video>
								{#if !playingStates[i]}
									<button
										class="absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 transition-all group-hover:bg-black/40"
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
										<div class="flex h-20 w-20 transform items-center justify-center rounded-full bg-white/95 shadow-lg transition-all duration-200 group-hover:scale-105 group-hover:bg-white">
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
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	video::-webkit-media-controls-overlay-play-button {
		display: none;
	}
</style>
