<Grid item xs={12} className={classes.content}>
	<Paper className={classes.paper}>
		<Grid
			container
			className={classes.equalContent}
			onClick={applicationInfoPage}
		>
			<Grid
				item
				xs={2}
				justify="flex-end"
				className={classes.leftContent}
			>
				<Avatar className={classes.pink}>
					<PageviewIcon />
				</Avatar>
			</Grid>
			<Grid
				item
				xs={8}
				justify="flex-end"
				className={classes.leftContent}
			>
				<Typography variant="h6">Tên phần mềm</Typography>
				<Typography variant="caption">Published: 01/01/2021</Typography>
			</Grid>
			<Grid
				item
				xs={2}
				justify="flex-end"
				className={classes.rightContent}
			>
				<DeleteForeverIcon className={classes.deleteIcon} />
			</Grid>
		</Grid>
	</Paper>
</Grid>;
