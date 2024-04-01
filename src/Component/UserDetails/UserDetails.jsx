import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
    
    const user = useLoaderData();
    // const params = useParams();
    const {userId} = useParams();
    const navigate = useNavigate();
    const {name, email} = user;
    const handleGoBack = () =>{
        navigate(-1)
    }
    console.log(userId);
    return (
        <div>
            <h2>Details About Users:{name}</h2>
            <h3>Email:{email}</h3>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;
