import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
	randomCreatedDate,
	randomUpdatedDate
} from '@material-ui/x-grid-data-generator';
import { Check } from '@material-ui/icons';

const rows = [
	{
		id: 1,
		name: 'Damien',
		age: 25,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate()
	},
	{
		id: 2,
		name: 'Nicolas',
		age: 36,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate()
	},
	{
		id: 3,
		name: 'Kate',
		age: 19,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate(),
		action: <Check />
	}
];

export default function ColumnSelectorGrid() {
	return (
		<div style={{ height: 300, width: '100%' }}>
			<DataGrid
				columns={[
					{ field: 'name', type: 'string' },
					{ field: 'age', type: 'number' },
					{ field: 'dateCreated', type: 'date', width: 130 },
					{ field: 'lastLogin', type: 'dateTime', width: 180 },
					{ field: 'action', type: 'string', width: 180 }
				]}
				rows={rows}
			/>
		</div>
	);
}
