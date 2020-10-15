<svelte:head>
	<title>
		Home | ให้ความรู้เกี่ยวกับอสังหาริมทรัพย์ แนะนำโปรโมชั่นคอนโด, ทำเล, การลงทุนต่างๆ
	</title>
</svelte:head>


<script lang="ts">
	import Carousel from '../components/Carousel.svelte';
	import CardData from "../components/CardData.svelte";
	const commons = [
		{ src: 'http://files.thaicondo.in.th/KNB14/common/01.jpg', alt: 'KNB_COLLAGE107_c01' },
		{ src: 'http://files.thaicondo.in.th/KNB14/common/02.jpg', alt: 'KNB_COLLAGE107_c02' },
		{ src: 'http://files.thaicondo.in.th/KNB14/common/03.jpg', alt: 'KNB_COLLAGE107_c03' },
		{ src: 'http://files.thaicondo.in.th/KNB14/common/04.jpg', alt: 'KNB_COLLAGE107_c04' },
		{ src: 'http://files.thaicondo.in.th/KNB14/common/05.jpg', alt: 'KNB_COLLAGE107_c05' },
		{ src: 'http://files.thaicondo.in.th/KNB14/common/06.jpg', alt: 'KNB_COLLAGE107_c06' },
		{ src: 'http://files.thaicondo.in.th/KNB14/common/07.jpg', alt: 'KNB_COLLAGE107_c07' },
		{ src: 'http://files.thaicondo.in.th/KNB14/common/08.jpg', alt: 'KNB_COLLAGE107_c08' },
		{ src: 'http://files.thaicondo.in.th/KNB14/common/09.jpg', alt: 'KNB_COLLAGE107_c09' },
		// { src: 'http://files.thaicondo.in.th/KNB14/common/10.jpg', alt: 'KNB_COLLAGE107_c10' },
		// { src: 'http://files.thaicondo.in.th/KNB14/common/11.jpg', alt: 'KNB_COLLAGE107_c11' },
	]
	const units = [
		// { src: 'http://files.thaicondo.in.th/KNB14/unit/01.jpg', alt: 'KNB_COLLAGE107_u01' },
		{ src: 'http://files.thaicondo.in.th/KNB14/unit/02.jpg', alt: 'KNB_COLLAGE107_u02' },
		{ src: 'http://files.thaicondo.in.th/KNB14/unit/03.jpg', alt: 'KNB_COLLAGE107_u03' },
		{ src: 'http://files.thaicondo.in.th/KNB14/unit/04.jpg', alt: 'KNB_COLLAGE107_u04' },
		{ src: 'http://files.thaicondo.in.th/KNB14/unit/05.jpg', alt: 'KNB_COLLAGE107_u05' },
	]
</script>


<h1 class="font-medium text-xl md:text-2xl md:mr-4 text-gray-700">ไนท์บริดจ์ คอลลาจ สุขุมวิท 107</h1>
<h1 class="font-medium text-xl md:text-2xl md:mr-4 text-gray-700">KNIGHTSBRIDGE COLLAGE - SUKHUMVIT107</h1>

<div class="py-4 text-gray-800 text-justify">

	<div>เชื่อมต่อการเดินทางสะดวกสบายสู่ใจกลางเมือง คอนโดสุขมวิท 107 พื้นที่ที่จะทำให้ทุกความฝันของคุณเป็นไปได้ ด้วยคอนเซ็ปต์การเชื่อมต่อทุกมิติของการอยู่อาศัย</div>
	<div>🏢คอนโด High Rise 28 ชั้น 1 อาคาร  เพียง 304 ยูนิต แบ่งเป็น Lobby 1 ชั้น ที่จอดรถถึงชั้น 7  มีชั้นพักอาศัยเริ่มที่ชั้น 8-25  และส่วนกลางชั้น 26-28</div>
	<div>🌄Take View แบบ  360 องศา  บนชั้นดาดฟ้าที่ออริจิ้นเขาใจดีมากๆ ให้ชั้นส่วนกลางโครงการนี้ มาแบบสวยเวอร์วัง ถึง 3  ชั้น</div>
	<div>ที่จอดรถ 42 % (ระบบ Automatic Parking ทั้งโครงการ) </div>
	<div>ฟิตเนสที่กว้างถึง  125  ตรม.</div>
	<div>ใกล้ BTS แบริ่ง หน้าปากซอยเป็นตลาด ร้านสะดวกซื้อ ธนาคาร รวมไปถึงโรงเรียนนานาชาติ ส่วนกลางซอยแบริ่งแหล่งของกินอีกมากมาย อาทิเช่น ตลาดมิ่งแบริ่ง, แบริ่งสแควร์</div>
	<div>ระบบ Home Automation ทุกห้อง สามารถควบคุมระบบไฟฟ้า แอร์ ทีวี จาก Application  ผ่านมือถือ รวมไปถึง ระบบผ้าม่านที่สามารถเปิดปิดอัตโนมัติทุกห้อง </div>
	<div>🔥🔥 เริ่มต้น  24 ตรม.  เพียง  2.39  ล้านบาท เท่านั้น!!</div>
</div>

<CardData 
	classes={`bg-red-500 border w-full`} 
	subheader={`📍ของแถม และโปรโมชั่น`}
	columns={[
		{ label: "ลำดับ", field: "no", class: "w-8 text-xs text-right", editable: false, iconAfter: true, },
		{ label: "รายการ", field: "subject", class: "w-32 text-xs text-left", editable: false, iconAfter: true, },
		{ label: "รายละเอียด", field: "detail", class: "w-32 text-xs text-left", editable: false, iconAfter: true, },
	]}
	contents={[
        { no: 1, subject: '👑 ส่วนลด 200,000 +++', detail: '' }, 
		{ no: 2, subject: '🌱ระบบ Home Automation', detail: '' }, 
		{ no: 3, subject: '🌱ฟรีผ่านม่าน และมาพร้อมกับระบบเปิดปิดแบบอัตโนมัติ', detail: '' }, 
		{ no: 4, subject: '🌱Built In ครบทั้งห้อง', detail: '' }, 
		{ no: 5, subject: '🌱แอร์', detail: '' }, 
		{ no: 6, subject: '🌱Digital Door Lock', detail: '' }, 
		{ no: 7, subject: 'ดูดวงแม่นๆ หรือ package เที่ยววังน้ำเขียว', detail: 'เมื่อลงทะเบียนกับ thaicondo.in.th' }, 
    ]}
/>

<div>
	<h1 class="py-2 font-medium text-xl md:text-2xl md:mr-4 text-gray-700">ภาพพื้นที่ส่วนกลาง</h1>
	<Carousel>
		{#each commons as { src, alt}, i}
			<div class="slide-content">
				<img {src} {alt}>
			</div>
		{/each}
	</Carousel>
</div>
<div>
	<h1 class="py-2 font-medium text-xl md:text-2xl md:mr-4 text-gray-700">ภาพห้องตัวอย่าง</h1>
	<Carousel>
		{#each units as { src, alt}, i}
			<div class="slide-content">
				<img {src} {alt}>
			</div>
		{/each}
	</Carousel>
</div>