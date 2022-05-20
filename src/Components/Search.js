import React, { useState } from 'react'

  const Search = ({setAlert,searchUsers,showClearButton,clearUsers})=> {

    const [keyword,setKeyword] = useState("")

     
     
const onChange=(e)=> 
{
    setKeyword(e.target.value)
}

const onSubmit= (e) =>
{
    e.preventDefault();
    if(keyword === '')
    {
        //we are sending a msg and alerttype
        setAlert('Please write something on the input area','warning')
    }
    else {
            searchUsers(keyword);
            setTimeout(()=>
            {
                setKeyword('');
            }
            ,1000
        )
    }


}

 
    return (
        <div className="container my-3">
              
              <form onSubmit={onSubmit}>
                    <div className="input-group">
                        <input type="text" value={keyword} onChange={onChange} className='form-control' />
                        <div className="input-group-append">
                            <button type='submit' className='btn btn-outline-primary'>Search</button>
                        </div>
                    </div>
     
             </form>
             {showClearButton && <button className="btn btn-outline-danger btn-sm btn-block mt-2" onClick={clearUsers} >Clear Results</button> }
            
        </div>
    
    )
  
}
export default Search