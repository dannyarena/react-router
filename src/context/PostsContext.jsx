import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";


const PostsContext = createContext();

function PostsProvider({ children }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then(res => {
            setPosts(res.data);
        })
        .catch(err => {
            console.error('Errore nella richiesta dei post:', err);
        });
    }, []);

    return (
        <PostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PostsContext.Provider>
    );
}

function usePosts() {
    // chiama useContext(PostsContext) per recuperare il valore globale (posts, setPosts)
    return useContext(PostsContext);
}

export { PostsProvider, usePosts};