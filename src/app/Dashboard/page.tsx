/** @format */
"use client";

import {useState} from "react";
import Children from "./component/chirden";
import CheckboxTree, {treeData} from "./component/checkboxtree";
export type ListType = {
  a: number;
  b: number;
  c: string;
  d: string;
};

const LIST: ListType[] = [
  {
    a: 1,
    b: 4,
    c: "number",
    d: "dynamic-length-text",
  },
  {
    a: 2,
    b: 4,
    c: "number",
    d: "dynamic-length-text",
  },
  {
    a: 3,
    b: 4,
    c: "number",
    d: "fixed-length-text",
  },
];

const Dashboard = () => {
  const [listChild, setListChildren] = useState<ListType[]>(LIST);
  console.log(listChild);
  return (
    <>
      {/* <Children
        index={2}
        listChild={listChild}
        setListChildren={setListChildren}
      /> */}
      <CheckboxTree data={treeData} />
    </>
  );
};

export default Dashboard;
