import BlogActionTypes from "./action.type";

export const Addblog = content => ({
    type: BlogActionTypes.ADD_BLOG,
    payload :{ 
    content: content,
    id:new Date().getTime().toString()
    }
});