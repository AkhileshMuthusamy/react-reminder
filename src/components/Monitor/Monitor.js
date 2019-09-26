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
    <AutoSizer>
      {({ height, width }) => {
        console.log(`Height: ${height} | Width: ${width}`);
        const pageSize = Math.floor((height - 192) / 48);
        console.log(`Page Size: ${pageSize}`);
        return (
          <div style={{ height: `${height}px`, width: `${width}px`, overflowY: 'auto' }}>
            <MaterialTable
              columns={columns}
              data={query => {
                console.dir(query);
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
            ></MaterialTable>
          </div>
        );
      }}
    </AutoSizer>
  );
}
