<script lang="ts">
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment: string;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Tailwindcss/>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer class="flex bg-gray-900 text-white py-2 px-3 mt-5 justify-center items-center z-20">
<div class="flex text-sm justify-center items-center">
  POWERED BY
  <img
	src="/tcd.png"
	alt="logo"
	class="object-contain m-2"
	style="width: 40px"
  />
  © 2020 ThaiCondo.in.th
</div>
</footer>