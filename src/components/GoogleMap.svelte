<GoogleSdk on:ready={initialise} />
<div class="map" bind:this={mapElement}></div>

<style>
  .map {
    height: 100%;
    width: 100%;
  }
</style>

<script>
  import GoogleSdk from './map.svelte'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  let mapElement
  let map
  
  export let center = null
  export let options = {}
  export let content = '';
  export function getDomBounds () {
    return mapElement.getBoundingClientRect()
  }
  export function getDefaultView () {
    return mapElement.ownerDocument.defaultView
  }
  export function setHeight (height) {
    mapElement.style.height = height
  }
  export function setMaxHeight (height) {
    mapElement.style.maxHeight = height
  }
  export function setCentre (location) {
    map.setCenter(location)
  }
  export function getInternalMap() {
    return map
  }
  function initialise () {
    //console.log(options)
        var infowindow = new google.maps.InfoWindow({
          content,
          maxWidth: 300
        });

    setTimeout(() => {
      const google = window['google']
      map = new google.maps.Map(mapElement, options)
      let marker = new google.maps.Marker({position: options.center, map: map});
      infowindow.open(map, marker);
      google.maps.event.addListener(map, 'dragend', () => {
        const location = map.getCenter()
        center = location
        dispatch('recentre', { location })
      })
      dispatch('ready')
    }, 1)
  }
</script>