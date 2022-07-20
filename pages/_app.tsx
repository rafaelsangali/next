import { GetServerSideProps } from "next";

export default function Home({repositories }:any) {
  return (
    <ul>
      {repositories((repo:any) => (
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
  const repositoryNames = data.map((item:any) => item.name);
  

  return {
    props: {
      repositories: repositoryNames,
    },
  };
};
