import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';

import { Fab } from '@material-ui/core';

import AutoSizer from 'react-virtualized-auto-sizer';

import {
  Add,
  AddBox,
  ArrowUpward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
  PlayArrow,
  Tune
} from '@material-ui/icons';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function Tasks() {
  const columns = [
    { title: 'Task Name', field: 'taskName' },
    { title: 'Description', field: 'description' },
    { title: 'Task Method', field: 'taskMethod' },
    { title: 'Last Change', field: 'lastChange' },
    { title: 'Last Changed By', field: 'lastChangedBy' }
  ];
  const data = [
    {
      taskName: 'BackupDB',
      description: 'Full Database Backup',
      taskMethod: 'Command',
      lastChange: '25/9/2019 2:57:45 PM',
      lastChangedBy: 'Akhilesh'
    },
    {
      taskName: 'FTPSend',
      description: 'FTP Send Sample',
      taskMethod: 'PowerShell',
      lastChange: '24/9/2019 1:32:25 PM',
      lastChangedBy: 'Matt'
    },
    { taskName: 'task 1' },
    { taskName: 'task 2' },
    { taskName: 'task 1' },
    { taskName: 'task 2' },
    { taskName: 'task 1' },
    { taskName: 'task 2' },
    { taskName: 'task 1' },
    { taskName: 'task 2' },
    { taskName: 'task 1' },
    { taskName: 'task 2' },
    { taskName: 'task 1' },
    { taskName: 'task 2' },
    { taskName: 'task 1' },
    { taskName: 'task 2' },
    { taskName: 'task 1' },
    { taskName: 'task 2' },
    { taskName: 'task 1' }
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
              data={data}
              options={{
                pageSize: pageSize,
                pageSizeOptions: [13],
                doubleHorizontalScroll: true,
                paginationType: 'normal',
                search: false,
                showTitle: false,
                toolbar: true,
                // paging: false,
                selection: true
              }}
              components={{
                Toolbar: props => (
                  <div>
                    {/* <MTableToolbar {...props} /> */}
                    <div style={{ padding: '0px 10px' }}>
                      <Fab variant="extended" color="primary" size="medium">
                        <Add style={{ marginRight: 5 }} /> ADD
                      </Fab>
                      <Fab variant="extended" color="primary" size="medium">
                        <Edit style={{ marginRight: 5 }} /> EDIT
                      </Fab>
                      <Fab variant="extended" color="primary" size="medium">
                        <DeleteOutline style={{ marginRight: 5 }} /> Delete
                      </Fab>
                      <Fab variant="extended" color="primary" size="medium">
                        <PlayArrow style={{ marginRight: 5 }} /> Run
                      </Fab>
                      <Fab variant="extended" color="primary" size="medium">
                        <Tune style={{ marginRight: 5 }} /> Properties
                      </Fab>
                    </div>
                  </div>
                )
              }}
              icons={tableIcons}
            ></MaterialTable>
          </div>
        );
      }}
    </AutoSizer>
  );
}
