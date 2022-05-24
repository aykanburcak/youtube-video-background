import {__} from '@wordpress/i18n';
import {useState} from '@wordpress/element';

export function EmbedForm(props) {
	const {onEmbed} = props;
	const [videoUrl, setVideoUrl] = useState('');

	function onSubmit(e) {
		e.preventDefault();
		console.log(videoUrl);
		onEmbed(videoUrl);
	}

	return (
		<form className={'embed-form'} onSubmit={onSubmit}>
			<div className={'embed-form__title'}>
				{__('YouTube URL')}
			</div>
			<div className={'embed-form__description'}>
				{__('Paste the link of YouTube video that you want to show as a background.')}
			</div>
			<input
				type="text"
				className={'embed-form__input'}
				onChange={e => setVideoUrl(e.target.value)}
				value={videoUrl}/>
			<button
				className={'embed-form__button'}>
				{__('Save')}
			</button>
		</form>
	)
}
