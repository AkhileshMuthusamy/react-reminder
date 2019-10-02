import React from 'react';

import MaterialTable from 'material-table';
import AutoSizer from 'react-virtualized-auto-sizer';

import { tableIcons } from '../shared/materialTableIcons';

export default function Monitor() {
  let columns = [];

  if (localStorage.getItem('monitorTable') === null) {
    localStorage.setItem(
      'monitorTable',
      JSON.stringify({
        0: { title: 'Avatar', field: 'avatar', removable: false },
        1: { title: 'First Name', field: 'first_name' },
        2: { title: 'Last Name', field: 'last_name' },
        3: { title: 'Last Change', field: 'lastChange' },
        4: { title: 'Last Changed By', field: 'lastChangedBy' }
      })
    );
  }

  let savedColumns = JSON.parse(localStorage.getItem('monitorTable'));
  for (var columnIndex in savedColumns) {
    columns.push(savedColumns[columnIndex]);
  }

  function handleColumnDrag(sourceIndex, destinationIndex) {
    const sourceColumn = savedColumns[sourceIndex];
    const destinationColumn = savedColumns[destinationIndex];

    savedColumns[sourceIndex] = destinationColumn;
    savedColumns[destinationIndex] = sourceColumn;
    localStorage.setItem('monitorTable', JSON.stringify(savedColumns));
  }

  return (
    <AutoSizer disableWidth>
      {({ height }) => {
        console.log(`Height: ${height}`);
        const pageSize = Math.floor((height - 192) / 48);
        console.log(`Page Size: ${pageSize}`);
        return (
          <MaterialTable
            columns={columns}
            data={query => {
              console.log('Query', query);
              return new Promise((resolve, reject) => {
                let url = 'https://reqres.in/api/users?';
                url += 'per_page=' + query.pageSize;
                url += '&page=' + (query.page + 1);
                fetch(url)
                  .then(response => response.json())
                  .then(result => {
                    resolve({
                      data: result.data,
                      page: result.page - 1,
                      totalCount: result.total
                    });
                  });
              });
            }}
            options={{
              pageSize: pageSize,
              pageSizeOptions: [],
              paginationType: 'normal',
              search: false,
              showTitle: false,
              toolbar: false,
              paging: true,
              selection: true,
              columnsButton: true
            }}
            onColumnDragged={handleColumnDrag}
            icons={tableIcons}
            tableRef={props => {
              console.log('hooks', props);
            }}
          />
        );
      }}
    </AutoSizer>
  );
}
