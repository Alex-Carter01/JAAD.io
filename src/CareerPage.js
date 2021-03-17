import "./styles/CareerPage.css";
import careers_data from "./data/careers_data";

const Header = (props) => {
  const career = careers_data.careers.find((c) => c.name == props.career);

  return (
    <div className="CareerPage">
      <h1>{career.title}</h1>
      <h3>{career.description}</h3>

      <ul>
        {career.benefits.map((l) => (
          <li>{l}</li>
        ))}
      </ul>

      <ul>
        {career.drawbacks.map((l) => (
          <li>{l}</li>
        ))}
      </ul>

      <ul>
        {career.reqs.map((l) => (
          <li>{l}</li>
        ))}
      </ul>

      <ul>
        {career.warnings.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
