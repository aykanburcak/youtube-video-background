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
import {useBlockProps, BlockControls} from '@wordpress/block-editor';
import {InnerBlocks} from '@wordpress/editor';
import {ToolbarGroup, ToolbarButton} from '@wordpress/components';
import {useState} from '@wordpress/element';
import {EmbedForm} from "./components/EmbedForm";
import {edit} from '@wordpress/icons';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {BackgroundVideo} from "./components/BackgroundVideo";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {JSX.Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps();
	const [editMode, setEditMode] = useState(false);

	const onEmbed = (videoUrl) => {
		setAttributes({videoUrl})
		setEditMode(false)
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{(!editMode && attributes?.videoUrl) && (
						<ToolbarButton
							icon={edit}
							label="Edit"
							onClick={() => setEditMode(true)}
						/>
					)}
				</ToolbarGroup>
			</BlockControls>
			<div {...blockProps}>
				{(editMode || !attributes?.videoUrl) && (
					<>
						<EmbedForm onEmbed={onEmbed} value={attributes?.videoUrl}/>
					</>
				)}
				{attributes.videoUrl && (
					<BackgroundVideo videoId={attributes?.videoUrl}/>
				)}
				<InnerBlocks/>
			</div>
		</>
	);
}
