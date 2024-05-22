//Usage of REACT_APP_* convention is must for environment variables in react
//dotenv is already present in react-scripts

import React, { useState } from "react";

const ApiCallExample: React.FC = (): React.JSX.Element => {
  const [response, setResponse] = useState<{}>({});

  const handlePostCall = async () => {
    //https://dummy.restapiexample.com/api/v1/employees
    const url = process.env.REACT_APP_POST_URL;
    //"https://dummy.restapiexample.com/api/v1/create"
    const data = { name: "Ajay Nallanagula", salary: "123", age: "23" };

    try {
      // const response  = await fetch(url,{
      //     method:'POST',
      //     body: JSON.stringify(data),
      //     headers:{
      //         //Authorization: 'bearer someToken',
      //         "Content-Type":"application/json"
      //     }
      // })
      // const result  = await response.json()
      // setResponse(result)
    } catch (error) {
      console.error(error);
    }
  };

  const handlePutCall = async () => {
    const url = `	https://dummy.restapiexample.com/api/v1/update/21`;
    const data = { name: "Ajay Nallanagula", salary: "123", age: "29" };

    //Usage of REACT_APP_* is must for environment variables in react
    try {
      // const response = await fetch(process.env.REACT_APP_PUT_URL,{
      //     method:'PUT',
      //     body:JSON.stringify(data),
      //     headers:{
      //         'Content-Type':'application/json'
      //     }
      // })
      // const result = await response.json()
      // setResponse(result)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <section>{JSON.stringify(response)}</section>
      <section>
        <h1> API Test Call</h1>
        <button>Click For GET Call</button>
        <button onClick={handlePostCall}>Click For POST Call</button>
        <button onClick={handlePutCall}>Click For PUT Call</button>
        <button>Click For DELETE Call</button>
      </section>
    </main>
  );
};

export default ApiCallExample;
