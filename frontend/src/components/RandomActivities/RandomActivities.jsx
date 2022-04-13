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

    let myBreakfast = breakfastArray[Math.floor(Math.random() * breakfastArray.length)];
    console.log("Random Breakfast", myBreakfast);

    let myMorningActivity = morningActivity[Math.floor(Math.random() * morningActivity.length)];
    console.log("Random Morn Activity", myMorningActivity);

    let myLunch = lunch[Math.floor(Math.random() * lunch.length)];
    console.log("Random Lunch", myLunch);

    let myAfternoonActivity = afternoonActivity[Math.floor(Math.random() * afternoonActivity.length)];
    console.log("Random Afternoon Activity", myAfternoonActivity);

    let myDinner = dinner[Math.floor(Math.random() * dinner.length)];
    console.log("Random Dinner", myDinner);

    let myNightActivity = nightActivity[Math.floor(Math.random() * nightActivity .length)];
    console.log("Random Night Activity", myNightActivity);

  // then return that random plan in the JSX below

  return(<>{myBreakfast}, {myMorningActivity}, {myLunch}, {myAfternoonActivity}, {myDinner}, {myNightActivity}</>)

  // return(<>{entries ? <p>Loaded</p> : <p>Loading...</p>}</>)
// };
}
export default RandomActivities;



 