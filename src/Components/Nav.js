import { Stack } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Req } from '../utils'
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import * as React from 'react';
import Favourite from './Favourite';
import Masonry from '@mui/lab/Masonry';
import NotFound from './NotFound';



const Nav = _ => {
    const [list, setList] = useState();
    const [clicked, setClicked] = useState(false);
    const[trigger, setTrigger] = useState(false);
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const [search, setSearch] = useSearchParams();


    useEffect(_ =>{
        if(value !== undefined){
        (async _ => {
            const response = await Req.get(`?s=${value}`);
            if(response.data.Response === "True"){
                setList(response.data.Search)
               setTrigger(true);
             
            }else{
                setTrigger(false);
            
            }
        })()
    }
    }, [clicked])

    useEffect(_ =>{
        if(trigger === false){
        setTimeout(_ =>{
            setClicked(false);
            console.log("button trigger")
        }, 5000)
    }
    }, [clicked])

    const input = e => {
        const input_value = e.target.value;
        setValue(input_value);
    }
    const submit_input = _ => {
        if (value !== "") {
            setClicked(true);
            }
    }
    return (
        <>
        {trigger === "false" && clicked === "true" ? console.log("trigger") : " " }
            <Stack className="Top" >
                <Typography variant="v6" color="white" >Hooked</Typography>
            </Stack>
            <Stack direction="row" className="searchNav" >
                <input type="text" onKeyUp={input} placeholder="search your Movie names here" />
                <button onClick={submit_input} >Search</button>
            </Stack>
            <p  className={trigger === false && clicked === true ? "notfound": "notfound none"}>Not found</p>

            <hr />
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"center",alignItems:"center", marginTop:20 }}>
                <Masonry columns={4} spacing={4} >

                    {trigger === true ?
                        list.map((data, idx) => {
                            return (
                                <Favourite key={idx} data={data} />
                            )
                        })
                        : ("") }
                </Masonry>
            </div>

        </>
    )

}

export default Nav;