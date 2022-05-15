import Form from "./components/Form.js";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [responses, setResponses] = useState([]);

  return (
    <div className="app-container">
      <h1>Shopify Front End Developer Intern Challenge</h1>

      <h2>Enter Prompt</h2>
      <Form responses={responses} setResponses={setResponses}></Form>

      <h2>Responses</h2>
      <ul>
        {responses.map((response, idx) => (
          <li key={idx}>{response}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
