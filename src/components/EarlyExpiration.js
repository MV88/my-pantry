import Badge from '@material-ui/core/Badge';
import CreateIcon from '@material-ui/icons/Create';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import imageYogurt from '../assets/yogurta.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		alignItems: "center",
		width: 150,
	},
	toolbar: {
		display: 'block',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
	},
	img: {
		objectFit: "cover",
		width: 100,
		height: 100,
	},
}));

export default function EarlyExpiration() {
	const [spacing] = React.useState(2);
	const classes = useStyles();
  
	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={spacing}>
					{[0, 1, 2].map(value => (
						<Grid key={value} item>
							<Paper className={classes.paper} >
								<Toolbar className={classes.toolbar} >
									<IconButton aria-label="show 4 new mails" color="inherit">
										<Badge badgeContent={1} color="secondary">
											<MailIcon />
										</Badge>
									</IconButton>
									<Tooltip title="Edit" placement="top">
										<IconButton aria-label="show 4 new mails" color="inherit">
											<CreateIcon />
										</IconButton>
									</Tooltip>
									<img className={classes.img} src={imageYogurt} alt="yogurt"/>
								</Toolbar>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
}