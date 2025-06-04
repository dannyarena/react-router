import { usePosts } from "../context/PostsContext";

export default function PostList() {
    const { posts } = usePosts();

    return (
        <div>
            <h1>I nostri post</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}