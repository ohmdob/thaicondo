
<script lang="ts">
	import CardData from "../../components/CardData.svelte";
</script>

<svelte:head>
	<title>
		ข่าวสารอสังหา | 
	</title>
</svelte:head>
<div class="bg-white max-w-5xl mx-auto p-10">
	<h1>ข่าวสารอสังหา</h1>


	<CardData 
		classes={`bg-blue-300 border w-full`} 
		subheader={`ตัวเลขประมาณการผ่อนชำระ 20 ปี`}
		columns={[
				{ label: "ฐานเงินเดือน", field: "salary", class: "w-32", editable: false, },
				{ label: "วงเงินกู้", field: "maxLoan", class: "w-32", editable: false, },
				{ label: "เฉลี่ยต่อเดือน", field: "thenYear", class: "w-32", editable: false, },
		]}
		contents={[
			{ salary: '20,000 - 25,000', firstYear: '6,900', thenYear: '9,700', maxLoan:  '1,500,000' }, 
			{ salary: '30,000 - 35,000', firstYear: '9,200', thenYear: '13,000', maxLoan:  '2,000,000' }, 
			{ salary: '40,000 - 45,000', firstYear: '11,500', thenYear: '16,200', maxLoan:  '2,500,000' }, 
			{ salary: '50,000 - 55,000', firstYear: '13,800', thenYear: '19,400', maxLoan:  '3,000,000' }, 
		]}
	/>
	
	<CardData 
		classes={`bg-orange-500 border w-full`} 
		subheader={`ภาษีที่ดินและสิ่งปลุกสร้าง ประเภทบ้านพักอาศัย (ชำระภายใน 31 ส.ค.)`}
		columns={[
			{ label: "มูลค่า(ราคาประเมิน)", field: "value", class: "w-64", editable: false, },
			{ label: "ภาษี", field: "tax", class: "w-32", editable: false, },
			{ label: "ลดหย่อน", field: "discount", class: "w-40", editable: false, },
		]}
		contents={[
			{ value: '0-50 ล้านบาท', tax: '0.02%', discount: '90%' }, 
			{ value: '> 50-75 ล้านบาท', tax: '0.03%', discount: '90%'  }, 
			{ value: '> 50-100 ล้านบาท', tax: '0.05%', discount: '90%'  }, 
			{ value: '> 100 ล้านบาทขึ้นไป', tax: '0.10%', discount: '90%'  }, 
		]}
	/>
</div>
