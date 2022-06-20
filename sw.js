let CACHE_NAME = 'Hiromi_pery-v1';
self.addEventListener('fetch', function(e) { })
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll([
        'index.html'
      ])
    })
  )
})
