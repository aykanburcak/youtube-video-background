export function BackgroundVideo({videoId}) {

	return (
		<div className={'background-video'} data-video-id={videoId}>
			<div className={'background-video__iframe-container'}>
				<iframe frameBorder="0" allowFullScreen="1"
								id={videoId}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								title="YouTube video player" width="640" height="360"
								src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`}
								className="background-video__iframe"/>
			</div>
		</div>
	)
}
