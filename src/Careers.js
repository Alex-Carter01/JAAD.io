import "./styles/Pages.css";
import * as React from "react";
import { Table } from "baseui/table-semantic";
import { styled, useStyletron } from "styletron-react";

const Anchor = styled("a", {
  alignment: "center",
  fontSize: "20px",
  color: "red",
});

const COLUMNS = ["Career Title"];
const DATA = [
  [<Anchor href="/careers/police_officer"> Police Officer </Anchor>],
  [
    <Anchor href="/careers/cosmetologist">
      {" "}
      Cosmetology Service Provider{" "}
    </Anchor>,
  ],
  [<Anchor href="/careers/dental_hygenist"> Dental Hygenist </Anchor>],
  [<Anchor href="/careers/firefighter"> Firefighter </Anchor>],
];
export default function Careers() {
  return (
    <div className="CareersExplorer">
      <Table columns={COLUMNS} data={DATA} />
    </div>
  );
}

// const Careers = () => {
//   return (
//     <div className="Careers">
//       <h1>Career Explorer!</h1>
//     </div>
//   );
// };

// export default Careers;
