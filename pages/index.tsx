import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface IItemRepository {
  name: string;
}

interface IRepository {
  repositories: string[];
}
// { repositories }: IRepository

export default function Home() {
  const [repositories, setRepositories] = useState<string[]>([])

  useEffect(() => {
    fetch(
      "https://api.github.com/users/rafaelsangali/repos"
    )
    .then((response) => response.json())
    .then((data) => {
      const repositoryNames = data.map((item) => item.name)
      setRepositories(repositoryNames)
    })

  },[])

  return (
    <ul>
      {repositories.map((repo: string) => (
        <li key={repo}>{repo}</li>
      ))}
    </ul>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch(
//     "https://api.github.com/users/rafaelsangali/repos"
//   );
//   const data = await response.json();
//   const repositoryNames = data.map((item: IItemRepository) => item.name);

//   return {
//     props: {
//       repositories: repositoryNames,
//     },
//   };
// };