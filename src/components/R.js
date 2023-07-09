import { useState } from "react";

export default function R(props) {
  const [text, setText] = useState();



  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case ", "success");
  };
  const handleOnchange = (Event) => {
   
    setText(Event.target.value);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case ", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("remove extra space ", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("text copied", "success");
  };
  const handleClerClick = () => {
    var newtext = "";
    setText(newtext);
    props.showAlert("text clear", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#05476e" }}
      >
        <h1 className="my-2">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnchange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary mx-1 my-1 "
          value={text}
          onClick={handleUpClick}
        >
          Convert to Upper case
        </button>

        <button
          disabled={text?.length === 0}
          className="btn btn-primary mx-1 my-1"
          va
          onClick={handleLoClick}
        >
          {" "}
          Convert to Lowercase
        </button>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClerClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>

        <p>
          {text === undefined || text === ""
            ? 0
            : text.trim().split(/\s+/)?.length}{" "}
          words and {text === undefined ? 0 : text?.length} characters.
        </p>
        <p> </p>

        <h2>
          {0.008 *
            text?.split(" ").filter((element) => {
              return element?.length !== 0;
            })?.length}
          minutes count
        </h2>

        <p>{text?.length > 0 ? text : "Nothing to priveiw!"}</p>
      </div>
    </>
  );
}
