import "./styles/Pages.css";
import * as React from 'react';
import {Table} from 'baseui/table-semantic';
import { styled, useStyletron } from "styletron-react";


const Anchor = styled("a", {
  alignment: 'center',
  fontSize: "20px",
  color: "red"
});

const COLUMNS = ['Career Title'];
const DATA = [
  [<Anchor href="https://docs.google.com/document/d/1Mnh6nIbWsIX3MrlXn6bZ4JomT6w8QnYxuT0KX8c8O3c/edit"> Construction Worker </Anchor>],
  [<Anchor href="https://docs.google.com/document/d/1Mnh6nIbWsIX3MrlXn6bZ4JomT6w8QnYxuT0KX8c8O3c/edit"> Cosmetology Service Provider</Anchor>],
  [<Anchor href="https://docs.google.com/document/d/1Mnh6nIbWsIX3MrlXn6bZ4JomT6w8QnYxuT0KX8c8O3c/edit"> Denal Hygenist </Anchor>],
  [<Anchor href="https://docs.google.com/document/d/1Mnh6nIbWsIX3MrlXn6bZ4JomT6w8QnYxuT0KX8c8O3c/edit"> Fire Fighter </Anchor>],
];
export default function Careers() {
  return <Table columns={COLUMNS} data={DATA} />;
}








// const Careers = () => {
//   return (
//     <div className="Careers">
//       <h1>Career Explorer!</h1>
//     </div>
//   );
// };

// export default Careers;
