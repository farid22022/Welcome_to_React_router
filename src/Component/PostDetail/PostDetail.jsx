import { useLoaderData } from "react-router-dom";


const PostDetail = () => {

    const post = useLoaderData();
    const {id,title,body} = post
    return (
        <div>
            <h3>Post :{title}</h3>
        </div>
    );
};

export default PostDetail;