import { usePosts } from "../context/PostsContext";
import { Link } from "react-router-dom";

export default function PostsList() {
    const { posts } = usePosts();

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