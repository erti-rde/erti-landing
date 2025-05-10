<script lang="ts">
	import { citationData } from '$lib/data/content';
	import LazyVideo from '$lib/components/atoms/LazyVideo.svelte';

	let currentFeature = 0;
	
	function selectFeature(index: number) {
		currentFeature = index;
	}
	
	function handleKeydown(e: KeyboardEvent, idx: number) {
		if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
			selectFeature((idx + 1) % citationData.length);
		} else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
			selectFeature((idx - 1 + citationData.length) % citationData.length);
		}
	}
</script>

<section class="mx-auto max-w-6xl px-4 py-12">
	<div class="grid gap-6 lg:grid-cols-2">
		<div class="flex flex-col space-y-6">
			<div class="text-left">
				<h2 class="text-3xl font-bold text-emerald-800">Intelligent Citations</h2>
				<p class="mt-4 text-gray-600">
					Simply select text and using cite icon automatically find the most relevant source
					material from your PDFs or press
					<kbd class="rounded border border-emerald-100 bg-emerald-50 px-2 py-0.5 font-mono text-sm text-emerald-600">@</kbd>
					if already know which source you want to cite to activate Erti's citation tool and add citations
					while typing.
				</p>
			</div>

			<div class="flex flex-col space-y-1.5" role="tablist" aria-label="Citation features">
				{#each citationData as feature, i}
					<button
						role="tab"
						aria-selected={currentFeature === i}
						aria-controls="citation-feature-panel"
						tabindex={currentFeature === i ? 0 : -1}
						id="citation-tab-{i}"
						class="relative flex items-start rounded-lg border border-gray-100 p-3 text-left transition-colors hover:border-emerald-100 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
						class:border-emerald-200={currentFeature === i}
						class:bg-emerald-50={currentFeature === i}
						on:click={() => selectFeature(i)}
						on:keydown={e => handleKeydown(e, i)}
					>
						<div class="flex-1">
							<h3 class="font-medium text-gray-900">
								{feature.title}
							</h3>
							<p class="mt-1 text-sm text-gray-600">
								{feature.description}
							</p>
						</div>
						{#if currentFeature === i}
							<div class="absolute right-3 top-1/2 -translate-y-1/2">
								<svg class="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
									/>
								</svg>
							</div>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<div class="relative flex items-center justify-center overflow-hidden rounded-xl">
			<div id="citation-feature-panel" role="tabpanel" aria-labelledby="citation-tab-{currentFeature}">
				{#each citationData as feature, i}
					{#if currentFeature === i}
						<LazyVideo
							src={feature.videoUrl}
							poster={feature.posterUrl}
							className="aspect-video h-auto w-full rounded-lg"
							controls={true}
							muted={true}
							loop={true}
							ariaLabel={feature.title}
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>
