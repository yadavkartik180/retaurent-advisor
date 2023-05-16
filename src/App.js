import React  from 'react'
import {CssBaseline,Grid} from "@material-ui/core"
import { Header } from './componetns/Header/Header'
import {List } from "./componetns/List/List"
import { Map } from "./componetns/Map/Map";
import { getPlacesData } from './api';
import { useEffect } from 'react';
import { useState } from 'react';
const App = () => {
  const [places,setPlaces]=useState([]);
  const [coordinates,setCoordinates]=useState({});
  const [bounds,setBounds] =useState({});
  const [childClicked,setChildClicked]=useState(null);
  const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);
  useEffect(()=>{
    setisLoading(true)
    getPlacesData(bounds.sw,bounds.ne)
    .then((data)=>{
      console.log(data)
      setPlaces(data);
      setisLoading(false);
    })  
  },[coordinates,bounds]);
  return (
    <>
    <CssBaseline/>
    <Header/>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4} style={{ marginTop:'80px'}}>
          <List 
          places={places}
          childClicked={childClicked} 
          isLoading ={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ marginTop:'64px'}} >
          <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={places}
          setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
      
    </>

  )
}
export default App;
