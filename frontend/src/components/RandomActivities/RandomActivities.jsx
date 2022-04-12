import React, {useEffect, useState } from "react";
import randomArrayShuffle from "../ArrayShuffler/ArrayShuffler";
import { Chart } from "react-google-charts";



const RandomActivities = ({entries}) => {
  console.log(entries)

// How can you break apart entries into individual arrays for each feature (breakfast, morning_activity, etc)

 

   let breakfastArray = entries.map(breakfast => {
        return breakfast.breakfast;
    });
       console.log("Breakfast Arrays", breakfastArray);

   let morningActivity = entries.map(mornactivity => {
        return mornactivity.morning_activity
    });
        console.log("Morning Activity Array", morningActivity);

   let lunch = entries.map(lunch => {
         return lunch.lunch
      });
        console.log("Lunch", lunch);

   let afternoonActivity = entries.map(afterActivity => {
          return afterActivity.afternoon_activity
        });
         console.log("Afternoon Activity Array", afternoonActivity);

   let dinner = entries.map(dinner => {
          return dinner.dinner
         });
         console.log("Dinner", dinner);

   let nightActivity = entries.map(nightTimeActivity => {
          return nightTimeActivity.night_time_activity
        });
         console.log("Night Time Activity Array", nightActivity);

  // create a new array with random items from each feature array

        


  // then return that random plan in the JSX below

  return(<>{entries ? <p>Loaded</p> : <p>Loading...</p>}</>)
// };
}
export default RandomActivities;



  
//     const data = [
//       ["Element", "Density", { role: "style" }],
//       ["Copper", 8.94, "#b87333"], // RGB value
//       ["Silver", 10.49, "silver"], // English color name
//       ["Gold", 19.3, "gold"],
//       ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
//     ];
    
    
//     return (
//         <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
//       );

// function GenerateActivity() {

  //     const [randomActivities, setRandomActivities] = useState([]);
  
  //     useEffect(() => {
  //   GenerateActivity();
  // }, [])
    
  // let randMornActivty = entries.filter(activity => activity.morning_activity);
  
  
  
  
  // randomArrayShuffle(activitiesArray);
  
  // console.log("Random Array Morning Activity", randomArrayShuffle(activitiesArray));
  
  //     }