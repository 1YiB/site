<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { siteData } from '$lib/config';
</script>

<svelte:head>
	<title>{siteData.title}</title>

	<meta content={siteData.desc} name="description" />

	<meta content={siteData.url} property="og:url" />
	<meta content={siteData.name} property="og:siteData_name" />
	<meta content={siteData.title} property="og:title" />
	<meta content={siteData.desc} property="og:description" />

	<!-- TODO: add site image -->
</svelte:head>

<main>
	<p>👋 Hello I am, 1YiB, and I'm a developer.photographer.white hat.</p>
	<a href="/contact">Contact Me -></a>
</main>
