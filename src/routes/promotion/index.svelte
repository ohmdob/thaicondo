<svelte:head>
	<title>
		รวมโปรโมชั่น | คอนโดสวย ราคาพิเศษ ของแถมมากมาย กับ Thaicondo
	</title>
	<!-- <meta name="keywords" content={tcd_post?.keywords} /> -->
</svelte:head>
<script context="module">
	import { tcd_postAllQuery } from "../../schema/tcd_post";
  	import { client } from "../client";
	export async function preload({ params, query }) {
		const { data } = await client.query({query: tcd_postAllQuery})
		if(data.tcd_post.length > 0){
			return { tcd_post: [ ...data.tcd_post ] };
		}
  	}
</script>
<script lang="ts">
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { link } from 'svelte-awesome/icons';
	import Carousel from '../../components/Carousel.svelte';
    import Card from "../../components/Card";
	export let tcd_post
</script>
<div>
{#each tcd_post as { title, project, units, commons, tcd_tag_post_ref }, i}
<div class="flex max-w-5xl mx-auto bg-gray-800">
    <div class="w-full md:w-6/12">
        <Card.Card class={'w-full bg-white'}>
            <div class="flex justify-between p-2 bg-gray-900 text-white">{title}<a href={`/promotion/${title.replace(/ /g, '-')}`}><Icon class="bg-gray-500 rounded-full p-1 w-8 h-8" data={link}/></a></div>
            <div class="flex flex-row">
                <div class="w-7/12 bg-white">
                <Carousel>
                    {#each commons as { src, alt}, i}
                        <div class="bg-cover bg-center h-64" style={`background-image: url(${src})`}></div>
                    {/each}
                    {#each units as { src, alt}, i}
                        <div class="bg-cover bg-center h-64" style={`background-image: url(${src})`}></div>
                    {/each}
                </Carousel></div>
                <div class="w-5/12 bg-white">
                    <div class="flex flex-col p-2">
                        <div class="text-gray-700 m-2">ทำเล: แบริ่ง, สมุทรปราการ</div>
                        <div class="text-gray-700 m-2">ราคาเริ่มต้น: 2.39 ล้านบาท</div>
                        <div class="text-gray-700 m-2">พื้นที่: 23-25, 27.3-29.5, 34.8 ตารางเมตร</div>
                        <div class="flex justify-centerd">
                            {#each tcd_tag_post_ref as { tag_data_ref }, i}
                                <div class={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white ${tag_data_ref.color}`}>
                                    #{tag_data_ref.tagname}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </Card.Card>
    </div>
</div>
{/each}
</div>