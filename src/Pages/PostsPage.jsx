import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function PostPage() {
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
        <div>
            <h1>I nostri post</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>  {/* Link cambia l'URL senza ricaricare la pagina */} 
                    </li>
                ))}
            </ul>
        </div>
    );
}