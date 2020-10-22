
<script lang="ts">
   import Icon from 'svelte-awesome/components/Icon.svelte';
   import { tag } from 'svelte-awesome/icons';
   export let tagname;
   export let href;
</script> 
<div class="flex max-w-5xl mx-auto pb-4 bg-gray-800">
    <a href={href} class="relative overflow-hidden text-xl flex items-center rounded-full px-4 py-1 border-gray-900 border-solid hover:bg-gray-900 bg-gray-500 hover:text-white">
        <Icon class="rounded-full p-1 w-8 h-8" data={tag}/>{tagname}
    </a>
</div>