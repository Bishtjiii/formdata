import { useNavigate } from "react-router";

const Summary = () =>{
    const navigate = useNavigate()
    return(
        <>
            <div>hello</div>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </>
    )
}
export default Summary;