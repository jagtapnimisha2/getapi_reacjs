import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setdata] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(url).then(response =>
      response.json()
    ).then(jsonn => {
      console.log("jsonn", jsonn);
      setdata(jsonn);
    }).catch((e) => {
      console.log(e);
    })
  }, [])
  return (
    <div className="App">
      {
        data.map(item => {
          return (
            <div>{item.id}<br></br>{item.title}<br></br>{item.body}</div>
          )
        }
        )
      }
    </div>
  );
}

export default App;
