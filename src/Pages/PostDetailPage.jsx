import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetailPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
        .then(res => setPost(res.data))
        .catch(err => console.error('errore nel recuperdei post', err));
    }, [id]);

    return (
        <div>
            {post ? (
                <>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                </>
            ) : (
                <p>Caricamento...</p>
            )}
        </div>
    );
}