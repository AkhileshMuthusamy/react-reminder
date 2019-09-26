import React, { Fragment } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';

import { Fab } from '@material-ui/core';

import AutoSizer from 'react-virtualized-auto-sizer';

import { tableIcons } from '../shared/materialTableIcons';

import { Add, DeleteOutline, Edit, PlayArrow, Tune } from '@material-ui/icons';

export default function Tasks() {
  const columns = [
    { title: 'Task Name', field: 'taskName' },
    { title: 'Description', field: 'description' },
    { title: 'Task Method', field: 'taskMethod' },
    { title: 'Last Change', field: 'lastChange', type: 'datetime' },
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
    { taskName: '<html>alert("Hello! I am an alert box!!");</html>' },
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
              title="Tasks"
              columns={columns}
              data={data}
              options={{
                pageSize: pageSize,
                pageSizeOptions: [],
                doubleHorizontalScroll: true,
                paginationType: 'normal',
                search: false,
                showTitle: true,
                toolbar: true,
                // paging: false,
                selection: true,
                columnsButton: true
              }}
              components={{
                Toolbar: props => (
                  <Fragment>
                    <MTableToolbar {...props} />
                    {/* <div style={{ padding: '0px 10px' }}> */}
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
                    {/* </div> */}
                  </Fragment>
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
