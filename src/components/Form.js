import Response from "./Response";
import "../styles/Form.css";
import { useState } from "react";

const Form = ({ responses, setResponses }) => {
  const [prompt, setPrompt] = useState("");

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Get response from OpenAI API
    const data = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    };

    const apiResponse = await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET_KEY}`
        },
        body: JSON.stringify(data)
      }
    );

    const apiJsonResponse = await apiResponse.json();

    // Add response to response list (list should be sorted from newest to oldest)
    setResponses([
      <Response prompt={prompt} response={apiJsonResponse.choices[0].text} />,
      ...responses
    ]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          type="text"
          name="prompt"
          value={prompt}
          onChange={handleChange}
          cols="80"
          rows="10"
          placeholder="Please enter your prompt here"
        />
        <br />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
