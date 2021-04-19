import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

const [file, setFile] = useState("");
const [error, setError] = useState("");

const types = ["image/jpeg","image/png","image/jpg"]

const inputChangeHandler = (event) => {
    console.log(event.target.files[0])
    let select = event.target.files[0];
 if (select && types.includes(select.type)){
     setFile(select);
     setError(null);
 }else{
     setFile(null);
     setError("please select the file of type jpeg, png and jpg");
 }  
}

return (
    <form>
        <div class="file-input">
            <input type="file" id="file" class="file" onChange={inputChangeHandler}/>
            <label for="file">Select Image</label>
        </div>
        <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
    </form>
)
}

export default UploadForm;