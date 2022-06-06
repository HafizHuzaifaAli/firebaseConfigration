import { useNavigate } from "react-router-dom"

export default function NotFound(){
    const navigate = useNavigate()
    return(
        <>
        <h1 className="text-center">404 Not Found</h1>
        <button className="btn text-center" onClick={()=>navigate("/")}>Go to my page</button>
        </>

    )
}