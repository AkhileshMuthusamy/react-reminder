import React, { createRef, useState } from 'react';
import './DragAndDrop.css';
import pretty from 'prettysize';
import { CloudUpload, Close } from '@material-ui/icons';
import { Card, CardHeader, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as PDF } from './Icons/pdf.svg';
import { ReactComponent as JPG } from './Icons/jpg.svg';
import { ReactComponent as UNKNOWN } from './Icons/unknown.svg';
import { ReactComponent as PNG } from './Icons/png.svg';
import { ReactComponent as DOC } from './Icons/doc.svg';
import { ReactComponent as ZIP } from './Icons/zip.svg';
import { ReactComponent as GIF } from './Icons/gif.svg';
import { ReactComponent as TXT } from './Icons/txt.svg';

export default function DragAndDrop({ disabled, onChange }) {
  let fileInputRef = createRef();
  const [filePreview, setFilePreview] = useState([]);
  const [hightlight, setHightlight] = useState(false);

  const openFileDialog = () => {
    if (!disabled) {
      fileInputRef.current.click();
    }
  };

  const onFilesAdded = event => {
    if (!disabled) {
      const files = fileListToArray(event.target.files);
      files.push(...filePreview);
      setFilePreview(files);
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
      files.push(...filePreview);
      setFilePreview(files);
      onChange(files);
    }
    setHightlight(false);
  };

  const removeFile = index => {
    const newFiles = [...filePreview];
    newFiles.splice(index, 1);
    setFilePreview(newFiles);
    onChange(newFiles);
  };

  const DisplayFileTypeIcon = ({ fileType }) => {
    console.log(fileType);
    switch (fileType) {
      case 'image/jpeg': {
        return <JPG style={{ height: 40, width: 40 }} />;
      }
      case 'image/png': {
        return <PNG style={{ height: 40, width: 40 }} />;
      }
      case 'application/pdf': {
        return <PDF style={{ height: 40, width: 40 }} />;
      }
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
        return <DOC style={{ height: 40, width: 40 }} />;
      }
      case 'application/zip': {
        return <ZIP style={{ height: 40, width: 40 }} />;
      }
      case 'image/gif': {
        return <GIF style={{ height: 40, width: 40 }} />;
      }
      case 'text/plain': {
        return <TXT style={{ height: 40, width: 40 }} />;
      }
      default: {
        return <UNKNOWN style={{ height: 40, width: 40 }} />;
      }
    }
  };

  const FileCard = ({ file, index }) => {
    return (
      <Card style={{ marginBottom: 5 }}>
        <CardHeader
          avatar={<DisplayFileTypeIcon fileType={file.type} />}
          action={
            <IconButton aria-label="close" onClick={() => removeFile(index)}>
              <Close />
            </IconButton>
          }
          title={file.name}
          subheader={`Size: ${pretty(file.size)}`}
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
        <Typography variant="body1">Drop your files here or click to add files</Typography>
        <CloudUpload />
      </div>
      {filePreview.map((file, index) => {
        return <FileCard key={index} index={index} file={file} />;
      })}
    </div>
  );
}
