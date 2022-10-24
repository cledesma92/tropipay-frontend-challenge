import React from 'react';

const ResultsPublicRepos = (props) => {
  const { publicRepos } = props;
  console.log("test: ", publicRepos.data)
  console.log("test: ", (publicRepos.data[8]).name)
  const listPublicRepos = publicRepos.data.map((item, index) => 
    <li style={{listStyle:"none", position: "relative"}} key={item.id}>
      <a className='collection-item teal-text lighten-1' href={item.html_url} target="_blanck">
        
        <b>{index+1} - </b> Owner: 
        <img 
          src={item.owner.avatar_url} 
          className="circle responsive-img" 
          style={{width: "16px", height: "16px"}}
        />
          {item.owner.login} 
        <br/> 
        <small>Repo name: {item.name}</small>
      </a>

    </li>);
  console.log("list: ",listPublicRepos)
  console.log(listPublicRepos.length)
  return (
    <>
        <div className="modal-content grey lighten-4">
          <h4>List of public repositories</h4>
          <p>Select one of the following:</p>
          <ul className='collection'>
            {listPublicRepos}
          </ul>
        </div>
        <div className="modal-footer grey lighten-4">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">
            <i style={{fontSize: "2rem"}} className="material-icons red-text">close</i></a>
        </div>
    </>
  );
}

export {ResultsPublicRepos}