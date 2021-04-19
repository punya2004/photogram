
import React, { useEffect } from 'react';
import PhotoStorage from '../hooks/PhotoStorage';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = PhotoStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></div>
  );
} 

export default ProgressBar;