import BlogActionTypes from "./action.type";

const INTIAL_STATE ={
    blog: [],
    editblog:''
};

const Blogreducer = (state= INTIAL_STATE, action) => {
    switch(action.type){
        case BlogActionTypes.ADD_BLOG:
            return{
                ...state,
                blog: [...state.blog,action.payload]
            }
        case BlogActionTypes.REMOVE_BLOG:
            return{
                ...state,
                blog: [...state.blog.filter((single)=> single.id !== action.payload)]
            }    
        case BlogActionTypes.EDIT_BLOG:
            return{
                ...state,
                editblog: state.blog.find((elem) => elem.id === action.payload)
            }    
        default:
            return state    
    }
}

export default Blogreducer;
