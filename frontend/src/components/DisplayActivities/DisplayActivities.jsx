import React from 'react';
import RandomActivities from '../RandomActivities/RandomActivities';


const DisplayActivities = (props) => {

  function randomizeActivities(entries) {
    let breakfastArray = entries.map(breakfast => {
      return breakfast.breakfast;
  });
     
  
  let morningActivity = entries.map(mornactivity => {
      return mornactivity.morning_activity
  });
      
  let lunch = entries.map(lunch => {
       return lunch.lunch
    });
     
  let afternoonActivity = entries.map(afterActivity => {
        return afterActivity.afternoon_activity
      });
       
  let dinner = entries.map(dinner => {
        return dinner.dinner
       });
       
  let nightActivity = entries.map(nightTimeActivity => {
        return nightTimeActivity.night_time_activity
      });
       
  
  // create a new array with random items from each feature array
  
  let myBreakfast = breakfastArray[Math.floor(Math.random() * breakfastArray.length)];
  let myMorningActivity = morningActivity[Math.floor(Math.random() * morningActivity.length)];
  let myLunch = lunch[Math.floor(Math.random() * lunch.length)];
  let myAfternoonActivity = afternoonActivity[Math.floor(Math.random() * afternoonActivity.length)];
  let myDinner = dinner[Math.floor(Math.random() * dinner.length)];
  let myNightActivity = nightActivity[Math.floor(Math.random() * nightActivity .length)];
  
  return {myBreakfast, myMorningActivity, myLunch, myAfternoonActivity, myDinner, myNightActivity}
  }
let randomDay = randomizeActivities(props.parentEntries)

    return ( 
      <div className='border-box'>
      <div>
        {/* <RandomActivities entries={props.parentEntries} /> */}
         <table className="table">
          <thead>
            <tr>
              <th>Line</th>
              <th>Breakfast</th>
              <th>Morning Activity</th>
              <th>Lunch</th>
              <th>Afternoon Activity</th>
              <th>Dinner</th>
              <th>Nighttime Activity</th>
            </tr>
          </thead>
            
          <tbody>
            {/* {props.parentEntries.map((entry, index) => {  */}
            {/* return ( */}
                
              <tr>
                  <td>{1}</td>
                  <td>{randomDay.myBreakfast}</td>
                  {/* <td><button onClick={() => props.selectGame(entry)}>{entry.name}</button></td> */}
                  <td>{randomDay.myMorningActivity}</td>
                  <td>{randomDay.myLunch}</td>
                  <td>{randomDay.myAfternoonActivity}</td>
                  <td>{randomDay.myDinner}</td>
                  <td>{randomDay.myNightActivity}</td>
              </tr>
              {/* ); */}
            {/* })} */}
            

            
          </tbody>
            
        </table>
      </div>
      </div>
     );
}
 
export default DisplayActivities;