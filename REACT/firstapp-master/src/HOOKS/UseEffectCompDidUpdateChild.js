import React, { useState, useEffect } from "react";

const UseEffectCompDidUpdateChild = ({ empValue }) => {
  const [projects, setProjects] = useState([]);
  const fetchProjects = (id) => {
    if (!id) return null;
    setTimeout(() => {
      const projs = id === "1" ? ["Alpha", "Beta"] : ["Charlie", "Delta"];
      setProjects(projs);
    }, 300);
  };

  useEffect(() => fetchProjects(empValue), [empValue]);

  if (!empValue) {
    return null;
  }
  
  return (
    <div>
      UseEffectChildComponent
      {projects.map((project) => {
        return <div>{project}</div>;
      })}
    </div>
  );
};
export default UseEffectCompDidUpdateChild;
