import { Link } from "react-router-dom";


const Post = ({post}) => {

    const {id,title} = post;
    const userStyle ={
        border:'2px solid yellow',
        padding:'5px',
        borderRadius:'10px'
    }

    
    return (
        <div style={userStyle}>
            <h4>Post of id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>
                <button>Click Me!!</button>
            </Link>
        </div>
    );
};

export default Post;