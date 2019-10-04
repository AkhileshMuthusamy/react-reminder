import React, { createRef, useState } from 'react';
import './DragAndDrop.css';
import { CloudUpload, Close } from '@material-ui/icons';
import { Card, CardHeader, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as PDF } from './Icons/pdf.svg';

export default function DragAndDrop({ disabled, onChange }) {
  let fileInputRef = createRef();
  const [hightlight, setHightlight] = useState(false);

  const openFileDialog = () => {
    if (!disabled) {
      fileInputRef.current.click();
    }
  };

  const onFilesAdded = event => {
    if (!disabled) {
      const files = fileListToArray(event.target.files);
      onChange(files);
    }
  };

  const fileListToArray = list => {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  };

  const onDragOver = event => {
    event.preventDefault();
    if (!disabled) {
      setHightlight(true);
    }
  };

  const onDragLeave = () => {
    setHightlight(false);
  };

  const onDrop = event => {
    event.preventDefault();
    if (!disabled && onChange) {
      const files = fileListToArray(event.dataTransfer.files);
      onChange(files);
    }
    setHightlight(false);
  };

  const FileCard = () => {
    return (
      <Card>
        <CardHeader
          avatar={<PDF style={{ height: 40, width: 40 }} />}
          action={
            <IconButton aria-label="close" onClick={() => 0}>
              <Close />
            </IconButton>
          }
          title="File1.pdf"
          subheader="Size: 2.1 MB"
        />
      </Card>
    );
  };

  return (
    <div className={`wrapper`}>
      <div className={`${disabled ? 'overlay' : ''} `}></div>
      <div
        className={`Dropzone ${hightlight ? 'Highlight-Stripe' : ''} `}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={openFileDialog}
      >
        <input ref={fileInputRef} className={'FileInput'} type="file" multiple onChange={onFilesAdded} />
        <p>Drop your files here or click to add files</p>
        <CloudUpload />
        <FileCard />
      </div>
    </div>
  );
}
