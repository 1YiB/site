<script lang="ts">

	import Header from '$lib/components/Header.svelte';
	import Pallete from '$lib/components/Pallete.svelte';
	import Footer from '$lib/components/Footer.svelte';

    import "$style/styles.scss"


</script>

<Header />

<slot />

<Footer/>
