export const getVideoId = (url) => {
	let videoId = null;

	const regex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/; // eslint-disable-line
	const match = url.match( regex );
	videoId = ( match && match[ 2 ].length === 11 ) ? match[ 2 ] : null;

	return videoId;
}
