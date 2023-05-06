import "./Date.css";

const Date = ({ changeDate }) => {
  const editedDate = changeDate;
  const date = editedDate.toLocaleString("en-us", { day: "2-digit" });
  const month = editedDate.toLocaleString("en-us", { month: "long" });
  const year = editedDate.getFullYear();
  return (
    <div className="date">
      <p className="calendar dated-month">{month}</p>
      <p className="calendar dated-day ">{date}</p>
      <p className="calendar dated-year"> {year}</p>
    </div>
  );
};
export default Date;
