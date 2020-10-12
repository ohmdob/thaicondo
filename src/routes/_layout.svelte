<script lang="ts">
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment: string;
</script>

<Tailwindcss/>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />