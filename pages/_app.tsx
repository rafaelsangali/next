import { GetServerSideProps } from "next";

interface IItemRepository {
  name: string;
}

interface IRepository {
  repositories: string[];
}

export default function Home({ repositories }: IRepository) {
  return (
    <ul>
      {repositories.map((repo: string) => (
        <li key={repo}>{repo}</li>
      ))}
    </ul>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/rafaelsangali/repos"
  );
  const data = await response.json();
  const repositoryNames = data.map((item: IItemRepository) => item.name);

  return {
    props: {
      repositories: repositoryNames,
    },
  };
};
