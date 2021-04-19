import './App.css';
import ShowImage from './component/ShowImage';
import Title from './component/Title';
import UploadForm from './component/UploadForm';
import {useState} from 'react';
import Display from './component/Display';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ShowImage setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Display selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
