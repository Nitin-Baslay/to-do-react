import RenderPage from "./components/RenderPage";
import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [output, setOutput] = useState([]);
  const inputData = (value) => {
    const finale = { ...value, id: Math.random().toString() };
    setOutput((preState) => {
      return [finale, ...preState];
    });
  };
  const today = new Date();
  const deleteItemHandler = (ids) => {
    setOutput((preData) => {
      const display = preData.filter((el) => el.id !== ids);
      return display;
    });
  };

  return (
    <div>
      <Form oninputData={inputData} />
      <div className="App">
        {output.map((ele) => {
          return (
            <RenderPage
              item={ele.item}
              date={ele.date}
              keyss={ele.id}
              onDelete={deleteItemHandler}
              onToday={today}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
