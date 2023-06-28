import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


  

export const getPlacesData = async (sw,ne) => {
    try{
        const {data:{data}} = await axios.get(URL,{
          params: {
            bl_latitude:sw.lat,
            tr_latitude:ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            currency: 'INR',
          },
          headers: {
            'X-RapidAPI-Key': '65c5d8d837msh57d48acb96fe2dap19ae23jsndfaa8d48d21c',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;

    }catch(error){
        console.log(error);
    }
}