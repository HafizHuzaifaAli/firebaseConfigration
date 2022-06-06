import { Box, Grid } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../component/button"
import Input from "../component/input"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Alert from '@mui/material/Alert';
import { SignUpUser,SignInUser, SendData } from "../firebase/firebaseAuthentication";


function MHSignUp(props) {
  const navigate = useNavigate()
  const [obj,setObj]=useState({})
  const [loader,setLoader] = useState(false)
  const [alert,setAlert] = useState(""); 
  const [alertClass,setAlertClass] = useState("d-none")
  const SignUp = ()=>{
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
    SignUpUser(obj).then((success)=>{
      console.log(success)
      SendData(obj,"users",success.user.uid).then((result)=>{
        console.log(result)
      })
      setLoader(false)
      navigate(`/login`,{state: {user: obj.email}}
      );
    }
    ).catch((err)=>{
      setLoader(false)
      console.log(err)
  })
  }
    return(
        <div className="mx-md-5">
    <Grid container spacing={2}  className="text-center  my-4  rounded">
    <Grid item xs={12} sm={12} md={12} className="text-center fw-bold fs-1">Sign Up.</Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input width="90%" onChange={(e)=>setObj({...obj,firstName: e.target.value })} label="First Name" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
        <div><Input width="90%" onChange={(e)=>setObj({...obj,lastName: e.target.value })} label="Last Name" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input width="90%" onChange={(e)=>setObj({...obj,password: e.target.value })} label="Password" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input width="90%" onChange={(e)=>setObj({...obj,confirmPass: e.target.value })} label="Confirm Password" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input width="90%" onChange={(e)=>setObj({...obj,fatherName: e.target.value })} label="Father Name" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input width="90%" onChange={(e)=>setObj({...obj,contact: e.target.value })} label="Contact" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input width="90%" onChange={(e)=>setObj({...obj,email: e.target.value })} label="Email" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div><Input width="90%" onChange={(e)=>setObj({...obj,gender: e.target.value })} label="Gender" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={3}></Grid>
    <Grid item xs={12} sm={12} md={6}><div className={alertClass}><Alert icon={false} severity="success">{alert}</Alert></div></Grid>
    <Grid item  xs={12} sm={12} md={12} className="text-center fw-bold fs-1"><Button loader={loader} width="80%" onClick={SignUp} class="btn btn-outline-success" text="Sign Up"/></Grid>
    <Grid item  xs={12} sm={12} md={12} className="text-center fw-bold fs-4 py-5">Do you have an account ?  <Button width="120px" destination="/login" class="btn btn-outline-primary" text="Login"/></Grid>
</Grid>
        </div>
    )
}
export default MHSignUp