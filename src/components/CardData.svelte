
<script lang="ts">
	import DataTable from "./DataTable";
    import Card from "./Card";
    export let classes;
    export let subheader;
    export let contents;
    export let columns;
</script>

<div class="w-full">
    <div class="flex p-1 text-center justify-center">
        <Card.Card class={classes}>
            <div slot="title">
                <Card.Title
                    title="Thaicondo"
                    subheader={subheader}
                    subheaderClass="text-sm"
                    avatar="/tcd.png"
                />
            </div>
            <div slot="text" class="text-gray-700 body-2">
                <DataTable
                    classes="bg-white  w-full"
                    pagination={false}
                    data={contents}
                    columns={columns}
                />
            </div>
            <div slot="actions">
                <div class="p-2">

                </div>
            </div>
        </Card.Card>
    </div>
</div>
