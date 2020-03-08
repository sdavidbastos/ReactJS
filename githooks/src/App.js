import React, { useState, useEffect } from "react";
/* como seria sem os hooks 
state ={
  repositories: []
} */
export default function App() {
  const [repositories, setRepositories] = useState([]);
  
  useEffect(()=>{

  }, [repositories])
  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}
