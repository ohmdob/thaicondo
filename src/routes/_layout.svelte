<script lang="ts">
	  import { onMount } from "svelte";
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment: string;
	import GA from "./GA.svelte";
	import { stores } from "@sapper/app"
	const id: string = 'UA-37622338-8';
</script>

<GA {stores} {id} />
<Tailwindcss/>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />