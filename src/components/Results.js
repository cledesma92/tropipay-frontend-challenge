import React from 'react';

const Results = (props) => {
  const { repos } = props;
  console.log('Repos', repos.data);

  const listRepos = repos.length !==0 
    ? repos.data.map((item) => <li key={item.id}>
        <a href={item.html_url} target="_blanck">{item.name}</a>
      </li>)
    : <li>No se encontraron repositorios</li>;

  return (
    <ul>{listRepos}</ul>
  );
}

export {Results}