import React, { Fragment, useState } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';

import { Fab, Dialog, AppBar, Toolbar, IconButton, LinearProgress } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import AutoSizer from 'react-virtualized-auto-sizer';

import { tableIcons } from '../shared/materialTableIcons';

import { Add, DeleteOutline, Edit, PlayArrow, Tune, Close } from '@material-ui/icons';

import { DropzoneArea } from 'material-ui-dropzone';
import { Formik } from 'formik';
import axios from 'axios';
import DragAndDrop from '../shared/DragAndDrop/DragAndDrop';

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
                paging: true,
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
          onSubmit={values => {
            const formData = new FormData();

            values.file.forEach(file => {
              formData.append('allfile', file, file.name);
            });

            axios
              .post('http://localhost:3001/api/emailAttachments', formData)
              .then(res => {
                console.log(res);
                alert('File uploaded successfully!');
              })
              .catch(err => {
                console.log(err);
              });
          }}
          render={({ values, handleSubmit, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                <LinearProgress color="secondary" />
                <DropzoneArea
                  showPreviews={true}
                  filesLimit={10}
                  onChange={file => {
                    console.dir(file);
                  }}
                />
                <Fab type="submit" variant="extended" color="primary" size="medium">
                  <Add style={{ marginRight: 5 }} /> SAVE
                </Fab>
                <DragAndDrop
                  disabled={false}
                  onChange={files => {
                    console.dir(files);
                    setFieldValue('file', files);
                  }}
                />
              </form>
            );
          }}
        />
      </Dialog>
    </Fragment>
  );
}
