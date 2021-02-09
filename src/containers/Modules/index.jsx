import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { randomCreatedDate } from "@material-ui/x-grid-data-generator";
import * as React from "react";
import DeleteIconButton from "../../components/Button/DeleteIconButton";
import EditIconButton from "../../components/Button/EditIconButton";

const rows = [
	{
		id: 1,
		name: "Damien",
		age: 25,
		dateCreated: randomCreatedDate(),
	},
	{
		id: 2,
		name: "Damien",
		age: 25,
		dateCreated: randomCreatedDate(),
	},
	{
		id: 3,
		name: "Damien",
		age: 25,
		dateCreated: randomCreatedDate(),
	},
];

export default function ColumnSelectorGrid() {
	return (
		<div style={{ height: 300, width: "100%" }}>
			<Typography variant="h4">List modules</Typography>
			<DataGrid
				columns={[
					{ field: "name", type: "string" },
					{ field: "age", type: "number" },
					{ field: "created at", type: "date", width: 130 },
					{
						field: "action",
						type: "string",
						width: 180,
						renderCell: () => (
							<React.Fragment>
								<EditIconButton />
								<DeleteIconButton />
							</React.Fragment>
						),
					},
				]}
				rows={rows}
			/>
		</div>
	);
}
