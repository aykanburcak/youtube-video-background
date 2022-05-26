const initYoutubeVideo = (videoId) => {
	if ( ! window.YT ) {
		const tag = document.createElement( 'script' );
		tag.src = 'https://www.youtube.com/iframe_api';
		const firstScriptTag = document.getElementsByTagName( 'script' )[ 0 ];
		firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );
	}

	window.onYouTubeIframeAPIReady = () => {
		let player = new window.YT.Player( videoId, {
			videoId: videoId,
			controls: 0,
			showinfo: 0,
			modestbranding: 0,
			iv_load_policy: 3,
			loop: 1,
			playlist: videoId,
			events: {
				onReady: ( event ) => {
					event.target.loadPlaylist( [ videoId ] );
					event.target.setLoop( true );
					event.target.mute();
					event.target.playVideo();
				},
			},
		} );
	};
}

(function() {
	const videos = document.querySelectorAll('.background-video');
	videos.forEach(video => initYoutubeVideo(video.dataset.videoId))
})();
