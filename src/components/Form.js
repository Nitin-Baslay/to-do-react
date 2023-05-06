import "./Form.css";
import React, { useState } from "react";
const Form = (props) => {
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");
  const itemInput = (props) => {
    setItem(props.target.value);
  };
  const itemDate = (props) => {
    setDate(props.target.value);
  };
  const output = (event) => {
    event.preventDefault();
    const input = {
      item: item,
      date: new Date(date),
    };
    if (input.item == "" || input.date == "") {
      alert("Please Enter Valid Input");
      return;
    } else {
      props.oninputData(input);
    }
  };

  return (
    <form className="form" onSubmit={output}>
      <div className="level1">
        <label>Task Description</label>
        <textarea
          required
          className="mast inp1"
          onChange={itemInput}
        ></textarea>
        {/* <input
          type={"text"}
          required
          className="mast inp1"
          onChange={itemInput}
        /> */}
      </div>
      <div className="level2">
        <label>Planned Completion Date</label>
        <input type={"date"} required className="mast" onChange={itemDate} />
        <button type="submit" onClick={output} className="buttons">
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form;
