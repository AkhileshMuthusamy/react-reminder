import React, { Fragment, useState } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';

import { Fab, Dialog, AppBar, Toolbar, IconButton } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import AutoSizer from 'react-virtualized-auto-sizer';

import { tableIcons } from '../shared/materialTableIcons';

import { Add, DeleteOutline, Edit, PlayArrow, Tune, Close } from '@material-ui/icons';

import { DropzoneArea } from 'material-ui-dropzone';
import { Formik } from 'formik';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

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

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <AutoSizer disableWidth>
        {({ height, width }) => {
          console.log(`Height: ${height} | Width: ${width}`);
          const pageSize = Math.floor((height - 192) / 48);
          console.log(`Page Size: ${pageSize}`);
          return (
            <MaterialTable
              title="Tasks"
              columns={columns}
              data={data}
              options={{
                pageSize: pageSize,
                pageSizeOptions: [],
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
                    <Fab variant="extended" color="primary" size="medium" onClick={handleClose}>
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
                  </Fragment>
                )
              }}
              icons={tableIcons}
            />
          );
        }}
      </AutoSizer>
      <Dialog fullScreen open={open}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Formik
          initialValues={{ file: null }}
          onSubmit={async values => {
            let idCardBase64 = '';
            const formData = new FormData();
            let reader = new FileReader();
            reader.readAsDataURL(values.file[0]);

            reader.onload = await function() {
              idCardBase64 = reader.result;
              console.log('base64', idCardBase64);
              const start = idCardBase64.indexOf(';');
              const base64withFileName = [
                idCardBase64.slice(0, start),
                `;filename=${values.file[0].name}`,
                idCardBase64.slice(start)
              ].join('');
              console.log(base64withFileName);

              formData.append('pdfFile', base64withFileName);
              formData.append('allFile', values.file[0], values.file[0].name);

              axios
                .post('http://localhost:3001/api/emailAttachment', formData)
                .then(res => {
                  console.log(res);
                })
                .catch(err => {
                  console.log(err);
                });
            };
            reader.onerror = await function(error) {
              console.log('Error: ', error);
            };

            alert(
              JSON.stringify(
                {
                  fileName: values.file[0].name,
                  type: values.file[0].type,
                  size: `${values.file[0].size} bytes`
                },
                null,
                2
              )
            );
          }}
          render={({ values, handleSubmit, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                <DropzoneArea
                  onChange={file => {
                    setFieldValue('file', file);
                  }}
                />
                <Fab type="submit" variant="extended" color="primary" size="medium">
                  <Add style={{ marginRight: 5 }} /> SAVE
                </Fab>
              </form>
            );
          }}
        />
      </Dialog>
    </Fragment>
  );
}
