
// let static_asset_url   = [
//        '/',
//      ];


self.addEventListener('install', function(e) {
 // e.waitUntil(
 //   caches.open('basic').then(function(cache) {
   	
 //     return cache.addAll(static_asset_url);
 //   })
 // );
});


self.addEventListener('fetch',function(event){

	event.waitUntil(
		fetch(event.request)
			.then(function(response){
				return caches
							.open('reddit_data')
							.then(function(cache){

								

								if(cache){

									if(!/bundle.js/.test(event.request.url)){
										cache.delete(event.request.url);
										cache.put(event.request.url, response.clone() ); 

									}

								}
								return response;
							})

			})
	);
	


	event.respondWith(
		caches.match(event.request)
			.then(function(response){
				return response || fetch(event.request);

			})
	);		
		


})