import Form from "./components/Form.js";
import Response from "./components/Response.js";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("saved-responses");
    if (data) {
      setResponses(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("saved-responses", JSON.stringify(responses));
  });

  return (
    <div className="app-container">
      <h1>Shopify Front End Developer Intern Challenge</h1>

      <h2>Enter Prompt</h2>
      <Form responses={responses} setResponses={setResponses}></Form>

      <h2>Responses</h2>
      <ul>
        {responses.map((responseObj, idx) => (
          <li key={idx}>
            <Response
              prompt={responseObj.prompt}
              response={responseObj.response}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
