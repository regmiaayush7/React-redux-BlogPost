import BlogActionTypes from "./action.type";

const INTIAL_STATE ={
    blog: [],
    editblog: {},
    toogleState: true,
    selected: undefined
};

const Blogreducer = (state= INTIAL_STATE, action) => {
    switch(action.type){
        case BlogActionTypes.ADD_BLOG_TEXT:
            return { 
                ...state,
                editblog: action.payload
            }
        case BlogActionTypes.ADD_BLOG:
            return{
                ...state,
                blog: [...state.blog,action.payload],
                toogleState: true,
                editblog: {
                    title: '',
                    main: ''
               }
               
            }
        case BlogActionTypes.REMOVE_BLOG:
            return{
                ...state,
                blog:[...state.blog.filter((single)=> single.id !== action.payload)]
            }    
        case BlogActionTypes.EDIT_BLOG:
            return{
                ...state,
                editblog: action.payload,
                toogleState: false,
                selected: action.payload
            }    
        case BlogActionTypes.EDIT_ADD_BLOG:
            return{
                ...state,
                blog:[...state.blog.map((single) => single.id !== action.payload.id ? single : action.payload)],
                toogleState: true,
                selected: undefined,
                editblog: {
                    title: '',
                    main: ''
               }
            }
        default:
            return state    
    }
}

export default Blogreducer;
