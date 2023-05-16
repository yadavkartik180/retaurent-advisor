import { useState,useEffect,useRef, createRef } from 'react';
import React from 'react'
import {CircularProgress,Typography,InputLabel,FormControl,MenuItem,Select,Grid} from "@material-ui/core";
import useStyle from './Liststyle'
import { Rating } from '@material-ui/lab';
import {PlaceDetails} from '../PlaceDetails/PlaceDetails'
export const List = ({places,childClicked,isLoading}) => {
  const classes =useStyle();
  const [type,setType]=useState('restaurents');
  const [rating,setRating]=useState('All');
  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);
  return (
    <div className={classes.contianer}>
      <Typography variant='h4'>Restaurent,Hotels & Attraction around you</Typography>
      {isLoading? (
        <div className={classes.loading} size="5rem">
          <CircularProgress/>
        </div>
      ):(
        <>
      <FormControl className={classes.FormControl}>
        <InputLabel>type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.Target.value)}>
          <MenuItem value="restaurents">Restaurents</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.FormControl} >
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e)=>setRating(e.Target.value)}>
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.List}>
        {places?.map((place,i)=>(
          <Grid item key={i} xs={12} className={classes.List}>
            <PlaceDetails place={place}
            selected={Number(childClicked === i)}
            refProp ={elRefs[i]}

            />
          </Grid>
        ))}
      </Grid>
      </>
      )}
    </div>
  )
}
