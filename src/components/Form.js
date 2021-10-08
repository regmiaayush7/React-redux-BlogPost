import React, { useState } from 'react'

const Form = () => {
    const [blog,Setblog] = useState({
        title: '',
        main:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = event => {
        const{name, value} = event.target;
        Setblog({...blog, [name]: value})
        console.log(blog);
    }
    const {title, main} = blog
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
                        <div className ='form-group mb-2'>
                            <button type="submit" 
                            className="form-control btn btn-primary btn-block">Add Post</button>
                        </div>
                    </form>    
            </div>
        </div>    
    )
}

export default Form
