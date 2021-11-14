import React, { useState } from 'react'
import {connect} from 'react-redux';
import { Addblog } from './redux/appreducer/action';
import { Addblogtxt } from './redux/appreducer/action';
import { Editaddblog } from './redux/appreducer/action';

const Form = ({Addblog,togglestate,Addblogtxt,editblog,selected,EditAddblog}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if(selected || selected ===0){
            EditAddblog(editblog.title,editblog.main,editblog.id)
        }else{
            Addblog(editblog.title,editblog.main);
       }
    }

    const handleChange = (event) => {
            const{name, value} = event.target;
            Addblogtxt({...editblog, [name]: value})
    }

    const {title, main} = editblog
    return (
        <div className ='container'>
            <div className ='card card-body card-form bg-dark'>
                <h1>Post Something</h1>
                    <p className ='lead'>What's in your mind??</p>
                    <form onSubmit={handleSubmit}>         
                        <div className ='form-group mb-2'>
                            <input 
                            name="title"
                            type ='text'
                            className='form-control'
                            value={title}
                            onChange={handleChange}
                            placeholder = 'Enter Blog Title...'
                            required/>
                        </div>    
                        <div className='form-group mb-2'>
                            <textarea 
                            className='form-control'
                            name="main" 
                            value={main}
                            onChange={handleChange}
                            placeholder= 'Enter your blog text...'
                            required
                            ></textarea>
                        </div>
                        {
                            togglestate ?<div className ='form-group mb-2'><button type="submit" 
                            className="form-control btn btn-primary btn-block">Add Post</button></div>:
                            <div className ='form-group mb-2'><button type="submit" 
                            className="form-control btn btn-success btn-block">Edit Post</button></div>
                        }
                    </form>    
            </div>
        </div>    
    )
}
const MapStateToprops = state => ({
    togglestate: state.mainreducer.toogleState,
    editblog: state.mainreducer.editblog,
    selected: state.mainreducer.selected
})

const MapDispatchToprops = dispatch => ({
    Addblog: (title,main) => dispatch(Addblog(title,main)),
    Addblogtxt: text => dispatch(Addblogtxt(text)),
    EditAddblog: (id,title,main) => dispatch (Editaddblog(id,title,main))
})

export default connect(MapStateToprops,MapDispatchToprops)(Form);
