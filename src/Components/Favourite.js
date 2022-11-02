
import { Stack } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Req } from '../utils'
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import * as React from 'react';
import Masonry from '@mui/lab/Masonry';



const Favourite = ({ data }) => {


    return (
        <>

            <Stack  >

                <Card  sx={{  boxShadow:"1px 1px 10px rgba(0,0,0,0.5)" }} >
                    <CardContent>
                        <Typography variant="h6" style={{textAlign:"center"}}>
                            {data.Title}
                            <hr />
                        </Typography>
                    </CardContent>
                    <CardActionArea  >
                        <CardMedia  component="img"  image={data.Poster !== "N/A" ? data.Poster : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} />
                        <CardContent>
                        <Typography variant="h6" style={{textAlign:"center"}}>
                            {data.Year}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
            </Stack>

        </>

    )
}

export default Favourite;




