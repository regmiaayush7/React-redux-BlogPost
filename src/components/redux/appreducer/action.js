import BlogActionTypes from "./action.type";

export const Addblog = (title,main) => ({
    type: BlogActionTypes.ADD_BLOG,
    payload :{ 
    title: title,
    main: main,
    id:new Date().getTime().toString()
    }
});

export const Removeblog = index => ({
    type: BlogActionTypes.REMOVE_BLOG,
    payload: index
});

export const Editblog = (title,main,id) => ({
    type: BlogActionTypes.EDIT_BLOG,
    payload: {
        title: title,
        main: main,
        id:id,
    }
});

export const Addblogtxt = (title, main) => ({
    type: BlogActionTypes.ADD_BLOG_TEXT,
    payload: title, main
});

export const Editaddblog =  (title,main,id) => ({
    type: BlogActionTypes.EDIT_ADD_BLOG,
     payload: {
        title: title,
        main: main,
        id:id,
    }
})