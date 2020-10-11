<script lang="ts">
	export let segment: string;
	export let active: boolean = false;
</script>

<style>
	.selected {
		position: relative;
		display: inline-block;
	}
	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 0.1em);
		height: 2px;
		background-color: #dd6b20;
		display: block;
		bottom: -1px;
	}
	.active{
        display: block;
    }    
</style>

<nav class="flex justify-between flex-wrap bg-gray-900 text-white p-2 mb-5">

	<div class="flex items-center ">
		<img alt="logo" class="h-20 p-2" 
		src="tcd.png" /> ThaiCondo.in.th
	</div>
  

	<div class="flex">
		<ul class={`${active? '' : 'hidden'} md:flex w-full items-center `}>
			<li class="pr-5"><a class='block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-orange-600 mr-4 {segment === undefined ? "selected" : ""}' href='.'>Home</a></li>
			<li class="pr-5"><a class='block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-orange-600 mr-4 {segment === "about" ? "selected" : ""}' href='about'>About</a></li>
			<li class="pr-5"><a rel=prefetch class='block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-orange-600 mr-4 {segment === "blog" ? "selected" : ""}' href='blog'>Blogs</a></li>
			<li><a class='block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-orange-600 mr-4 {segment === "bakery" ? "selected" : ""}' href='bakery'>Bakery</a></li>
		</ul>
		<div class="flex">
			<button on:click={() => active = !active } class="md:hidden h-12 flex items-center px-3 mt-2 border rounded text-black-200 border-black-400 hover:text-orange-600 hover:border-orange-400">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>
	</div>


	<!-- <div class="flex w-full border-t-4 border-teal-500 rounded-b"></div> -->
  
  </nav>