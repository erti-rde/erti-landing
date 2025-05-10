<script lang="ts">
    import { roadmapPhases } from '$lib/data/content';
    import { onMount } from 'svelte';
    
    let currentYear = new Date().getFullYear();
    let animateProgress = false;
    
    // Helper function to generate a color based on progress
    function getProgressColor(status: string, progress: number): string {
        if (status === 'completed') return 'bg-emerald-500';
        if (status === 'in-progress') return 'bg-amber-500';
        return 'bg-gray-300';
    }
    
    // Helper function to format dates in a user-friendly way
    function formatDate(dateString: string): string {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
    
    // Wait for component to mount before animating progress bars
    onMount(() => {
        // Use setTimeout to ensure the DOM is fully rendered
        setTimeout(() => {
            animateProgress = true;
        }, 300);
    });
</script>

<section id="roadmap" class="bg-gray-50 py-16 sm:py-24">
    <div class="container mx-auto px-6">
        <div class="mb-12 text-center sm:mb-16">
            <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Development Roadmap</h2>
            <p class="mx-auto max-w-2xl text-gray-600">
                Our journey to build the perfect research companion is well underway. Here's what we've
                accomplished and what's coming next.
            </p>
        </div>

        <div class="mx-auto max-w-5xl">
            <div class="space-y-12">
                {#each roadmapPhases as phase, phaseIndex}
                    <div class="rounded-xl bg-white p-6 shadow-md sm:p-8">
                        <div class="mb-4 sm:mb-6">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <h3 class="text-xl font-bold text-gray-800 sm:text-2xl">{phase.name}</h3>
                                <span class="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">{phase.timeframe}</span>
                            </div>
                            <p class="mt-1 text-gray-600">{phase.description}</p>
                        </div>
                        
                        <div class="space-y-6">
                            {#each phase.items as item}
                                <div class="rounded-lg border border-gray-100 bg-gray-50 p-4 transition-all hover:border-gray-200 hover:shadow-sm sm:p-6">
                                    <div class="flex flex-wrap items-start justify-between gap-2">
                                        <div class="flex-1">
                                            <div class="flex flex-wrap items-center gap-2">
                                                <h4 class="font-semibold text-gray-800">{item.title}</h4>
                                                <span class="rounded-md px-2 py-0.5 text-xs font-medium" 
                                                      class:bg-emerald-100={item.status === 'completed'} 
                                                      class:text-emerald-700={item.status === 'completed'}
                                                      class:bg-amber-100={item.status === 'in-progress'}
                                                      class:text-amber-700={item.status === 'in-progress'}
                                                      class:bg-gray-100={item.status === 'planned'}
                                                      class:text-gray-700={item.status === 'planned'}>
                                                    {item.status === 'completed' ? 'Completed' : item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                                                </span>
                                                <span class="text-xs text-gray-500">{item.quarter}</span>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-600">{item.description}</p>
                                            
                                            {#if item.status === 'completed' && item.completedAt}
                                                <p class="mt-2 text-xs text-gray-500">Completed: {formatDate(item.completedAt)}</p>
                                            {:else if item.estimatedCompletion}
                                                <p class="mt-2 text-xs text-gray-500">Target: {formatDate(item.estimatedCompletion)}</p>
                                            {/if}
                                        </div>
                                        
                                        <div class="text-right">
                                            <span class="font-semibold text-sm" 
                                                  class:text-emerald-600={item.status === 'completed'}
                                                  class:text-amber-600={item.status === 'in-progress'}
                                                  class:text-gray-500={item.status === 'planned'}>
                                                {item.progress}%
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div class="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                                        <div class="h-full transition-all duration-1000 ease-out {getProgressColor(item.status, item.progress)}"
                                             style="width: {animateProgress ? item.progress : 0}%"></div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    /* Additional styles can be added here if needed */
</style>