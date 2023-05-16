import axios from "axios";
const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
export const getPlacesData = async (sw,ne)=>{
try {
    const {data:{data}} = await axios.get(URL,
       {
        params: {
          bl_latitude: sw.lat ,
          tr_latitude: ne.lat ,
          bl_longitude:sw.lng ,
          tr_longitude:ne.lng ,
        },
        headers: {
          'X-RapidAPI-Key': 'be4e53ad6emsh47d3d985d6ccc99p1219c4jsnddfa6d1567c5',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });
    return data;
} catch (error) {
    console.log(error);
}

}