import React from 'react';

import MaterialTable from 'material-table';
import AutoSizer from 'react-virtualized-auto-sizer';

import { tableIcons } from '../shared/materialTableIcons';

export default function Monitor() {
  const columns = [
    { title: 'Task Name', field: 'avatar', removable: false },
    { title: 'Description', field: 'first_name' },
    { title: 'Task Method', field: 'last_name' },
    { title: 'Last Change', field: 'lastChange' },
    { title: 'Last Changed By', field: 'lastChangedBy' }
  ];
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
              doubleHorizontalScroll: true,
              paginationType: 'normal',
              search: false,
              showTitle: false,
              toolbar: true,
              paging: true,
              selection: true,
              columnsButton: true
            }}
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
