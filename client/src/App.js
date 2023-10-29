import './App.css';
import { useState } from 'react';
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [msgResponses, setMessageResponses] = useState([]);
  const [loader, setLoader] = useState(-1);



  const handleClear = () => {
    setMessageResponses([]);
    setLoader(-1);
    setMessage("");
  }

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(0)
    axios.post('http://localhost:1234/api/message', { message: message })
      .then(function (response) {
        setLoader(1)
        console.log(response);
        setMessageResponses([...msgResponses, response["data"]])
      })
      .catch(function (error) {
        setLoader(0)
        console.log(error);
        setMessageResponses([])
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
        />
        <p>Input Value: {message}</p>
        <button type="submit">
          Send message
        </button>

        <p>Output Chat</p>
        <p>
          {loader == 1 ? "loaded" : (loader == 0 ? "loading" : "no processing...")}
        </p>
        <ul>
          {msgResponses.map((item, index) => (
            <li key={index}>
              User: {item["query"]} <br />
              Bot: {item["result"]}
            </li>
          ))}
        </ul>
      </form>
      <button onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}

export default App;