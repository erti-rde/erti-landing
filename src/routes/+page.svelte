<script lang="ts">
	import Header from '$lib/components/molecules/Header.svelte';
	import Hero from '$lib/components/molecules/Hero.svelte';
	import Features from '$lib/components/molecules/Features.svelte';
	import CitationFeatures from '$lib/components/molecules/CitationFeatures.svelte';
	import Roadmap from '$lib/components/molecules/Roadmap.svelte';
	import About from '$lib/components/molecules/About.svelte';
	import Footer from '$lib/components/molecules/Footer.svelte';
	import InProgressFeatures from '$lib/components/molecules/InProgressFeatures.svelte';
</script>

<svelte:head>
	<title>Erti - Research Made Effortless</title>
	<meta
		name="description"
		content="Erti is a powerful text editor designed for researchers, featuring PDF analysis, intelligent citations, and a seamless writing experience."
	/>
	<meta property="og:title" content="Erti - Research Made Effortless" />
	<meta
		property="og:description"
		content="Erti is a powerful text editor designed for researchers, featuring PDF analysis, intelligent citations, and a seamless writing experience."
	/>
</svelte:head>

<Header />

<main>
	<Hero />
	<Features />
	<CitationFeatures />
	<InProgressFeatures />
  <Roadmap />
	<About />
</main>

<Footer />
