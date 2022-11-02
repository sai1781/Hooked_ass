import { Typography } from "@mui/material";
import { Stack } from "@mui/system";


const NotFound = _ =>{


    return(
        <>
        <Stack direction="row" sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            
            <Typography variant="h4" >@@@ No Movie is Found in this Name Please Try Again@@@</Typography>
        </Stack>
        </>
    )
}

export default NotFound;