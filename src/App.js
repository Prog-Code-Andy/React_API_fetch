
import {useState, useEffect} from "react"
import Form from "./Components/Form";
import Table from "./Components/Table";

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [reqType, setReqType] = useState("posts")
  const [items, setItems] = useState([])

  useEffect(()=> {
    const fetchItems = async () => {
      try{const response = await fetch(`${API_URL}${reqType}`)
      const data = await response.json()
      console.log(data);
      setItems(data)
    }
      catch(err){
        console.log(err);
      }
    }
    fetchItems()
  }, [reqType])


  
  return (
    <div className='App'>
      <Form 
      reqType={reqType}
      setReqType={setReqType}
      />
      <Table
      items={items}
      />
    </div>
  );
}

export default App;
