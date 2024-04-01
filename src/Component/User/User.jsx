import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {

    const {id, name , email,phone} = user;
    const userStyle ={
        border:'2px solid yellow',
        padding:'5px',
        borderRadius:'10px'
    }
    const navigate = useNavigate();
    const handleShowDetail = () =>{
        navigate(`/user/${id}`)
    }

    

    return (
        <div style={userStyle} className=''>
            <h2 className="font-bold"> {name}</h2>
            <p>email : {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me!</button>
            </Link>

            <button onClick={handleShowDetail}>Click</button>
        </div>
    );
};

export default User;