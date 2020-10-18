<svelte:head>
	<title>
		โปรโมชั่น | {tcd_post?.title}
	</title>
	<meta name="keywords" content={tcd_post?.keywords} />
</svelte:head>
<script context="module">
	import { tcd_postQuery } from "../../schema/tcd_post";
  	import { client } from "../client";
	export async function preload({ params, query }) {
		const { data } = await client.query({query: tcd_postQuery, variables: {title: decodeURIComponent(params.title).replace(/-/g, ' ')} })
		if(data.tcd_post.length > 0){
			return { tcd_post: { ...data.tcd_post[0] } };
		}
  	}
</script>
<script lang="ts">
	import Carousel from '../../components/Carousel.svelte';
	import CardData from "../../components/CardData.svelte";
	import GoogleMap from '../../components/GoogleMap.svelte';
	export let tcd_post
</script>
<div class="bg-white max-w-5xl mx-auto p-10">
	{#if !tcd_post}
	<h1 class="font-medium text-xl md:text-2xl md:mr-4 text-gray-700">404 ไม่พบข้อมูล</h1>
	{/if}
	
	{#if tcd_post?.project}
	<h1 class="font-medium text-xl md:text-2xl md:mr-4 text-gray-700">{tcd_post?.project}</h1>
	{/if}
	{#if tcd_post?.project_en}
	<h1 class="font-medium text-xl md:text-2xl md:mr-4 text-gray-700">{tcd_post?.project_en}</h1>
	{/if}
	{#if tcd_post}
	{@html tcd_post.md}
	{/if}
	{#if tcd_post?.tcd_post_card}
	<CardData {...tcd_post.tcd_post_card} />
	{/if}
	{#if tcd_post?.commons}
	<div>
		<h1 class="py-2 font-medium text-xl md:text-2xl md:mr-4 text-gray-700">ภาพพื้นที่ส่วนกลาง</h1>
		<Carousel>
			{#each tcd_post.commons as { src, alt}, i}
				<div class="slide-content">
					<img {src} {alt}>
				</div>
			{/each}
		</Carousel>
	</div>
	{/if}
	{#if tcd_post?.units}
	<div>
		<h1 class="py-2 font-medium text-xl md:text-2xl md:mr-4 text-gray-700">ภาพห้องตัวอย่าง</h1>
		<Carousel>
			{#each tcd_post.units as { src, alt}, i}
				<div class="slide-content">
					<img {src} {alt}>
				</div>
			{/each}
		</Carousel>
	</div>
	{/if}
	{#if tcd_post?.map_title && tcd_post?.map_lat && tcd_post?.map_lng && tcd_post?.map_zoom}
	<div id="map" class="pt-6">
		<div class="map-wrap">
			<GoogleMap options={{ 
				center: {
					lat: tcd_post.map_lat,
					lng: tcd_post.map_lng 
				},
				zoom: tcd_post.map_zoom
			}} content={tcd_post.map_title} />
		</div>
	</div>
	{/if}	
</div>
