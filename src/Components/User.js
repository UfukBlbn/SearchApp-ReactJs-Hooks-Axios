import React, { Component } from 'react'
import "../style/usercard.css"
import {Link} from 'react-router-dom'
class User extends Component {
  render() {
      const {name,login,avatar_url,html_url,followers,following} = this.props.user;
    
    return (


      <div className="col-md-4 col-sm-6 col-lg-3">
            <div class="content mt-5">
   
                <div class="text-center card-box">
                    <div class="member-card pt-2 pb-2">
                        <div class="thumb-lg member-thumb mx-auto">
                        <img src={avatar_url} alt="" class="rounded-circle img-thumbnail"/>

                        </div>
                        <div class="">
                            <h4>{login}</h4>
                            <p class="text-muted">@Github Website <span>| </span><span><a href="#" class="text-pink">{html_url}</a></span></p>
                        </div>
                        <ul class="social-links list-inline">
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Skype"><i class="fa fa-skype"></i></a></li>
                        </ul>
                        <Link to={`/user/${login}`} type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Go Profile</Link>
                        <div class="mt-4">
                            {/* <div class="row">
                                <div class="col-4">
                                    <div class="mt-3">
                                        <h4>{followers}</h4>
                                        <p class="mb-0 text-muted">Followers</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mt-3">
                                        <h4>{following}</h4>
                                        <p class="mb-0 text-muted">Following</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mt-3">
                                        <h4>1125</h4>
                                        <p class="mb-0 text-muted">Projects</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
      
           </div>
 
 
    )
  }
}

export default User