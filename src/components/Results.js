import React from 'react';

const Results = (props) => {
  const { repos } = props;
  console.log(repos.data)
  const listRepos =  repos.length !== 0
    ? repos.data.map((item, index) => <li style={{listStyle:"none"}} key={item.id}>
        <a className='collection-item' href={item.html_url} target="_blanck"><b>{index+1}</b> - {item.name} <i className="right tiny material-icons">open_in_new</i></a>
      </li>)
    : <li className='red darken-1 white-text collection-item' style={{listStyle:"none"}}><b>No repositories found</b></li>;
  console.log("ver:", listRepos)
  console.log(listRepos.length)
  return (
    <>
      <div className="section grey lighten-4">
        <div className="row container">
          <h5>Reslult:</h5>
          <blockquote>{listRepos.length === undefined ? "Error in the request":`Quantity of repositories : ${listRepos.length}`}</blockquote>
          <div className='collection'>{listRepos}</div>
        </div>
      </div>
    </>
  );
}

export {Results}