import "./styles/Pages.css";
import * as React from "react";
import { Table } from "baseui/table-semantic";
import { styled, useStyletron } from "styletron-react";

const Anchor = styled("a", {
  alignment: "center",
  fontSize: "20px",
  color: "black",
});

const COLUMNS = ["Careers - Learn More"];
const DATA = [
  [<Anchor href="/careers/police_officer"> Police Officer </Anchor>],
  [
    <Anchor href="/careers/cosmetologist">
      {" "}
      Cosmetology Service Provider{" "}
    </Anchor>,
  ],
  [<Anchor href="/careers/construction_worker"> Construction Worker </Anchor>],
  [<Anchor href="/careers/dental_hygenist"> Dental Hygenist </Anchor>],
  [<Anchor href="/careers/firefighter"> Firefighter </Anchor>],
];
export default function Careers() {

  const careers = {
    marginLeft: "40%",
    fontSize: "24px",
  }
  return (
    <div className="CareersExplorer" style={careers}>
      <Table columns={COLUMNS} data={DATA} />
    </div>
  );
}