import "./RenderPage.css";
import React, { useState } from "react";
import Date from "./Date";

const RenderPage = (props) => {
  let clause = "";
  let classe = "main";
  if (props.date < props.onToday) {
    clause = <p className="due">Due day is passed</p>;
    classe = "main main1";
  }
  const [title, setTitle] = useState(false);
  const changeHandler = () => {
    setTitle((preTitle) => !preTitle);
  };
  const deleteHandler = () => {
    props.onDelete(props.keyss);
  };
  return (
    <div className={classe}>
      <div className="container">
        <input
          type={"checkbox"}
          className="chck"
          onChange={changeHandler}
        ></input>
        <Date changeDate={props.date} x="Date" className="top" />
        <div className="desc">
          <h2 className={title ? "title" : ""}>{props.item}</h2>
        </div>
        <div>
          <button className="delete" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      <div>{clause}</div>
    </div>
  );
};
export default RenderPage;
