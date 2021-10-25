import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Comment = () => {
	return (
		<div>
			<List
				sx={{
					width: '100%',
					maxWidth: 600,
					bgcolor: 'background.paper',
				}}
			>
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
					</ListItemAvatar>
					<ListItemText
						primary="Brunch this weekend?"
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Pariatur dolores tempore aliquid perspiciatis
									sapiente sequi aperiam ex provident neque
									repellendus!
								</Typography>
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider variant="inset" component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
					</ListItemAvatar>
					<ListItemText
						primary="Brunch this weekend?"
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Pariatur dolores tempore aliquid perspiciatis
									sapiente sequi aperiam ex provident neque
									repellendus!
								</Typography>
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider variant="inset" component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
					</ListItemAvatar>
					<ListItemText
						primary="Brunch this weekend?"
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Pariatur dolores tempore aliquid perspiciatis
									sapiente sequi aperiam ex provident neque
									repellendus!
								</Typography>
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider variant="inset" component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
					</ListItemAvatar>
					<ListItemText
						primary="Brunch this weekend?"
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Pariatur dolores tempore aliquid perspiciatis
									sapiente sequi aperiam ex provident neque
									repellendus!
								</Typography>
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider variant="inset" component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
					</ListItemAvatar>
					<ListItemText
						primary="Brunch this weekend?"
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet repellendus temporibus neque aperiam molestias ea illum, aspernatur vel dolor praesentium ex facere sunt itaque saepe expedita! Iure fugit explicabo repellat, nam delectus asperiores quidem nobis. Similique accusantium nulla voluptas sunt temporibus corporis quidem repudiandae ipsa veritatis molestiae? Magnam, enim doloremque! Debitis, magnam esse, dicta ut, repellendus obcaecati numquam ipsa ipsum repudiandae tempore ipsam sit alias non praesentium est nesciunt ex veritatis iusto corrupti ad tenetur placeat. Alias in, voluptatem impedit dicta ducimus unde ipsam, expedita eligendi pariatur et architecto consequatur accusantium velit reprehenderit tempore ipsum vel, soluta obcaecati. Quod, necessitatibus.
								</Typography>
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider variant="inset" component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
					</ListItemAvatar>
					<ListItemText
						primary="Brunch this weekend?"
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Pariatur dolores tempore aliquid perspiciatis
									sapiente sequi aperiam ex provident neque
									repellendus!
								</Typography>
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider variant="inset" component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
					</ListItemAvatar>
					<ListItemText
						primary="Brunch this weekend?"
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Pariatur dolores tempore aliquid perspiciatis
									sapiente sequi aperiam ex provident neque
									repellendus!
								</Typography>
							</React.Fragment>
						}
					/>
				</ListItem>
				{/* <Divider variant="inset" component="li" /> */}
			</List>
		</div>
	);
};

export default Comment;
