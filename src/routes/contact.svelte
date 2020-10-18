<svelte:head>
	<title>
		ติดต่อเรา | Thaicoondo
	</title>
</svelte:head>

<script lang="ts">
    import GoogleMap from '../components/GoogleMap.svelte';
    
        let mapConfig = {
            center: {
                lat: 13.6550013,
                lng: 100.6076149
            },
            zoom: 17
        }
        
        function mapRecentre ({ location }) {
            const { lat, lng } = location
            const center = { lat: lat(), lng: lng() }
        }
    
</script>
<div class="bg-white max-w-5xl mx-auto p-10">
    <h1>ติดต่อเรา</h1>

    <div class="flex p-6">
        <img alt="panuwat" class="w-32 h-32 rounded-full border-2 border-gray-700" src="https://files.thaicondo.in.th/panuwat_contact.jpg"/>
    </div>
    <div class="flex px-6">
        ผมโอม ยินดีให้คำปรึกษาครับ
    </div>
    <div class="flex px-6">
        facebook: <a href="https://www.facebook.com/thaicondo.in.th" target="_blank" class="px-1">thaicondo.in.th</a>
    </div>
    <div class="flex px-6">
        tel: <a href="tel:0997874156" class="px-1">0997874156</a>
    </div>
    <div id="map" class="pt-6">
        <div class="map-wrap">
            <GoogleMap on:recentre={e => mapRecentre(e.detail)} options={mapConfig} content={`<div id="content" style="">
                <div id="infoCustom"></div>
                <div id="bodyContent">ซ.แบริ่ง16 ถ.สุขุมวิท107
                    ต.สำโรงเหนือ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10270</div>
                </div>`} />
        </div>
    </div>
</div>