import React from "react";
import ReactMemoProblem from "./REACTMEMO/ReactMemoProblem";
import ReactMemoSolution from "./REACTMEMO/ReactMemoSolution";
import UseMemoProblem from "./USEMEMO/UseMemoProblem"
import UseMemoSolution from './USEMEMO/UseMemoSolution'
import UseCallBackProblem from './USECALLBACK/UseCallBackProblem'
import UseCallBackSolution from './USECALLBACK/UseCallBackSolution'

const ParentMemo = () => {
  return (
    <>
      {/* <ReactMemoProblem />
      <h3>Solution</h3>
      <ReactMemoSolution /> */}

      {/* <UseMemoProblem/>
      <h3>Solution</h3>
      <UseMemoSolution/> */}

      <UseCallBackProblem/>
      <h3>Solution</h3>
      <UseCallBackSolution/>
    </>
  );
};

export default ParentMemo;
