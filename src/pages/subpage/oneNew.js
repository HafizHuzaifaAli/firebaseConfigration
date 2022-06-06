import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function OneNews(){
    const location = useLocation()
    const loc = location.state
    console.log(loc)
    return(
        <>
        <h1 className="text-center">Onenews</h1>
        <img src={loc.urlToImage} width="100%" alt="" />
            <div className="d-flex justify-content-between py-3">
                <div>{loc.author}</div>
                <div>{loc.publishedAt}</div>
            </div>
        <Grid container>
            <Grid sx={{fontWeight: "bold" ,fontSize: "30px",paddingBottom: "50px"}} >{loc.title}</Grid>
            <Grid sx={{fontWeight: "bold" ,fontSize: "20px",paddingBottom: "20px"}}>{loc.description}</Grid>
            <Grid sx={{fontWeight: "bold" ,fontSize: "20px",paddingBottom: "20px"}}>{loc.content}</Grid>
            <Grid sx={{fontWeight: "bold" ,fontSize: "20px",paddingBottom: "20px"}}>{loc.url}</Grid>
            
        </Grid>
        </>
    )
}