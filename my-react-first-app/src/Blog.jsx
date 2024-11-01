import Post from './Post';

const Blog = () => {
    const posts = [
        { id: 1, title: "First Post", body: "This is the body of the first post." },
        { id: 2, title: "Second Post", body: "This is the body of the second post." },
    ];

    return (
        <div>
            <h1>My Blog</h1>
            {posts.map(post => (
                <Post key={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    );
};

export default Blog;