import React from 'react'
import Blogbody from './Blogbody'
import {connect} from 'react-redux'

const Blogcontainer = ({mainreducer}) => {
    return (
        <div>
            {
            mainreducer.map((single) =>(
               //console.log(single.content)
                <Blogbody key={single.id} blog={single.content}/>
            ))
            }
        </div>
    )
}

const MapStateToprops = state => ({
    mainreducer: state.mainreducer.blog
})

export default connect(MapStateToprops)(Blogcontainer)
