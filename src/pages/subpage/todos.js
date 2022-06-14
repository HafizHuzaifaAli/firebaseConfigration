import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Button from "../../component/button";
import Input from "../../component/input";
import MHTable from "../../component/table";
import { SendPush } from "../../firebase/firebaseAuthentication";

export default function MHTodos(){
    const [todosItem , setTodosItem] = useState({}) 
    const [inputValue,setInputValue] = useState()
    const addItems = ()=>{
        console.log(todosItem)
        SendPush(todosItem,"todos").then((success)=>console.log(success))
    }
    return<>
        <Grid container alignSelf="center" >
            <Grid item sm={8} md={8}>
                <Input width="95%"  onChange={(e)=>setTodosItem({text: e.target.value})}  label="Items" />
            </Grid>
            <Grid item sm={4} md={4} sx={{paddingTop: 3 }}> 
                <Button  onClick={addItems} text="Add Item"  class='btn btn-success' />
            </Grid>
        </Grid>
        <Box>

        </Box>
    </>
}