<script lang="ts">
    export let bordercolor: string
    export let text: string
</script>

<div class="flex">
    <div class="">
        <div class={`flex items-center justify-center items-stretch border-4 rounded-full w-12 h-12 text-center text-6xl text-gray-600 ${bordercolor}`}>       
            <div class="self-center flex-1 text-xs"><slot/></div> 
        </div>
        <div class={`flex-1 relative`}>       
            <div class="text-xs" style="text-align: center; position: relative;top: 10px; left: -25px; width: 100px; ">{text}</div> 
        </div>
    </div> 
</div>
