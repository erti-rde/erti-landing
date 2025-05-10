<script lang="ts">
	/**
	 * The size of the logo. This determines the CSS class applied to the SVG.
	 * @default "medium"
	 */
	export let size: 'small' | 'medium' | 'large' = 'medium';
	
	/**
	 * The color of the logo. This determines the CSS text color class.
	 * @default "emerald-500"
	 */
	export let color: string = 'emerald-500';
	
	// Map size prop to CSS classes for width and height
	const sizeClasses = {
		small: 'h-6 w-6',
		medium: 'h-8 w-8',
		large: 'h-10 w-10'
	};
</script>

<svg class="{sizeClasses[size]} text-{color}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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