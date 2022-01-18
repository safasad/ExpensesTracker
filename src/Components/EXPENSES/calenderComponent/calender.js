import './calender.css'
const Calender = (props)=>{
    const month = props.date.toLocaleDateString("en-US", { month: "long" });
    const day = props.date.toLocaleDateString("en-Us", { day: "2-digit" });
    const year = props.date.getFullYear();
    return (
      <div className="date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    );

}
export default Calender;