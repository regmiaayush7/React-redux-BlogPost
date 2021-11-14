import React from 'react'
import { connect } from 'react-redux'
import {Removeblog} from './redux/appreducer/action'
import { Editblog } from './redux/appreducer/action'

const Blogbody = ({mainreducer, removeblog, editblog}) =>  {
      return(
        mainreducer.map((blog)=>(      
        <div className ='container' key={blog.id}>
        <div className='card bg-dark mb-3'>
        <div className ="card-body">
            <h4 className="card-title">{blog.title}</h4>
            <p className="card-text">{blog.main}</p>
            <a href="#" className="edit card-link">
              <i className="fa fa-pencil" onClick ={() => editblog(blog.title,blog.main,blog.id) }></i>
            </a>
            <a href="#" className="delete card-link">
            <i className="fa fa-remove" onClick={() => removeblog(blog.id)}></i>
          </a>
          </div>
        </div>
    </div>)
    )
)
}

const MapStateToprops = state => ({
  mainreducer: state.mainreducer.blog
})

const MapdispatchToprops = dispatch => ({
  removeblog: index => dispatch(Removeblog(index)),
  editblog: (id,title,main) => dispatch(Editblog(id,title,main))
})

export default connect(MapStateToprops,MapdispatchToprops)(Blogbody)
