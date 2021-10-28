import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import {
	Container,
	Typography,
	TextField,
	Paper,
	Grid,
	Alert,
	Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addStory } from '../../redux/story/actions/storyActions';

const CreateStory = ({ history }) => {
	const { message, loading } = useSelector((state) => state.storyState);
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [editorError, setEditorError] = useState('');

	const dispatch = useDispatch();

	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);
	};

	const saveToDB = async (data) => {
		const text = JSON.stringify(
			draftToHtml(convertToRaw(editorState.getCurrentContent()))
		);
		if (!editorState.getCurrentContent().hasText()) {
			setEditorError('Body field is required');
			return false;
		} else {
			setEditorError('');
			const storyData = { title: data.title, text: text };
			dispatch(addStory(storyData));
		}
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	console.log(editorState.getCurrentContent().hasText());
	return (
		<Container>
			<Typography variant="h4" align="center" sx={{ py: 3 }}>
				Create a Story!
			</Typography>
			<form onSubmit={handleSubmit(saveToDB)}>
				{errors?.title?.message && (
					<Alert severity="error" sx={{ mb: 1 }}>
						{errors?.title?.message}
					</Alert>
				)}
				{editorError.length > 0 && (
					<Alert severity="error" sx={{ mb: 1 }}>
						{editorError}
					</Alert>
				)}
				{message && (
					<Alert severity="success" sx={{ mb: 1 }}>
						{message}
					</Alert>
				)}
				<Grid container>
					<Grid item xs={12} sx={{ flexDirection: 'column' }}>
						<TextField
							id="standard-title"
							label="Title"
							variant="standard"
							sx={{ mb: 3, width: '60%' }}
							{...register('title', {
								required: {
									value: true,
									message: 'Title field is required',
								},
							})}
						/>
					</Grid>
					<Grid item xs={12}>
						<Paper elevation={3}>
							<Editor
								editorState={editorState}
								wrapperClassName="demo-wrapper"
								editorClassName="demo-editor"
								onEditorStateChange={onEditorStateChange}
								placeholder="Begin typing..."
							/>
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{ mt: 2, display: 'flex', justifyContent: 'right' }}
					>
						<Button variant="contained" type="submit">
							{loading ? 'Loading...' : 'Submit'}
						</Button>
					</Grid>
				</Grid>
				{/* <div style={{ padding: 4 }}>
					{
						<div
							dangerouslySetInnerHTML={{
								__html: draftToHtml(
									convertToRaw(editorState.getCurrentContent())
								),
							}}
						/>
					}
				</div> */}
			</form>
		</Container>
	);
};

export default CreateStory;
