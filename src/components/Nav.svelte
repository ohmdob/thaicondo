<script lang="ts">
	export let segment: string;
	export let active: boolean = false;
	import Icon from 'svelte-awesome/components/Icon.svelte';
    import { facebook, phone } from 'svelte-awesome/icons';
</script>

<nav class="flex justify-between flex-wrap bg-gray-900 text-white p-2 mb-5">

	<div class="flex items-center">
		<div class="flex flex-col items-center">
			<a href="/"><img alt="logo" class="h-16" 
			src="tcd.png" />Thaicondo</a>
		</div>
		<div class="flex flex-col px-3">
			<div class="p-1"><Icon class="bg-blue-500 p-1 w-8 h-8" data={facebook}/><a href="https://www.facebook.com/thaicondo.in.th" target="_blank" class="p-1">thaicondo.in.th</a></div>
			<div class="p-1"><Icon class="bg-orange-500 p-1 w-8 h-8" data={phone}/><a href="tel:0997874156" class="p-1">0997874156</a></div>
		</div>
	</div>
	<div class="fixed right-0 mr-4 z-20">
		<button on:click={() => active = !active } class="md:hidden h-12 flex bg-gray-800 items-center px-3 mt-2 border rounded text-black-200 border-black-400 hover:text-orange-600 hover:border-orange-400">
			<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
		</button>
	</div>
	<div class="flex">
		<ul class={`${active? 'fixed bg-gray-800 z-10 left-0' : 'hidden'} md:flex w-full items-center `}>
			<li class="m-3"><a on:click={() => active = false } class='inline-block mt-4 lg:mt-0 text-black-200 hover:text-orange-600 mr-4 {segment === undefined ? "selected" : ""}' href='.'>Home</a></li>
			<li class="m-3"><a on:click={() => active = false } class='inline-block mt-4 lg:mt-0 text-black-200 hover:text-orange-600 mr-4 {segment === "promotion" ? "selected" : ""}' href='promotion'>โปรโมชั่น</a></li>
			<li class="m-3"><a on:click={() => active = false } class='inline-block mt-4 lg:mt-0 text-black-200 hover:text-orange-600 mr-4 {segment === "bts_mrt" ? "selected" : ""}' href='bts_mrt'>คอนโดใกล้รถไฟฟ้า</a></li>
			<li class="m-3"><a on:click={() => active = false } class='inline-block mt-4 lg:mt-0 text-black-200 hover:text-orange-600 mr-4 {segment === "news" ? "selected" : ""}' href='news'>ข่าวสารอสังหา</a></li>
			<li class="m-3"><a on:click={() => active = false } class='inline-block mt-4 lg:mt-0 text-black-200 hover:text-orange-600 mr-4 {segment === "contact" ? "selected" : ""}' href='contact'>ติดต่อเรา</a></li>
		</ul>

	</div>

  </nav>