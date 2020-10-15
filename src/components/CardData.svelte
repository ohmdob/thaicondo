
<script lang="ts">
	import DataTable from "./DataTable";
    import Card from "./Card";
    export let classes;
    //bg-blue-300 border w-full
    export let subheader;
    //*ตัวเลขประมาณการผ่อนชำระ 20 ปี
    export let contents;
    // [
    //     { salary: '20,000 - 25,000', firstYear: '6,900', thenYear: '9,700', maxLoan:  '1,500,000' }, 
    //     { salary: '30,000 - 35,000', firstYear: '9,200', thenYear: '13,000', maxLoan:  '2,000,000' }, 
    //     { salary: '40,000 - 45,000', firstYear: '11,500', thenYear: '16,200', maxLoan:  '2,500,000' }, 
    //     { salary: '50,000 - 55,000', firstYear: '13,800', thenYear: '19,400', maxLoan:  '3,000,000' }, 
    // ]
    export let columns;
    // [
    //     { label: "ฐานเงินเดือน", field: "salary", class: "w-32", editable: false, },
    //     { label: "วงเงินกู้", field: "maxLoan", class: "w-32", editable: false, },
    //     { label: "เฉลี่ยต่อเดือน", field: "thenYear", class: "w-32", editable: false, },
    // ]
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
