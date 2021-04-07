import "./styles/CareerPage.css";
import { careers_data } from "./data/careers_data";

const Header = (props) => {
  const career = careers_data.careers.find((c) => c.name == props.career);

  return (
    <div className="CareerPage">
      <h1>{career.title}</h1>
      <h4 class="custom">{career.description}</h4>

      <ul>
        <h3>Benefits</h3>
        {career.benefits.map((l) => (
          <li>{l}</li>
        ))}
      </ul>

      <ul>
        <h3>Drawbacks</h3>
        {career.drawbacks.map((l) => (
          <li>{l}</li>
        ))}
      </ul>

      <ul>
        <h3>Requirements</h3>
        {career.reqs.map((l) => (
          <li>{l}</li>
        ))}
      </ul>

      <ul>
        <h3>Warnings</h3>
        {career.warnings.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
