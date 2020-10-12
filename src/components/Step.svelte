
<script lang="ts">
import Circle from './Circle.svelte';
import Line from './Line.svelte';
const activeColor: string = '#016EF4';

const rails = [
    { code: "E1", text: "ชิดลม", isLine: true, },
    { code: "E2", text: "เพลินจิต", isLine: true, },
    { code: "E3", text: "นานา", isLine: true, },
    { code: "E4", text: "อโศก", isLine: true, },
    { code: "E5", text: "พร้อมพงษ์", isLine: true, },
    { code: "E6", text: "ทองหล่อ", isLine: true, },
    { code: "E7", text: "เอกมัย", isLine: true, },
    { code: "E8", text: "พระโขนง", isLine: true, },
    { code: "E9", text: "อ่อนนุช", isLine: true, },
    { code: "E10", text: "บางจาก", isLine: true, },
    { code: "E11", text: "ปุณณวิถี", isLine: true, },
    { code: "E12", text: "อุดมสุข", isLine: true, },
    { code: "E13", text: "บางนา", isLine: true, },
    { code: "E14", text: "แบริ่ง", isLine: true, },
    { code: "E15", text: "สำโรง", isLine: true, },
];
</script>

<div class="flex flex-row items-center p-16">
	{#each rails as { code, text, isLine}}
        <Circle {text} bordercolor={'border-success-500'}>{code}</Circle>
        {#if isLine}
        <Line />
        {/if}
	{/each}
</div>