import { Box, Grid } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../component/button"
import Input from "../component/input"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Alert from '@mui/material/Alert';
import { SignUpUser,SignInUser } from "../firebase/firebaseAuthentication";

function MHLogin(props) {
  const [obj,setObj]=useState({})
  const navigate = useNavigate()
  const params = useParams()
  const [loader,setLoader] = useState(false)
  const [alert,setAlert] = useState(""); 
  const [alertClass,setAlertClass] = useState("d-none")
  const login = ()=>{
    if(!obj.email){
      setAlert("Please Enter a valid Email")
      setAlertClass("d-flex justify-content-center")
      return
    };
    if(!obj.password || obj.password.length < 7 ){
      setAlert("Please Enter a Password or password should be atleast 7 characters")
      setAlertClass("d-flex justify-content-center")
      return 
    };
    setLoader(true)
    setAlertClass("d-none")
    SignInUser(obj).then((success)=>{
      console.log(success);navigate(`/${success.user.uid}`,{state: {user: obj.email}});
      setLoader(false)
    }
    ).catch((err)=>console.log(err))
    setLoader(false)
    
  }
    return(
        <div className="d-flex justify-content-center">
          
            <Grid container className="text-center my-4  rounded">
    <Grid item xs={12} sm={12} md={12} className="text-center  fw-bold fs-1">LogIn.
     <Box><AccountCircleIcon fontSize="large" /></Box>
    </Grid>
    
    <Grid item sx={{paddingBottom: 4,paddingTop: 4}} xs={12} sm={12} md={12}>
      <div><Input width="60%"  label="Email" onChange={(e)=>setObj({...obj,email: e.target.value })} /></div>
    </Grid>
    <Grid item sx={{paddingBottom: 4}} xs={12} sm={12} md={12}>
      <div><Input width="60%" label="Password" onChange={(e)=>setObj({...obj,password: e.target.value })} /></div>
         <div className={alertClass}><Alert icon={false} severity="success">{alert}</Alert></div>
    </Grid>
    
    
    <Grid item  xs={12} sm={12} md={12} ><Button width="60%" loader={loader}  onClick={login} class="btn btn-outline-success" text="LogIn"/></Grid>
    <Grid item  xs={12} sm={12} md={12} className="text-center fw-bold fs-4 py-5">Do't have an account ?  <Button width="120px" destination="/signup" class="btn btn-outline-primary" text="SignUp"/></Grid>
    
</Grid>
        </div>
    )
}
export default MHLogin