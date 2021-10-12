import React from 'react'
import Blogcontainer from './Blogcontainer'

const Blogbody = ({blog}) =>  (
        <div className ='container'>
            <div className='card bg-dark mb-3'>
            <div class="card-body">
                <h4 class="card-title">{blog.title}</h4>
                <p class="card-text">{blog.main}</p>
                <a href="#" class="edit card-link">
                  <i class="fa fa-pencil"></i>
                </a>
    
                <a href="#" className="delete card-link">
                <i className="fa fa-remove"></i>
              </a>
              </div>
            </div>
        </div>
    )

export default Blogbody
