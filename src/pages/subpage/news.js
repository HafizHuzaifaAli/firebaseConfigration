import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NEWS(){
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true);
    const [articles,setArticles]=useState([]);
    axios.get("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json").then((e)=>{
        setArticles(e.data.articles);
        setLoader(false);
    }).catch((e)=>{
        console.log(e)
        setLoader(false);
    })
    return <>
    {loader? <div className="d-flex justify-content-center align-item-center"><img width="100%" src="https://static.wixstatic.com/media/f4b9d7_9e25a4a2f8194c18a18a7fd9ac8850c2~mv2.gif" alt="" /></div> :
    <>
        <h1 className="text-center">News</h1>
    {articles.map((e,i)=>{
        return( 
           <div className="shadow m-2 p-2"  onClick={()=>navigate("/onenews",{state: e})}>
            <Grid key={i}  container>
            <Grid item md={3} sm={4} lg={3} xs={4}>
                <img style={{width: "100%",height: "130px"}} src={e.urlToImage} alt="" />
            </Grid>
            <Grid item md={9} sm={8} lg={9} xs={9} sx={{paddingLeft: "10px"}} textAlign="center" >
                <Box sx={{fontWeight: "bold",fontSize: "20px"}}>{e.title}</Box>
                <Box>{e.description}</Box>
                <div className="d-flex justify-content-between">
                    <div>{e.publishedAt}</div>
                    <div>{e.author}</div>
                </div>
            </Grid>
            
        </Grid>
        </div>
   ) })}</>
    }
    </>
}