
<script>

  import { onMount, createEventDispatcher } from 'svelte'
  import { mapsLoaded, mapsLoading } from './stores.ts'

  const dispatch = createEventDispatcher()

  $: $mapsLoaded && dispatch('ready')

  onMount(() => {
    window.cbReady = () => {
      mapsLoaded.set(true)
      delete window['cbReady']
    }

    if ($mapsLoaded) {
      dispatch('ready')
    }

    if (!$mapsLoading) {
      const url = '//maps.googleapis.com/maps/api/js?key=AIzaSyAzxGl6OGAITaqlh86eL-fwyxjrwZbQ9ys&callback=cbReady'

        mapsLoading.set(true)

        const tag = document.createElement('script')
        tag.src = url
        tag.async = true
        tag.defer = true
        tag.onload = cbReady
        document.body.appendChild(tag)
    }
  })
</script>