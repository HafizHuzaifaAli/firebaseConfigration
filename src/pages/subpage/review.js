import { GetData } from "../../firebase/firebaseAuthentication";

export default function Review(){
        const get = ()=>{
            GetData("users")
        }
    return <>
    <h1>Review</h1>
        <button onClick={get} className="btn btn-primary">Get</button>
    </>
}