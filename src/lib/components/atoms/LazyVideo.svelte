<script lang="ts">
	import { onMount } from 'svelte';
	
	/**
	 * Video source URL
	 */
	export let src: string;
	
	/**
	 * Poster image URL to show before the video loads
	 */
	export let poster: string = '';
	
	/**
	 * Video controls attribute
	 */
	export let controls: boolean = true;
	
	/**
	 * Video muted attribute
	 */
	export let muted: boolean = false;
	
	/**
	 * Video loop attribute
	 */
	export let loop: boolean = false;
	
	/**
	 * Video autoplay attribute (only works when muted)
	 */
	export let autoplay: boolean = false;
	
	/**
	 * Classname to apply to the video element
	 */
	export let className: string = '';
	
	/**
	 * ARIA label for the video
	 */
	export let ariaLabel: string = '';
	
    let videoElement: HTMLVideoElement;
    let container: HTMLDivElement;
    let intersected = false;
    let isPlaying = false;

    function handlePlay() {
        isPlaying = true;
    }

    function handlePause() {
        isPlaying = false;
    }

    function handleEnded() {
        isPlaying = false;
    }
	
	// We use onMount to ensure we're in the browser environment
	onMount(() => {
		// Check if Intersection Observer is available
		if ('IntersectionObserver' in window) {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					// If the video is visible or about to be visible
					if (entry.isIntersecting) {
						intersected = true;
						// Once we've intersected once, we can disconnect the observer
						observer.disconnect();
					}
				});
			}, {
				// Start loading when the video is 200px away from viewport
				rootMargin: '200px'
			});
			
			observer.observe(container);
		} else {
			// Fallback for browsers without Intersection Observer support
			intersected = true;
		}
		
		return () => {
			// Cleanup
			if ('IntersectionObserver' in window) {
				// observer.disconnect();
			}
		};
	});

    // Forward events from the component
    function dispatch(e) {
        const event = new CustomEvent(e.type, {
            detail: e.detail,
            bubbles: true
        });
        container.dispatchEvent(event);
    }
</script>

<div bind:this={container} class="relative {className}">
    {#if intersected}
        <video
            {src}
            {poster}
            bind:this={videoElement}
            class={className}
            aria-label={ariaLabel}
            on:play={e => { handlePlay(); dispatch(e); }}
            on:pause={e => { handlePause(); dispatch(e); }}
            on:ended={e => { handleEnded(); dispatch(e); }}
            on:click
            {controls}
            {muted}
            {loop}
            autoplay={autoplay && muted}
            playsinline
        >
            <track kind="captions" />
            <slot />
        </video>
    {:else}
        <!-- Placeholder until the video is loaded -->
        <div 
            class="{className} bg-gray-100" 
            style="aspect-ratio: 16/9;"
            aria-hidden="true"
        >
            {#if poster}
                <img src={poster} alt="" class="w-full h-full object-cover" />
            {:else}
                <div class="w-full h-full flex items-center justify-center">
                    <div class="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
                </div>
            {/if}
        </div>
    {/if}
    
    <slot name="overlay" />
</div>

<style>
    /* Hide default play button on iOS Safari */
    video::-webkit-media-controls-overlay-play-button {
        display: none;
    }
</style>