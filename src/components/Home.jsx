import React from "react";
import { useNavigate } from "react-router";

const Home = () =>{
    const navigate = useNavigate()
    return (<>
        <h1>This is home page</h1>
        <button onClick={()=> navigate('Summary')}>click</button>
    </>
    )
}

export default Home;