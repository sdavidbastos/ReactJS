import React, { useState, useEffect } from "react";
/* como seria sem os hooks 
state ={
  repositories: []
} */
/* state = {
  repositories: []
}
setRepositore é para alterar ou atualizar o valor.
} */
export default function App() {
  const [repositories, setRepositories] = useState([]);
  /* UseEffect tem o corpo da função que é o componentWillMount e o parametro é em quais circunstancias essa função deve ser ativado*/
  /* Deve-se utilizar mais de um useEffect */
  /* Um array vazio significa que esse useEffect deve ser executado apenas uma vez */
  useEffect(async () => {
    const response = await fetch("https://api.github.com/users/diego3g/repos");
    const data = await response.json();

    setRepositories(data);
  }, []);
  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);
  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });
    setRepositories(newRepositories);
  }

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span>(Favorito)</span>}
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
        </li>
      ))}
    </ul>
  );
}
