<script lang="ts">
    /**
     * Whether the menu is currently open
     */
    export let isOpen: boolean = false;
    
    /**
     * Size classes for the SVG
     * @default "h-6 w-6"
     */
    export let size: string = "h-6 w-6";
    
    /**
     * Additional classes for the SVG
     */
    export let className: string = "";
</script>

<svg class="{size} {className}" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    {#if isOpen}
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