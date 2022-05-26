/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {useBlockProps} from '@wordpress/block-editor';

import {InnerBlocks} from '@wordpress/editor';
import {getVideoId} from "./utils/getVideoId";
import {BackgroundVideo} from "./components/BackgroundVideo";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {JSX.Element} Element to render.
 */
export default function save({attributes}) {
	const blockProps = useBlockProps.save();
	const videoId = getVideoId(attributes?.videoUrl);

	return (
		<div {...blockProps}>
			{attributes?.videoUrl && (
				<BackgroundVideo videoId={videoId}/>
			)}
			<InnerBlocks.Content/>
		</div>
	);
}
