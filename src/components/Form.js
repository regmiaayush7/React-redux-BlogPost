import React, { useState } from 'react'

const Form = () => {
    const [blog, Setblog] = useState('');
    console.log(blog);
    return (
        <div className ='container'>
            <div className ='card card-body card-form bg-dark'>
                <h1>Post Something</h1>
                    <p className ='lead'>What's in your mind??</p>
                <div className ='form-group mb-2'>
                    <input type ='text'
                    className='form-control'
                    value={blog}
                    onChange = { e => Setblog(e.target.value)}
                    placeholder = 'Enter Blog Title...'
                    required/>
                </div>    
                <div className='form-group mb-2'>
                    <textarea 
                    className='form-control'
                    value={blog}
                    onChange = { e => Setblog(e.target.value)}
                    placeholder= 'Enter your blog text...'
                    required
                    ></textarea>
                </div>
                <div className ='form-group mb-2'>
                    <button type="submit" 
                     className="form-control btn btn-primary btn-block">Add Post</button>
                </div>
            </div>
        </div>    
    )
}

export default Form
