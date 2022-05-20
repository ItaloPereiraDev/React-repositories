import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react"
import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList () {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ItaloPereiraDev/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []) // O que eu quero executar, e quando quero executar. Um array vazio significa que vai executar só 1x, quando o componente for exibido em tela.

  return(
    <section className="repository-list">
      <h1>Lista de repositórios:</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}
      </ul>
    </section>
  )
}