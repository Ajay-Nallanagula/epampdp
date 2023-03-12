import React from "react";
import UseReducerHook from "./UseReducerHook";
import UseReducerWithContext from './UseReducerWithContext'
import UseReducerHookLazySeed from './UseReducerHookLazySeed'

const ParentReducerHook = () => {
  return (
    <>
      { <UseReducerHook /> }
      {/* <UseReducerHookLazySeed/> */}
      {/* <UseReducerWithContext/> */}
    </>
  );
};

export default ParentReducerHook;
