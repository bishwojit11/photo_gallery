import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  
  useEffect(() =>{
    async function fetchData(){
      const request = await axios.get('https://jsonplaceholder.typicode.com/photos');
      // console.log(request.data);
      setPhotos(request.data)
      return request;

    }
    fetchData();

  },[])

  console.log(photos);
  return (
    <div className="App">
      <h2>Hello</h2>
      {photos.map((photo) => {
        return(
          <img src={photo.url} alt="" />
        )
      })}
    </div>
  );
}

export default App;
