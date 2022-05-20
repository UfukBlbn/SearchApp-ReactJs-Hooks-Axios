import React from 'react'

 const Repo = ({repo}) => {
  return (
        <li className='list-group-item'><i className='fas fa-database'></i> <a href={repo.html_url}>{repo.name} </a></li>
  )
}

export default Repo