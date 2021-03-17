import "./styles/CareerPage.css";
import careers_data from "./data/careers_data";

const Header = (props) => {
  const career = careers_data.careers.find((c) => c.name == props.career);

  return (
    <div className="CareerPage">
      <h1>{career.title}</h1>
      <h2>{career.description}</h2>
      <h2>{career.benefits}</h2>
      <h2>{career.drawbacks}</h2>
      <h2>{career.reqs}</h2>
      <h2>{career.drawbacks}</h2>
    </div>
  );
};

export default Header;
