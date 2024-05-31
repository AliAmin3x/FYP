import React, { useState } from 'react';
import Dashboard from '../../Pages/Developers/Developerdashboard/Dashboard';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const maxFileSize = 100 * 1024 * 1024 * 1024; // 100GB in bytes

    if (selectedFile) {
      if (selectedFile.size <= maxFileSize) {
        setFile(selectedFile);
        setError('');
      } else {
        setError('File size exceeds the limit (100GB).');
      }
    } else {
      setError('Invalid file selected.');
    }
  };

  const handleUpload = () => {
    if (file) {
      const uploadInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(uploadInterval);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full pb-4">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-black border-dashed rounded-lg cursor-pointer bg-darkgray hover:bg-buttongray dark:border-gray-600 dark:hover:border-gray-500 transition duration-300 ease-in-out"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-50 ">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-50">
            Any file type (MAX. 100GB)
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange}/>
      <Dashboard onChange={gameAssetsHandler} />
      </label>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {file && (
        <div className="mt-4 w-full">
          <p className="text-sm text-gray-">Selected file: {file.name}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <button
            className="text-white mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition duration-300 ease-in-out"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
