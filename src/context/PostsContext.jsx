import { createContext, useState, useContext } from "react";

const PostsContext = createContext();

function PostsProvider({ children }) {

    const [posts, setPosts] = useState([]);

    return (
        <PostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PostsContext.Provider>
    );
}