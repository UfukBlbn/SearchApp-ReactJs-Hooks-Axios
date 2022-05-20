import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../style/userprofile.css"
import Time from 'react-time-format'
import Repos from './Repos';

export class UserDetails extends Component {
  componentDidMount(){
    this.props.getUserRepository(this.props.match.params.login)
    this.props.getUser(this.props.match.params.login)
  }
  render() {
    const {loading,repos} = this.props;
    const {name,bio,location,public_repos,avatar_url,html_url,blog,followers,following,twitter_username,updated_at,created_at} = this.props.user;
    
    return (
      <div class="container">
    <div class="main-body">
  
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                  <img src={avatar_url} alt="" class="rounded-circle img-thumbnail"/>
                    <div class="mt-3">
                      <h4>{name}</h4>
                      <p class="text-secondary mb-1">Github User</p>
                      <div>
                                    <span className="badge badge-primary m-1">Followers: {followers}</span>
                                    <span className="badge badge-danger m-1">Following: {following}</span>
                                    <span className="badge badge-success m-1">Repos: {public_repos}</span>
                              </div>
                      <p class="text-muted font-size-sm">{location}</p>
                      {/* <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3" >
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style={{ backgroundColor:'aliceblue'}}>
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <a   rel="noopener noreferrer" target="_blank" class="text-secondary">{blog && 
                                                                                                        <>
                                                                                                          {blog}
                                                                                                        </>
                                                                                                    }          
                    </a>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style={{ backgroundColor:'aliceblue'}}>
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <a href={html_url} class="text-secondary">{html_url}</a>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style={{ backgroundColor:'aliceblue'}}>
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary">
                      {
                        twitter_username && 
                          <> {twitter_username}</>       
                    }
                  </span>
                  </li>
                
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <h3>Profile Information</h3>
                    <div><hr></hr></div>
                    <div class="col-sm-3">
                      <h6 class="mb-0">First Name :</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {name}
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">About :</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {
                        bio &&
                        <>
                          {bio}
                        </>
                      }
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Last repository update :</h6>
                    </div>
                    <Time class="col-sm-9 text-secondary" value={updated_at} format="DD-MM-YYYY">
                      
                    </Time>
                  </div>
                  <br></br>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Join Date :</h6>
                    </div>
                    <Time class="col-sm-9 text-secondary" value= {created_at} format="DD-MM-YYYY" >
                     
                    </Time>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-sm-12">
                      {/* <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a> */}
                    </div>
                  </div>
                </div>
              </div>
                <div className="col-md-9">
                  <div className="card">
                    <div className='card-body'>
                      <ul className="list-group list-group-flush">
                        <h4>Repository List</h4>
                        <Repos repos={repos}></Repos>
                        </ul>  
                    </div>
                  </div>
                </div>
              {/* <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div class="progress mb-3" style={{height: '5px'}}  >
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: '75px'}}></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress mb-3" style={{height: '5px'}}>
                        <div class="progress-bar bg-primary" role="progressbar"  style={{width: '85px'}} ></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress mb-3" style={{height: '5px'}}>
                        <div class="progress-bar bg-primary" role="progressbar"  style={{width: '35px'}}></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress mb-3" style={{height: '5px'}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: '15px'}} ></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress mb-3" style={{height: '5px'}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: '25px'}} ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div class="progress mb-3" style={{height: '5px'}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: '66%'}}></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress mb-3" style={{height: '5px'}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: '26%'}}></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress mb-3" style={{height: '5px'}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: '36%'}}></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress mb-3" style={{height: '5px'}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: '86%'}}></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress mb-3" style={{height: '5px'}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: '66%'}}  ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}



            </div>
          </div>

        </div>
    </div>
  
    )
  }
}

export default UserDetails