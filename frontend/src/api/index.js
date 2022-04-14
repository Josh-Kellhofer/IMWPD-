import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
   method: 'GET',
      params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
        restaurant_tagcategory_standalone: '10591',
        restaurant_tagcategory: '10591',
        open_now: 'false',
        
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': 'ced40868d6mshe6504126cb84ba0p1df85bjsn9cdd063e564f'
      }
    };

 export const getPlacesData = async (sw, ne) => {
  try {
      const { data: { data } } = await axios.get(URL, options);

      return data;
  } catch (error) {
    console.log(error)

  }
}

