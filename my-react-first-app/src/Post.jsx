import PostTitle from './PostTitle';
import PostBody from './PostBody';

const Post = ({ title, body }) => {
    return (
        <article>
            <PostTitle title={title} />
            <PostBody body={body} />
        </article>
    );
};

export default Post;