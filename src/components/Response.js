import "../styles/Response.css";

const Response = ({ prompt, response }) => {
  return (
    <div className="response-item-container">
      <div className="response-item-component">
        <div className="label">Prompt: </div>
        <div className="text">{prompt}</div>
      </div>
      <br />
      <div className="response-item-component">
        <div className="label">Response:</div>
        <div className="text">{response}</div>
      </div>
    </div>
  );
};

export default Response;
